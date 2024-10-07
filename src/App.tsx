import AboutMe from "./Components/AboutMe";
import Header from "./Components/Header";
import BlurryGradient from "/blurry-gradient.svg";

function App() {
  return (
    <>
      <main className="w-full h-screen overflow-x-hidden overflow-y-auto relative">
        <Header />
        <img
          src={BlurryGradient}
          alt="blurry-gradient"
          loading="eager"
          width={300}
          className="absolute blur-3xl bottom-[-2rem]"
        />
        <AboutMe />
      </main>
    </>
  );
}

export default App;
