import { About } from "@/components/sections/About";
import { Collaboration } from "@/components/sections/Collaboration";
import { Contact } from "@/components/sections/Contact";
import { DamageReport } from "@/components/sections/DamageReport";
import { Departments } from "@/components/sections/Departments";
import { Extras } from "@/components/sections/Extras";
import { Faq } from "@/components/sections/Faq";
import { Hero } from "@/components/sections/Hero";
import { Problem } from "@/components/sections/Problem";
import { Solutions } from "@/components/sections/Solutions";

export default function HomePage() {
  return (
    <main id="main-content" tabIndex={-1}>
      <Hero />
      <Problem />
      <Departments />
      <Solutions />
      <DamageReport />
      <Extras />
      <Collaboration />
      <About />
      <Faq />
      <Contact />
    </main>
  );
}
