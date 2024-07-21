import Card from "./Card";

export default function Work() {
  return (
    <div className="Work ">
      <h2>Work</h2>
      <div className="design grid grid-cols-4 gap-4">
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
}
