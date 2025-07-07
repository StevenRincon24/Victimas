import React, { useState } from 'react';
import { Download, FileText, Search, Filter } from 'lucide-react';

const Documents: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('todos');

  const categories = [
    { id: 'todos', name: 'Todos los documentos' },
    { id: 'registro', name: 'Registro de víctimas' },
    { id: 'reparaciones', name: 'Reparaciones' },
    { id: 'ayudas', name: 'Ayudas y subsidios' },
    { id: 'juridico', name: 'Asesoría jurídica' },
    { id: 'salud', name: 'Salud' },
    { id: 'educacion', name: 'Educación' }
  ];

  const documents = [
    {
      title: 'Formulario de Registro en el RUV',
      description: 'Formulario oficial para el registro en el Registro Único de Víctimas',
      category: 'registro',
      format: 'PDF',
      size: '2.5 MB',
      downloads: 1245,
      priority: 'alta'
    },
    {
      title: 'Guía para Solicitar Reparación Administrativa',
      description: 'Paso a paso para solicitar reparación administrativa integral',
      category: 'reparaciones',
      format: 'PDF',
      size: '1.8 MB',
      downloads: 856,
      priority: 'alta'
    },
    {
      title: 'Formulario de Solicitud de Ayuda Humanitaria',
      description: 'Documento para solicitar ayuda humanitaria de emergencia',
      category: 'ayudas',
      format: 'PDF',
      size: '1.2 MB',
      downloads: 732,
      priority: 'alta'
    },
    {
      title: 'Declaración Jurídica - Modelo',
      description: 'Modelo de declaración jurídica para víctimas del conflicto',
      category: 'juridico',
      format: 'DOC',
      size: '0.8 MB',
      downloads: 543,
      priority: 'media'
    },
    {
      title: 'Solicitud de Atención Psicosocial',
      description: 'Formulario para solicitar atención psicosocial especializada',
      category: 'salud',
      format: 'PDF',
      size: '1.1 MB',
      downloads: 423,
      priority: 'media'
    },
    {
      title: 'Beca Educativa - Requisitos y Formulario',
      description: 'Información y formulario para solicitar becas educativas',
      category: 'educacion',
      format: 'PDF',
      size: '1.5 MB',
      downloads: 387,
      priority: 'media'
    },
    {
      title: 'Guía de Derechos de las Víctimas',
      description: 'Información completa sobre los derechos de las víctimas del conflicto',
      category: 'juridico',
      format: 'PDF',
      size: '3.2 MB',
      downloads: 1032,
      priority: 'alta'
    },
    {
      title: 'Formulario de Restitución de Tierras',
      description: 'Solicitud para el proceso de restitución de tierras',
      category: 'reparaciones',
      format: 'PDF',
      size: '2.1 MB',
      downloads: 276,
      priority: 'media'
    }
  ];

  const filteredDocuments = documents.filter(doc => {
    const matchesSearch = doc.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         doc.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'todos' || doc.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const priorityColor = (priority: string) => {
    switch (priority) {
      case 'alta': return 'text-red-600 bg-red-100';
      case 'media': return 'text-yellow-600 bg-yellow-100';
      default: return 'text-gray-600 bg-gray-100';
    }
  };

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Centro de Documentos
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Descarga todos los formularios, guías y documentos importantes que necesitas 
            para acceder a los servicios disponibles.
          </p>
        </div>

        {/* Search and Filter */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1 relative">
              <Search size={20} className="absolute left-3 top-3 text-gray-400" />
              <input
                type="text"
                placeholder="Buscar documentos..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
            <div className="relative">
              <Filter size={20} className="absolute left-3 top-3 text-gray-400" />
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="pl-10 pr-8 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent appearance-none bg-white"
              >
                {categories.map(category => (
                  <option key={category.id} value={category.id}>
                    {category.name}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {/* Documents Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredDocuments.map((doc, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <div className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                      <FileText size={24} className="text-blue-600" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center space-x-2 mb-1">
                        <span className={`px-2 py-1 rounded-full text-xs font-medium ${priorityColor(doc.priority)}`}>
                          {doc.priority === 'alta' ? 'Prioritario' : 'Importante'}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                <h3 className="text-lg font-bold text-gray-800 mb-2">{doc.title}</h3>
                <p className="text-gray-600 mb-4 text-sm">{doc.description}</p>

                <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                  <span>{doc.format}</span>
                  <span>{doc.size}</span>
                  <span>{doc.downloads} descargas</span>
                </div>

                <button className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center space-x-2">
                  <Download size={18} />
                  <span>Descargar</span>
                </button>
              </div>
            </div>
          ))}
        </div>

        {filteredDocuments.length === 0 && (
          <div className="text-center py-12">
            <FileText size={48} className="text-gray-400 mx-auto mb-4" />
            <h3 className="text-xl font-bold text-gray-600 mb-2">No se encontraron documentos</h3>
            <p className="text-gray-500">Intenta con otros términos de búsqueda o categorías</p>
          </div>
        )}

        {/* Help Section */}
        <div className="mt-12 bg-blue-50 rounded-lg p-8">
          <div className="text-center">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">
              ¿Necesitas ayuda con los documentos?
            </h3>
            <p className="text-gray-600 mb-6">
              Si tienes dificultades para llenar algún formulario o necesitas asesoría, 
              nuestros puntos de atención están listos para ayudarte.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors">
                Llamar al 123
              </button>
              <button className="border border-blue-600 text-blue-600 px-6 py-3 rounded-lg hover:bg-blue-50 transition-colors">
                Agendar cita presencial
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Documents;