interface MarqueeProps {
  text: string;
  color?: string;
  outline?: boolean;
}

function Marquee({ text, color, outline }: MarqueeProps) {
  const textItems = new Array(5)
    .fill(text)
    .map((item, index) => <li key={index}>{item}</li>);

  return (
    <div className="text-brand overflow-hidden marquee absolute top-1/2 left-0 right-0 -translate-y-1/2 -z-10">
      <ul className="flex gap-x-4 text-6xl ps-4 w-fit ">
        {textItems}
        {textItems}
      </ul>
    </div>
  );
}
export default Marquee;
