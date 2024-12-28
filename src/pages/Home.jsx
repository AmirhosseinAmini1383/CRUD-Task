import Content from "../Components/Content/Content";
import Header from "../Components/Headers/Header";
import Footer from "../ui/Footer";

function Home() {
  return (
    <div className="container max-w-screen-xl">
      <Header />
      <Content />
      <Footer />
    </div>
  );
}

export default Home;
