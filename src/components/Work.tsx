import Card from "./Card";

export default function Work() {
  return (
    <div className="Work">
      <h2>Best work</h2>
      <div className="Card-work grid-cols-3 flex  justify-between ">
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
}
