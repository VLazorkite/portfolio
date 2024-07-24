import Card from "./Card";

export default function Work() {
  let i = 0;
  let cards = [0, 1, 2];
  return (
    <div className="Work">
      <h2>Best work</h2>
      <div className=" Card-work grid-cols-3  flex  justify-between">
        {cards.map((card) => (
          <Card key={i} name={"Neural-net"} img={""} />
        ))}
      </div>
    </div>
  );
}
