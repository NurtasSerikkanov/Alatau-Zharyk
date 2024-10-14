import React from "react";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import contactImage from "../../assets/contact_image.png"; // Замените на ваше изображение

const ContactUs = () => {
    return (
        <div id="contact" className="bg-gray-100 dark:bg-gray-800 py-16">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <h1 className="text-3xl font-bold mb-4 text-blue-600 dark:text-gray-200">
                        Бізбен Байланысыңыз
                    </h1>
                    <p className="text-lg text-gray-600 dark:text-gray-400">
                        Бізге хабарласу үшін төмендегі ақпаратты пайдаланыңыз.
                    </p>
                </div>
                <div className="grid md:grid-cols-2 gap-8">
                    <div className="flex flex-col items-center bg-white dark:bg-gray-900 shadow-lg rounded-lg p-8">
                        <img
                            src={contactImage}
                            alt="Contact"
                            className="w-full h-64 object-cover rounded-lg mb-6"
                        />
                        <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-200">
                            Бізбен байланысу жолдары
                        </h2>
                        <div className="flex items-center mb-4">
                            <FaMapMarkerAlt className="text-2xl text-blue-500 mr-3" />
                            <p className="text-gray-700 dark:text-gray-300">
                                Алматы қ, Манас к-сі, 24 б
                            </p>
                        </div>
                        <div className="flex items-center mb-4">
                            <FaPhoneAlt className="text-2xl text-blue-500 mr-3" />
                            <p className="text-gray-700 dark:text-gray-300">+7 (7272) 356-99-99</p>
                        </div>
                        <div className="flex items-center">
                            <FaEnvelope className="text-2xl text-blue-500 mr-3" />
                            <p className="text-gray-700 dark:text-gray-300">info@example.com</p>
                        </div>
                    </div>
                    <div className="bg-white dark:bg-gray-900 shadow-lg rounded-lg p-8">
                        <h2 className="text-2xl font-semibold mb-6 text-gray-800 dark:text-gray-200">
                            Бізге хабарлама жіберіңіз
                        </h2>
                        <form
                            action="#"
                            method="POST"
                            className="flex flex-col space-y-4"
                        >
                            <input
                                type="text"
                                placeholder="Атыңыз"
                                className="p-3 border border-gray-300 rounded-lg dark:border-gray-700 dark:bg-gray-800 dark:text-gray-200"
                            />
                            <input
                                type="email"
                                placeholder="Электрондық почта"
                                className="p-3 border border-gray-300 rounded-lg dark:border-gray-700 dark:bg-gray-800 dark:text-gray-200"
                            />
                            <textarea
                                placeholder="Хабарламаңыз"
                                rows="4"
                                className="p-3 border border-gray-300 rounded-lg dark:border-gray-700 dark:bg-gray-800 dark:text-gray-200"
                            />
                            <button
                                type="submit"
                                className="bg-blue-500 text-white py-3 px-6 rounded-lg hover:bg-blue-600 transition"
                            >
                                Жіберу
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactUs;
