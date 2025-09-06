import React from "react";
import { BrowserRouter } from "react-router-dom";
import PagesLinks from "./components/PagesLinks";
import PagesRouter from "./components/PagesRouter";
import "./App.css";

export default function App() {
    return (
        <BrowserRouter>
            <div>
                <h1>Выпускной проект: SPA на React</h1>
                <PagesRouter />
                <PagesLinks />
            </div>
        </BrowserRouter>
    );
}
