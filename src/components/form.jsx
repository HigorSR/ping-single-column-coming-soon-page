'use client'
import { useState } from "react";

export default function Form() {
  const [email, setEmail] = useState("");
  const [validEmail, setValidEmail] = useState(true);
  const [emailMessage, setEmailMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const handleValidation = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (emailRegex.test(email) == false) {
      setValidEmail(false);
      setEmailMessage("Please provide a valid email address");
    } else {
      setValidEmail(true);
      setEmailMessage("");
    }
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col items-start justify-between sm:flex-row gap-2 w-[327px] sm:w-[520px]">
      <div className="w-[327px]">
        <input value={email} type="email" placeholder="Your email address..."
          onChange={(e) => setEmail(e.target.value)}
          className={`${validEmail ? "border-Pale-Blue placeholder:text-Pale-Blue" : "border-Light-Red border"} border rounded-3xl px-9 py-2 w-[327px]`} />
        {
          <p className="text-Light-Red italic text-xs text-center sm:text-start sm:ml-9 pt-1 ">{emailMessage}</p>
        }
      </div>
      <button onClick={handleValidation} className="bg-Blue text-white shadow-[0px_5px_10px_rgba(0,0,0,0)] shadow-Pale-Blue rounded-3xl px-9 py-2 w-full sm:w-[185px]">Notify Me</button>
    </form>
  )
}