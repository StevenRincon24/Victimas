import React, { useState } from 'react';
import { Calendar, Clock, ArrowRight, Megaphone, AlertCircle } from 'lucide-react';

const News: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('todas');

  const categories = [
    { id: 'todas', name: 'Todas las noticias' },
    { id: 'programas', name: 'Nuevos programas' },
    { id: 'convocatorias', name: 'Convocatorias' },
    { id: 'eventos', name: 'Eventos' },
    { id: 'importantes', name: 'Importantes' }
  ];

  const news = [
    {
      title: 'Nueva Convocatoria para Proyectos Productivos 2024',
      summary: 'Se abre convocatoria para proyectos productivos dirigidos a víctimas del conflicto con inversión de $500 millones.',
      date: '2024-01-15',
      category: 'convocatorias',
      type: 'importante',
      readTime: '3 min',
      content: 'La Unidad para las Víctimas anuncia la apertura de una nueva convocatoria...'
    },
    {
      title: 'Jornada de Atención Integral en Nobsa',
      summary: 'Los días 25 y 26 de enero se realizará una jornada especial de atención integral para víctimas del conflicto.',
      date: '2024-01-10',
      category: 'eventos',
      type: 'urgente',
      readTime: '2 min',
      content: 'Se realizará una jornada especial de atención integral...'
    },
    {
      title: 'Nuevo Programa de Becas Educativas',
      summary: 'Programa de becas para hijos de víctimas del conflicto que deseen continuar sus estudios superiores.',
      date: '2024-01-08',
      category: 'programas',
      type: 'importante',
      readTime: '4 min',
      content: 'El Ministerio de Educación en alianza con la Unidad para las Víctimas...'
    },
    {
      title: 'Actualización de Requisitos para Reparación Administrativa',
      summary: 'Se actualizan los requisitos y documentos necesarios para solicitar reparación administrativa.',
      date: '2024-01-05',
      category: 'importantes',
      type: 'normal',
      readTime: '5 min',
      content: 'La Unidad para las Víctimas informa sobre las actualizaciones...'
    },
    {
      title: 'Taller de Emprendimiento para Víctimas',
      summary: 'Se realizará un taller gratuito de emprendimiento los días 20 y 21 de enero en la Casa de la Cultura.',
      date: '2024-01-03',
      category: 'eventos',
      type: 'normal',
      readTime: '3 min',
      content: 'El SENA en alianza con la Alcaldía de Nobsa...'
    },
    {
      title: 'Apertura de Nuevo Punto de Atención',
      summary: 'Se inaugura nuevo punto de atención en el corregimiento de Nazareth para acercar los servicios a la comunidad.',
      date: '2024-01-01',
      category: 'importantes',
      type: 'importante',
      readTime: '2 min',
      content: 'Con el objetivo de acercar los servicios a la comunidad...'
    }
  ];

  const filteredNews = news.filter(item => 
    selectedCategory === 'todas' || item.category === selectedCategory
  );

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'urgente': return 'bg-red-100 text-red-800 border-red-200';
      case 'importante': return 'bg-yellow-100 text-yellow-800 border-yellow-200';
      default: return 'bg-blue-100 text-blue-800 border-blue-200';
    }
  };

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'urgente': return <AlertCircle size={16} />;
      case 'importante': return <Megaphone size={16} />;
      default: return <Calendar size={16} />;
    }
  };

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Noticias y Actualizaciones
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Mantente informado sobre nuevos programas, convocatorias, eventos y 
            actualizaciones importantes de los servicios disponibles.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {categories.map(category => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                selectedCategory === category.id
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>

        {/* Featured News */}
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Article */}
          <div className="lg:col-span-2">
            {filteredNews.length > 0 && (
              <article className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                <div className="p-8">
                  <div className="flex items-center space-x-3 mb-4">
                    <div className={`flex items-center space-x-2 px-3 py-1 rounded-full border ${getTypeColor(filteredNews[0].type)}`}>
                      {getTypeIcon(filteredNews[0].type)}
                      <span className="text-sm font-medium">
                        {filteredNews[0].type === 'urgente' ? 'Urgente' : 
                         filteredNews[0].type === 'importante' ? 'Importante' : 'Noticia'}
                      </span>
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-4">{filteredNews[0].title}</h3>
                  <p className="text-gray-600 mb-6">{filteredNews[0].summary}</p>
                  <div className="flex items-center justify-between text-sm text-gray-500">
                    <div className="flex items-center space-x-4">
                      <div className="flex items-center space-x-1">
                        <Calendar size={16} />
                        <span>{new Date(filteredNews[0].date).toLocaleDateString('es-ES')}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Clock size={16} />
                        <span>{filteredNews[0].readTime}</span>
                      </div>
                    </div>
                    <button className="flex items-center space-x-2 text-blue-600 hover:text-blue-800 transition-colors">
                      <span>Leer más</span>
                      <ArrowRight size={16} />
                    </button>
                  </div>
                </div>
              </article>
            )}
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            <div className="bg-blue-50 rounded-lg p-6">
              <h3 className="text-lg font-bold text-gray-800 mb-4">Próximos Eventos</h3>
              <div className="space-y-3">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-2"></div>
                  <div>
                    <p className="font-medium text-gray-800">Jornada de Atención Integral</p>
                    <p className="text-sm text-gray-600">25-26 de Enero</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-green-600 rounded-full mt-2"></div>
                  <div>
                    <p className="font-medium text-gray-800">Taller de Emprendimiento</p>
                    <p className="text-sm text-gray-600">20-21 de Enero</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-yellow-50 rounded-lg p-6">
              <h3 className="text-lg font-bold text-gray-800 mb-4">Convocatorias Abiertas</h3>
              <div className="space-y-3">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-yellow-600 rounded-full mt-2"></div>
                  <div>
                    <p className="font-medium text-gray-800">Proyectos Productivos</p>
                    <p className="text-sm text-gray-600">Hasta el 28 de Febrero</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-orange-600 rounded-full mt-2"></div>
                  <div>
                    <p className="font-medium text-gray-800">Becas Educativas</p>
                    <p className="text-sm text-gray-600">Hasta el 15 de Marzo</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Other News */}
        <div className="mt-12">
          <h3 className="text-2xl font-bold text-gray-800 mb-6">Otras Noticias</h3>
          <div className="grid md:grid-cols-2 gap-6">
            {filteredNews.slice(1).map((item, index) => (
              <article key={index} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                <div className="p-6">
                  <div className="flex items-center space-x-2 mb-3">
                    <div className={`flex items-center space-x-1 px-2 py-1 rounded-full border text-xs ${getTypeColor(item.type)}`}>
                      {getTypeIcon(item.type)}
                      <span className="font-medium">
                        {item.type === 'urgente' ? 'Urgente' : 
                         item.type === 'importante' ? 'Importante' : 'Noticia'}
                      </span>
                    </div>
                  </div>
                  <h4 className="text-lg font-bold text-gray-800 mb-2">{item.title}</h4>
                  <p className="text-gray-600 mb-4 text-sm">{item.summary}</p>
                  <div className="flex items-center justify-between text-sm text-gray-500">
                    <div className="flex items-center space-x-3">
                      <div className="flex items-center space-x-1">
                        <Calendar size={14} />
                        <span>{new Date(item.date).toLocaleDateString('es-ES')}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Clock size={14} />
                        <span>{item.readTime}</span>
                      </div>
                    </div>
                    <button className="text-blue-600 hover:text-blue-800 transition-colors">
                      <ArrowRight size={16} />
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className="mt-12 bg-gradient-to-r from-blue-600 to-blue-700 rounded-lg p-8 text-white">
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-4">Mantente Informado</h3>
            <p className="mb-6">
              Recibe las últimas noticias y actualizaciones directamente en tu correo electrónico.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <input
                type="email"
                placeholder="Tu correo electrónico"
                className="flex-1 px-4 py-3 rounded-lg text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-300"
              />
              <button className="bg-white text-blue-600 px-6 py-3 rounded-lg hover:bg-gray-100 transition-colors font-medium">
                Suscribirse
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default News;