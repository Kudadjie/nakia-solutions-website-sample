import "./App.css";
import AboutUs from "./components/interface/AboutUs";
import ContactUs from "./components/interface/ContactUs";
import Services from "./components/interface/Services";
import Body from "./components/layout/Body";
import Footer from "./components/layout/Footer";
import Header from "./components/layout/Header";
import Hero from "./components/layout/Hero";
import GlobalStyle from "./globalStyles";

function App() {
  return (
    <>
      <GlobalStyle />
      <Header />
      <Hero />
      <Body>
        <Services />
        <AboutUs />
        <ContactUs />
      </Body>
      <Footer />
    </>
  );
}

export default App;
