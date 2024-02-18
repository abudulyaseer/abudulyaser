import Image from "next/image";
import Navbar from "../app/components/navbar";
import Hero from "../app/components/hero";
export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <main className="flex min-h-screen flex-col items-center justify-between px-24">
        <div className="top-16">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum in
            delectus natus eaque sapiente dolores modi aliquid itaque tempora
            asperiores dolorem ipsam veritatis quibusdam eveniet aspernatur
            minus, molestiae fugiat laudantium.
          </p>
        </div>
      </main>
    </>
  );
}
