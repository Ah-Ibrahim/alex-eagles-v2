import drone from "@/assets/images/drone.png";
import { useRef } from "react";
import useProblem2Animation from "../hooks/use-problem-2-animation";

function Problem2() {
  const containerRef = useRef<HTMLDivElement>(null);
  const imgRef = useRef<HTMLImageElement>(null);

  useProblem2Animation(containerRef, imgRef);

  return (
    <section
      className="h-dvh bg-bg-secondary text-text-secondary"
      ref={containerRef}
    >
      <div className="pt-[12vh] pb-14 section-inline-padding h-full problem-grid problem-grid--textless items-end gap-y-8">
        <div className="space-y-4">
          <div className="uppercase text-xs">The problem</div>
          <div className="text-4xl">
            They demand precision, reliability, and intelligence.
          </div>
        </div>
        <div className="self-start flex items-center gap-x-2">
          2 <div className="w-12 h-px bg-current"></div> 2
        </div>
        <div className="justify-self-center">
          <figure>
            <img
              src={drone}
              alt="Drone image"
              className="drop-shadow-2xl"
              ref={imgRef}
            />
          </figure>
        </div>
      </div>
    </section>
  );
}
export default Problem2;
