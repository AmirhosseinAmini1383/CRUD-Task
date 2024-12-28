function LogoSection() {
  return (
    <div className="flex items-center gap-x-2">
      <span>
        <img
          src="../../public/images/logo.svg"
          className="w-5 h-5"
          alt="logo"
        />
      </span>
      <p className="text-secondary-800 font-black text-2xl">
        اخبار <span className="text-primary-700">تک</span>
      </p>
    </div>
  );
}

export default LogoSection;
