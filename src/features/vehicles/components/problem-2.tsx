import drone from "@/assets/images/drone.png";

function Problem2() {
  return (
    <section className="h-dvh bg-bg-secondary text-text-secondary">
      <div className="pt-[12vh] pb-10 section-inline-padding h-full problem-grid items-end gap-y-8">
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
            <img src={drone} alt="Drone image" className="drop-shadow-2xl" />
          </figure>
        </div>
      </div>
    </section>
  );
}
export default Problem2;
