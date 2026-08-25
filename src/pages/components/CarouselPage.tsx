import { useEffect, useState } from "react";

type Props = {};

const slides = [
  {
    id: 1,
    title: "Build Better Projects",
    description: "Create modern and beautiful React applications.",
  },
  {
    id: 2,
    title: "Learn React",
    description: "Build reusable components and powerful user interfaces.",
  },
  {
    id: 3,
    title: "Master Tailwind CSS",
    description: "Create responsive designs quickly and efficiently.",
  },
];

function Carousel({}: Props) {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const previousSlide = () => {
    setCurrentSlide(
      (prev) => (prev - 1 + slides.length) % slides.length
    );
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen w-full bg-gray-50 px-6 py-16">
      <div className="mx-auto max-w-5xl">

        {/* Heading */}
        <div className="mb-10">
          <h1 className="text-4xl font-bold text-gray-900">
            Carousel
          </h1>

          <p>A Carousel is a UI component that displays multiple pieces of content one at a time and allows the user to move between them using Next/Previous buttons, indicators, or automatic sliding.</p>
          <p className="mt-2 text-gray-500">
            Simple React carousel component.
          </p>
        </div>

        {/* Carousel Container */}
        <div className="relative overflow-hidden rounded-2xl bg-white shadow-lg">

          {/* Slides */}
          <div className="relative h-[400px]">

            {slides.map((slide, index) => (
              <div
                key={slide.id}
                className={`
                  absolute inset-0
                  flex items-center justify-center
                  px-12 text-center
                  transition-opacity duration-500
                  ${
                    index === currentSlide
                      ? "visible opacity-100"
                      : "invisible opacity-0"
                  }
                `}
              >
                <div className="max-w-2xl">

                  <span className="inline-block rounded-full bg-blue-100 px-4 py-1 text-sm font-medium text-blue-600">
                    Slide {index + 1}
                  </span>

                  <h2 className="mt-5 text-4xl font-bold text-gray-900">
                    {slide.title}
                  </h2>

                  <p className="mt-4 text-lg text-gray-500">
                    {slide.description}
                  </p>

                  <button
                    className="
                      mt-8
                      rounded-lg
                      bg-blue-600
                      px-6
                      py-3
                      font-medium
                      text-white
                      transition
                      hover:bg-blue-700
                    "
                  >
                    Get Started
                  </button>

                </div>
              </div>
            ))}

          </div>

          {/* Previous Button */}
          <button
            type="button"
            onClick={previousSlide}
            aria-label="Previous slide"
            className="
              absolute
              left-4
              top-1/2
              flex
              h-10
              w-10
              -translate-y-1/2
              items-center
              justify-center
              rounded-full
              bg-white
              text-xl
              text-gray-700
              shadow-md
              transition
              hover:bg-gray-100
            "
          >
            ←
          </button>

          {/* Next Button */}
          <button
            type="button"
            onClick={nextSlide}
            aria-label="Next slide"
            className="
              absolute
              right-4
              top-1/2
              flex
              h-10
              w-10
              -translate-y-1/2
              items-center
              justify-center
              rounded-full
              bg-white
              text-xl
              text-gray-700
              shadow-md
              transition
              hover:bg-gray-100
            "
          >
            →
          </button>

          {/* Indicators */}
          <div className="absolute bottom-5 left-1/2 flex -translate-x-1/2 gap-2">
            {slides.map((slide, index) => (
              <button
                key={slide.id}
                type="button"
                onClick={() => setCurrentSlide(index)}
                aria-label={`Go to slide ${index + 1}`}
                className={`
                  h-2 rounded-full transition-all duration-300
                  ${
                    index === currentSlide
                      ? "w-8 bg-blue-600"
                      : "w-2 bg-gray-300 hover:bg-gray-400"
                  }
                `}
              />
            ))}
          </div>

        </div>
      </div>
    </div>
  );
}

export default Carousel;