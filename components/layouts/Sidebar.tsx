type Props = {};
import Link from "next/link";
import { AiOutlineUser } from "react-icons/ai";
import { BiBook } from "react-icons/bi";
import { BsFillGearFill } from "react-icons/bs";
import { CiBoxes } from "react-icons/ci";
import { GiSkills } from "react-icons/gi";
import { GrDashboard } from "react-icons/gr";
import { IoGitNetworkSharp } from "react-icons/io5";
import { MdOutlineLocalOffer } from "react-icons/md";
const Sidebar = (props: Props) => {
  const menus = [
    {
      name: "Dashboard",
      icon: <GrDashboard />,
      link: "/dashboard",
    },

    {
      name: "Hero/About",
      icon: <CiBoxes />,
      link: "/dashboard/about",
    },

    {
      name: "Skills ",
      icon: <GiSkills />,
      link: "/dashboard/skills",
    },

    {
      name: "Offers",
      icon: <MdOutlineLocalOffer />,
      link: "/dashboard/offers",
    },
    {
      name: "Portfolios ",
      icon: <IoGitNetworkSharp />,
      link: "/dashboard/portfolio",
    },

    {
      name: "Blogs ",
      icon: <BiBook />,
      link: "/dashboard/blogs",
    },
    {
      name: "Profile ",
      icon: <AiOutlineUser />,
      link: "/dashboard/profile",
    },
    {
      name: "Settings",
      icon: <BsFillGearFill />,
      link: "/dashboard/settings",
    },
  ];

  return (
    <div>
      <div className="sidebar-logo p-4">
        <h3 className="text-2xl font-bold">
          Ashik <span className="text-blue-500">Mahmud</span>
        </h3>
      </div>

      <div className="sidebar-menu flex flex-col items-start  ">
        {menus.map((menu, index) => (
          <div
            className="sidebar-menu-item px-6 py-3 hover:bg-[#f1f1f185] hover:backdrop-blur-md w-full"
            key={index}
          >
            <Link
              href={menu.link}
              className="flex items-center gap-2  uppercase font-poppins text-sm "
            >
              <div className="sidebar-menu-item-icon">{menu.icon}</div>
              <div className="sidebar-menu-item-name">{menu.name}</div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
