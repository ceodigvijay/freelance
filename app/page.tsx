"use client";
import { CircleDotDashed } from "lucide-react";
import Image from "next/image";

export default function Home() {
  return (
    <main className="">
      <nav className="flex flex-row justify-between items-center p-4 mb-4">
        <div className="flex gap-2 font-medium items-center text-lg">
          <CircleDotDashed className="animate-spin w-8 h-8" />
          <span>Freelancer</span>
        </div>
        <div className="flex flex-row items-center gap-4">
          {["Home", "Services", "Our Work"].map((i, index) => (
            <div key={i} className="flex items-center gap-4">
              <button key={i}>{i}</button>
              {index !== 2 && <div style={{ width: "2px" }} className="h-5 bg-gray-600"></div>}
            </div>
          ))}
        </div>
        <button className="bg-gray-900 text-white rounded px-6 py-2 text-base font-medium">
          Get in Touch
        </button>
      </nav>
      <header className="grid grid-cols-12">
        <div className="col-span-5"></div>

        <div className="col-span-7 relative bg-img">
          <Image src={"/header.svg"} width={600} height={600} alt="Header Image" className="" />
        </div>
      </header>
    </main>
  );
}
