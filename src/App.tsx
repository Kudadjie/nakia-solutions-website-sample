import { useState } from "react";
import AboutUs from "./components/interface/Customers";
import ContactUs from "./components/interface/ContactUs";
import Form from "./components/interface/Form";
import Modal from "./components/layout/Modal";
import Footer from "./components/layout/Footer";
import Header from "./components/layout/Header";
import Hero from "./components/layout/Hero";
import GlobalStyle from "./globalStyles";
import Services_AboutUs from "./components/interface/Services&AboutUs";

//TODO - PopUp Modal, Desktop and Tablet Design, Final Testing, Deployment
function App() {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  function contactHandler() {
    setIsModalOpen(true);
  }

  function closeModal() {
    setIsModalOpen(false);
  }
  return (
    <>
      <GlobalStyle />
      {isModalOpen && (
        <Modal>
          <Form closeBtnHandler={closeModal} />
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
}

export default App;
