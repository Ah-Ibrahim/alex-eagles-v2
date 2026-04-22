import Problem1 from "@/features/vehicles/components/problem-1";
import Navbar from "../components/layout/navbar";

import Problem2 from "@/features/vehicles/components/problem-2";
import Hero from "../features/vehicles/components/hero";

function VehiclesPage() {
  return (
    <div>
      <Navbar />
      <main>
        <Hero />
        <Problem1 />
        <Problem2 />
      </main>
    </div>
  );
}

export default VehiclesPage;
