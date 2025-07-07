import React, { useState } from 'react';
import { Star, ChevronLeft, ChevronRight, Heart, Quote } from 'lucide-react';

const Testimonials: React.FC = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials = [
    {
      name: 'María González',
      age: 45,
      location: 'Nobsa, Boyacá',
      story: 'Después de años de incertidumbre, encontré en la Unidad para las Víctimas el apoyo que necesitaba. Gracias a los programas disponibles, pude recibir atención psicológica y apoyo para emprender mi pequeño negocio de tejidos. Hoy soy una mujer independiente y orgullosa de mi trabajo.',
      service: 'Atención Psicosocial y Proyecto Productivo',
      rating: 5,
      category: 'Emprendimiento'
    },
    {
      name: 'Carlos Ramírez',
      age: 38,
      location: 'Nobsa, Boyacá',
      story: 'El proceso de reparación administrativa fue más sencillo de lo que pensaba gracias a la orientación que recibí. El equipo me acompañó en cada paso y me ayudó a entender mis derechos. Ahora mis hijos pueden estudiar tranquilos gracias a las becas educativas.',
      service: 'Reparación Administrativa y Becas Educativas',
      rating: 5,
      category: 'Reparación'
    },
    {
      name: 'Ana Patricia Torres',
      age: 52,
      location: 'Nobsa, Boyacá',
      story: 'Llegué a Nobsa sin nada, solo con mis tres hijos. Los programas de vivienda y las ayudas humanitarias nos dieron la oportunidad de comenzar de nuevo. Hoy tenemos una casa propia y mis hijos están estudiando. Nunca perdí la esperanza.',
      service: 'Programa de Vivienda y Ayuda Humanitaria',
      rating: 5,
      category: 'Vivienda'
    },
    {
      name: 'Jorge Luis Martínez',
      age: 41,
      location: 'Nobsa, Boyacá',
      story: 'La atención médica especializada que recibí cambió mi vida. Después del trauma físico que sufrí, pensé que no podría volver a trabajar. Gracias a la rehabilitación y el apoyo psicológico, hoy trabajo en una cooperativa agrícola y me siento útil nuevamente.',
      service: 'Atención Médica y Rehabilitación',
      rating: 5,
      category: 'Salud'
    },
    {
      name: 'Esperanza Vargas',
      age: 35,
      location: 'Nobsa, Boyacá',
      story: 'El programa de formación técnica me permitió especializarme en sistemas. Ahora trabajo en la Alcaldía ayudando a otras víctimas a acceder a los servicios digitales. Es gratificante poder devolver un poco de todo lo que recibí.',
      service: 'Formación Técnica y Empleo',
      rating: 5,
      category: 'Educación'
    }
  ];

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const current = testimonials[currentTestimonial];

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'Emprendimiento': return 'bg-green-100 text-green-800';
      case 'Reparación': return 'bg-blue-100 text-blue-800';
      case 'Vivienda': return 'bg-orange-100 text-orange-800';
      case 'Salud': return 'bg-red-100 text-red-800';
      case 'Educación': return 'bg-purple-100 text-purple-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <section className="py-16 bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Historias de Esperanza
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Conoce las experiencias de personas que han encontrado apoyo y han logrado 
            reconstruir sus vidas gracias a los servicios disponibles.
          </p>
        </div>

        {/* Main Testimonial */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-lg shadow-xl overflow-hidden">
            <div className="relative">
              <div className="absolute top-6 left-6 text-blue-600 opacity-20">
                <Quote size={60} />
              </div>
              <div className="p-8 md:p-12">
                <div className="flex items-center space-x-3 mb-6">
                  <span className={`px-3 py-1 rounded-full text-sm font-medium ${getCategoryColor(current.category)}`}>
                    {current.category}
                  </span>
                  <div className="flex items-center space-x-1">
                    {Array.from({ length: current.rating }, (_, i) => (
                      <Star key={i} size={16} className="text-yellow-500 fill-current" />
                    ))}
                  </div>
                </div>

                <blockquote className="text-lg md:text-xl text-gray-700 mb-8 leading-relaxed">
                  "{current.story}"
                </blockquote>

                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="font-bold text-gray-800 text-lg">{current.name}</h4>
                    <p className="text-gray-600">{current.age} años, {current.location}</p>
                    <p className="text-blue-600 font-medium mt-1">{current.service}</p>
                  </div>
                  <div className="flex items-center space-x-2">
                    <button
                      onClick={prevTestimonial}
                      className="w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors"
                    >
                      <ChevronLeft size={20} />
                    </button>
                    <button
                      onClick={nextTestimonial}
                      className="w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors"
                    >
                      <ChevronRight size={20} />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Testimonial Navigation Dots */}
          <div className="flex justify-center space-x-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentTestimonial(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === currentTestimonial ? 'bg-blue-600' : 'bg-gray-300'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Statistics */}
        <div className="mt-16 grid md:grid-cols-3 gap-8">
          <div className="bg-white rounded-lg p-6 text-center shadow-md">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Heart size={32} className="text-green-600" />
            </div>
            <h3 className="text-3xl font-bold text-gray-800 mb-2">500+</h3>
            <p className="text-gray-600">Familias atendidas</p>
          </div>
          <div className="bg-white rounded-lg p-6 text-center shadow-md">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Star size={32} className="text-blue-600" />
            </div>
            <h3 className="text-3xl font-bold text-gray-800 mb-2">95%</h3>
            <p className="text-gray-600">Satisfacción en servicios</p>
          </div>
          <div className="bg-white rounded-lg p-6 text-center shadow-md">
            <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Quote size={32} className="text-orange-600" />
            </div>
            <h3 className="text-3xl font-bold text-gray-800 mb-2">150+</h3>
            <p className="text-gray-600">Proyectos exitosos</p>
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-16 bg-white rounded-lg p-8 text-center shadow-lg">
          <h3 className="text-2xl font-bold text-gray-800 mb-4">
            ¿Quieres compartir tu historia?
          </h3>
          <p className="text-gray-600 mb-6">
            Tu testimonio puede inspirar a otras personas. Si has recibido apoyo y quieres 
            compartir tu experiencia, nos encantaría escucharte.
          </p>
          <button className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors font-medium">
            Compartir mi historia
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;