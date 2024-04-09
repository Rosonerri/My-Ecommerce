import { useDispatch } from "react-redux";
import  { addCart } from "../global/state";
import useStore from "../Hooks/hooks";
import { Link } from "react-router-dom";
// import img from "../assets/react.svg"

const HomeScreen = () => {
  const dispatch = useDispatch();
  const { data: storeData } = useStore();

  // const data = Array.from({ length: 10 });
  return (
    <div className="w-full flex h-screen justify-center items-center">
      <div className="">
        <main className="grid xl:grid-cols-5 w-full lg:grid-cols-4 md:grid-cols-3 grid-cols-2 gap-3 h-screen">
          {storeData?.map((props: any) => (
            <section key={props._id} className="p-4 w-[350px] h-[550px]">
              <Link to={`/detail/${props.id}`}>
                <img
                  src={props.image}
                  alt=""
                  className="w-[320px] h-[350px] rounded-md"
                />
              </Link>
              <div className="px-2 mt-2">
                <p className="font-[700] text-blue-950">Name: {props.name}</p>
                <p className="font-[700] text-[Green]">Price: ${props.price}</p>
                <p className="font-[700] text-blue-950]">
                  Description: {props.description}{" "}
                </p>

                <button
                  className="mt-4 bg-black text-white text-[16px] font-[700] px-4 py-2 rounded-md mb-1 hover:bg-white transition-all duration-500 hover:text-black"
                  onClick={() => {
                    dispatch(addCart(props));
                  }}
                >
                  Add To Cart
                </button>
              </div>
            </section>
          ))}
        </main>
      </div>
    </div>
  );
};

export default HomeScreen;
