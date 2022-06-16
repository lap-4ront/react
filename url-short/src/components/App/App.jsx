import { CallToAction } from "components/CallToAction";
import { Features } from "components/Features";
import { Footer } from "components/Footer";
import { Form } from "components/Form";
import { Header } from "components/Header";
import { Hero } from "components/Hero";
import { Shortens } from "components/Shortens";

function App() {
  return (
    <>
      <Header />
      <Hero />
      <Form />
      <Shortens />
      <Features />
      <CallToAction />
      <Footer />
    </>
  );
}

export { App };
