import ReadingProgress from "@/components/ReadingProgress";
import Hero from "@/components/Hero";
import Problem from "@/components/Problem";
import Solution from "@/components/Solution";
import Diagnostic from "@/components/Diagnostic";
import Differentiation from "@/components/Differentiation";
import Guarantee from "@/components/Guarantee";
import FoundingMember from "@/components/FoundingMember";
import Timeline from "@/components/Timeline";
import FAQ from "@/components/FAQ";
import FinalCTA from "@/components/FinalCTA";

export default function Home() {
  return (
    <>
      <ReadingProgress />
      <Hero />
      <Problem />
      <Solution />
      <Diagnostic />
      <Differentiation />
      <Guarantee />
      <FoundingMember />
      <Timeline />
      <FAQ />
      <FinalCTA />
    </>
  );
}
