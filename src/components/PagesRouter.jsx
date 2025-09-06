import React from "react";
import { NavLink } from "react-router-dom";
import "./PagesLinks.css";

function getLinkClass({ isActive }) {
    return isActive ? "PageLink ActivePageLink" : "PageLink";
}

export default function PagesLinks() {
    return (
        <div className="links">
            <NavLink to="/" end className={getLinkClass}>
                Home
            </NavLink>
            <NavLink to="/news" end className={getLinkClass}>
                News
            </NavLink>
            <NavLink to="/chat" end className={getLinkClass}>
                Chat
            </NavLink>
            <NavLink to="/performance" end className={getLinkClass}>
                Performance
            </NavLink>
        </div>
    );
}
