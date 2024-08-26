import React from "react";
import Image from "next/image";
import contact from "/public/images/contact.png";
const page = () => {
  return (
    <section className="container w-full h-full">
      <h1 className="text-6xl font-bold mb-20 mt-10 text-center">
        let's Keep in Touch
      </h1>
      <div className="flex gap-[100px] items-center">
        <div className="flex-1 relative h-[500px]">
          <Image
            src={contact}
            alt="not found"
            className=" max-w-full max-h-full object-contain
            animate-move_slow"
          />
        </div>
        <form action="" className="flex-1 flex flex-col gap-5 ">
          <input
            type="text"
            placeholder="name"
            className="p-5 bg-transparent outline-none text-[#bbb]  border-2 border-[#bbb] text-lg font bold"
          />
          <input
            type="text"
            placeholder="email"
            className="p-5 bg-transparent outline-none text-[#bbb]  border-2 border-[#bbb] text-lg font bold"
          />
          <textarea
            cols={30}
            rows={10}
            placeholder="message"
            className="p-5 bg-transparent outline-none text-[#bbb] border-2 border-[#bbb] text-lg font bold"
          />
          <button className="px-5 py-2 bg-[#53c28b] text-black font-bold text-xl w-[100px]">
            send
          </button>
        </form>
      </div>
    </section>
  );
};

export default page;
