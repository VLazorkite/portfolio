export default function Project({ params }: { params: { Project: string } }) {
  return (
    <>
      <main className=" bg-[url('https://images.unsplash.com/photo-1721539584859-9fea914ae2fe?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')]">
        <div className="container h-160 ">
          <h1>Worked! {params.Project}</h1>
        </div>
      </main>
    </>
  );
}
