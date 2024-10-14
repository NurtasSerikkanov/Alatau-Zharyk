import React from "react";
import Slider from "react-slick";

const testimonialData = [
  {
    id: 1,
    name: "Азамат Т",
    text: "Мен \"Энергия қызметі\" компаниясымен бірнеше жыл жұмыс істеп келемін, және олардың қызметі мен сапасына қанағаттанамын. Электр энергиясының тұрақтылығы мен сапасы бізге үлкен сенімділік береді. Барлық сұрақтарымызға тез жауап беріп, мәселелерді шұғыл шешеді. Ұсынамын!",
    img: "https://picsum.photos/101/101",
  },
  {
    id: 2,
    name: "Айгүл С",
    text: "Компанияның энергетикалық қызметтері біз үшін өте маңызды. \"Энергия қызметі\" командасы кәсіби деңгейде жұмыс істейді, және олардың қызметтерінің сапасы өте жоғары. Бізге көрсетілген қызметтердің дәлдігі мен уақтылығы өте ұнады. Сіздерге үлкен рахмет!",
    img: "https://picsum.photos/102/102",
  },
  {
    id: 3,
    name: "Нұрболат К",
    text: "\"Энергия қызметі\" компаниясының қызметін пайдаланғаннан кейін біз көптеген оң өзгерістерді байқадық. Олар жоғары сапалы және сенімді электрмен қамтамасыз етеді. Команда өте кәсіби және клиенттерге жақсы қызмет көрсетеді. Олардың қызметтерін ұсынуға сенімдімін.",
    img: "https://picsum.photos/103/103",
  },
];

const Testimonial = () => {
  var settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "linear",
    pauseOnHover: true,
    pauseOnFocus: true,
  };
  return (
      <>
        <span id="reviews"></span>
        <div data-aos="fade-up" data-aos-duration="300" className="py-10">
          <div className="container">
            <div className="text-center mb-20 max-w-[400px] mx-auto">
              <p className="text-sm bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
                Компания жайлы пікірлер:
              </p>
              <h1 className="text-3xl font-bold">Пікірлер</h1>
              <p className="text-xs text-gray-400">
                Біздің мақсатымыз:
                <br />
                Қазақстан Республикасының ЕЭС-нің оңтүстік аймағында жетекші орын алатын электр желілік компания болу.
              </p>
            </div>
            <div
                data-aos="zoom-in"
                data-aos-duration="300"
                className="grid grid-cols-1 max-w-[600px] mx-auto gap-6"
            >
              <Slider {...settings}>
                {testimonialData.map((data) => {
                  return (
                      <div className="my-6">
                        <div
                            key={data.id}
                            className="flex flex-col justify-center items-center gap-4 text-center   shadow-lg p-4 mx-4 rounded-xl dark:bg-gray-800 bg-primary/10 relative"
                        >
                          <img
                              className="rounded-full block mx-auto"
                              src={data.img}
                              alt=""
                          />
                          <p className="text-gray-500 text-sm">{data.text}</p>
                          <h1 className="text-xl font-bold">{data.name}</h1>
                          <p className="text-black/20 text-9xl font-serif absolute top-0 right-0">
                            ,,
                          </p>
                        </div>
                      </div>
                  );
                })}
              </Slider>
            </div>
          </div>
        </div>
      </>
  );
};

export default Testimonial;