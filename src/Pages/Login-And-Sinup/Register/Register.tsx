import { Controls, Player } from "@lottiefiles/react-lottie-player";
import "../../../Assests/Css_Assests_File/Login.css";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { FaEyeSlash, FaEye } from "react-icons/fa";
import { Link } from "react-router-dom";
import Star from "../../../Assests/Other_Assests_File/Star";
interface FormValues {
  email: string;
  password: string;
  name: string;
  confirmPassword: string;
  photo: string;
}
const Register = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<FormValues>();
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const onSubmit = (data: FormValues) => {
    console.log(data);
  };
  const handleGooglesinin = () => {};

  return (
    <div className="bg-black mt-6">
      <div className="hero min-h-screen relative">
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
          <div className="cards flex-shrink-0 w-full max-w-lg ">
            <h1 className="text-white text-5xl font-bold">Sign Up</h1>
            <form onSubmit={handleSubmit(onSubmit)} className="card-body">
              <div className="flex flex-col items-center gap-2">
                <div className="form-control w-full">
                  <input
                    type="text"
                    {...register("name", { required: true })}
                    placeholder="your name"
                    className="input input-bordered"
                  />
                </div>
                {errors.name?.type === "required" && (
                  <p className="text-red-500">name is required</p>
                )}
                <div className="form-control w-full">
                  <input
                    type="email"
                    {...register("email", { required: true })}
                    placeholder="your email"
                    className="input input-bordered"
                  />
                </div>
                {errors.email?.type === "required" && (
                  <p className="text-red-500">Email is required</p>
                )}
              </div>
              <div className="flex flex-col items-center gap-2">
                <div className="form-control w-full">
                  <div className="relative">
                    <input
                      type={showPassword ? "text" : "password"}
                      {...register("password", {
                        required: true,
                        minLength: 6,
                        maxLength: 20,
                        pattern:
                          /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])/,
                      })}
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
                </div>
                <div className="form-control w-full">
                  <div className="relative">
                    <input
                      type={showConfirmPassword ? "text" : "password"}
                      {...register("confirmPassword", {
                        required: true,
                        validate: (value) => value === watch("password"),
                      })}
                      placeholder="confirm-password"
                      className="input input-bordered w-full"
                    />
                    <button
                      type="button"
                      className="absolute top-1/2 right-2 transform -translate-y-1/2"
                      onClick={() =>
                        setShowConfirmPassword(!showConfirmPassword)
                      }
                    >
                      {showConfirmPassword ? <FaEyeSlash /> : <FaEye />}
                    </button>
                  </div>
                </div>
              </div>
              {errors.password?.type === "required" && (
                <p className="text-red-500">password is required</p>
              )}
              {errors.password?.type === "minLength" && (
                <p className="text-red-500">
                  password must be atlist 6 charectar
                </p>
              )}
              {errors.password?.type === "maxLength" && (
                <p className="text-red-500">
                  Password is smaller then 20 charectar
                </p>
              )}
              {errors.password?.type === "pattern" && (
                <p className="text-red-500">
                  password must be one uppercase one lower case one numbar and
                  one special cherecter
                </p>
              )}
              {errors["confirmPassword"]?.type === "required" && (
                <p className="text-red-500">Confirm password is required</p>
              )}
              {errors["confirmPassword"]?.type === "validate" && (
                <p className="text-red-500">
                  Password must match the previous password
                </p>
              )}
              <div className="form-control">
                <input
                  type="text"
                  {...register("photo", { required: true })}
                  placeholder="your photo url"
                  className="input input-bordered"
                />
              </div>
              {errors.photo?.type === "required" && (
                <p className="text-red-500">Photo URL is required</p>
              )}
              <div className="form-control mt-6">
                <button
                  type="submit"
                  className="flex text-center justify-center items-center px-6 py-3 bg-pink-500 text-white rounded-lg cursor-pointer"
                >
                  <p className="text-xl font-semibold">Sign Up</p>
                </button>
              </div>
            </form>
            <div className="flex items-center justify-center">
              Have an account on project pilot? Please
              <Link
                to="/login"
                className="text-blue-700 font-semibold relative left-1"
              >
                Sign in
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

export default Register;
