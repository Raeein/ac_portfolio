from flask import Flask, request, jsonify
from flask_cors import CORS
from transformers import AutoModelForCausalLM, AutoTokenizer
import torch

app = Flask(__name__)
CORS(app)

# Load the pre-trained chatbot model
model_name = "microsoft/DialoGPT-medium"
tokenizer = AutoTokenizer.from_pretrained(model_name)
model = AutoModelForCausalLM.from_pretrained(model_name)

chat_history_ids = None

def generate_response(user_message):
    global chat_history_ids

    try:
        input_ids = tokenizer.encode(user_message + tokenizer.eos_token, return_tensors="pt")

        if chat_history_ids is not None:
            input_ids = torch.cat([chat_history_ids, input_ids], dim=-1)

        attention_mask = torch.ones_like(input_ids)  # All tokens are significant

        output_ids = model.generate(
            input_ids[:, -1024:],
            do_sample=True,
            attention_mask=attention_mask[:, -1024:],
            max_length=1024,
            min_length=20,
            temperature=0.8,
            top_k=50,
            pad_token_id=tokenizer.eos_token_id,
        )

        response = tokenizer.decode(output_ids[:, input_ids.shape[-1]:][0], skip_special_tokens=True)

        chat_history_ids = output_ids[:, -1024:]

        return response
    except Exception as e:
        print(f"Error generating response: {e}")
        return "An error occurred during response generation."


@app.route('/chat', methods=['POST'])
def chat():
    user_message = request.json.get('message', '')

    bot_message = generate_response(user_message)

    return jsonify({"botMessage": bot_message})


if __name__ == '__main__':
    app.run(host='0.0.0.0', port=4000, debug=True)
