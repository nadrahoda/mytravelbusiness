import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import TourCategories from "../components/TourCategories";
import TopDestination from "@/components/TopDestination";
import PlanTrip from "@/components/PlanTrip";
import PopularTour from "@/components/PopularTrip";
import Gallery from "@/components/Gallery";
import StatsSection from "@/components/StatsSection";
import Testimonial from "@/components/Testimonial";
import Footer from "@/components/Footer";


export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <TourCategories />
      <TopDestination />
      <PlanTrip/>
      <PopularTour/>
      <Gallery/>
      <StatsSection/>
      <Testimonial/>
      <Footer/>
    </>
  );
}
