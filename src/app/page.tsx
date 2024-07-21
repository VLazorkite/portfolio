import Image from "next/image";

export default function Home() {
  return (
    <>
      <div className="Top layer">
        <h1>Maxwell Rotich</h1>

        <ul className="social links">
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

        <h2>
          <li>Me</li>
        </h2>
        <h2>
          <li>Work</li>
        </h2>
        <h2>
          <li>Blog</li>
        </h2>
      </div>

      <div className="Bio">
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nemo,
          voluptas aspernatur? Perspiciatis aliquid deserunt quaerat
          reprehenderit placeat nobis? Cumque quasi rerum placeat nesciunt
          praesentium doloribus nulla laboriosam suscipit blanditiis aliquam.
        </p>
      </div>

      <div className="work grid grid-cols-4 gap-4">
        <div className="design">
          <div>Project 1</div>
          <div>Project 2</div>
          <div>Project 3</div>
        </div>
      </div>

      <div className="Blog">
        <a href="/Blog">
          <div className="design">
            <li>Blog</li>
          </div>
        </a>
      </div>

      <div className="Philanthropy and interests">
        <div className="design">content</div>
      </div>
    </>
  );
}
