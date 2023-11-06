import { BsGlobe } from "react-icons/bs";
import paxful_logo from "../assets/paxlogo.png";
import paxful_auth from "../assets/paxauthy.jpg";

export default function Verification() {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 md:h-screen">
      <div className="px-6 md:px-12 py-12 bg-white">
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
        <h2 className="text-black font-bold text-3xl my-8">
          confirm your login
        </h2>

        <small className="block mb-6">
          open Google Authenticator/Authy or your Email and enter the code you
          see their <br /> below. <br />
          <span className="text-btnColor">trouble logging in?</span>
        </small>

        <form className="mt-6">
          <div className="mb-4 flex items-center gap-x-4">
            <input
              type="text"
              maxLength="1"
              pattern="\d"
              required
              className="outline-none border text-lg border-gray-300 rounded p-2 w-10 h-10 text-center block"
            />
            <input
              type="text"
              maxLength="1"
              pattern="\d"
              required
              className="outline-none border text-lg border-gray-300 rounded p-2 w-10 h-10 text-center block"
            />{" "}
            <input
              type="text"
              maxLength="1"
              pattern="\d"
              required
              className="outline-none text-lg border border-gray-300 rounded p-2 w-10 h-10 text-center block"
            />{" "}
            <input
              type="text"
              maxLength="1"
              pattern="\d"
              required
              className="outline-none text-lg border border-gray-300 rounded p-2 w-10 h-10 text-center block"
            />{" "}
            <input
              type="text"
              maxLength="1"
              pattern="\d"
              required
              className="outline-none text-lg border border-gray-300 rounded p-2 w-10 h-10 text-center block"
            />{" "}
            <input
              type="text"
              maxLength="1"
              pattern="\d"
              required
              className="outline-none text-lg border border-gray-300 rounded p-2 w-10 h-10 text-center block"
            />
          </div>

          <a href="#" className="text-btnColor">
            back to login
          </a>
        </form>
      </div>

      <div className="hidden md:block">
        <img
          className="object-cover w-full h-full"
          src={paxful_auth}
          alt="paxful_image"
        />
      </div>
    </section>
  );
}
