import { IconType } from "react-icons"; // Correct import
import { NavLink } from "react-router-dom";

interface NavButtonProps {
  buttonTitle: string;
  buttonIcon: IconType; 
  to:string;
}

const NavButton: React.FC<NavButtonProps> = ({ buttonIcon: ButtonIcon, buttonTitle, to }) => {
  return (
    <NavLink to={to} className='flex gap-3 text-primaryTextColor px-4 py-2 mx-2 active-background-color button-border'>
      <ButtonIcon className="h-6 w-6" /> {/* Correct usage of the buttonIcon */}
      <h3 className="text-lg font-semibold">{buttonTitle}</h3>
    </NavLink>
  );
};

export default NavButton;
