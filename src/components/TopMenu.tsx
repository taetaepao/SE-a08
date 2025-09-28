import TopMenuItem from "./TopMenuItem";
import Image from "next/image";

export default function TopMenu() {
  return (
    <div className="fixed top-0 right-0 left-0 z-50 flex justify-end items-center bg-gray-100 px-6 py-3 shadow gap-10">
      <TopMenuItem label="Booking" href="/booking" />
      <Image src="/img/logo.png" alt="logo" width={50} height={50}/>
    </div>
  );
}
