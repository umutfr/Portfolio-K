import { useEffect, useState } from "react";

export default function ScrollProgressBar() {
  const [scrollWidth, setScrollWidth] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
        const docHeight = document.documentElement.scrollHeight - window.innerHeight;
        let scrollPercent = (scrollTop / docHeight) * 100;

        // sınırları kontrol et
        if(scrollPercent > 100) scrollPercent = 100;
        if(scrollPercent < 0) scrollPercent = 0;

setScrollWidth(scrollPercent)
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (

<div className="fixed top-0 left-0 h-1 w-full bg-black/20 z-50">
  <div
    className="h-1 bg-primary transition-all duration-300 ease-out relative"
    style={{ width: `${scrollWidth}%` }}
  >
    {/* Parlayan nokta */}
    <span
      className="absolute h-1 w-1 bg-white rounded-full shadow-[0_0_15px_5px_rgba(255,255,255,0.5)] animate-pulse"
      style={{
        top: "50%",          // dikey ortala
        left: "100%",        // iç div’in sağ ucuna
        transform: "translate(-50%, -50%)", // tam ortala
      }}
    />
  </div>
</div>





  );
}
