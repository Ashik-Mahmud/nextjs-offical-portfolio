type Props = {};

const Navbar = (props: Props) => {
  return (
    <nav className="font-sans">
      <div className="container">
        <div className="flex items-center justify-between">
          {/* menus */}
          <menu>
            <ul>
              <li>
                <a href="#">Works</a>
              </li>
              <li>
                <a href="#">Contact</a>
              </li>
            </ul>
          </menu>
          {/* logo */}
          <div>
            <a href="#">Ashik Mahmud</a>
          </div>

          {/* social links */}
          <div>
            <ul>
              <li>
                <a href="#">Github</a>
              </li>
              <li>
                <a href="#">Twitter</a>
              </li>
              <li>
                <a href="#">LinkedIn</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
