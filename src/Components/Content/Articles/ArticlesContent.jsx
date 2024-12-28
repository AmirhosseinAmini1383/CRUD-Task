function ArticlesContent() {
  return (
    <div className="flex items-stretch justify-between flex-row mt-20">
      <div className="flex flex-col items-start justify-start w-[600px]">
        <div className="flex items-center justify-start gap-x-2 mb-5">
          <span className="badge badge--secondary text-sm">فضا نوردی</span>
          <span className="badge badge--secondary text-sm">مریخ</span>
        </div>
        <div>
          <p className="text-3xl font-black text-secondary-900 leading-relaxed">
            سفر به مریخ ؛ چالش‌های بشریت در مسکونی ‌سازی سیاره سرخ
          </p>
          <p className="text-secondary-500 leading-loose mt-5">
            رفتن به فضا و زندگی روی سیاره‌های دیگر آرزوی دیرینه‌ی بشریت بوده است
            اما در چند سال اخیر این رؤیا در حال تبدیل شدن به واقعیت است.
            سازمان‌های دولتی مانند ناسا و دیگر شرکت‌های خصوصی هوافضایی مثل
            اسپیس‌ایکس در تلاش هستند در دهه‌ی ۲۰۳۰ انسان را به مریخ بفرستند.
            <span className="text-primary-900 underline">ادامه مطلب</span>
          </p>
        </div>
      </div>
      <div className="w-[500px] h-[550px]">
        <img
          src="../../public/images/slidesImages/Nasa.jpeg"
          className="w-full h-full rounded-2xl object-cover"
          alt="Nasa"
        />
      </div>
    </div>
  );
}

export default ArticlesContent;
