import About from "@/components/About";
import Card from "@/components/Card";
import TopSection from "@/components/TopSection";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <main className="container">
        <TopSection />

        <About />

        <div className="work bg-red-500">
          <div className="design grid grid-cols-4 gap-4">
            <Card />
            <Card />
            <Card />
          </div>
        </div>

        <div className="Blog">
          <a href="/Blog">
            <div className="design">
              <li>Blog</li>
            </div>
          </a>
        </div>

        <div className="Philanthropy and interests">
          <div className="design">content</div>
        </div>
      </main>
    </>
  );
}
