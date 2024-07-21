export default function TopSection() {
  return (
    <div className="Top-layer w-ful h-60  ">
      <header className="Title flex ">
        <div className="Name h-full">
          <div className="Name-split">
            <div>Maxwell</div>
          </div>

          <div className="Name-split">
            <div>Rotich</div>
          </div>
        </div>
        <div className="About flex space-x-10 list-none  ">
          <h2>
            I'm a backend developer with a keen interest in Neural networks and
            ML algorithims. Enthusiastic learner and problem solver. 3rd Year
            Computer science and Math student.
          </h2>
        </div>
      </header>
      <ul className="Social-links  flex space-x-4">
        <li>
          <a href="#">github</a>
        </li>
        <li>
          <a href="#">linkedIn</a>
        </li>
        <li>
          <a href="#">twitter</a>
        </li>
      </ul>
    </div>
  );
}
