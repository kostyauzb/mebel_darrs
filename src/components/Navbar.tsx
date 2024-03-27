import Image from "next/image";

function Navbar() {
  return (
    <div className="pt-[44px] mb-[26.85px] flex justify-between items-center tablet:pt-[40px] tablet:mb-[40px]">
      <Image src={"/cite-logo.svg"} alt="cite-logo" width={147} height={29} />
      <ul className="flex gap-[50px] text-[16px] text-[#161616] mr-[70px] tablet:hidden">
        <li>Home</li>
        <li>About</li>
        <li>Features</li>
        <li>Contact</li>
      </ul>
      <div className="flex gap-[30px] tablet:hidden">
        <Image src={"/loop.svg"} alt="cite-logo" width={24} height={24} />
        <Image src={"/style-menu.svg"} alt="cite-logo" width={24} height={24} />
      </div>
      <Image
        className="hidden tablet:block"
        src={"/manu.svg"}
        alt="image"
        width={31}
        height={22}
      />
    </div>
  );
}

export default Navbar;
