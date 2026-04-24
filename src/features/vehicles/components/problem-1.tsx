import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import { ArrowDown } from "lucide-react";
import { useRef } from "react";
import useProblemAnimation from "../hooks/use-problem-animation";

function Problem1() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const contentRef = useRef<HTMLDivElement | null>(null);
  const animationRef = useRef<any>(null);

  useProblemAnimation(sectionRef, contentRef, animationRef);

  return (
    <section
      className="text-white bg-red-400 relative isolate overflow-hidden"
      ref={sectionRef}
    >
      <div ref={contentRef} className="h-dvh">
        <div className="absolute inset-0 -z-10">
          <DotLottieReact
            dotLottieRefCallback={(dotLottie) => {
              if (!dotLottie) return;

              animationRef.current = dotLottie;
            }}
            src="/animation.json"
            mode="reverse"
            layout={{
              fit: "fill",
            }}
          />
        </div>
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
      </div>
    </section>
  );
}
export default Problem1;
