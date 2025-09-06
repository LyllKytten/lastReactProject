import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import News from "../pages/News";
import Chat from "../pages/Chat";
import Performance from "../pages/Performance";

export default function PagesRouter() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/news" element={<News />} />
            <Route path="/chat" element={<Chat />} />
            <Route path="/performance" element={<Performance />} />
        </Routes>
    );
}
