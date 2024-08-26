import Image from "next/image";
import hero from "/public/images/hero.png";
export default function Home() {
  return (
    <section className=" flex  items-center gap-7">
      <div className="flex-1 gap-5 px-10 flex flex-col items-start ">
        <h1 className="text-[72px] liner_color font-bold ">Better design for your digital products.</h1>
        <p className="text-[24px] font-[300]">
          Turning your Idea into Reality. We bring together the teams from the
          global tech industry.
        </p>
        <button className="px-5 py-2 text-black font-bold cursor-pointer bg-[#53c28b] border-none rounded-sm">See Our Works</button>
      </div>
      <div className=" flex-1 gap-5 p-10 flex items-center justify-center">
        <Image src={hero} alt="not found" className="w-[80%]  object-contain animate-move_slow" />
      </div>
    </section>
  );
}
