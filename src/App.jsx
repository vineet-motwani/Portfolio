import { BrowserRouter } from "react-router-dom";
import { useMediaQuery } from "@uidotdev/usehooks";

import { About, Contact, Experience, Hero, Navbar, Tech, Works, StarsCanvas, SocialIcons } from "./components";

const App = () => {
  const isLaptopOrComputer = useMediaQuery('(min-width: 1260px)');
  return (
    <BrowserRouter>
      <div className='relative z-0 bg-primary'>
        <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center'>
          <Navbar />
          <Hero />
        </div>
        {isLaptopOrComputer && <SocialIcons />}
        <About />
        <Experience />
        <Tech />
        <Works />
        <div className='relative z-0'>
          <Contact />
          <StarsCanvas />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
