import {
  FaFacebookF,
  FaFileArrowUp,
  FaHeart,
  FaInstagram,
  FaLock,
  FaTwitter,
  FaUnlock,
  FaYoutube,
} from "react-icons/fa6";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.svg";
import { useContext } from "react";
import { AuthContext } from "../../provider/AuthProvider";
const NavigationBar = () => {
  const { user, logoutUser } = useContext(AuthContext);
  console.log("User ==>", user);
  console.log("User Email ==>", user?.email);
  const navItems = [
    { id: 1, text: "Home", link: "/" },
    { id: 2, text: "Blogs", link: "/blogs" },
    { id: 3, text: "About Us", link: "/about" },
  ];
  const handleLogOut = () => {
    logoutUser()
      .then(() => console.log("Successfully Logged Out"))
      .catch((error) => console.log(error.message));
  };
  return (
    <div className="text-gray-500">
      {/* icons */}
      <div className="bg-neutral-200 flex justify-between px-52 py-2 text-gray-400">
        {/* left */}
        <div className="flex items-center gap-3 ">
          <Link>
            <FaFacebookF className="  hover:text-black"></FaFacebookF>
          </Link>
          <Link>
            <FaInstagram className="  hover:text-black"></FaInstagram>
          </Link>
          <Link>
            <FaTwitter className=" hover:text-black"></FaTwitter>
          </Link>
          <Link>
            <FaYoutube className=" hover:text-black"></FaYoutube>
          </Link>
        </div>
        {/* right */}
        <div className="flex items-center gap-4">
          {/* <button className="flex items-center gap-2">
            <FaFileArrowUp className="text-orange-500"></FaFileArrowUp>{" "}
            <span className="hover:text-black">Submit Recipe</span>
          </button>
          <button className="flex items-center gap-2">
            <FaHeart className="text-orange-500"></FaHeart>
            <span className="hover:text-black">Saved Recipe</span>
          </button> */}

          {user ? (
            <Link to="/" className="flex items-center gap-2" onClick={handleLogOut}>
              {user?.email?<span>{user?.email} </span>:<img className="w-7 rounded-full" src={user?.photoURL} alt="" /> }
             
              <FaUnlock className="text-orange-500"></FaUnlock>
              <span className="hover:text-black">LogOut</span>
            </Link>
          ) : (
            <Link to="/login" className="flex items-center gap-2">
              <FaLock className="text-orange-500"></FaLock>
              <span className="hover:text-black">Login</span>
            </Link>
          )}
        </div>
      </div>
      {/* brands */}
      <div className="h-20 flex items-center justify-center gap-4 my-5 border-b-2">
        <img src={logo} className="w-11 text " />
        <span className="text-4xl ">BORCELLI</span>
      </div>
      {/* navbar */}
      <div className="flex justify-center gap-10 ">
        {navItems.map((item) => (
          <Link key={item.id} to={item.link}>
            {item.text}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default NavigationBar;
