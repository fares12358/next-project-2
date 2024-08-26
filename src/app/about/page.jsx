import React from "react";
import Image from "next/image";
import Link from "next/link";
import bg from "/public/images/bg.png";
const page = () => {
  return (
    <section className="container h-full w-full">
      <div className=" w-full h-[300px] relative">
        <Image
          src={bg}
          fill={true}
          alt="not found"
          className="w-full object-cover h-full grayscale"
        />
        <div className="absolute bottom-5 left-5 p-4 text-white font-bold bg-[#53c28b]">
          <h1 className="text-3xl">Digital Storytellers</h1>
          <h2 className="text-xl">
            Handcrafting award winning digital experiences
          </h2>
        </div>
      </div>
      <div className=" font-bold flex gap-[30px]">
        <div className="flex-1  mt-10 flex flex-col gap-[40px]">
          <h1 className="text-3xl">Who Are We?</h1>
          <p className="text-md font-medium pr-40">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus
            quae dolor, optio voluptatibus magnam iure esse tempora beatae. A
            suscipit eos. Animi quibusdam cum omnis officiis voluptatum quo ea
            eveniet? Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Ducimus quae dolor, optio voluptatibus magnam iure esse tempora
            beatae, a suscipit eos. Animi quibusdam cum omnis officiis
            <br />
            <br />
            voluptatum quo ea eveniet? Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Ducimus quae dolor, optio voluptatibus magnam iure
            esse tempora beatae, a suscipit eos. Animi quibusdam cum omnis
            officiis voluptatum quo ea eveniet?
          </p>
        </div>
        <div className="flex-1  mt-10 flex flex-col gap-[40px] ">
          <h1 className="text-3xl">What We Do?</h1>
          <p className="text-md font-medium pr-40">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus
            quae dolor, optio voluptatibus magnam iure esse tempora beatae, a
            suscipit eos. Animi quibusdam cum omnis officiis voluptatum quo ea
            eveniet? Lorem ipsum dolor sit amet consectetur adipisicing elit. -
            Creative Illustrations
            <br />
            <br /> - Dynamic Websites
            <br />
            <br /> - Fast and Handy
            <br />
            <br /> - Mobile Apps
          </p>
          <Link
            href="/contact"
            className=" bg-[#53c28b] w-[100px] text-center text-white font-medium p-4 rounded-md"
          >
            Contact
          </Link>
        </div>
      </div>
    </section>
  );
};

export default page;
