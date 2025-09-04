import React from "react";

export default function Navigation({ currentPage, onNavigate }) {
    return (
        <nav>
            <button
                onClick={() => onNavigate("home")}
                className={currentPage === "home" ? "active" : ""}
            >
                Главная
            </button>
            <button
                onClick={() => onNavigate("news")}
                className={currentPage === "news" ? "active" : ""}
            >
                Новости
            </button>
            <button
                onClick={() => onNavigate("chat")}
                className={currentPage === "chat" ? "active" : ""}
            >
                Чат
            </button>
            <button
                onClick={() => onNavigate("performance")}
                className={currentPage === "performance" ? "active" : ""}
            >
                Производительность
            </button>
        </nav>
    );
}
