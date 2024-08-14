export default function Form() {
  return (
    <form className="flex flex-col justify-between sm:flex-row gap-2 w-[327px] sm:w-[520px]">
      <input type="email" className=" border rounded-3xl px-9 py-2 sm:w-[327px]" placeholder="Your email address..." />
      <button className="bg-Blue text-white shadow-[0px_5px_10px_rgba(0,0,0,0)] shadow-Pale-Blue rounded-3xl px-9 py-2 sm:w-[185px]">Notify Me</button>
    </form>
  )
}