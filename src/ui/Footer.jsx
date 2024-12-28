function Footer() {
  return (
    <div className="grid grid-cols-4 items-center bg-secondary-100 mt-20 px-7 py-14 rounded-xl">
      <img
        src="../../images/e-namad.png"
        className="w-60 h-auto"
        alt="e-namad"
      />
      <ul className="flex flex-col leading-loose">
        <li className="font-bold text-secondary-900">دسترسی سریع</li>
        <li className="text-secondary-700">صفحه اصلی</li>
        <li className="text-secondary-700">حساب کاربری</li>
        <li className="text-secondary-700">تماس با ما </li>
      </ul>
      <ul className="flex flex-col leading-loose">
        <li className="font-bold text-secondary-900">لینک های داغ</li>
        <li className="text-secondary-700">فرصت های شغلی</li>
        <li className="text-secondary-700">قوانین مقررات</li>
        <li className="text-secondary-700">درباره ما</li>
      </ul>
      <div>
        <p className="font-bold text-secondary-900 mb-3">
          از اخبار جدید با خبرشو
        </p>
        <div className="flex items-center gap-x-2">
          <input
            type="email"
            className="w-full py-3 px-4 text-secondary-900 border border-secondary-50 bg-secondary-50 hover:border-primary-500 focus:border-primary-500 transition-all duration-300 ease-out focus:shadow-lg focus:shadow-primary-200 dark:focus:shadow-secondary-200 rounded-md"
            placeholder="ایمیل خود را وارد کنید"
          />
          <button className="btn btn--primary text-nowrap rounded-md">
            عضو شوید
          </button>
        </div>
      </div>
    </div>
  );
}

export default Footer;
