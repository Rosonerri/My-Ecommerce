// import react from "react";
// import img from "../assets/Tech in RealEstate2.jpg";
import { useParams } from "react-router-dom";
// import data from "../Api/data.json";
import useStore from "../Hooks/hooks";


const DetailPage = () => {
  const { imageId } = useParams();
  const { data: storeData } = useStore();

  const singleProduct = storeData?.find((product: any) => {
    return product.id === parseInt(imageId!);
  });

  return (
    <div className="">
      <div className="w-[100%] h-[100%] flex flex-wrap">
        <div className="border w-[500px] h-[500px] shadow-md">
          <img src={singleProduct.image} alt="" className="w-[100%] h-[100%]" />
        </div>
        <div className="w-[745px] h-[500px]">
          <div className="p-4 text-[30px] font-[600]">
            {singleProduct?.name}
          </div>
          <div className="p-4">{singleProduct?.description}</div>
          <div className=" flex justify-between p-4">
            <div className="flex text-[11px] w-[20%] justify-between">
              <div className="w-[100px]">
                <span className="font-[700]">
                  {singleProduct?.rating.count}
                </span>{" "}
                Likes
              </div>
              <div className="w-[100px]">
                <span className="font-[700]">7</span> reviews
              </div>
            </div>
            <div className="w-[20%] flex justify-end text-[11px]">
              <div>
                <span className="font-[700] mr-[5px]">10</span> Star rating
              </div>
            </div>
          </div>

          <div className=" flex justify-between p-4 mt-[100px]">
            <div className="flex text-[11px] w-[20%] justify-between">
              <div className="py-2 px-2 rounded-md font-[700] cursor-pointer hover:bg-[white] hover:text-[black] transition-all border text-[white] bg-black">
                Likes
              </div>
              <div className="py-2 px-2 rounded-md font-[700] cursor-pointer hover:bg-[white] hover:text-[black] transition-all border text-[white] bg-[#FF6C37]">
                Add to Cart
              </div>
            </div>
            <div className="w-[20%] flex justify-end text-[11px]">
              <div className="text-[13px]">
                <span className="font-[700] mr-[5px] text-[20px]">$</span>
                {singleProduct?.price}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailPage;
