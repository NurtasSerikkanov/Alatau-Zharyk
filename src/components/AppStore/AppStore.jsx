import React from "react";
import ServiceImage from "../../assets/service_image.jpeg";
import EnergyIcon from "../../assets/logo.png";

const EnergyService = () => {
  return (
      <>
        <div className="bg-gray-100 dark:bg-gray-800 py-14">
          <div className="container">
            <div className="grid sm:grid-cols-2 grid-cols-1 items-center gap-4">
              <div
                  data-aos="fade-up"
                  data-aos-duration="300"
                  className="space-y-6 max-w-xl mx-auto"
              >
                <h1 className="text-2xl text-center sm:text-left sm:text-4xl font-semibold text-blue-600 dark:text-blue-400">
                  Электр энергиясын қамтамасыз ету қызметтеріміз
                </h1>
                <p className="text-center sm:text-left text-gray-600 dark:text-gray-300">
                  Біз сіздің бизнесіңіз бен үйіңіз үшін сенімді және тұрақты электр энергиясы шешімдерін ұсынамыз. Біздің қызметтеріміз мыналарды қамтиды:
                  <ul className="list-disc pl-5 mt-2">
                    <li>Сапалы электрмен қамтамасыз ету</li>
                    <li>Энергетикалық консультациялар</li>
                    <li>Электр жабдықтарын тексеру және модернизациялау</li>
                  </ul>
                  Қосымша ақпарат алу үшін бізбен байланысыңыз.
                </p>
                <div className="flex flex-wrap justify-center sm:justify-start items-center">
                  <a href="#contact" className="flex items-center space-x-2 bg-green-500 text-white py-2 px-4 rounded-full shadow-md hover:bg-green-600 transition">
                    <img
                        src={EnergyIcon}
                        alt="Energy Service"
                        className="max-w-[40px] sm:max-w-[40px] md:max-w-[50px] mr-2"
                    />
                    <span>Толығырақ</span>
                  </a>
                </div>
              </div>
              <div data-aos="zoom-in" data-aos-duration="300">
                <img
                    src={ServiceImage}
                    alt="Energy Service"
                    className="w-full sm:max-w-[80%] md:max-w-[90%] block rounded-md mx-auto mix-blend-multiply dark:mix-blend-difference"
                />
              </div>
            </div>
          </div>
        </div>
      </>
  );
};

export default EnergyService;
