import {
  IconBell,
  IconPointFilled,
  IconSearch,
  IconUserCircle,
  IconX,
} from "@tabler/icons-react";
import Avatar from "@/images/avatar.svg";
import Image from "next/image";

export default function Header() {
  return (
    <header className="w-full">
      <div className="flex gap-4 w-full px-8 py-2 fundoAzulContainer shadow-xl items-center text-white">
        <div className="flex flex-1 gap-2 fundoAzulP border border-AzulSD px-6 py-2 rounded-full">
          <IconSearch width={16} className="cursor-pointer" />
          <input
            type="text"
            placeholder="Pesquisar..."
            className="flex flex-1 bg-transparent px-4 outline-none placeholder:text-white"
          />
          <IconX width={16} className="cursor-pointer" />
        </div>
        <div className="flex gap-5 ml-4">
          <IconBell width={20} className="cursor-pointer" />
          <div className="flex flex-col items-center justify-center cursor-pointer">
            <IconPointFilled width={10} height={6} />
            <IconPointFilled width={10} height={6} />
            <IconPointFilled width={10} height={6} />
          </div>
          <Image
            alt="iconAvatar"
            src={Avatar}
            className="border-AzulD rounded-full cursor-pointer"
          />
        </div>
      </div>
    </header>
  );
}
