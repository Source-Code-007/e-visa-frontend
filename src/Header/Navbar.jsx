import { Link } from "react-router-dom";

const Navbar = () => {
  const menuItems = [
    "Services",
    "ABOUT KYRGYZSTAN",
    "INFORMATION",
    "CONTACT US",
    "KG",
    "RU",
    "EN",
    "Log in to personal account",
  ];

  return (
    <div className="py-2">
      <div className="my-container">
        <div className="flex justify-between gap-4 text-white">
          <Link to={'/'}>

          <figure className="flex items-center !w-24 md:!w-32 whitespace-nowrap">
            <img
              src={"https://evisa.e-gov.kg/images/img/logo.png"}
              className="!w-24 md:!w-32"
              alt="e-VISA"
              />
          </figure>
              </Link>
          <div>
            <ul className="flex items-center gap-4 text-[14px] md:text-base">
              {menuItems.map((item, index) => (
                <li key={index} className={`text-nowrap ${item=== 'EN' && 'text-primary-1'}`}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
