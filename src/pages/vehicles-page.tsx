import Problem1 from "@/features/vehicles/components/problem-1";
import Navbar from "../components/layout/navbar";

import Hero from "@/features/vehicles/components/hero";
import Overview from "@/features/vehicles/components/overview";
import Problem2 from "@/features/vehicles/components/problem-2";

function VehiclesPage() {
  return (
    <div>
      <Navbar />
      <main>
        <Hero />
        <Problem1 />
        <Problem2 />
        <Overview />
      </main>
    </div>
  );
}

export default VehiclesPage;
