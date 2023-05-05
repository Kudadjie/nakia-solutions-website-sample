import { useState } from "react";
import ContactUs from "./components/interface/ContactUs";
import Form from "./components/interface/Form";
import Modal from "./components/layout/Modal";
import Footer from "./components/layout/Footer";
import Header from "./components/layout/Header";
import Hero from "./components/layout/Hero";
import GlobalStyle from "./globalStyles";
import Services_AboutUs from "./components/interface/Services_AboutUs";

const App = () => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  function contactHandler() {
    setIsModalOpen(true);
  }

  return (
    <>
      <GlobalStyle />
      {isModalOpen && (
        <Modal>
          <Form
            closeBtnHandler={() => {
              setIsModalOpen(false);
            }}
          />
        </Modal>
      )}
      <Header />
      <main>
        <Hero contactHandler={contactHandler} />
        <Services_AboutUs contactHandler={contactHandler} />
        <ContactUs />
      </main>
      <Footer />
    </>
  );
};

export default App;
