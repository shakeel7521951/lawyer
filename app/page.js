import Hero from "./components/home/Hero";
import Information from "./components/home/Information";
import Objectives from "./components/home/Objectives";
import Paragraph from "./components/home/Paragraph";
import Comment from "./components/home/Comment";
import Points from "./components/home/Points";
import Convince from "./components/home/Convince";
import HeroSection from "./components/home/Hero";
// import Header from "./components/home/Header";

export default function Home() {
  return (
    <div>
      {/* <Header /> */}
      <HeroSection/>
      <Information/>
      <Paragraph/>
      <Points/>
      <Objectives/>
      <Comment/>
      <Convince/>
    </div>
  );
}
