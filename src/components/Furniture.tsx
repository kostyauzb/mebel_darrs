import Image from "next/image";

function Furniture() {
  return (
    <div className="text-[#242424] mb-[140px]">
      <h3 className="text-[32px] font-bold mb-[20px]">Our Popular Furniture</h3>
      <div className="flex items-center justify-between mb-[80px] tablet:flex-col tablet:gap-[30px] tablet:items-start">
        <p className="text-[20px] text-[#383738] leading-[27x] w-full max-w-[829px]">
          All of our furniture uses the best materials and choices for our
          customers.All of our furniture uses the best materials and choices for
          our customers.
        </p>
        <div>
          <Image
            src={"/belgilar.svg"}
            alt="Belgilar rasmi"
            width={96}
            height={40}
          />
        </div>
      </div>
      <div className="grid grid-cols-3 gap-[60px] tablet:grid-cols-2 tablet:gap-[30px] phone:grid-cols-1 phone:gap-[20px]">
        <div className="bg-white w-full max-w-[380px] pb-[26px] shadow-2xl">
          <Image
            className="w-full mb-[30px]"
            src={"/swan-chair.png"}
            alt="first-img"
            width={380}
            height={246}
          />
          <div className="flex justify-between items-start px-[24px]">
            <h4 className="text-[20px] font-medium mb-[20px]">
              White Swan Chair{" "}
            </h4>
            <div className="flex gap-[8px] items-center">
              <div className="w-[26px] h-[26px] bg-[#EF5423] rounded-full pl-[7.5px] pt-[8.5px]">
                <Image src={"/hurt.svg"} alt="" width={10} height={9} />
              </div>
              <Image src={"/send.svg"} alt="send-img" width={26} height={26} />
            </div>
          </div>
          <div className="flex justify-between items-center px-[24px]">
            <h3 className="text-[24px] font-medium text-[#154444]">$40</h3>
            <button className="text-[12px] font-medium text-white text-center w-[78px] py-[5.5px] bg-[#244D4D]">
              Buy Now
            </button>
          </div>
        </div>
        <div className="bg-white w-full max-w-[380px] pb-[26px] shadow-2xl">
          <Image
            className="w-full mb-[30px]"
            src={"/second-chair.png"}
            alt="first-img"
            width={380}
            height={246}
          />
          <div className="flex justify-between items-start px-[24px]">
            <h4 className="text-[20px] font-medium mb-[20px]">
              White Swan Chair{" "}
            </h4>
            <div className="flex gap-[8px] items-center">
              <div className="w-[26px] h-[26px] bg-[#EF5423] rounded-full pl-[7.5px] pt-[8.5px]">
                <Image src={"/hurt.svg"} alt="" width={10} height={9} />
              </div>
              <Image src={"/send.svg"} alt="send-img" width={26} height={26} />
            </div>
          </div>
          <div className="flex justify-between items-center px-[24px]">
            <h3 className="text-[24px] font-medium text-[#154444]">$40</h3>
            <button className="text-[12px] font-medium text-white text-center w-[78px] py-[5.5px] bg-[#244D4D]">
              Buy Now
            </button>
          </div>
        </div>
        <div className="bg-white w-full max-w-[380px] pb-[26px] shadow-2xl">
          <Image
            className="w-full mb-[30px]"
            src={"/third-chair.png"}
            alt="first-img"
            width={380}
            height={246}
          />
          <div className="flex justify-between items-start px-[24px]">
            <h4 className="text-[20px] font-medium mb-[20px]">
              White Swan Chair{" "}
            </h4>
            <div className="flex gap-[8px] items-center">
              <div className="w-[26px] h-[26px] bg-[#EF5423] rounded-full pl-[7.5px] pt-[8.5px]">
                <Image src={"/hurt.svg"} alt="" width={10} height={9} />
              </div>
              <Image src={"/send.svg"} alt="send-img" width={26} height={26} />
            </div>
          </div>
          <div className="flex justify-between items-center px-[24px]">
            <h3 className="text-[24px] font-medium text-[#154444]">$40</h3>
            <button className="text-[12px] font-medium text-white text-center w-[78px] py-[5.5px] bg-[#244D4D]">
              Buy Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Furniture;
