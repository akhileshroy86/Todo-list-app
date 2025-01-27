import rocket from "@/public/images/rocket.svg";
import logo from "@/public/images/todoApp.svg";
import Image from "next/image";

export default function NavHeader() {
  return (
    <div className="nav-header flex justify-center items-center p-14">
      <Image src={rocket.src} width={32} height={32} alt="logo" />
      <img src={logo.src} className="w-80 pl-3" />
    </div>
  );
}
