import React, { useState, useEffect } from "react";

function VirtualList({ items, visibleCount = 20 }) {
    const [start, setStart] = useState(0);
    const end = start + visibleCount;
    const visibleItems = items.slice(start, end);

    return (
        <div>
            <div style={{ display: 'flex', gap: '1rem' }}>
                <button onClick={() => setStart(Math.max(0, start - visibleCount))}>Назад</button>
                <button onClick={() => setStart(Math.min(items.length - visibleCount, start + visibleCount))}>Вперёд</button>
            </div>
            <ul>
                {visibleItems.map((item, idx) => (
                    <li key={idx} className={"card"}>{item}</li>
                ))}
            </ul>
            <p>Показаны элементы {start + 1}–{Math.min(end, items.length)} из {items.length}</p>
        </div>
    );
}
export default function Performance() {
    const items = Array.from({ length: 10000 }, (_, i) => `Элемент ${i + 1}`);

    return (
        <div>
            <h2>Демонстрация производительности</h2>
            <p>
                Вместо отображения всех 10 000 элементов сразу, показываются только первые 20.
                Это снижает нагрузку на браузер.
            </p>
            <VirtualList items={items} />
        </div>
    );
}
