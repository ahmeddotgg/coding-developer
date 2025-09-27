import type { Metadata } from "next";
import { ChooseUs } from "./_components/choose-us";
import { Faq } from "./_components/faq";
import { Gallery } from "./_components/gallery";
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
      <div className="bg-indigo-200/60 py-22">
        <div className="container space-y-16">
          <h2 className="text-center font-bold text-4xl">معرض الاكاديمية</h2>
          <div className="grid grid-cols-1 gap-2 lg:grid-cols-4 min-[400px]:grid-cols-2 min-[660px]:grid-cols-3">
            <Gallery />
          </div>
        </div>
      </div>
      <Faq />
    </>
  );
}
