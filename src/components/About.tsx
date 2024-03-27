import Image from "next/image"

function About() {
  return (
    <div className="flex gap-[100px] tablet:flex-col-reverse tablet:items-start items-center mb-[140px] tablet:gap-[40px] phone:mb-[40px]">
        <Image className="w-full" src={'/home.png'} alt="image.png" width={631} height={612} />
    <div className="text-[#244D4D]">
        <h3 className="font-bold text-[32px] leading-[40px] mb-[20px] pt-[46.5px] phone:text-[24px] phone:font-semibold phone:mb-[12px]">About Us</h3>
        <p className="text-[#444] text-[20px] leading-[25px] w-[466px] mb-[40px] phone:text-[12px] phone:leading-[19px] phone:w-[322px] phone:mb-[30px]">All of our furniture uses the best materials and choices for our customers.All of our furniture uses the best materials</p>
        <div className="flex gap-[28px] items-start mb-[30px] phone:mb-[20px] phone:gap-[16px]">
            <Image className="phone:w-[28px] phone:[28px]" src={'/quality.svg'} alt="image.png" width={50} height={50}  />
            <div>
                <h4 className="font-bold text-[20px] leading-[26px] mb-[14px] phone:text-[14px] phone:font-semibold phone:mb-[4px]">Best Quality</h4>
                <p className="w-[306px] text-[18px] leading-[26px] text-[#383738] phone:text-[10px] phone:leading-[15px] phone:w-[171px]">All of our furniture uses the best materials and choices</p>
            </div>
        </div>
        <div className="flex gap-[28px] items-start mb-[30px] phone:mb-[20px] phone:gap-[16px]">
            <Image className="phone:w-[28px] phone:[28px]" src={'/prcnt.svg'} alt="image.png" width={50} height={50}  />
            <div>
                <h4 className="font-bold text-[20px] leading-[26px] mb-[14px] phone:text-[14px] phone:font-semibold phone:mb-[4px]">100% Secure</h4>
                <p className="w-[306px] text-[18px] leading-[26px] text-[#383738] phone:text-[10px] phone:leading-[15px] phone:w-[171px]">All of our furniture uses the best materials and choices</p>
            </div>
        </div>
        <div className="flex gap-[28px] items-start mb-[30px] phone:mb-[20px] phone:gap-[16px]">
            <Image className="phone:w-[28px] phone:[28px]" src={'/free.svg'} alt="image.png" width={50} height={50}  />
            <div>
                <h4 className="font-bold text-[20px] leading-[26px] mb-[14px] phone:text-[14px] phone:font-semibold phone:mb-[4px]">Free Shpping</h4>
                <p className="w-[306px] text-[18px] leading-[26px] text-[#383738] phone:text-[10px] phone:leading-[15px] phone:w-[171px]">All of our furniture uses the best materials and choices</p>
            </div>
        </div>
    </div>
    </div>
  )
}

export default About