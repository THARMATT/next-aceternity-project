
import { Footer } from "@/components/Footer";
import FeaturedCourses from "../components/FeaturedCourses";

import HeroSection from "../components/HeroSection";
import InfiniteCards from "../components/InfiniteCards";
import UpcomingNotes from "../components/UpcomingNotes";



export default function Home() {
  return (
   <><div className="min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.02]">
    <HeroSection/>
    <FeaturedCourses/>
    
  <InfiniteCards/>
  <UpcomingNotes/>
  
 <Footer/>
    </div></>
  );
}
