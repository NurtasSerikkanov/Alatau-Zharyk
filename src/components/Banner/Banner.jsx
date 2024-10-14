import React from "react";
import BiryaniImg from "../../assets/about_photo.jpeg";
import { FaBolt, FaPlug, FaBatteryHalf } from "react-icons/fa";

const Banner = () => {
  const bgImage = {
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    height: "100%",
    width: "100%",
  };

  return (
      <>
        <span id="about_company"></span>
        <div className="min-h-[550px]">
          <div className="min-h-[550px] flex justify-center items-center backdrop-blur-xl py-12 sm:py-0">
            <div
                data-aos="slide-up"
                data-aos-duration="300"
                className="container"
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {/* Image section */}
                <div className="flex justify-center items-center">
                  <img
                      src={BiryaniImg}
                      alt="biryani img"
                      className="max-w-[430px] w-full mx-auto drop-shadow-[-10px_10px_12px_rgba(0,0,0,1)] object-cover" // Добавлено object-cover
                  />
                </div>
                {/* Text content section */}
                <div className="flex flex-col justify-center gap-6 sm:pt-0">
                  <h1 className="text-3xl sm:text-4xl text-blue-600 font-bold">
                    Компания бүгін.
                  </h1>
                  <p className="text-sm text-gray-500 tracking-wide leading-5">
                    Бүгінгі таңда «АЖК» АҚ Алматы өңіріндегі 4 миллионға жуық адамды электр қуатымен қамтамасыз етеді.
                    Компанияның қызметі тұтынушыларды сенімді және үздіксіз электр энергиясымен қамтамасыз етуге және аймақтың энергетикалық тұрақтылығын нығайтуға бағытталған. «АЖК» АҚ-ның жалғыз акционері «Самұрық-Энерго» АҚ болып табылады.
                    <br />
                    <br />
                    220-110-35-10-6-0,4 кВ кернеу кластарының электр тораптары «АЖК» АҚ теңгерімдік тиесілілігіне жатады.
                    Компанияның құрамына кіреді:
                    <ul className="list-disc pl-5">
                      <li>Ұзындығы 410,34 км кернеуі 220 кВ әуелік электр жеткізу желілері.</li>
                      <li>Ұзындығы 2 698,95 км 110 кВ әуе желілері.</li>
                      <li>Кернеуі 35 кВ электр тораптары - жалпы ұзындығы 2602,87 км әуелік және кәбілдік желілер.</li>
                      <li>10/0,4 кВ электр жеткізетін бөлу желілері - 23 571,75 км.</li>
                    </ul>
                    «АЖК» АҚ теңгерімінде тұр:
                    <ul className="list-disc pl-5">
                      <li>Кернеуі 35 кВ және одан жоғары 209 қосалқы станция.</li>
                      <li>6 762 дана кернеуі 6-10/0,4 кВ бөлуші трансформаторлық қосалқы станциялар.</li>
                      <li>6-220 кВ трансформаторлардың жалпы саны - 8 474, жиынтық қуаты 9 808,2 МВА.</li>
                    </ul>
                  </p>

                  <div className="flex gap-6">
                    <div>
                      <FaBolt className="text-4xl h-20 w-20 shadow-sm p-5 rounded-full bg-yellow-100 dark:bg-yellow-400" />
                    </div>
                    <div>
                      <FaPlug className="text-4xl h-20 w-20 shadow-sm p-5 rounded-full bg-gray-100 dark:bg-gray-400" />
                    </div>
                    <div>
                      <FaBatteryHalf className="text-4xl h-20 w-20 shadow-sm p-5 rounded-full bg-green-100 dark:bg-green-400" />
                    </div>
                  </div>
                  <div>
                    <a href="#contact">
                      <button className="bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded-full shadow-xl hover:shadow-md">
                        Хабарласу
                      </button>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
  );
};

export default Banner;
