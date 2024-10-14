import React from "react";
import Img from "../../assets/director1.jpeg";
import Img2 from "../../assets/director2.jpeg";
import Img3 from "../../assets/director3.png";

const ServicesData = [
  {
    id: 1,
    img: Img,
    name: "Тұрғамбаев Руслан Елубайұлы",
    description:
        "«Самұрық-Энерго» АҚ Өндіріс және активтерді басқару жөніндегі басқарушы директоры.",
  },
  {
    id: 2,
    img: Img2,
    name: "Асылов Абай Ноғайұлы",
    description:
        "Алатау Жарық Компаниясы АҚ Басқарма Төрағасы.",
  },
  {
    id: 3,
    img: Img3,
    name: "Скуйбеда Александр Григорьевич",
    description:
        "Директорлар кеңесінің мүшесі. Тәуелсіз директоры",
  },
];

const Services = () => {
  return (
      <>
        <span id="director"></span>
        <div className="py-10">
          <div className="container">
            <div className="text-center mb-20 max-w-[400px] mx-auto">
              <p className="text-sm bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary ">
                Директорлар кеңесі
              </p>
              <h1 className="text-3xl font-bold">Директорлар</h1>
              <p className="text-xs text-gray-400">
                Кез келген мәселелерді шешуде біз жағдайды объективті бағалаймыз және әділ әрекет етеміз.
                Біз тең талаптарды қолданамыз және тең мүмкіндіктер береміз.
                Біз басқалардың пікірін бағалаймыз, өз ой-пікірлерін айтуға және оларды естуге мүмкіндік береміз.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-14 md:gap-5 place-items-center">
              {ServicesData.map((service) => (
                  <div
                      data-aos="zoom-in"
                      data-aos-duration="300"
                      className="rounded-2xl bg-white dark:bg-gray-800 hover:bg-green-500 dark:hover:bg-green-700 hover:text-white relative shadow-xl duration-high group max-w-[280px] p-4"
                  >
                    <div className="h-[150px] mb-4 flex justify-center">
                      <img
                          src={service.img}
                          alt=""
                          className="max-w-[150px] max-h-[150px] block mx-auto transform group-hover:scale-110 duration-300"
                      />
                    </div>
                    <div className="text-center">
                      <h1 className="text-xl font-bold">{service.name}</h1>
                      <p className="text-gray-500 group-hover:text-white duration-high text-sm line-clamp-2">
                        {service.description}
                      </p>
                    </div>
                  </div>
              ))}
            </div>
          </div>
        </div>
      </>
  );
};

export default Services;
