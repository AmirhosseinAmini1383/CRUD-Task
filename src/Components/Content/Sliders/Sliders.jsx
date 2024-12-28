import { useState } from "react";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";

function Sliders() {
  const slides = [
    {
      imageSrc: "../../public/images/slidesImages/AI.jpg",
      description:
        "هوش مصنوعی (AI) تکنولوژی‌ای است که ماشین‌ها و سیستم‌ها را قادر می‌سازد تا کارهایی را که معمولاً به هوش انسانی نیاز دارند، انجام دهند. این فناوری از الگوریتم‌ها و مدل‌های پیچیده برای پردازش داده‌ها و انجام وظایف مانند تشخیص تصویر، پردازش زبان طبیعی، و یادگیری از تجربیات استفاده می‌کند. با پیشرفت‌های روزافزون در این حوزه، AI به یکی از ابزارهای قدرتمند در زمینه‌های مختلف تبدیل شده است.",
    },
    {
      imageSrc: "../../public/images/slidesImages/Iphone.jpg",
      description:
        "iPhone‌ها با ترکیبی از دستگاه‌های قدرتمند، نمایشگر‌های بالا‌کیفی و دوربین‌های متعدد، تجربه‌ی استفاده‌ی بی‌نظیری ارائه می‌دهند. این گوشی‌ها همچنین از فناوری‌های پیشرفته‌ای مانند Face ID و سیستم‌های کامپیوتری مانند A15 Bionic برای تأمین سرعت و عملکرد بالا استفاده می‌کنند.",
    },
    {
      imageSrc: "../../public/images/slidesImages/Loptop.jpg",
      description:
        "لپ‌تاپ‌ها ابزارهای قدرتمندی هستند که به کاربران اجازه می‌دهند تا در هر زمان و مکان به انجام کارهای مختلف بپردازند. این دستگاه‌ها با ترکیبی از پردازنده‌های قدرتمند، نمایشگرهای با کیفیت و امکاناتی مانند باتری با عمر طولانی، تجربه‌ی کاربری بی‌نظیری ارائه می‌دهند. از کارهای روزمره تا برنامه‌نویسی و حتی بازی‌های پیشرفته، لپ‌تاپ‌ها پاسخگوی نیازهای متنوع کاربران هستند.",
    },
    {
      imageSrc: "../../public/images/slidesImages/Computer.jpg",
      description:
        "کامپیوترها دستگاه‌های هوشمندی هستند که با پردازنده‌های قوی و حافظه‌های بزرگ، قادر به انجام وظایف مختلفی هستند. آن‌ها در دو نوع دسکتاپ و لپ‌تاپ موجودند و برای کارهای محاسباتی پیچیده و بازی‌ها استفاده می‌شوند. ",
    },
    {
      imageSrc: "../../public/images/slidesImages/VR.jpg",
      description:
        "واقعیت مجازی (Virtual Reality یا VR) تجربه‌ای فراگیر است که به کمک هدست‌های مخصوص، کاربران را به دنیای دیجیتالی کاملاً جدید می‌برد. این فناوری با شبیه‌سازی محیط‌های سه‌بعدی و تعاملی، امکان تجربه‌هایی را فراهم می‌کند که در دنیای واقعی ممکن نیست، مانند بازی‌های واقعیت مجازی، آموزش‌های تخصصی و گردش‌های مجازی. ",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };
  const nextSlide = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  return (
    <div className="w-full h-[780px] m-auto py-16 px-4 relative group">
      <div
        style={{ backgroundImage: `url(${slides[currentIndex].imageSrc})` }}
        className="w-full h-full rounded-2xl bg-center bg-cover duration-500 "
      ></div>

      <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
        <BsChevronCompactLeft onClick={prevSlide} size={30} />
      </div>

      <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
        <BsChevronCompactRight onClick={nextSlide} size={30} />
      </div>

      <div className="absolute bottom-5 right-[120px]  w-[1000px]  mx-auto px-5 py-10 rounded-xl bg-secondary-500/90 text-secondary-0">
        <div className="text-base">{slides[currentIndex].description}</div>
      </div>
    </div>
  );
}

export default Sliders;
