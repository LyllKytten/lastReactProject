import React, { useEffect, useState } from "react";

export default function News() {
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch("https://api.rss2json.com/v1/api.json?rss_url=https://ria.ru/export/rss2/index.xml")
            .then((res) => res.json())
            .then((data) => {
                setPosts(data.items || []); // ✅ use items array
                setLoading(false);
            })
            .catch(() => setLoading(false));
    }, []);

    return (
        <div>
            <h2>Новости</h2>
            {loading ? (
                <p>Загрузка...</p>
            ) : (
                <ul>
                    {posts.map((post, index) => (
                        <li key={index} className="card">
                            <h3>{post.title}</h3>
                            <p dangerouslySetInnerHTML={{ __html: post.description }} />
                            <a href={post.link} target="_blank" rel="noopener noreferrer">Читать</a>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}
