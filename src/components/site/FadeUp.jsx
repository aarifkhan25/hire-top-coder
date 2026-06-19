"use client"
import { useEffect, useRef } from "react";



export function FadeUp({ children, delay = 0,  Tag = "div", className = "", style }) {
  const ref = useRef(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            el.classList.add("is-visible");
            io.unobserve(el);
          }
        });
      },
      { threshold: 0.12 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);
 const Comp = Tag ;
  return (
    <Comp
      ref={ref}
      className={`fade-up ${className}`}
      style={{ transitionDelay: `${delay}s`, ...style }}
    >
      {children}
    </Comp>
 
  );
}
