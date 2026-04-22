import drone from "@/assets/images/drone.png";
import Marquee from "@/components/common/marquee";

function Hero() {
  return (
    <section>
      <div className="h-dvh flex flex-col pt-20 pb-10 justify-between">
        <div className="text-3xl section-inline-padding">
          Building the future of <span className="text-brand">drones</span>{" "}
          technology
        </div>
        <div className="my-5 relative isolate">
          <figure>
            <img src={drone} alt="Drone image" />
          </figure>
          <Marquee text="drone" />
        </div>
        <div className="flex flex-wrap gap-x-1 section-inline-padding text-xs justify-between *:uppercase">
          <span>Safer</span>
          <span>Sustainable</span>
          <span>More reliable</span>
          <span>Longer lasting</span>
          <span>Faster charging</span>
          <span>Smaller</span>
          <span>Lighter</span>
        </div>
      </div>
    </section>
  );
}
export default Hero;
