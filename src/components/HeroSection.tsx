import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, Users, BookOpen, Award } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";
import mosqueLearning from "@/assets/mosque-learning.jpg";
import quranOpen from "@/assets/pexels.jpeg";

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      image: heroBg,
      title: "جمعية تحفيظ القرآن الكريم",
      subtitle: "نورٌ يهدي الأمة",
      description: "انضم إلى رحلة روحانية مع أكبر جمعية لتحفيظ القرآن الكريم في المملكة",
      primaryButton: "انضم إلينا",
      secondaryButton: "تعرف على برامجنا"
    },
    {
      image: mosqueLearning,
      title: "التعلم في بيئة إسلامية",
      subtitle: "مع أفضل المحفظين",
      description: "نوفر بيئة تعليمية متميزة تجمع بين الأصالة والمعاصرة لتحفيظ كتاب الله",
      primaryButton: "ابدأ رحلتك",
      secondaryButton: "شاهد الفروع"
    },
    {
      image: quranOpen,
      title: "احفظ كتاب الله",
      subtitle: "بأحدث الطرق التعليمية",
      description: "برامج متنوعة تناسب جميع الأعمار مع متابعة شخصية ونظام تحفيزي فعال",
      primaryButton: "سجل الآن",
      secondaryButton: "استعرض البرامج"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [slides.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <section id="home" className="relative h-screen overflow-hidden">
      {/* Slider Container */}
      <div className="relative w-full h-full">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentSlide ? "opacity-100" : "opacity-0"
            }`}
          >
            {/* Background Image */}
            <div
              className="absolute inset-0 bg-cover bg-center bg-no-repeat"
              style={{ backgroundImage: `url(${slide.image})` }}
            >
              <div className="absolute inset-0 bg-primary/40"></div>
            </div>

            {/* Content */}
            <div className="relative z-10 flex items-center justify-center h-full">
              <div className="container mx-auto px-4 text-center text-white">
                <div className="max-w-4xl mx-auto">
                  <h1 className="text-5xl md:text-7xl font-bold font-amiri mb-4 slide-in-right">
                    {slide.title}
                  </h1>
                  <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-success slide-in-left">
                    {slide.subtitle}
                  </h2>
                  <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto opacity-90 fade-in-up">
                    {slide.description}
                  </p>
                  <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6 sm:space-x-reverse fade-in-up">
                    <Button size="lg" className="btn-success text-lg px-8 py-4">
                      {slide.primaryButton}
                    </Button>
                    <Button 
                      size="lg" 
                      variant="outline" 
                      className="text-lg px-8 py-4 border-white text-black hover:bg-white hover:text-primary"
                    >
                      {slide.secondaryButton}
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 z-20 bg-black/20 hover:bg-black/40 text-white p-3 rounded-full transition-all duration-300"
        aria-label="الشريحة السابقة"
      >
        <ChevronRight className="w-6 h-6" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 z-20 bg-black/20 hover:bg-black/40 text-white p-3 rounded-full transition-all duration-300"
        aria-label="الشريحة التالية"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>

      {/* Dots Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 flex space-x-3 space-x-reverse">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentSlide ? "bg-success scale-125" : "bg-white/50 hover:bg-white/75"
            }`}
            aria-label={`الانتقال للشريحة ${index + 1}`}
          />
        ))}
      </div>

      {/* Quick Stats Overlay */}
      <div className="absolute bottom-0 left-0 right-0 z-20 bg-gradient-to-t from-black/80 to-transparent p-8">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center text-white">
            <div className="flex items-center justify-center space-x-3 space-x-reverse">
              <Users className="w-8 h-8 text-success" />
              <div>
                <div className="text-2xl font-bold font-amiri">5000+</div>
                <div className="text-sm opacity-80">طالب وطالبة</div>
              </div>
            </div>
            <div className="flex items-center justify-center space-x-3 space-x-reverse">
              <BookOpen className="w-8 h-8 text-success" />
              <div>
                <div className="text-2xl font-bold font-amiri">200+</div>
                <div className="text-sm opacity-80">محفظ ومحفظة</div>
              </div>
            </div>
            <div className="flex items-center justify-center space-x-3 space-x-reverse">
              <Award className="w-8 h-8 text-success" />
              <div>
                <div className="text-2xl font-bold font-amiri">50+</div>
                <div className="text-sm opacity-80">فرع</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;