import { BiLogoFacebook } from "react-icons/bi";
import { BiLogoLinkedin } from "react-icons/bi";
import { AiOutlineGoogle } from "react-icons/ai";
import img from "../../assets/images/login/login.svg";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import axios from "axios";

const Login = () => {
  const { signInUser } = useContext(AuthContext);
  const navigate = useNavigate();

  const location = useLocation();

  const handleSignInUser = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);

    signInUser(email, password)
      .then((result) => {
        const loggedInUser = result.user;
        console.log(loggedInUser);
        const user = { email };

        //

        // get access token
        axios
          .post("http://localhost:5000/jwt", user, { withCredentials: true })
          .then((res) => {
            console.log(res.data);
            if (res.data.success) {
              navigate(location?.state ? location?.state : "/");
            }
          });
      })
      .catch((error) => console.log(error.message));
  };
  return (
    <div className="my-10">
      <div className="flex flex-col items-center justify-between lg:flex-row gap-10 ">
        <div className="w-full lg:w-1/2 flex items-center justify-center">
          <img src={img} alt="" />
        </div>
        <div className="w-full lg:w-1/2 border rounded-xl p-5 md:p-10 lg:p-16">
          <h2 className="text-4xl font-semibold text-center">login</h2>
          <form onSubmit={handleSignInUser}>
            <div className="mt-8">
              <label
                htmlFor="email"
                className="block mb-1 text-lg font-semibold"
              >
                Email
              </label>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Your Email"
                className="p-3 w-full border rounded-lg"
              />
            </div>
            <div className="my-5">
              <label
                htmlFor="password"
                className="block mb-1 text-lg font-semibold"
              >
                Password
              </label>
              <input
                type="password"
                name="password"
                id="password"
                placeholder="Your Password"
                className="p-3 w-full border rounded-lg"
              />
            </div>
            <div className="mt-8">
              <input
                type="submit"
                value="Sign In"
                className="w-full bg-[#FF3811] text-white text-xl font-semibold p-3 rounded-md"
              />
            </div>
          </form>
          <div className="mt-10">
            <h3 className="text-[#444] text-lg font-medium text-center">
              Or Sign In With
            </h3>
            <div className="flex justify-center items-center gap-4 mt-5">
              <button className=" p-3 bg-base-200 rounded-full">
                <BiLogoFacebook className="  text-blue-800 text-2xl" />
              </button>
              <button className=" p-3 bg-base-200 rounded-full">
                <BiLogoLinkedin className="  text-blue-600 text-2xl" />
              </button>
              <button className=" p-3 bg-base-200 rounded-full">
                <AiOutlineGoogle className="  text-orange-500 text-2xl" />
              </button>
            </div>
            <p className="text-lg text-center text-gray-500 mt-5">
              Do not have an account?{" "}
              <Link to={"/register"} className="text-[#FF3811] font-semibold">
                Sign Up{" "}
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
