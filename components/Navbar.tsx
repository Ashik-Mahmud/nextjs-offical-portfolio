type Props = {};
import { BsFacebook, BsGithub, BsLinkedin, BsTwitter } from "react-icons/bs";

const Navbar = (props: Props) => {
  return (
    <nav className="font-sans py-2">
      <div className="container">
        <div className="flex items-center justify-between">
          {/* menus */}
          <menu>
            <ul className="flex items-center gap-4 uppercase text-sm">
              <li>
                <a href="#" className="font-semibold">
                  Works
                </a>
              </li>
              <li>
                <a href="#" className="font-semibold">
                  Contact
                </a>
              </li>
            </ul>
          </menu>
          {/* logo */}
          <div>
            <a
              href="#"
              className="text-xl font-bold font-poppins text-gray-700"
            >
              Ashik Mahmud
            </a>
          </div>

          {/* social links */}
          <div>
            <ul className="flex items-center gap-4">
              <li title="Github">
                <a
                  href="https://github.com/ashik-mahmud"
                  target={"_blank"}
                  rel="noreferrer"
                  className="text-gray-700 hover:text-blue-500 transition-colors text-sm"
                >
                  <BsGithub />
                </a>
              </li>
              <li title="LinkedIn">
                <a
                  href="https://www.linkedin.com/in/ashikmahmud187/"
                  target={"_blank"}
                  rel="noreferrer"
                  className="text-gray-700 hover:text-blue-500 transition-colors text-sm"
                >
                  <BsLinkedin />
                </a>
              </li>
              <li title="Facebook">
                <a
                  href="https://web.facebook.com/ashikmahmud187/"
                  target={"_blank"}
                  rel="noreferrer"
                  className="text-gray-700 hover:text-blue-500 transition-colors text-sm"
                >
                  <BsFacebook />
                </a>
              </li>
              <li title="Twitter">
                <a
                  href="https://twitter.com/AshikMa36093377"
                  target={"_blank"}
                  rel="noreferrer"
                  className="text-gray-700 hover:text-blue-500 transition-colors text-sm"
                >
                  <BsTwitter />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
