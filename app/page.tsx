import { CategoryMenu, Hero, Incentives, IntroducingSection, Newsletter, ProductsSection } from "@/components";

export default function Home() {
  return (
    <>
      <Hero />
      {/* <IntroducingSection /> */}
      {/* <Incentives /> */}
      <CategoryMenu />
      <Newsletter />
      <ProductsSection />
    </>
  );
}
