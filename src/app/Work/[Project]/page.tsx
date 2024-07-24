export default function Project({ params }: { params: { Project: string } }) {
  console.log(params.Project);

  return (
    <>
      <div className="container">
        <h1>Worked! {params.Project}</h1>
      </div>
    </>
  );
}
