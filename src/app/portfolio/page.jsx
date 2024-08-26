import React from "react";
import Link from "next/link";

const page = () => {
  return (
    <section className="container portfolio">
      <h1 className="my-10 text-4xl font-bold">Choose a gallery</h1>
      <div className="flex gap-[50px] img-holder">
        <Link
          className="border-2 bg-[url('/images/illustration.png')] bg-cover border-[#bbb] rounded-md w-[300px] h-[400px] relative"
          href={"/portfolio/illustrations"}
        >
          <span className="absolute right-[10px] bottom-[10px] text-[40px] font-bold">
            Illustrations
          </span>
        </Link>
        <Link
          className="border-2 bg-[url('/images/websites.jpg')] bg-cover border-[#bbb] rounded-md w-[300px] h-[400px] relative"
          href={"/portfolio/websites"}
        >
          <span className="absolute right-[10px] bottom-[10px] text-[40px] font-bold">
            Websites
          </span>
        </Link>
        <Link
          className="border-2 bg-[url('/images/apps.jpg')] bg-cover border-[#bbb] rounded-md w-[300px] h-[400px] relative"
          href={"/portfolio/applications"}
        >
          <span className="absolute right-[10px] bottom-[10px] text-[40px] font-bold">
            Applications
          </span>
        </Link>
      </div>
    </section>
  );
};

export default page;
