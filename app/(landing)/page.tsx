import { ChooseUs } from "./_components/choose-us";
import { Footer } from "./_components/footer";
import { Hero } from "./_components/hero";
import { NewCources } from "./_components/new-cources";

export default function HomePage() {
  return (
    <>
      <Hero />
      <ChooseUs />
      <NewCources />
      <Footer />
    </>
  );
}
