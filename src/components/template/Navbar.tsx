import { IconChartBar, IconDeviceDesktop, IconPhone, IconSearch } from "@tabler/icons-react";
import Image from "next/image";
import Link from "next/link";
import Logo from "@/images/Logo.png";

export default function Navbar() {
  return (
    <div className="flex flex-col items-center justify-start gap-20 px-8 py-8">
      <div className="flex items-center justify-center">
        <div className="w-3/4">
          <Image alt="logoApp" height={60} src={Logo}></Image>
        </div>
      </div>
      <div className="flex flex-col gap-4 w-full">
        <Link href={"/inicio"}>
          <button className="linkNav">
            <IconDeviceDesktop />
            <span>Início</span>
          </button>
        </Link>
        <Link href={"/atendimento"}>
          <button className="linkNav">
            <IconPhone />
            <span>Atendimento</span>
          </button>
        </Link>
        <Link href={"/pesquisar"}>
          <button className="linkNav">
            <IconSearch />
            <span>Pesquisar</span>
          </button>
        </Link>
        <Link href={"/dashboard"}>
          <button className="linkNav">
            <IconChartBar />
            <span>Dashboard</span>
          </button>
        </Link>
      </div>
    </div>
  );
}
