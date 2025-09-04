import React, { useState, useEffect } from "react";

export default function Chat() {
    const [messages, setMessages] = useState([]);
    const [input, setInput] = useState("");
    const [ws, setWs] = useState(null);

    useEffect(() => {
        const socket = new WebSocket("wss://echo.websocket.events/");
        setWs(socket);

        socket.onmessage = (event) => {
            setMessages((prev) => [...prev, event.data]);
        };

        return () => socket.close();
    }, []);

    const sendMessage = () => {
        if (ws && input.trim()) {
            ws.send(input);
            setMessages((prev) => [...prev, `Вы: ${input}`]);
            setInput("");
        }
    };

    return (
        <div className="card chat-box">
            <h2>Чат</h2>
            <div style={{ display: "flex", gap: "8px", marginBottom: "10px" }}>
                <input
                    type="text"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    placeholder="Введите сообщение"
                />
                <button className="btn" onClick={sendMessage}>
                    Отправить
                </button>
            </div>
            <ul className="chat-messages">
                {messages.map((msg, idx) => (
                    <li key={idx}>{msg}</li>
                ))}
            </ul>
        </div>
    );
}
