import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import cartIcon from "../../assets/cart.svg";
const Navbar = () => {
  // get user from localStorage
  const user = JSON.parse(localStorage.getItem("users"));

  // navigate
  const navigate = useNavigate();

  // logout function
  const logout = () => {
    localStorage.clear("users");
    navigate("/login");
  };

  // CartItems
  const cartItems = useSelector((state) => state.cart);
  // navList Data
  const navList = (
    <ul className="flex space-x-3 text-white font-medium text-md px-5 ">
      {/* Home */}
      <li>
        <Link to={"/"} className="font-bold text-xl hover:text-black">
          Home
        </Link>
      </li>

      {/* All Product */}
      <li>
        <Link className="font-bold text-xl hover:text-black" to={"/allproduct"}>
          All Product
        </Link>
      </li>

      {/* Signup */}
      {!user ? (
        <li>
          <Link className="font-bold text-xl hover:text-black" to={"/signup"}>
            Signup
          </Link>
        </li>
      ) : (
        ""
      )}

      {/* Signup */}
      {!user ? (
        <li>
          <Link className="font-bold text-xl hover:text-black" to={"/login"}>
            Login
          </Link>
        </li>
      ) : (
        ""
      )}

      {/* User */}
      {user?.role === "user" && (
        <li>
          <Link
            className="font-bold text-xl hover:text-black"
            to={"/user-dashboard"}
          >
            User
          </Link>
        </li>
      )}

      {/* Admin */}
      {user?.role === "admin" && (
        <li>
          <Link
            className="font-bold text-xl hover:text-black"
            to={"/admin-dashboard"}
          >
            Admin
          </Link>
        </li>
      )}

      {/* logout */}
      {user && (
        <li className="font-bold text-xl hover:text-black" onClick={logout}>
          Logout
        </li>
      )}

      {/* Cart */}
      <li>
        <Link className="font-bold text-xl hover:text-black" to={"/cart"}>
          <img src={cartIcon} alt="cart" className="w-8" />
          
        </Link>
      </li>
    </ul>
  );
  return (
    <nav className="bg-blue-600 sticky top-0">
      {/* main  */}
      <div className="lg:flex lg:justify-between items-center py-3 lg:px-3 ">
        {/* left  */}
        <div className="left py-3 px-5 lg:py-0">
          <Link to={"/"}>
            <h2 className=" font-bold text-white text-2xl text-center hover:text-black">
              E-Shop
            </h2>
          </Link>
        </div>

        {/* right  */}
        <div className="right flex justify-center mb-4 lg:mb-0">{navList}</div>
      </div>
    </nav>
  );
};

export default Navbar;
