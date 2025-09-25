import type { Metadata } from "next";
import { ChooseUs } from "./_components/choose-us";
import { Hero } from "./_components/hero";
import { NewCources } from "./_components/new-cources";

export const metadata: Metadata = {
  title: "الرئيسية | Coding Developer",
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <ChooseUs />
      <NewCources />
    </>
  );
}
