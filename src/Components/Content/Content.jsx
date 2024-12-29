import Products from "../../features/products/Products";
import Articles from "./Articles/Articles";
import Sliders from "./Sliders/Sliders";

function Content() {
  return (
    <div>
      <h1 className="text-center text-3xl font-extrabold text-primary-900 mt-20">
        به اخبار تک خوش آمدید
      </h1>
      <p className="text-center text-xl font-bold mt-6 text-secondary-900">
        اینجا جدیدترین اخبار و مطالب حوزه تکنولوژی قرار داده میشود
      </p>
      <Sliders />
      <Articles />
      <Products />
    </div>
  );
}

export default Content;
