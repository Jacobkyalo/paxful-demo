import { Link } from "react-router-dom";
import paxful_logo from "../assets/paxlogo.png";

export default function Home() {
  return (
    <header className="container py-6 flex items-center justify-between">
      <img src={paxful_logo} alt="paxful_logo" />
      <nav>
        <ul className="flex items-center gap-x-4">
          <li>
            <Link to="/login">Login</Link>
          </li>
          <li>
            <Link to="/verify">Verify</Link>
          </li>
          <li>
            <Link to="/confirm">Confirm</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
