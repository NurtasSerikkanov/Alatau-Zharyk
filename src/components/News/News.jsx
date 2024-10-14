// src/components/News/News.jsx
import React from "react";
import NewsData from "./NewsData";
import NewsCard from "./NewsCard";

const News = () => {
    return (
        <>
            <span id="news"></span>
            <div className="py-10">
                <div className="container">
                    <div className="text-center mb-20 max-w-[400px] mx-auto">
                        <p className="text-sm bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
                            Соңғы жаңалықтар
                        </p>
                        <h1 className="text-3xl font-bold">Жаңалықтар</h1>
                        <p className="text-xs text-gray-400">
                            Біз болашақ ұрпақ алдында жауап береміз және қоршаған орта мен экологияға ұқыпты қараймыз.
                        </p>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-14 md:gap-5 place-items-center">
                        {NewsData.map((news) => (
                            <NewsCard key={news.id} news={news} />
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
};

export default News;
