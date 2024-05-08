import '../App.css';
import { Cvpage } from '../components/Cvpage';
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

export const CV = () => {
    return (
        <div>
            <Section><Cvpage /></Section>
        </div>
    )
}