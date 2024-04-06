import '../App.css';
import { Aboutpage } from '../components/Aboutpage';
import { Contactpage } from '../components/Contactpage';
import { Homepage } from '../components/Homepage';
import { Navbar } from '../components/Navbar';
import { Portfoliopage } from '../components/Portfoliopage';
import { useInView } from 'framer-motion';
import { useRef } from "react";

function Section({ children }) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });
  
    return (
      <section ref={ref}>
        <span
          style={{
            opacity: isInView ? 1 : 0,
            transition: "all 0.9s 0.3s"
          }}
        >
          {children}
        </span>
      </section>
    );
  }

export const Home = () => {

    return (
        <div className='App'>
            <Navbar />
            <Homepage title="homepage"/>
            <Section><Aboutpage title="aboutpage"/></Section>
            <Section><Portfoliopage title="portfoliopage"/></Section>
           <Section><Contactpage title="contactpage"/></Section>
        </div>
    )
}