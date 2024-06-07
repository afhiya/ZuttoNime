import Link from "next/link";
import InputComponent from "./InputComponent";
import UserButton from "./UserButton";

const Navbar = () => {

  return (
    <nav>
      <div className="w-full h-14 flex justify-between items-center p-2 bg-color-secondary">
        <Link href="/" className="font-bold md:text-xl sm:text-md text-sm text-color-primary">
          ZuttoNime
        </Link>
        <div className="sm:block hidden">
          <InputComponent />
        </div>
        <UserButton />
      </div>
    </nav>
  );
};

export default Navbar;
