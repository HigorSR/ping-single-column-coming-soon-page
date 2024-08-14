import Image from "next/image";
import imgDashboard from "../../public/illustration-dashboard.png"
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center gap-10 h-dvh sm:h-full">
      <div className="bg-[url('../../public/logo.svg')] h-7 w-[90px] bg-no-repeat mt-10 sm:mt-20"></div>
      <div className="flex flex-col items-center gap-4 sm:gap-8 sm:mb-10">
        <div className="flex flex-col gap-3">
          <h1 className="text-2xl sm:text-4xl text-Gray">We are launching <span className="text-black font-bold">soon!</span></h1>
          <p className="text-sm text-center">Subscribe and get notified</p>
        </div>
        <form className="flex flex-col justify-between sm:flex-row gap-2 w-[327px] sm:w-[520px]">
          <input type="email" className=" border rounded-3xl px-9 py-2 sm:w-[327px]" placeholder="Your email address..." />
          <button className="bg-Blue text-white shadow-[0px_5px_10px_rgba(0,0,0,0)] shadow-Pale-Blue rounded-3xl px-9 py-2 sm:w-[185px]">Notify Me</button>
        </form>
      </div>

      <Image src={imgDashboard} className="w-[327px] sm:w-[520px]" />

      <footer className="flex flex-col gap-4 items-center justify-end grow mb-10 sm:mt-10">
        <div className="flex gap-3">
          <div className="border border-Blue p-1 rounded-full text-Blue">
            <FaFacebookF className="size-5 cursor-pointer" />
          </div>
          <div className="border border-Blue p-1 rounded-full text-Blue">
            <FaTwitter className="size-5 cursor-pointer" />
          </div>
          <div className="border border-Blue p-1 rounded-full text-Blue">
            <FaInstagram className="size-5 cursor-pointer" />
          </div>
        </div>
        <p className="text-Gray">&copy; Copyright Ping. All rights reserved.</p>
      </footer>
    </main>
  );
}
