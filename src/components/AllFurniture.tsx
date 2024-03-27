import Image from "next/image";

function AllFurniture() {
  return (
    <div>
      <h2 className="text-center text-[32px] mr-[70px] text-[#242424] font-bold mb-[20px]">
        All Furniture
      </h2>
      <ul className="flex gap-[100px] items-center justify-center text-[24px] font-medium text-[#919090] mb-[97px]">
        <li className="hover:text-[#154444] cursor-pointer">Shop By Room</li>
        <li className="hover:text-[#154444] cursor-pointer">
          Shop By Category
        </li>
        <li className="hover:text-[#154444] cursor-pointer">Shop By Style</li>
      </ul>
      <div className="mb-[151px] flex items-center gap-[135px]">
        <Image src={"/office.png"} alt="image" width={552} height={389} />
        <div className="grid grid-cols-2 gap-[30px]">
          <div className="text-center w-[222px] py-[15.5px] border border-[#D9DCE5]">
            <Image
              className="mb-[14px] ml-auto mr-auto"
              src={"/kreslo.svg"}
              alt="image"
              width={24}
              height={24}
            />
            <p className="text-[16px] text-[#808080] font-medium">
              Living Room
            </p>
          </div>
          <div className="text-center w-[222px] py-[15.5px] border border-[#D9DCE5]">
            <Image
              className="mb-[14px] ml-auto mr-auto"
              src={"/dining.svg"}
              alt="image"
              width={24}
              height={24}
            />
            <p className="text-[16px] text-[#808080] font-medium">Kitchen</p>
          </div>
          <div className="text-center w-[222px] py-[15.5px] border border-[#D9DCE5]">
            <Image
              className="mb-[14px] ml-auto mr-auto"
              src={"/bedroom.svg"}
              alt="image"
              width={24}
              height={24}
            />
            <p className="text-[16px] text-[#808080] font-medium">
              Dining Room
            </p>
          </div>
          <div className="text-center w-[222px] py-[15.5px] border border-[#D9DCE5]">
            <Image
              className="mb-[14px] ml-auto mr-auto"
              src={"/kitchen.svg"}
              alt="image"
              width={24}
              height={24}
            />
            <p className="text-[16px] text-[#808080] font-medium">Office</p>
          </div>
          <div className="text-center w-[222px] py-[15.5px] border border-[#D9DCE5]">
            <Image
              className="mb-[14px] ml-auto mr-auto"
              src={"/office.svg"}
              alt="image"
              width={24}
              height={24}
            />
            <p className="text-[16px] text-[#808080] font-medium">Bed Room</p>
          </div>
          <div className="text-center w-[222px] py-[15.5px] border border-[#D9DCE5]">
            <Image
              className="mb-[14px] ml-auto mr-auto"
              src={"/hall.svg"}
              alt="image"
              width={24}
              height={24}
            />
            <p className="text-[16px] text-[#808080] font-medium">Hallway</p>
          </div>
        </div>
      </div>
      <div className="mb-[140px] flex gap-[100px] items-center">
        <Image src={'/jovon.png'} alt="My home jovon" width={564} height={492} />
        <div>
            <h2 className="mb-[20px] pr-[100px] text-[32px] font-bold leading-[48px] text-[#242424]">Our customers are verry importan to us</h2>
            <p className="text-[20px] leading-[27px] text-[#383738] mb-[40px]">All of our furniture uses the best materials and choices for our customers.All of our furniture uses the best materials and choices for our customers.</p>
            <div className="flex gap-[10px] items-center">
                <Image src={'/jibon.svg'} alt="man img" width={50} height={50} />
                <div>
                    <p className="text-[16px] font-medium mb-[6.66px]">Mh Jibon</p>
                    <div className="flex items-center gap-[7px]">
                        <Image src={'/star.svg'} alt="star image" width={16} height={16}/>
                        <p className="text-[14px] font-medium">4.8</p>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
}

export default AllFurniture;
