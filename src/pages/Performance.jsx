import React, { useState } from "react";
import "./styles.css";

function VirtualList({ initialItems, visibleCount = 50 }) {
    const [items, setItems] = useState(initialItems);
    const [start, setStart] = useState(0);
    const end = start + visibleCount;

    const [toggled, setToggled] = useState({});

    const visibleItems = items.slice(start, end);

    function toggleButton(idx) {
        setToggled((prev) => ({
            ...prev,
            [idx]: !prev[idx],
        }));
    }

    function deleteOnItems() {
        const newItems = items.filter((_, idx) => !toggled[idx]);
        setItems(newItems);

        const newToggled = {};
        newItems.forEach((_, idx) => {
            if (toggled[idx]) return;
            newToggled[idx] = false;
        });
        setToggled(newToggled);

        if (start >= newItems.length) {
            setStart(Math.max(0, newItems.length - visibleCount));
        }
    }

    return (
        <div>
            <div style={{ display: "flex", gap: "1rem" }}>
                <button
                    onClick={() => setStart(Math.max(0, start - visibleCount))}
                    disabled={start === 0}
                >
                    Назад
                </button>
                <button
                    onClick={() =>
                        setStart(Math.min(items.length - visibleCount, start + visibleCount))
                    }
                    disabled={end >= items.length}
                >
                    Вперёд
                </button>
                <button onClick={deleteOnItems} disabled={Object.values(toggled).every(v => !v)}>
                    Удалить "on"
                </button>
            </div>
            <ul>
                {visibleItems.map((item, idx) => {
                    const globalIndex = start + idx;
                    const isOn = toggled[globalIndex];

                    return (
                        <li key={globalIndex} className="card">
                            <div
                                style={{
                                    display: "flex",
                                    gap: "1rem",
                                    justifyContent: "center",
                                    alignItems: "center",
                                }}
                            >
                                {item}
                                <button
                                    onClick={() => toggleButton(globalIndex)}
                                    className={`button-cm ${isOn ? "on" : "off"}`}
                                >
                                    {isOn ? "On" : "Off"}
                                </button>
                            </div>
                        </li>
                    );
                })}
            </ul>
            <p>
                Показаны элементы {start + 1}–{Math.min(end, items.length)} из{" "}
                {items.length}
            </p>
        </div>
    );
}

export default function Performance() {
    const items = Array.from({ length: 10000 }, (_, i) => `Элемент ${i + 1}`);

    return (
        <div>
            <h2>Демонстрация производительности</h2>
            <p>
                Вместо отображения всех 10 000 элементов сразу, показываются только
                первые 50. Это снижает нагрузку на браузер.
            </p>
            <VirtualList initialItems={items} />
        </div>
    );
}
