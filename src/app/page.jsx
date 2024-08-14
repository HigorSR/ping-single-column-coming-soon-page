import Image from "next/image";
import imgDashboard from "../../public/illustration-dashboard.png"
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

export default function Home() {
  return (
    <main>
      <img className="bg-[url('../../public/logo.svg')]" />
      <div>
        <h1>We are launching soon!</h1>
        <p>Subscribe and get notified</p>
        <form>
          <input type="email" />
          <button>Notify Me</button>
        </form>
      </div>

      <Image src={imgDashboard} />

      <footer>
        <div>
          <FaFacebookF />
          <FaTwitter />
          <FaInstagram />
        </div>
        <p>&copy; Copyright Ping. All rights reserved.</p>
      </footer>
    </main>
  );
}
