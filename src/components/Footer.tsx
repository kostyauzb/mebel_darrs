import Image from "next/image"

function Footer() {
  return (
    <div className="bg-[#305F64] pt-[100px] pb-[20px] w-full">
      <div className="container flex gap-[157px]">
  <div>
  <h2 className="text-[24px] text-white font-bold mb-[24px]">DudeShape</h2>
    <p className="w-[328px] text-[18px] leading-[26px] text-white mb-[40px]">Lorem ipsum dolor sit amet, conse
ctetur adipiscing elit, sed eiusmod tempor incididunt ut labore .</p>
    <h3 className="text-white text-[20px] font-bold mb-[20px]">Follow Us :</h3>
    <div className="flex items-center gap-[15px] mb-[40px]">
      <Image src={'/f.svg'} alt="" width={20} height={20} /> 
      <Image src={'/t.svg'} alt="" width={20} height={20} /> 
      <Image src={'/i.svg'} alt="" width={20} height={20} /> 
      <Image src={'/y.svg'} alt="" width={20} height={20} /> 
    </div>
  </div>
    <div className="text-white mr-[43px]">
     <h3 className="text-[20px] font-bold w-[70px]">Take a tour</h3>
    <ul className="text-[18px] text-white flex flex-col gap-[16px] opacity-80">
      <li>Features</li>
      <li>Pricing</li>
      <li>Product</li>
      <li>Support</li>
    </ul>
    </div>
    <div className="text-white">
     <h3 className="text-[20px] font-bold mb-[24px]">Our company</h3>
    <ul className="text-[18px] text-white flex flex-col gap-[16px] opacity-80">
      <li>About Us</li>
      <li>Blog</li>
      <li>Media</li>
      <li>Contact Us</li>
    </ul>
    </div>
    <div className="text-white">
    <h3 className="text-[20px] font-bold mb-[24px]">Subscribe</h3>
    <p className="text-[18px] text-white opacity-80 mb-[40px]">Subscribe to get the latest news from us</p>
    <input className="w-full text-[16px] text-[#859395] max-w-[253px] py-[14px] absolute pl-[22px]" type="text" placeholder="Email Address"/>
    <Image className="relative left-[210px] top-[10px]" src={'/right.svg'} alt="" width={28}  height={28}/>
    </div>
      </div>
      <hr className="w-full bg-[#407980] h-[1px] opacity-70 mb-[20px]" />
      <p className="text-center text-[18px] text-white">Copyright @ 2021. Crafted with love.</p>
    </div>
  )
}

export default Footer