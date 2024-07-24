import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

export default function TopSection() {
  return (
    <div className="Top-layer w-ful h-60  ">
      <header className="Title flex ">
        <div className="Name h-full">
          <div className="Name-split">
            <div>Maxwell</div>
          </div>

          <div className="Name-last">
            <div>Rotich</div>
          </div>
        </div>
        <div className="About flex space-x-10 list-none">
          <h2>
            I'm a backend developer with a keen interest in Neural networks and
            ML algorithims. Enthusiastic learner and problem solver. 3rd Year
            Computer science and Math student.
          </h2>
        </div>
      </header>

      <ul className="Social-links  flex space-x-9 ">
        <li className="hover:-translate-y-2.5 ease-in-out duration-700">
          <a href="https://github.com/VLazorkite">
            <FaGithub size={40} />
          </a>
        </li>
        <li className="hover:-translate-y-2.5 ease-in-out duration-700">
          <a href="https://www.linkedin.com/in/maxwell-rotich-9080a625a/">
            <FaLinkedin className="icon" size={40} />
          </a>
        </li>
        <li className="hover:-translate-y-2.5 ease-in-out duration-700">
          <a href="mailto:rotichmax@outlook.com">
            <MdEmail className="icon" size={40} />
          </a>
        </li>
      </ul>
    </div>
  );
}
