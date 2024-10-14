// src/App.jsx
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Services from "./components/Services/Services.jsx";
import Banner from "./components/Banner/Banner.jsx";
import AppStore from "./components/AppStore/AppStore.jsx";
import Testimonial from "./components/Testimonial/Testimonial.jsx";
import Footer from "./components/Footer/Footer.jsx";
import ContactUs from "./components/ContactUs/ContactUs.jsx";
import News from "./components/News/News.jsx";
import NewsDetail from "./components/News/NewsDetail.jsx";
import AOS from "aos";
import "aos/dist/aos.css";

const App = () => {
    React.useEffect(() => {
        AOS.init({
            offset: 100,
            duration: 500,
            easing: "ease-in-sine",
            delay: 100,
        });
        AOS.refresh();
    }, []);

    return (
        <Router>
            <Routes>
                <Route
                    path="/"
                    element={
                        <div className="bg-white dark:bg-gray-900 dark:text-white duration-200">
                            <Navbar />
                            <Hero />
                            <Services />
                            <Banner />
                            <News /> {/* Компонент новостей */}
                            <AppStore />
                            <Testimonial />
                            <ContactUs />
                            <Footer />
                        </div>
                    }
                />
                <Route path="/news/:id" element={<NewsDetail />} /> {/* Страница деталей новости */}
            </Routes>
        </Router>
    );
};

export default App;
