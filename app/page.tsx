import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import TourCategories from "../components/TourCategories";
import TopDestination from "@/components/TopDestination";
import PlanTrip from "@/components/PlanTrip";


export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <TourCategories />
      <TopDestination />
      <PlanTrip/>
    </>
  );
}
