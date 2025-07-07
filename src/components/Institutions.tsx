import React from 'react';
import { Building, Users, Scale, Heart, MapPin, Phone, Clock, ExternalLink } from 'lucide-react';

const Institutions: React.FC = () => {
  const institutions = [
    {
      name: 'Unidad para las Víctimas',
      type: 'Nacional',
      icon: Users,
      color: 'bg-red-500',
      description: 'Entidad encargada de la atención integral a víctimas del conflicto armado.',
      services: [
        'Registro Único de Víctimas (RUV)',
        'Atención psicosocial',
        'Reparación integral',
        'Indemnización administrativa'
      ],
      contact: {
        address: 'Calle 12 #3-45, Nobsa',
        phone: '123-456-7890',
        hours: 'Lunes a Viernes: 8:00 AM - 5:00 PM',
        website: 'www.unidadvictimas.gov.co'
      }
    },
    {
      name: 'Alcaldía de Nobsa',
      type: 'Municipal',
      icon: Building,
      color: 'bg-blue-500',
      description: 'Gobierno local encargado de la implementación de políticas públicas municipales.',
      services: [
        'Programas sociales',
        'Vivienda y servicios públicos',
        'Educación municipal',
        'Salud pública'
      ],
      contact: {
        address: 'Plaza Principal, Nobsa',
        phone: '123-456-7891',
        hours: 'Lunes a Viernes: 7:00 AM - 5:00 PM',
        website: 'www.nobsa-boyaca.gov.co'
      }
    },
    {
      name: 'Gobernación de Boyacá',
      type: 'Departamental',
      icon: Scale,
      color: 'bg-green-500',
      description: 'Entidad departamental que coordina políticas de atención a víctimas.',
      services: [
        'Programas departamentales',
        'Coordinación interinstitucional',
        'Proyectos de desarrollo',
        'Apoyo técnico'
      ],
      contact: {
        address: 'Tunja, Boyacá',
        phone: '123-456-7892',
        hours: 'Lunes a Viernes: 8:00 AM - 5:00 PM',
        website: 'www.boyaca.gov.co'
      }
    },
    {
      name: 'Organizaciones No Gubernamentales',
      type: 'Privadas',
      icon: Heart,
      color: 'bg-purple-500',
      description: 'Organizaciones de la sociedad civil que brindan apoyo complementario.',
      services: [
        'Acompañamiento psicosocial',
        'Formación y capacitación',
        'Proyectos productivos',
        'Fortalecimiento organizacional'
      ],
      contact: {
        address: 'Varios puntos en Nobsa',
        phone: '123-456-7893',
        hours: 'Horarios variables',
        website: 'Consultar directamente'
      }
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Instituciones que te Apoyan
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Conoce las diferentes entidades que trabajan para brindarte atención 
            y apoyo integral en tu proceso de reparación.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {institutions.map((institution, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <div className={`${institution.color} p-6 text-white`}>
                <div className="flex items-center space-x-4">
                  <div className="w-16 h-16 bg-white bg-opacity-20 rounded-lg flex items-center justify-center">
                    <institution.icon size={32} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold">{institution.name}</h3>
                    <p className="text-blue-100 text-sm">{institution.type}</p>
                  </div>
                </div>
              </div>

              <div className="p-6">
                <p className="text-gray-600 mb-6">{institution.description}</p>

                <div className="mb-6">
                  <h4 className="font-bold text-gray-800 mb-3">Servicios principales:</h4>
                  <ul className="space-y-2">
                    {institution.services.map((service, serviceIndex) => (
                      <li key={serviceIndex} className="flex items-start space-x-2">
                        <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-gray-700">{service}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="border-t pt-6">
                  <h4 className="font-bold text-gray-800 mb-3">Información de contacto:</h4>
                  <div className="space-y-3">
                    <div className="flex items-start space-x-3">
                      <MapPin size={18} className="text-gray-500 mt-1" />
                      <span className="text-gray-700">{institution.contact.address}</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Phone size={18} className="text-gray-500" />
                      <span className="text-gray-700">{institution.contact.phone}</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Clock size={18} className="text-gray-500" />
                      <span className="text-gray-700">{institution.contact.hours}</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <ExternalLink size={18} className="text-gray-500" />
                      <span className="text-blue-600 hover:text-blue-800 cursor-pointer">
                        {institution.contact.website}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 bg-blue-50 rounded-lg p-8">
          <div className="text-center">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">
              ¿No sabes a qué institución acudir?
            </h3>
            <p className="text-gray-600 mb-6">
              Nuestros puntos de atención te ayudarán a identificar la institución 
              más apropiada para tu caso específico.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors">
                Llamar al 123
              </button>
              <button className="border border-blue-600 text-blue-600 px-6 py-3 rounded-lg hover:bg-blue-50 transition-colors">
                Ver puntos de atención
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Institutions;