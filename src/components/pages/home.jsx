import Navbar from "../Common/Navbar";
import Hero from "../Views/Hero";
import NyxCipher from "../Views/nyxCipher";
import Advantage from "../Views/advantage";
import NyxToolkit from "../Views/nyxToolkit";
import NyxVsPaal from "../Views/nyxVsPaal";
import Partnering from "../Views/partnering";
import JoinUs from "../Views/joinUs";
import Faqs from "../Views/faqs";
import Footer from "../Views/footer";

function Home() {

  return (
    <div id='home'>
      <Navbar />
      <Hero />
      <NyxCipher />
      <Advantage />
      <NyxToolkit />
      <NyxVsPaal />
      <Partnering />
      <JoinUs />
      <Faqs />
      <Footer />
    </div>
  );
}

export default Home;