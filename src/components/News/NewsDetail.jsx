// src/components/News/NewsDetail.jsx
import React from "react";
import { useParams } from "react-router-dom";
import NewsData from "./NewsData";

const NewsDetail = () => {
    const { id } = useParams();
    const newsItem = NewsData.find((item) => item.id === parseInt(id, 10));

    if (!newsItem) {
        return <div>Новость не найдена</div>;
    }

    return (
        <div className="py-10">
            <div className="container mx-auto">
                <div className="text-center mb-10">
                    <h1 className="text-3xl font-bold">{newsItem.title}</h1>
                </div>
                <img
                    src={newsItem.image}
                    alt={newsItem.title}
                    className="w-full h-64 object-cover mb-6"
                />
                <p className="text-lg text-gray-600">{newsItem.description}</p>
            </div>
        </div>
    );
};

export default NewsDetail;
