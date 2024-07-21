import Image from "next/image";
import Work from "@/components/Work";
import TopSection from "@/components/TopSection";
import Blog from "@/components/Blog";
import Philanthropy from "@/components/Philanthropy";

export default function Home() {
  return (
    <>
      <main className="container">
        <TopSection />

        <Work />

        <Blog />

        <Philanthropy />
      </main>
    </>
  );
}
