import Image from "next/image";

function TopFooter() {
  return (
    <div className="pt-[68px] pb-[55px] text-center bg-[#F4F6F6] mb-[140px]">
      <h2 className="text-[32px] font-bold leading-[48px] px-[350px] text-[#222] mb-[20px]">
        Subscribe to get the latest news about us
      </h2>
      <p className="text-[16px] leading-[24px] px-[380px] mb-[40px]">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed eiusmod
        tempor incididunt ut labore at dolore.
      </p>

      <input
        className="w-full absolute max-w-[471px] h-[67px] pl-[45px] flex ml-[385px] "
        type="text"
        placeholder="Enter your email"
      />
      <Image
        className="relative left-[395px] top-[25px]"
        src={"/email.svg"}
        alt="email image"
        width={16}
        height={16}
      />
      <button className="text-[16px] relative left-[145px] bottom-[10px] font-medium text-center text-white bg-[#305F64] py-[15px] w-[125px]">
        Register
      </button>
    </div>
  );
}

export default TopFooter;
