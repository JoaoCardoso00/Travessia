import { Banner } from "@/sections/home/banner";
import { Content } from "@/sections/home/content";
import { Footer } from "@/sections/home/footer";
import { Hero } from "@/sections/home/hero";
import { LogoCloud } from "@/sections/home/logos";
import { CallToAction } from "@/sections/home/cta";
import { Values } from "@/sections/home/values";

export default function Example() {
  return (
    <div className="bg-white isolate">
      <Hero />
      <Content />
      <Banner />
      <Values />
      <LogoCloud />
      <CallToAction />
      <Footer />
    </div>
  );
}
