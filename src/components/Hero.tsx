import React from 'react';
import { Heart, Users, FileText, Phone } from 'lucide-react';

interface HeroProps {
  onSectionChange: (section: string) => void;
}

const Hero: React.FC<HeroProps> = ({ onSectionChange }) => {
  const quickActions = [
    {
      icon: Users,
      title: 'Servicios Disponibles',
      description: 'Conoce todos los servicios a tu disposición',
      action: () => onSectionChange('servicios'),
      color: 'bg-green-500'
    },
    {
      icon: FileText,
      title: 'Documentos',
      description: 'Descarga formularios y guías importantes',
      action: () => onSectionChange('documentos'),
      color: 'bg-orange-500'
    },
    {
      icon: Phone,
      title: 'Contacto',
      description: 'Encuentra ayuda inmediata',
      action: () => onSectionChange('contacto'),
      color: 'bg-red-500'
    }
  ];

  return (
    <section className="bg-gradient-to-br from-blue-50 to-indigo-100 py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="flex justify-center mb-6">
            <div className="w-20 h-20 bg-blue-600 rounded-full flex items-center justify-center">
              <Heart size={40} className="text-white" />
            </div>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Nobsa Te Acompaña
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Aquí encontrarás toda la información sobre los servicios disponibles para víctimas del conflicto 
            en nuestro municipio. Estamos aquí para apoyarte en cada paso del camino.
          </p>
          <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 max-w-2xl mx-auto">
            <p className="text-yellow-800 font-medium">
              <strong>¿Necesitas ayuda urgente?</strong> Llama al <strong>123</strong> o visita cualquiera de nuestros puntos de atención.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {quickActions.map((action, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow cursor-pointer transform hover:scale-105"
              onClick={action.action}
            >
              <div className={`w-16 h-16 ${action.color} rounded-full flex items-center justify-center mb-4`}>
                <action.icon size={32} className="text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">{action.title}</h3>
              <p className="text-gray-600 mb-4">{action.description}</p>
              <button className="text-blue-600 font-medium hover:text-blue-800 transition-colors">
                Ver más →
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;