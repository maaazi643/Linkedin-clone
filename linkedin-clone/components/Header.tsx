import Image from "next/image";
import LinkedinIcon from "../public/LinkedinIcon.svg";
import { SearchIcon } from "lucide-react";

function Header() {
  return (
    <div className="flex items-center mx-auto max-w-6xl p-2">
      <Image
        src={LinkedinIcon}
        alt="Linkedin Icon"
        className="rounded-lg"
        width={40}
        height={40}
      />

      <div className="flex-1">
        <form className="flex items-center bg-gray-100 p-2 rounded-md mx-2 max-w-96 flex-1 space-x-1">
          <SearchIcon className="h-4 text-gray-600" />
          <input
            type="text"
            placeholder="Search"
            className="bg-transparent outline-none"
          />
        </form>
      </div>
    </div>
  );
}

export default Header;
