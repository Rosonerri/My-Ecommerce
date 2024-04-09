// import React from 'react'
import img from "../../assets/Books.jpg";
import img2 from "../../assets/Next.jpeg";
import { MdDeleteOutline } from "react-icons/md";
import { FiShoppingCart } from "react-icons/fi";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { addCart, reduceCart, removeItem } from "../../global/state";
import { useState } from "react";

const Cart = (props: any) => {
  const storeData = useSelector((state: any) => state.cart);

  console.log("store", storeData);

  const dispatch = useDispatch();
  const value = storeData
    .map((el: any) => {
      return el.price * el.qty;
    })
    .reduce((a: number, b: number) => {
      return a + b;
    }, 0);

  return (
    <div className="w-full h-screen flex justify-center items-center">
      <div className="w-[97%] h-[100%]">
        <div className="border-b flex">
          <p className="text-[25px] p-3 font-[700]">Cart</p>
          <div className="mt-[5px] w-[50px] h-[50px] rounded-[50%] flex justify-center items-center bg-blue-950 cursor-pointer transition-all duration-500 hover:bg-slate-200 text-[white]">
            <FiShoppingCart className="text-[30px]" />
          </div>
        </div>
        <div className="grid grid-cols-2 xl:grid-cols-3 h-[50%] mt-9 gap-4 ">
          {storeData?.length ? (
            storeData.map((props: any) => (
              <div className="col-span-2 border rounded-md grid grid-cols-1">
                <div className=" row-span-1 grid grid-cols-1">
                  <div className="">
                    <div className=" w-full h-full grid grid-cols-4">
                      <div className="col-span-3 p-3">
                        <div className="w-full h-[60%] flex">
                          <div className="w-[200px] h-[90%] shadow-md">
                            <img
                              src={props.image}
                              alt=""
                              className="w-full h-full"
                            />
                          </div>
                          <div>
                            <div className="p-4">
                              <span className="font-[600] text-[19px]">
                                Description:
                              </span>{" "}
                              {props.description}
                            </div>
                            <div className="ml-4">
                              <span className="font-[600] text-[19px]">
                                Price:
                              </span>{" "}
                              ${props.price}
                            </div>
                            <div className="ml-4">
                              <span className="font-[600] text-[19px]">
                                Unit:
                              </span>{" "}
                              5unit Left
                            </div>
                            <div className="ml-4 w-[100px] h-8 mt-4">
                              <img src={img2} alt="" />
                            </div>
                          </div>
                        </div>
                        <div className="font-[700] flex border xl:w-[17%] w-[30%] rounded-md mt-10 hover:bg-blue-950 transition-all duration-300 cursor-pointer hover:text-[white]">
                          <div className="hover:text-[white]">
                            <MdDeleteOutline className="text-[23px] text-[crimson] mt-[2px] hover:text-[white]" />
                          </div>
                          <button
                            className="ml-4 text-[crimson] text-[20px] hover:text-[white]"
                            onClick={() => {
                              dispatch(removeItem(props));
                            }}
                          >
                            Remove
                          </button>
                        </div>
                      </div>
                      <div className="border-l">
                        <div>
                          <div className="rounded-md font-[700] justify-center flex p-1 text-[30px] mt-9">
                            ${props.price}
                          </div>
                          <div className="rounded-md font-[700] justify-center flex p-1">
                            <span className="rounded-md p-1 bg-[#FFF2E9] text-blue-950">
                              -45%
                            </span>
                          </div>
                          <div className="flex justify-center items-center mt-8">
                            <div
                              className="font-[700] border rounded-md p-4 text-[25px] shadow-md cursor-pointer text-blue-950"
                              onClick={() => {
                                dispatch(reduceCart(props));
                              }}
                            >
                              -
                            </div>
                            <div className="font-[700] p-4 text-[25px] cursor-pointer text-blue-950">
                              {props?.qty}
                            </div>
                            <div
                              className="font-[700] border rounded-md p-4 text-[25px] shadow-md cursor-pointer text-blue-950"
                              onClick={() => {
                                dispatch(addCart(props));
                              }}
                            >
                              +
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="text-center text-gray-500 py-4 font-bold">
              No items in the cart
            </div>
          )}
          <div className="rounded-md">
            <div className="w-[400px] h-[250px] shadow-md bg-white grid grid-rows-3">
              <div className="border p-5 text-[23px] text-blue-950">
                CART SUMMARY
              </div>
              <div className="border flex p-4 justify-between items-center">
                <div className="font-[700] text-[19px]">SubTotal</div>
                <div>
                  {" "}
                  <span className="font-[7  00] text-[19px] text-green-900">
                    (${value})
                  </span>
                </div>
              </div>
              <div className="border flex justify-center items-center">
                <button className=" text-[19px] border p-3 w-[90%] text-[white] font-[700] bg-blue-950 rounded-md">
                  CheckOut <span>(${value})</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
