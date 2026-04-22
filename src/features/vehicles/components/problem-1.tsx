import { ArrowDown } from "lucide-react";

function Problem1() {
  return (
    <section className="h-dvh text-white">
      <div className="pt-[12vh] pb-10 section-inline-padding h-full problem-grid items-end gap-y-8">
        <div className="space-y-4">
          <div className="uppercase text-xs">The problem</div>
          <div className="text-4xl">
            The Challenge of Autonomous Aerial Missions.
          </div>
        </div>
        <div className="self-start flex items-center gap-x-2">
          1 <div className="w-12 h-px bg-current"></div> 2
        </div>
        <div>
          Our system is designed specifically to address these challenges
          through a tightly integrated hardware and software architecture.
        </div>
        <div className="justify-self-center">
          <ArrowDown size={26} />
        </div>
      </div>
    </section>
  );
}
export default Problem1;
