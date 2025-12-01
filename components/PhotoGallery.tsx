import React, { useState, useEffect, useCallback } from 'react';
import { ChevronLeft, ChevronRight, Maximize2, X } from 'lucide-react';

interface Slide {
  src: string;
  caption: string;
  color: string;
}

const slides: Slide[] = [
  {
    src: 'https://ik.imagekit.io/shriumiyashankar/1.jpg', 
    caption: 'Investiture Ceremony of Student Council', 
    color: 'cc0000'
  },
  {
    src: 'https://ik.imagekit.io/shriumiyashankar/2.jpg', 
    caption: 'Traffic Awareness Activity by Hon. Agarkar Sir, ACP (Traffic) Nagpur City.', 
    color: '004d99'
  },
  {
    src: 'https://ik.imagekit.io/shriumiyashankar/3.jpeg',
    caption: 'Inter-school Drawing Competition: Yoga for Health and Mental Peace.',
    color: 'ffcc00' 
  },
  {
    src: 'https://ik.imagekit.io/shriumiyashankar/4.jpeg',
    caption: 'Inter-school Drawing Competition: Remembering Shri Shantilal Badani.',
    color: '007bff'
  }
];

const PhotoGallery: React.FC = () => {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const [isFading, setIsFading] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const nextSlide = useCallback(() => {
    setIsFading(true);
    setTimeout(() => {
      setCurrentSlideIndex((prev) => (prev + 1) % slides.length);
      setIsFading(false);
    }, 300); // Wait for fade out
  }, []);

  const prevSlide = useCallback(() => {
    setIsFading(true);
    setTimeout(() => {
      setCurrentSlideIndex((prev) => (prev - 1 + slides.length) % slides.length);
      setIsFading(false);
    }, 300);
  }, []);

  const goToSlide = (index: number) => {
    if (index === currentSlideIndex) return;
    setIsFading(true);
    setTimeout(() => {
      setCurrentSlideIndex(index);
      setIsFading(false);
    }, 300);
  };

  useEffect(() => {
    if (isModalOpen) return; // Pause auto-slide when modal is open
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, [nextSlide, isModalOpen]);

  // Handle keyboard navigation for modal
  useEffect(() => {
    if (!isModalOpen) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setIsModalOpen(false);
      if (e.key === 'ArrowRight') nextSlide();
      if (e.key === 'ArrowLeft') prevSlide();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isModalOpen, nextSlide, prevSlide]);

  const currentSlide = slides[currentSlideIndex];

  return (
    <section id="photo-gallery" className="py-12 bg-gray-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-blue-800 mb-8">Glimpses of Shri UNHS</h2>
        
        <div id="slider-container" className="relative w-full overflow-hidden rounded-xl shadow-2xl aspect-video bg-gray-200 group">
          {/* Clickable Image Area */}
          <div 
            className="relative w-full h-full cursor-pointer"
            onClick={() => setIsModalOpen(true)}
          >
            <img 
              src={currentSlide.src} 
              alt={currentSlide.caption} 
              className={`w-full h-full object-cover transition-opacity duration-300 ease-in-out ${isFading ? 'opacity-0' : 'opacity-100'}`}
              onError={(e) => {
                e.currentTarget.src = `https://placehold.co/1200x675/${currentSlide.color}/ffffff?text=Image+Load+Failed`;
              }}
            />
            {/* Hover Overlay Icon */}
            <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300">
                <Maximize2 className="text-white opacity-0 group-hover:opacity-100 w-12 h-12 drop-shadow-lg transition-all duration-300 transform scale-75 group-hover:scale-100" />
            </div>
          </div>
          
          {/* Caption Overlay */}
          <div className="absolute bottom-0 left-0 w-full bg-black bg-opacity-60 p-4 text-white pointer-events-none">
            <p className="text-base sm:text-lg font-semibold text-center">{currentSlide.caption}</p>
          </div>

          {/* Navigation Buttons */}
          <button 
            onClick={(e) => { e.stopPropagation(); prevSlide(); }} 
            className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-black bg-opacity-40 p-3 rounded-full text-white hover:bg-opacity-70 transition duration-300 focus:outline-none focus:ring-2 focus:ring-white z-10"
            aria-label="Previous slide"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button 
            onClick={(e) => { e.stopPropagation(); nextSlide(); }} 
            className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-black bg-opacity-40 p-3 rounded-full text-white hover:bg-opacity-70 transition duration-300 focus:outline-none focus:ring-2 focus:ring-white z-10"
            aria-label="Next slide"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>

        {/* Thumbnails */}
        <div className="flex justify-center mt-6 space-x-3 overflow-x-auto py-2 px-2">
            {slides.map((slide, index) => (
                <button
                    key={index}
                    onClick={() => goToSlide(index)}
                    className={`relative flex-shrink-0 w-20 h-14 sm:w-28 sm:h-20 rounded-lg overflow-hidden border-2 transition-all duration-300 ${
                        index === currentSlideIndex 
                        ? 'border-blue-600 shadow-lg scale-105 opacity-100' 
                        : 'border-transparent opacity-60 hover:opacity-100 hover:scale-105'
                    }`}
                >
                    <img src={slide.src} alt={`Thumbnail ${index + 1}`} className="w-full h-full object-cover" />
                </button>
            ))}
        </div>

        {/* Modal Overlay */}
        {isModalOpen && (
            <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black bg-opacity-95 p-4 backdrop-blur-sm animate-fade-in" onClick={() => setIsModalOpen(false)}>
                <button 
                    onClick={() => setIsModalOpen(false)} 
                    className="absolute top-6 right-6 text-white text-opacity-70 hover:text-opacity-100 hover:bg-white/10 p-2 rounded-full transition-all duration-200 z-[110]"
                >
                    <X className="w-8 h-8" />
                </button>

                <div className="relative w-full max-w-6xl flex flex-col items-center" onClick={e => e.stopPropagation()}>
                    <div className="relative">
                         <img 
                            src={currentSlide.src} 
                            alt={currentSlide.caption}
                            className={`max-h-[80vh] w-auto max-w-full object-contain rounded-lg shadow-2xl transition-opacity duration-300 ${isFading ? 'opacity-50' : 'opacity-100'}`}
                        />
                         {/* Modal Navigation Buttons (Desktop) */}
                         <button 
                            onClick={(e) => { e.stopPropagation(); prevSlide(); }}
                            className="absolute left-[-60px] top-1/2 transform -translate-y-1/2 text-white hover:text-blue-300 transition-colors p-2 hidden md:block"
                        >
                            <ChevronLeft className="w-12 h-12" />
                        </button>
                        <button 
                            onClick={(e) => { e.stopPropagation(); nextSlide(); }}
                            className="absolute right-[-60px] top-1/2 transform -translate-y-1/2 text-white hover:text-blue-300 transition-colors p-2 hidden md:block"
                        >
                            <ChevronRight className="w-12 h-12" />
                        </button>
                    </div>
                   
                    <p className="mt-6 text-white text-lg sm:text-xl font-medium text-center max-w-4xl px-4">
                        {currentSlide.caption}
                    </p>
                    
                    {/* Modal Navigation (Mobile) */}
                    <div className="flex space-x-8 mt-4 md:hidden">
                        <button onClick={(e) => { e.stopPropagation(); prevSlide(); }} className="p-2 bg-white/10 rounded-full text-white">
                            <ChevronLeft className="w-8 h-8" />
                        </button>
                        <button onClick={(e) => { e.stopPropagation(); nextSlide(); }} className="p-2 bg-white/10 rounded-full text-white">
                             <ChevronRight className="w-8 h-8" />
                        </button>
                    </div>
                </div>
            </div>
        )}
      </div>
    </section>
  );
};

export default PhotoGallery;