import "./App.css";
import Services from "./components/interface/Services";
import Body from "./components/layout/Body";
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
      </Body>
    </>
  );
}

export default App;
