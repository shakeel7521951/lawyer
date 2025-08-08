import Hero from "./components/home/Hero";
import Information from "./components/home/Information";
import Objectives from "./components/home/Objectives";
import Paragraph from "./components/home/Paragraph";
import Comment from "./components/home/Comment";
import Move from "./components/home/Move";
// import Header from "./components/home/Header";

export default function Home() {
  return (
    <div>
      {/* <Header /> */}
      <Hero/>
      <Information/>
      <Paragraph/>
      <Objectives/>
      <Comment/>
      <Move/>
    </div>
  );
}
