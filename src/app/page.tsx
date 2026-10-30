import { About } from "@/components/sections/About";
import { Ai } from "@/components/sections/Ai";
import { Collaboration } from "@/components/sections/Collaboration";
import { Contact } from "@/components/sections/Contact";
import { DamageReport } from "@/components/sections/DamageReport";
import { Departments } from "@/components/sections/Departments";
import { Erp } from "@/components/sections/Erp";
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
      <Erp />
      <Ai />
      <Collaboration />
      <About />
      <Faq />
      <Contact />
    </main>
  );
}
