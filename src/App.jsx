import React, { useState } from "react";
import Navigation from "./components/Navigation";
import Home from "./pages/Home";
import News from "./pages/News";
import Chat from "./pages/Chat";
import Performance from "./pages/Performance";

export default function App() {
    const [page, setPage] = useState("home");

    return (
        <div>
            <h1>Выпускной проект: SPA на React</h1>
            <Navigation currentPage={page} onNavigate={setPage} />
            {page === "home" && <Home />}
            {page === "news" && <News />}
            {page === "chat" && <Chat />}
            {page === "performance" && <Performance />}
        </div>
    );
}
