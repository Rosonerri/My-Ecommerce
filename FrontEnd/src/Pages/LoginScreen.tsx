import { useState } from "react";
import { loginMerchant } from "../api/Api";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { loginUser } from "../global/state";

const LoginScreen = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");

  const onHandleSubmit = async (e: any) => {
    e.preventDefault();
    loginMerchant(email).then((res: any) => {
      if (res?.status === 201) {
        dispatch(loginUser(res));
        navigate("/cart");
      }
    });
  };
  return (
    <div className="w-full h-screen flex items-center justify-center">
      <div className="flex items-center justify-center w-[300px] border rounded-md">
        <form action="" onSubmit={onHandleSubmit}>
          <input
            type="text"
            placeholder="Enter Email"
            value={email}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
              setEmail(e.target.value);
            }}
            className="px-2 w-[300px] h-12 border rounded-md "
          />
          <button className="mt-6 bg-blue-950 text-white py-3 rounded-md w-[100%]">
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginScreen;
