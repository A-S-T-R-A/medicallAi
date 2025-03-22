import { CalendarSection } from "./components/calendar/CalendarSection";
import { Faq } from "./components/faq/Faq";
import { FormSection } from "./components/form/FormSection";
import { HomeSection } from "./components/home/HomeSection";
import { SeamlessIntegration } from "./components/integration/SeamlessIntegration";
import { IntroducingRemindico } from "./components/introducing/IntroducingRemindico";
// import { ProductsSection } from "./components/products/ProductsSection";
import { EasySetUpSection } from "./components/setUp/EasySetUpSection";

export function MainPage() {
  return (
    <main style={{ width: "100vw" }}>
      <HomeSection />
      <CalendarSection />
      <EasySetUpSection />
      <SeamlessIntegration />
      <FormSection />
      <Faq />
      <IntroducingRemindico />
    </main>
  );
}
