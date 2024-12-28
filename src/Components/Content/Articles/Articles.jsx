import Article from "../../../ui/Article";
import ArticlesContent from "./ArticlesContent";
import ArticlesHeaders from "./ArticlesHeaders";

const articles = [
  {
    id: 1,
    username: "امیرحسین امینی",
    imageUrl: { url: "../../public/images/slidesImages/VR.jpg", alt: "VR" },
    tags: ["VR", "واقعیت مجازی"],
    title:
      "  واقعیت مجازی (VR) شما را به دنیایی می‌برد که محدودیت‌های دنیای واقعی را ندارد!",
    description:
      "واقعیت مجازی (Virtual Reality یا VR) تجربه‌ای فراگیر است که به کمک هدست‌های مخصوص، کاربران را به دنیای دیجیتالی کاملاً جدید می‌برد. این فناوری با شبیه‌سازی محیط‌های سه‌بعدی و تعاملی، امکان تجربه‌هایی را فراهم می‌کند که در دنیای واقعی ممکن نیست، مانند بازی‌های واقعیت مجازی، آموزش‌های تخصصی و گردش‌های مجازی. ",
    userImageUrl: {
      url: "../../public/images/user/profile-user-1.jpeg",
      alt: "profile-user",
    },
  },
  {
    id: 2,
    username: "علی مرادی",
    imageUrl: {
      url: "../../public/images/slidesImages/Loptop.jpg",
      alt: "Loptop",
    },
    tags: ["Loptop", "لپتاپ"],
    title: "لپ‌تاپ‌ها آزادی محاسباتی را در دستان شما قرار می‌دهند!",
    description:
      "لپ‌تاپ‌ها ابزارهای قدرتمندی هستند که به کاربران اجازه می‌دهند تا در هر زمان و مکان به انجام کارهای مختلف بپردازند. این دستگاه‌ها با ترکیبی از پردازنده‌های قدرتمند، نمایشگرهای با کیفیت و امکاناتی مانند باتری با عمر طولانی، تجربه‌ی کاربری بی‌نظیری ارائه می‌دهند. از کارهای روزمره تا برنامه‌نویسی و حتی بازی‌های پیشرفته، لپ‌تاپ‌ها پاسخگوی نیازهای متنوع کاربران هستند.",
    userImageUrl: {
      url: "../../public/images/user/profile-user-2.jpeg",
      alt: "profile-user",
    },
  },
  {
    id: 3,
    username: "محمد علوی",
    imageUrl: {
      url: "../../public/images/slidesImages/Iphone.jpg",
      alt: "Iphone",
    },
    tags: ["Iphone", "اپل", "16 pro"],
    title:
      "آیفون 16 پرو: تلفنی که محدودیت‌ها را می‌شکند و آینده را در دسترس شما قرار می‌دهد!",
    description:
      "iPhone‌ها با ترکیبی از دستگاه‌های قدرتمند، نمایشگر‌های بالا‌کیفی و دوربین‌های متعدد، تجربه‌ی استفاده‌ی بی‌نظیری ارائه می‌دهند. این گوشی‌ها همچنین از فناوری‌های پیشرفته‌ای مانند Face ID و سیستم‌های کامپیوتری مانند A15 Bionic برای تأمین سرعت و عملکرد بالا استفاده می‌کنند.",
    userImageUrl: {
      url: "../../public/images/user/profile-user-1.jpeg",
      alt: "profile-user",
    },
  },
];

function Articles() {
  return (
    <div className="mt-16">
      <ArticlesHeaders />
      <Article articles={articles} />
      <ArticlesContent />
    </div>
  );
}

export default Articles;
