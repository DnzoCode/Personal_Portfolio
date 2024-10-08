import AboutMe from "./Components/AboutMe";
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
        <AboutMe />
      </main>
    </>
  );
}

export default App;
