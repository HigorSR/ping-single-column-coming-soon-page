import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

export default function Footer() {
  return (
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
  )
}