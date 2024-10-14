import React from "react";
import Logo from "../../assets/logo.png";
import { FaPhone } from 'react-icons/fa';
import DarkMode from "./DarkMode";

const Menu = [
  {
    id: 1,
    name: "Компания",
    link: "/#",
  },
  {
    id: 2,
    name: "Директорлар Кеңесі",
    link: "/#director",
  },
  {
    id: 3,
    name: "Компания бүгін",
    link: "/#about_company",
  },
  {
    id: 4,
    name: "Пікірлер",
    link: "/#reviews",
  },
];
const Navbar = () => {
  return (
    <>
      <div className="shadow-md bg-white dark:bg-gray-900 dark:text-white duration-200">
        <div className="container py-3 sm:py-0">
          <div className="flex justify-between items-center">
            <div>
              <a href="#" className="font-bold text-2xl sm:text-3xl flex gap-2">
                <img src={Logo} alt="Logo" className="w-10" />
                <span className="text-blue-600 relative top-1">АЖК</span>
              </a>
            </div>
            <div className="flex justify-between items-center gap-4">
              <div>
                <DarkMode />
              </div>
              <ul className="hidden sm:flex items-center gap-4">
                {Menu.map((menu) => (
                  <li key={menu.id}>
                    <a
                      href={menu.link}
                      className="inline-block py-4 px-4 hover:text-green-500"
                    >
                      {menu.name}
                    </a>
                  </li>
                ))}
              </ul>
              <a href="#contact">
                <button className="bg-gradient-to-r from-green-500 to-green-700 hover:scale-105 duration-200 text-white py-1 px-4 rounded-full flex items-center gap-3">
                  Хабарласу
                  <FaPhone className="text-xl text-white drop-shadow-sm cursor-pointer" />
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
