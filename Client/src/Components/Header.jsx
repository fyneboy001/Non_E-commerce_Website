import Logo from "../assets/Images/Logo.png";

function Header() {
  return (
    <>
      <nav className="flex justify-between h-18 items-center ">
        <img src={Logo} alt="The Logo" />
        <ul className="flex space-x-12">
          <li>
            <a
              href="##"
              className=" transition:ease-in-out duration-700 hover:bg-red-600 hover:px-4 hover:py-1 "
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="##"
              className=" transition:ease-in-out duration-700 hover:bg-red-600 hover:px-4 hover:py-1 "
            >
              Shop
            </a>
          </li>
          <li>
            <a
              href="##"
              className=" transition:ease-in-out duration-700 hover:bg-red-600 hover:px-4 hover:py-1 "
            >
              Order
            </a>
          </li>
          <li>
            <a
              href="##"
              className=" transition:ease-in-out duration-700 hover:bg-red-600 hover:px-4 hover:py-1 "
            >
              Contact
            </a>
          </li>
          <li>
            <a
              href="##"
              className=" transition:ease-in-out duration-700 hover:bg-red-600 hover:px-4 hover:py-1 "
            >
              Log in
            </a>
          </li>
        </ul>
        <div className="flex h-8 space-x-6 ">
          <img
            className=" transition:ease-in-out duration-700 hover:px-4 hover:py-1 "
            src="../public/icons/Shop.png"
            alt=""
          />
          <img
            className=" transition:ease-in-out duration-700 hover:px-4 hover:py-1 "
            src="../public/icons/Search.png"
            alt=""
          />
        </div>
      </nav>
    </>
  );
}

export default Header;
