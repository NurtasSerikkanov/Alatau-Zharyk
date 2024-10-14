import React from "react";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaLocationArrow,
  FaMobileAlt,
} from "react-icons/fa";
import footerLogo from "../../assets/logo.png";

const Footer = () => {
  return (
      <div className="bg-gray-100 dark:bg-gray-950">
        <section className="max-w-[1200px] mx-auto">
          <div className="grid md:grid-cols-3 py-5">
            <div className="py-8 px-4">
              <h1 className="sm:text-3xl text-xl font-bold sm:text-left text-justify mb-3 flex items-center gap-3">
                <img src={footerLogo} alt="Logo" className="max-w-[50px]" />
                АЖК
              </h1>
              <p>
                «АЖК» АҚ жіберілетін кез келген хат-хабар «АЖК» АҚ бірінші басшының атына жазылуы керек.
              </p>
              <br />
              <div className="flex items-center gap-3">
                <FaLocationArrow />
                <p>Алматы қ, Манас к-сі, 24 б</p>
              </div>
              <div className="flex items-center gap-3 mt-3">
                <FaMobileAlt />
                <p>+7 (7272) 356-99-99</p>
              </div>
              {/* Social Handle */}
              <div className="flex items-center gap-3 mt-6">
                <a href="#">
                  <FaInstagram className="text-3xl" />
                </a>
                <a href="#">
                  <FaFacebook className="text-3xl" />
                </a>
                <a href="#">
                  <FaLinkedin className="text-3xl" />
                </a>
              </div>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 col-span-2 md:pl-10">
              <div>
                <div className="py-8 px-4">
                  <h1 className="sm:text-xl text-xl font-bold sm:text-left text-justify mb-3">
                    КОМПАНИЯ ТУРАЛЫ
                  </h1>
                  <ul className="flex flex-col gap-3">
                    <li className="cursor-pointer hover:text-blue-500">Даму стратегиясы</li>
                    <li className="cursor-pointer hover:text-blue-500">Басқарма Төрағасының Блогы</li>
                    <li className="cursor-pointer hover:text-blue-500">Компания тарихы</li>
                    <li className="cursor-pointer hover:text-blue-500">Ұйымдастыру құрылымы</li>
                    <li className="cursor-pointer hover:text-blue-500">Құрмет кітабы</li>
                    <li className="cursor-pointer hover:text-blue-500">Doing Business</li>
                    <li className="cursor-pointer hover:text-blue-500">Қызмет орындар</li>
                    <li className="cursor-pointer hover:text-blue-500">Алматы қаласы бойынша ЭТА</li>
                    <li className="cursor-pointer hover:text-blue-500">Алматы облысы бойынша ЭТА</li>
                    <li className="cursor-pointer hover:text-blue-500">Жастар ұйымы</li>
                    <li className="cursor-pointer hover:text-blue-500">Кәсіподақ</li>
                    <li className="cursor-pointer hover:text-blue-500">Бастауыш ардагерлер ұйымы</li>
                  </ul>
                </div>
              </div>
              <div>
                <div className="py-8 px-4">
                  <h1 className="sm:text-xl text-xl font-bold sm:text-left text-justify mb-3">
                    КОРПОРАТИВТІК БАСҚАРУ
                  </h1>
                  <ul className="flex flex-col gap-3">
                    <li className="cursor-pointer hover:text-blue-500">Директорлар кеңесі</li>
                    <li className="cursor-pointer hover:text-blue-500">Директорлар кеңесінің шешімдері</li>
                    <li className="cursor-pointer hover:text-blue-500">Акционердің шешімдері</li>
                    <li className="cursor-pointer hover:text-blue-500">Басқарма мүшелері</li>
                    <li className="cursor-pointer hover:text-blue-500">Корпоративтік хатшы</li>
                    <li className="cursor-pointer hover:text-blue-500">Біріктірілген менеджмент жүйесі</li>
                    <li className="cursor-pointer hover:text-blue-500">Құжаттар</li>
                  </ul>
                </div>
              </div>
              <div>
                <div className="py-8 px-4">
                  <h1 className="sm:text-xl text-xl font-bold sm:text-left text-justify mb-3">
                    ТҰРАҚТЫ ДАМУ
                  </h1>
                  <ul className="flex flex-col gap-3">
                    <li className="cursor-pointer hover:text-blue-500">Біздің тәсіліміз</li>
                    <li className="cursor-pointer hover:text-blue-500">Омбудсмен</li>
                    <li className="cursor-pointer hover:text-blue-500">Білім</li>
                    <li className="cursor-pointer hover:text-blue-500">Қоршаған ортаны қорғау</li>
                    <li className="cursor-pointer hover:text-blue-500">Еңбек қауіпсіздігі және еңбекті қорғау саласындағы саясат</li>
                    <li className="cursor-pointer hover:text-blue-500">Мүдделі тараптармен өзара әрекет</li>
                    <li className="cursor-pointer hover:text-blue-500">Әлеуметтік жауапкершілік</li>
                    <li className="cursor-pointer hover:text-blue-500">Сыбайлас жемқорлықпен күрес</li>
                    <li className="cursor-pointer hover:text-blue-500">Азаматтық қорғау</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
  );
};

export default Footer;
