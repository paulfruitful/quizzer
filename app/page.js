import Image from "next/image";
import Hero from "./_components/Hero";

export default function Home() {
  return (
    <div  className="grid  items-center justify-items-center min-h-screen p-8 pb-20  bg-gradient-to-r from-purple-700  to-blue-400 lg:to-blue-600">
    <Hero/>
    </div>
  );
}
