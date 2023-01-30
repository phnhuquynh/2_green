import Header from "./components/Header";
import Information from "./components/Information";
import Pricing from "./components/Pricing";
import Section from "./components/Section";

function App() {
  return (
    <div className="md:w-full ">
      <Header/>
      <Section/>
      <Pricing/>
      <Information/>
    </div>
  );
}

export default App;
