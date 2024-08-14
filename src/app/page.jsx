import Image from "next/image";
import imgDashboard from "../../public/illustration-dashboard.png"
import Footer from "@/components/footer";
import Form from "@/components/form";
import Tittle from "@/components/tittle";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center gap-10 h-dvh sm:h-full">
      <div className="bg-[url('../../public/logo.svg')] h-7 w-[90px] bg-no-repeat mt-10 sm:mt-20"></div>
      <div className="flex flex-col items-center gap-8 mb-5 sm:mb-10">
        <Tittle />
        <Form />
      </div>

      <Image src={imgDashboard} className="w-[327px] sm:w-[520px]" />

      <Footer />
    </main>
  );
}
