// src/components/News/NewsCard.jsx
import React from "react";
import { Link } from "react-router-dom";

const NewsCard = ({ news }) => {
    return (
        <div
            key={news.id}
            data-aos="zoom-in"
            data-aos-duration="300"
            className="rounded-2xl bg-white dark:bg-gray-800 hover:bg-green-500 dark:hover:bg-green-700 hover:text-white relative shadow-xl duration-high group max-w-[280px] p-4"
        >
            <div className="h-[150px] mb-4 flex justify-center">
                <img
                    src={news.image}
                    alt={news.title}
                    className="max-w-[150px] max-h-[150px] block mx-auto transform group-hover:scale-110 duration-300"
                />
            </div>
            <div className="text-center">
                <h1 className="text-xl font-bold">{news.title}</h1>
                <p className="text-gray-500 group-hover:text-white duration-high text-sm line-clamp-2">
                    {news.description}
                </p>
                <Link to={`/news/${news.id}`}>
                    <button className="mt-4 bg-blue-500 text-white py-1 px-4 rounded-full hover:bg-blue-600">
                        Толығырақ
                    </button>
                </Link>
            </div>
        </div>
    );
};

export default NewsCard;
