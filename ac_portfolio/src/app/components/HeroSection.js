import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { AiOutlineArrowUp } from "react-icons/ai";
import ProfilePicture from "../../../public/profile_pic_banff.jpg";

const HeroSection = () => {
  const [messages, setMessages] = useState([
    {
      text: "Hello, I'm Andrew a 5th-year Software Engineering student at the University of Guelph, set to graduate in May 2025.",
      isSender: true,
    },
    {
      text: "I am currently looking for New Grad Opportunities for Spring 2025 :)",
      isSender: true,
    },
    {
      text: "Can I ask you more questions?",
      isSender: false,
    },
    {
      text: "Sure thing! Ask away :)",
      isSender: true,
    },
  ]);

  const [newMessage, setNewMessage] = useState("");

  const chatContainerRef = useRef(null);

  const handleSendMessage = () => {
    if (newMessage.trim()) {
      setMessages([...messages, { text: newMessage, isSender: true }]);

      generateReply(newMessage);

      setNewMessage("");
    }
  };

  const generateReply = (userMessage) => {
    let reply = "";

    if (userMessage.toLowerCase().includes("experience")) {
      reply =
        "I have experience in developing scalable applications and working with multiple languages and frameworks, ranging from Elixir to React!";
    } else if (userMessage.toLowerCase().includes("about")) {
      reply =
        "I'm a Software Engineering student at the University of Guelph, and I enjoy working on challenging technical problems.";
    } else if (userMessage.toLowerCase().includes("contact")) {
      reply = (
        <span>
          You can reach me via email at{" "}
          <a href="mailto:ac.andrewchow@gmail.com" className="text-blue-500">
            ac.andrewchow@gmail.com
          </a>{" "}
          or connect with me on LinkedIn at{" "}
          <a
            href="https://www.linkedin.com/in/acandrewchow"
            target="_blank"
            className="text-blue-500"
            rel="noopener noreferrer"
          >
            linkedin.com/in/acandrewchow
          </a>
        </span>
      );
    } else if (userMessage.toLowerCase().includes("resume")) {
      reply = (
        <span>
          You can find my resume at{" "}
          <a
            href="https://andrewchow.ca/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500"
          >
            https://andrewchow.ca/resume.pdf
          </a>
        </span>
      );
    } else if (
      userMessage.toLowerCase().includes("hello") ||
      userMessage.toLowerCase().includes("hi")
    ) {
      reply = "Hi there! How can I help you today?";
    }

    // Delay the reply
    setTimeout(() => {
      setMessages((prevMessages) => [
        ...prevMessages,
        { text: reply, isSender: false },
      ]);
    }, 1000);
  };

  // Scrolls to the bottom of the chat container when new messages are added
  useEffect(() => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop =
        chatContainerRef.current.scrollHeight;
    }
  }, [messages]);

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleSendMessage();
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-zinc-900">
      <div className="relative bg-black w-96 h-[700px] rounded-3xl shadow-xl flex flex-col">
        <div className="absolute left-0 right-0 h-16 bg-zinc-800 rounded-t-3xl"></div>
        <div className="absolute left-1/2 transform -translate-x-1/2 text-white font-semibold text-xs top-12">
          Andrew Chow
        </div>

        <div className="absolute left-1/2 transform -translate-x-1/2 w-12 h-12 bg-zinc-800 rounded-full shadow-lg">
          <Image
            src={ProfilePicture}
            alt="Profile Picture"
            className="w-full h-full rounded-full object-cover"
          />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="p-6 pt-20 pb-6 flex-grow overflow-y-auto space-y-4 text-white"
          ref={chatContainerRef} 
          style={{ maxHeight: "calc(100% - 160px)", overflowY: "auto" }} 
        >
          <div className="space-y-4">
            {messages.map((msg, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.5,
                  delay: index < 4 ? index * 0.5 : 0.5, // Longer delay for initial messages, shorter delay for new ones
                }}
                className={`flex items-start ${
                  msg.isSender ? "justify-end" : "justify-start"
                }`}
              >
                <div
                  className={`max-w-xs p-3 rounded-3xl text-sm break-words ${
                    msg.isSender
                      ? "bg-blue-500 text-white ml-auto"
                      : "bg-zinc-700 text-white"
                  }`}
                >
                  {msg.text}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <div className="absolute bottom-0 left-0 right-0 p-4 bg-zinc-800 rounded-b-3xl flex items-center space-x-3">
          <div className="flex-grow relative">
            <input
              type="text"
              value={newMessage}
              onChange={(e) => setNewMessage(e.target.value)}
              onKeyDown={handleKeyDown} 
              placeholder="Ask me anything!"
              className="w-full p-2 rounded-lg bg-zinc-700 text-white text-sm focus:outline-none pr-12"
            />
            <button
              onClick={handleSendMessage}
              className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-blue-500 text-white p-2 rounded-full hover:bg-blue-600"
            >
              <AiOutlineArrowUp size={16} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;