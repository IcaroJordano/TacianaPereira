import { useRef, useEffect, useState } from "react";
import Slide from '../components/Slide.jsx'
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";


// const Slide = ({ image, text }) => (
//   <div className="min-w-full flex-shrink-0 relative">
//     <img src={image} alt={text} className="w-full h-64 object-cover" />
//     <div className="absolute bottom-4 left-4 text-white text-xl font-bold">
//       {text}
//     </div>
//   </div>
// );

const SlideHome = () => {
  const slides = [
    {
      text: "t1",
      image:
        "https://static.wixstatic.com/media/e8274b_1a71ee70a733488bb13b54714aa1d489~mv2.jpg",
    },
    {
      text: "t2",
      image:
        "https://static.wixstatic.com/media/e8274b_1a71ee70a733488bb13b54714aa1d489~mv2.jpg",
    },
    {
      text: "t3",
      image:
        "https://static.wixstatic.com/media/e8274b_1a71ee70a733488bb13b54714aa1d489~mv2.jpg",
    },
    {
      text: "t4",
      image:
        "https://static.wixstatic.com/media/e8274b_1a71ee70a733488bb13b54714aa1d489~mv2.jpg",
    },
  ];

  const containerRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const scrollToIndex = (index) => {
    if (!containerRef.current) return;
    const container = containerRef.current;
    const width = container.offsetWidth;
    container.scrollTo({
      left: index * width,
      behavior: "smooth",
    });
    setActiveIndex(index);
  };

  const handleNext = () => {
    if (activeIndex < slides.length - 1) {
      scrollToIndex(activeIndex + 1);
    }
  };

  const handlePrev = () => {
    if (activeIndex > 0) {
      scrollToIndex(activeIndex - 1);
    }
  };

  const handleScroll = () => {
    if (!containerRef.current) return;
    const container = containerRef.current;
    const width = container.offsetWidth;
    const index = Math.round(container.scrollLeft / width);
    setActiveIndex(index);
  };

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;
    container.addEventListener("scroll", handleScroll);
    return () => container.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="relative w-full overflow-hidden">
      {/* Botões */}
      <button
        onClick={handlePrev}
        disabled={activeIndex === 0}
        className={`absolute z-10 left-4 top-1/2  -translate-y-1/2 bg-neutral-100/40 lg:bg-neutral-100 lg:text-black text-white px-4 py-4 rounded-3xl disabled:opacity-0`}
      >
        <MdKeyboardArrowLeft/>
      </button>
      <button
        onClick={handleNext}
        disabled={activeIndex === slides.length - 1}
        className={`absolute z-10 right-4 top-1/2 -translate-y-1/2 bg-neutral-100/40 lg:bg-neutral-100 lg:text-black text-white px-4 py-4 rounded-3xl disabled:opacity-0`}
      >
        <MdKeyboardArrowRight/>
        
      </button>

      {/* Slides */}
      <div
        ref={containerRef}
        className="flex my-8 overflow-x-auto scroll-smooth snap-x snap-mandatory"
        style={{ scrollSnapType: "x mandatory", scrollbarWidth: "none" }}
      >
        {slides.map((slide, i) => (
          <div key={i} className="w-full flex-shrink-0 snap-start">
            <Slide  image={slide.image} />
          </div>
        ))}
      </div>

      {/* Indicadores */}
      <div className="flex justify-center gap-2 mt-4 relative -top-12">
        {slides.map((_, i) => (
          <div
            key={i}
            className={`h-1 w-12 rounded-full transition-all ${
              i === activeIndex ? "bg-neutral-300" : "bg-neutral-500  "
            }`}
          />
        ))}
      </div>
    </section>
  );
};

export default SlideHome;
