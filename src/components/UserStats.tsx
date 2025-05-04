import { useState, useEffect } from 'react'
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi'

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Software Developer",
    content: "WICKII helped me master new programming concepts through bite-sized lessons. The personalized learning path made it easy to stay consistent.",
    image: "https://i.pravatar.cc/150?img=1"
  },
  {
    name: "Michael Chen",
    role: "Data Scientist",
    content: "The interactive practice sessions were game-changing. I went from theory to practical implementation in record time.",
    image: "https://i.pravatar.cc/150?img=2"
  },
  {
    name: "Emma Davis",
    role: "UX Designer",
    content: "As a visual learner, I love how WICKII breaks down complex topics into digestible chunks with great examples.",
    image: "https://i.pravatar.cc/150?img=3"
  },
  {
    name: "James Wilson",
    role: "Student",
    content: "The community-driven content helped me find the perfect learning resources. I'm now confident in my skills!",
    image: "https://i.pravatar.cc/150?img=4"
  }
]

const UserStats = () => {
  const [currentSlide, setCurrentSlide] = useState(0)

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % testimonials.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  // Auto-advance carousel every 5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % testimonials.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  return (
    <section className="py-16 md:py-24 bg-gradient-to-r from-gray-900 to-gray-800">
      <div className="container mx-auto px-4 mb-16">
        <h2 className="text-3xl md:text-5xl font-bold text-center bg-gradient-to-r from-emerald-400 to-teal-400 text-transparent bg-clip-text mb-8">
          Join Our Active Members
        </h2>
      </div>

      <div className="container mx-auto px-4 mb-24">
        <div className="grid grid-cols-2 md:grid-cols-2 gap-8 max-w-4xl mx-auto text-center">
          <div className="p-8 bg-gray-800/80 backdrop-blur-md rounded-2xl shadow-lg hover:shadow-xl 
            transition-all duration-300 border border-gray-700/20">
            <p className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-emerald-400 to-teal-400 
              text-transparent bg-clip-text">200+</p>
            <p className="text-gray-400 mt-2">Active Users</p>
          </div>
          <div className="p-8 bg-gray-800/80 backdrop-blur-md rounded-2xl shadow-lg hover:shadow-xl 
            transition-all duration-300 border border-gray-700/20">
            <p className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-emerald-400 to-teal-400 
              text-transparent bg-clip-text">96%</p>
            <p className="text-gray-400 mt-2">Satisfaction Rate</p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 bg-gradient-to-r 
          from-emerald-400 to-teal-400 text-transparent bg-clip-text">
          What Our Users Say
        </h2>
        <div className="relative max-w-4xl mx-auto">
          {/* Navigation Buttons */}
          <button 
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-12 p-2 rounded-full
              bg-gray-800/80 hover:bg-gray-700/80 border border-gray-700/20 backdrop-blur-sm
              text-emerald-400 hover:text-emerald-300 transition-all duration-300 z-10 cursor-pointer"
          >
            <FiChevronLeft size={24} />
          </button>
          
          <button 
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-12 p-2 rounded-full
              bg-gray-800/80 hover:bg-gray-700/80 border border-gray-700/20 backdrop-blur-sm
              text-emerald-400 hover:text-emerald-300 transition-all duration-300 z-10 cursor-pointer"
          >
            <FiChevronRight size={24} />
          </button>

          <div className="overflow-hidden rounded-2xl">
            <div className="flex transition-transform duration-500 ease-in-out"
                 style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
              {testimonials.map((testimonial, index) => (
                <div key={index} className="w-full flex-shrink-0 px-4">
                  <div className="bg-gray-800/80 backdrop-blur-md p-8 rounded-xl shadow-lg 
                    border border-gray-700/20">
                    <div className="flex items-center mb-6">
                      <img 
                        src={testimonial.image} 
                        alt={testimonial.name}
                        className="w-16 h-16 rounded-full mr-4 border-2 border-emerald-400/20"
                      />
                      <div>
                        <h3 className="text-xl font-semibold text-emerald-400">{testimonial.name}</h3>
                        <p className="text-gray-400">{testimonial.role}</p>
                      </div>
                    </div>
                    <p className="text-lg text-gray-400 leading-relaxed">"{testimonial.content}"</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Slide Markers */}
          <div className="flex justify-center space-x-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-2.5 h-2.5 rounded-full transition-all duration-300 
                  ${currentSlide === index 
                    ? 'bg-emerald-400 w-8' 
                    : 'bg-gray-600 hover:bg-gray-500'}`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default UserStats
