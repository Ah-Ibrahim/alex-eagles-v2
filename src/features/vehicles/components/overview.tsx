const keywords = [
  "Safer",
  "More efficient",
  "Longer lasting",
  "Sustainable",
  "High Energy Density",
  "Faster Charging",
  "Cost-effective",
  "Scalable",
];

function Overview() {
  const keywordsItems = keywords.map((keyword, index) => (
    <Keyword text={keyword} colorClassName="text-content-primary" key={index} />
  ));

  return (
    <section className="section-inline-padding py-20">
      <h2 className="text-content-brand text-4xl mb-8">
        Leading the way to a sustainable battery future
      </h2>
      <ul className="flex gap-2 flex-wrap">{keywordsItems}</ul>
    </section>
  );
}
export default Overview;

function Keyword({
  text,
  colorClassName,
}: {
  text: string;
  colorClassName: string;
}) {
  return (
    <li
      className={`text-xs p-1 ${colorClassName} border-2 border-current rounded-md font-bold`}
    >
      {text}
    </li>
  );
}
