import FeaturedCourses from "./components/FeaturedCourses";
import HeroSection from "./components/HeroSection";
import WhyChooseUs from "./components/WhyChooseUs";


export default function Home() {
  return (
   <><div className="min-h-screen bg-black/95 bg-grid-white  antialiased">
    <HeroSection/>
    <FeaturedCourses/>
    <WhyChooseUs/>
    </div></>
  );
}
