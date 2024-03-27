import Image from "next/image"

function Compnay() {
  return (
    <div className="mb-[140px] tablet:mb-[100px]">
        <h3 className="font-bold text-[#244D4D] text-[32px] mb-[40px] text-center leading-[41px] phone:text-[18px] phone:mb-[24px]">Trusted by 20,000+ companies</h3>
        <div className="flex gap-x-[100px] items-center tablet:gap-[25px] phone:gap-x-[25px]">
      <Image className="phone:w-[31px] phone:h-[24px]" src={"/mastercard.svg"} alt="cite-logo" width={66} height={51} />
      <Image className="phone:w-[79px] phone:h-[24px]" src={"/air.svg"} alt="cite-logo" width={125} height={39} />
      <Image className="phone:w-[57px] phone:h-[20px]" src={"/uber.svg"} alt="cite-logo" width={97} height={34} />
      <Image className="phone:w-[70px] phone:h-[24px]" src={"/pay.svg"} alt="cite-logo" width={106} height={37} />
      <Image className="phone:hidden" src={"/visa.svg"} alt="cite-logo" width={89} height={32} />
      <Image className="phone:hidden" src={"/stripe.svg"} alt="cite-logo" width={96} height={40} />
        </div>
    </div>
  )
}

export default Compnay