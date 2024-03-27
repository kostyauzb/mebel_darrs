import Image from "next/image";

function BottomNav() {
  return (
      <div className="flex bg-[#154444] text-[#fff] mb-[140px] tablet:mx-[-20px] tablet:mb-[80px] tablet:flex-col-reverse tablet:items-center phone:mx-[-24px] phone:gap-y-[40px] phone:mb-[60px]">
      <Image
          className="mt-[-1.1px] tablet:w-[350px] tablet:h-[499px] phone:w-[309px] phone:h-[326px]"
          src={"/chair.png"}
          alt="cite-logo"
          width={411}
          height={560}
        />
      <div className="pt-[101px] pl-[100px] tablet:pb-[60px] pb-[137px] tablet:pt-[55px] tablet:pl-[20px] phone:pt-[49px] phone:pb-[12px]">
      <h2 className="font-bold text-[56px] leading-[68px] mb-[20px] tablet:leading-[58px] tablet:text-[42px] tablet:w-full tablet:max-w-[500px] phone:text-[32px] phone:leading-[42px] phone:mb-[12px]">We Help You Make Modern Furniture</h2>
      <p className="text-[20px] w-full max-w-[520px] leading-[25px] mb-[35px] phone:text-[12px] phone:leading-[17px] phone:max-w-[287px] phone:opacity-80 phone:mb-[30px]">All of our furniture uses the best materials and choices for our customers.All of our furniture uses the best materials </p>
      <button className="w-[172px] py-[15px] text-[center] bg-white text-[#154444]   phone:w-[149px] phone:py-[10px] phone:text-[14px]">Explore More</button>
      </div>
      </div>
  );
}

export default BottomNav;
