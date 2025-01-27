import Image from "next/image";
import Navber from '../app/components/navbar'
import Hero from "./components/hero";
import Stap from "./components/stap";
import Featured from "./components/featured";
import Scrvices from "./components/scrvices";
import Tool from "./components/tool";
import Testimonials from "./components/testimonials";
import Faq from "./components/faq";
import Contact from "./components/contact";
import Footer from "./components/footer";

export default function Home() {
  return (
    <>
    <Navber/>
    <Hero/>
    <Stap/>
    <Featured/>
    <Scrvices/>
    
    <Contact/>
    <Footer/>
    </>
  );
}
