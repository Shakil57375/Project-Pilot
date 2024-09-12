import { Controls, Player } from "@lottiefiles/react-lottie-player";
import "../../../Assests/Css_Assests_File/Login.css";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { Link } from "react-router-dom";
import Star from "../../../Assests/Other_Assests_File/Star";
interface FormValues {
  email: string;
  password: string;
}

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>();
  const [showPassword, setShowPassword] = useState(false);

  const onSubmit = (data: FormValues) => {
    console.log(data);
  };
  const handleGooglesinin = () => {};
  return (
    <div className="bg-black">
      <div className="hero min-h-screen relative ">
        <Star />
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className=" ">
            <Player
              autoplay
              speed={1.5}
              loop
              src="https://assets1.lottiefiles.com/packages/lf20_jcikwtux.json"
              style={{ height: "full", width: "full" }}
            >
              <Controls
                buttons={[
                  "play",
                  "repeat",
                  "frame",
                  "debug",
                  "snapshot",
                  "background",
                ]}
              />
            </Player>
          </div>
          <div className="cards flex-shrink-0 w-full max-w-sm ">
          <h1 className="text-white text-5xl font-bold">Sign In</h1>
            <form onSubmit={handleSubmit(onSubmit)} className="card-body ">
              <div className="form-control">
                <input
                  type="email"
                  {...register("email", { required: true })}
                  placeholder="email"
                  className="input input-bordered"
                />
              </div>
              {errors.email?.type === "required" && (
                <p className="text-red-500">email is required</p>
              )}
              <div className="form-control">
                <div className="relative">
                  <input
                    type={showPassword ? "text" : "password"}
                    {...register("password", { required: true })}
                    placeholder="password"
                    className="input input-bordered  w-full"
                  />
                  <button
                    type="button"
                    className="absolute top-1/2 right-2 transform -translate-y-1/2"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? <FaEyeSlash /> : <FaEye />}
                  </button>
                </div>
                {errors.password?.type === "required" && (
                  <p className="text-red-500">password is required</p>
                )}
              </div>

              <div className="form-control mt-6">
                <button
                  type="submit"
                  className="flex text-center justify-center items-center px-6 py-3 bg-pink-500 text-white rounded-lg cursor-pointer"
                >
                  <p className="text-xl font-semibold">Login</p>
                </button>
              </div>
            </form>
            <div className="flex items-center justify-center">
              New to the project pilot? Please
              <Link
                to="/singUp"
                className="text-blue-700 font-semibold relative left-1"
              >
                Register
              </Link>
            </div>
            <div className="divider">OR</div>
            <div className="mb-3">
              <img
                onClick={handleGooglesinin}
                className=" social-button cursor-pointer"
                src="https://i.ibb.co/gSTHXZJ/google-btn.png"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
