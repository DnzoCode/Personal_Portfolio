import AboutMe from "./Components/AboutMe";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import BlurryGradient from "/blurry-gradient.svg";

function App() {
  return (
    <>
      <main className="h-screen relative antialiased">
        <Header />
        <img
          src={BlurryGradient}
          alt="blurry-gradient"
          loading="eager"
          width={300}
          className="absolute blur-3xl bottom-[-3rem]"
        />
        <img
          src={BlurryGradient}
          alt="blurry-gradient"
          loading="eager"
          width={300}
          className="absolute blur-3xl bottom-[-50rem] right-0"
        />
        <AboutMe />
        <Footer />
      </main>
    </>
  );
}

export default App;
