import React, { useState } from 'react';
import { Plus, Minus, Search, HelpCircle } from 'lucide-react';

const FAQ: React.FC = () => {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);
  const [searchTerm, setSearchTerm] = useState('');

  const categories = [
    { id: 'general', name: 'Preguntas Generales', color: 'bg-blue-100 text-blue-800' },
    { id: 'registro', name: 'Registro de Víctimas', color: 'bg-green-100 text-green-800' },
    { id: 'reparaciones', name: 'Reparaciones', color: 'bg-orange-100 text-orange-800' },
    { id: 'ayudas', name: 'Ayudas y Subsidios', color: 'bg-purple-100 text-purple-800' },
    { id: 'documentos', name: 'Documentos y Trámites', color: 'bg-red-100 text-red-800' }
  ];

  const faqs = [
    {
      category: 'general',
      question: '¿Qué es el Registro Único de Víctimas (RUV)?',
      answer: 'El RUV es una base de datos que contiene información sobre las víctimas del conflicto armado interno. Es el mecanismo establecido por el Estado para identificar, registrar y caracterizar a la población víctima, garantizando así el acceso a la oferta institucional de atención, asistencia y reparación integral.'
    },
    {
      category: 'general',
      question: '¿Quién puede registrarse como víctima?',
      answer: 'Pueden registrarse las personas que individual o colectivamente hayan sufrido daños como consecuencia de violaciones a los derechos humanos e infracciones al derecho internacional humanitario, ocurridas con ocasión del conflicto armado interno desde el 1 de enero de 1985.'
    },
    {
      category: 'registro',
      question: '¿Cómo puedo registrarme en el RUV?',
      answer: 'Para registrarte en el RUV debes presentar la declaración ante el Ministerio Público (Personería Municipal o Defensoría del Pueblo) en el lugar donde ocurrieron los hechos, donde vives actualmente o donde te desplazaste. Debes presentar documento de identidad y relatar los hechos victimizantes.'
    },
    {
      category: 'registro',
      question: '¿Qué documentos necesito para registrarme?',
      answer: 'Necesitas tu documento de identidad vigente (cédula, tarjeta de identidad, registro civil). Si no tienes documento, puedes presentar una declaración juramentada. También es útil tener cualquier documento que respalde tu relato (certificados médicos, denuncias previas, etc.).'
    },
    {
      category: 'reparaciones',
      question: '¿Qué tipos de reparación existen?',
      answer: 'Existen cinco medidas de reparación integral: 1) Restitución (devolver a la víctima a la situación anterior a la violación), 2) Indemnización (compensación monetaria), 3) Rehabilitación (atención médica y psicológica), 4) Satisfacción (medidas simbólicas), y 5) Garantías de no repetición (medidas para que no se repitan los hechos).'
    },
    {
      category: 'reparaciones',
      question: '¿Cuánto tiempo demora el proceso de reparación?',
      answer: 'Los tiempos varían según el tipo de reparación. La reparación administrativa puede tomar entre 6 meses a 2 años, dependiendo de la complejidad del caso. La restitución de tierras puede tomar más tiempo debido a procesos judiciales. Es importante mantener actualizada tu información de contacto.'
    },
    {
      category: 'ayudas',
      question: '¿Qué es la ayuda humanitaria?',
      answer: 'La ayuda humanitaria es un conjunto de medidas de asistencia, atención y orientación que se brindan a las víctimas para su recuperación integral. Incluye alojamiento temporal, alimentación, atención médica, apoyo psicológico, transporte y comunicaciones.'
    },
    {
      category: 'ayudas',
      question: '¿Cómo solicito ayuda humanitaria?',
      answer: 'Puedes solicitar ayuda humanitaria en cualquier punto de atención de la Unidad para las Víctimas, alcaldías, personerías o defensorías del pueblo. Es importante que tengas tu registro en el RUV actualizado y presentes la solicitud explicando tu situación actual.'
    },
    {
      category: 'documentos',
      question: '¿Qué hago si perdí mis documentos?',
      answer: 'Si perdiste tus documentos debido al conflicto, puedes solicitar la expedición gratuita en la Registraduría Nacional del Estado Civil. Debes presentar una declaración juramentada explicando las circunstancias de la pérdida y tu condición de víctima registrada en el RUV.'
    },
    {
      category: 'documentos',
      question: '¿Cómo actualizo mi información en el RUV?',
      answer: 'Puedes actualizar tu información visitando cualquier punto de atención de la Unidad para las Víctimas, a través de la línea gratuita 018000 91 1119, o mediante el portal web. Es importante mantener actualizada tu información de contacto, composición familiar y lugar de residencia.'
    }
  ];

  const filteredFAQs = faqs.filter(faq =>
    faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
    faq.answer.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const toggleFAQ = (index: number) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Preguntas Frecuentes
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Encuentra respuestas a las dudas más comunes sobre servicios, trámites y procesos. 
            Si no encuentras lo que buscas, contáctanos directamente.
          </p>
        </div>

        {/* Search */}
        <div className="max-w-2xl mx-auto mb-8">
          <div className="relative">
            <Search size={20} className="absolute left-4 top-3 text-gray-400" />
            <input
              type="text"
              placeholder="Buscar en preguntas frecuentes..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
        </div>

        {/* Categories */}
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {categories.map(category => (
            <span
              key={category.id}
              className={`px-4 py-2 rounded-lg font-medium text-sm ${category.color}`}
            >
              {category.name}
            </span>
          ))}
        </div>

        {/* FAQ List */}
        <div className="max-w-4xl mx-auto">
          <div className="space-y-4">
            {filteredFAQs.map((faq, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
                >
                  <div className="flex items-start space-x-3">
                    <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mt-1">
                      <HelpCircle size={18} className="text-blue-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-800 text-lg">{faq.question}</h3>
                      <span className={`inline-block px-2 py-1 rounded-full text-xs font-medium mt-2 ${
                        categories.find(c => c.id === faq.category)?.color
                      }`}>
                        {categories.find(c => c.id === faq.category)?.name}
                      </span>
                    </div>
                  </div>
                  <div className="flex-shrink-0">
                    {openFAQ === index ? (
                      <Minus size={24} className="text-gray-500" />
                    ) : (
                      <Plus size={24} className="text-gray-500" />
                    )}
                  </div>
                </button>
                {openFAQ === index && (
                  <div className="px-6 pb-6">
                    <div className="pl-11">
                      <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {filteredFAQs.length === 0 && (
            <div className="text-center py-12">
              <HelpCircle size={48} className="text-gray-400 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-600 mb-2">No se encontraron preguntas</h3>
              <p className="text-gray-500">Intenta con otros términos de búsqueda</p>
            </div>
          )}
        </div>

        {/* Contact for More Help */}
        <div className="mt-16 bg-blue-50 rounded-lg p-8">
          <div className="text-center">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">
              ¿No encontraste lo que buscabas?
            </h3>
            <p className="text-gray-600 mb-6">
              Nuestro equipo está listo para ayudarte con cualquier pregunta específica 
              sobre tu caso o los servicios disponibles.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors font-medium">
                Llamar al 123
              </button>
              <button className="border border-blue-600 text-blue-600 px-8 py-3 rounded-lg hover:bg-blue-50 transition-colors font-medium">
                Enviar mensaje
              </button>
              <button className="border border-blue-600 text-blue-600 px-8 py-3 rounded-lg hover:bg-blue-50 transition-colors font-medium">
                Chat en línea
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;