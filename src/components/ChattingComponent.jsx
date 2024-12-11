import React, { useState } from "react";

const ChattingComponent = () => {
  const [selectedUser, setSelectedUser] = useState(null); // Tracks the currently selected user
  const [messages, setMessages] = useState({}); // Stores messages for each user
  const [currentMessage, setCurrentMessage] = useState(""); // Current typed message

  const users = [
    { id: 1, name: "John Doe", image: "https://via.placeholder.com/40" },
    { id: 2, name: "Jane Smith", image: "https://via.placeholder.com/40" },
    { id: 3, name: "Alice Johnson", image: "https://via.placeholder.com/40" },
  ];

  const handleUserClick = (user) => {
    setSelectedUser(user); // Select user
    if (!messages[user.id]) {
      setMessages({ ...messages, [user.id]: [] }); // Initialize messages if not present
    }
  };

  const handleSendMessage = () => {
    if (!currentMessage.trim()) return;

    // Update the current user's message list
    const userMessages = messages[selectedUser.id] || [];
    const newMessages = [
      ...userMessages,
      { sender: "me", text: currentMessage },
      { sender: "them", text: "This is a dummy response." },
    ];

    setMessages({ ...messages, [selectedUser.id]: newMessages });
    setCurrentMessage(""); // Clear the input
  };

  return (
    <div className="flex h-screen w-full">
      {/* User List Section */}
      <div className="w-1/3 border-r p-4">
        <h2 className="font-bold text-lg mb-4">Users</h2>
        <ul>
          {users.map((user) => (
            <li
              key={user.id}
              className={`flex items-center gap-3 p-2 cursor-pointer hover:bg-gray-100 ${
                selectedUser?.id === user.id ? "bg-gray-200" : ""
              }`}
              onClick={() => handleUserClick(user)}
            >
              <img
                src={user.image}
                alt={user.name}
                className="w-10 h-10 rounded-full"
              />
              <span>{user.name}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Chat Screen Section */}
      <div className="w-3/4 flex flex-col">
        {selectedUser ? (
          <>
            <div className="flex items-center border-b p-4">
              <img
                src={selectedUser.image}
                alt={selectedUser.name}
                className="w-10 h-10 rounded-full"
              />
              <h2 className="font-bold text-lg ml-4">{selectedUser.name}</h2>
            </div>
            <div className="flex-grow overflow-y-auto p-4 bg-gray-50">
              {messages[selectedUser.id]?.map((message, index) => (
                <div
                  key={index}
                  className={`mb-2 ${
                    message.sender === "me" ? "text-right" : "text-left"
                  }`}
                >
                  <span
                    className={`inline-block p-2 rounded-lg ${
                      message.sender === "me"
                        ? "bg-blue-500 text-white"
                        : "bg-gray-300"
                    }`}
                  >
                    {message.text}
                  </span>
                </div>
              ))}
            </div>
            <div className="border-t p-4 flex items-center">
              <input
                type="text"
                value={currentMessage}
                onChange={(e) => setCurrentMessage(e.target.value)}
                placeholder="Type a message..."
                className="flex-grow border rounded-lg p-2 mr-2"
              />
              <button
                onClick={handleSendMessage}
                className="bg-blue-500 text-white px-4 py-2 rounded-lg"
              >
                Send
              </button>
            </div>
          </>
        ) : (
          <div className="flex-grow flex items-center justify-center">
            <h2 className="text-gray-500">Select a user to start chatting</h2>
          </div>
        )}
      </div>
    </div>
  );
};

export default ChattingComponent;
