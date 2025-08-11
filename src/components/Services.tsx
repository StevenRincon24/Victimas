import React, { useState } from "react";
import {
  Heart,
  GraduationCap,
  Home,
  Briefcase,
  Brain,
  Scale,
  ChevronRight,
} from "lucide-react";

const Services: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState("salud");

  const categories = [
    {
      id: "salud",
      name: "Salud",
      icon: Heart,
      color: "bg-red-100 text-red-600",
      services: [
        "Atención médica básica",
        "Atención especializada",
        "Medicamentos esenciales",
        "Salud mental y apoyo psicológico",
        "Atención materno-infantil",
        "Programas de rehabilitación",
      ],
    },
    {
      id: "educacion",
      name: "Educación",
      icon: GraduationCap,
      color: "bg-blue-100 text-blue-600",
      services: [
        "Acceso a educación básica",
        "Programas de alfabetización",
        "Educación para adultos",
        "Becas y subsidios educativos",
        "Materiales escolares",
        "Programas de formación técnica",
      ],
    },
    {
      id: "vivienda",
      name: "Vivienda",
      icon: Home,
      color: "bg-green-100 text-green-600",
      services: [
        "Alojamiento temporal",
        "Subsidios de vivienda",
        "Mejoramiento de vivienda",
        "Titulación de predios",
        "Asesoría jurídica para vivienda",
        "Programas de construcción",
      ],
    },
    {
      id: "empleo",
      name: "Empleo",
      icon: Briefcase,
      color: "bg-yellow-100 text-yellow-600",
      services: [
        "Capacitación laboral",
        "Intermediación laboral",
        "Emprendimiento y microcréditos",
        "Generación de ingresos",
        "Formación en oficios",
        "Apoyo a proyectos productivos",
      ],
    },
    {
      id: "psicosocial",
      name: "Apoyo Psicosocial",
      icon: Brain,
      color: "bg-purple-100 text-purple-600",
      services: [
        "Atención psicológica individual",
        "Terapia familiar",
        "Grupos de apoyo",
        "Atención en crisis",
        "Programas de resiliencia",
        "Acompañamiento psicosocial",
      ],
    },
    {
      id: "reparaciones",
      name: "Reparaciones",
      icon: Scale,
      color: "bg-indigo-100 text-indigo-600",
      services: [
        "Reparación administrativa",
        "Indemnización por vía administrativa",
        "Restitución de tierras",
        "Medidas de satisfacción",
        "Rehabilitación",
        "Garantías de no repetición",
      ],
    },
  ];

  const selectedCategoryData = categories.find(
    (cat) => cat.id === selectedCategory
  );

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Servicios Disponibles
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Conoce todos los servicios organizados por categorías para que
            puedas encontrar exactamente lo que necesitas.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Categories Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-lg font-bold text-gray-800 mb-4">
                Categorías
              </h3>
              <div className="space-y-2">
                {categories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => setSelectedCategory(category.id)}
                    className={`w-full text-left p-3 rounded-lg transition-colors flex items-center space-x-3 ${
                      selectedCategory === category.id
                        ? "bg-blue-600 text-white shadow-md"
                        : "hover:bg-gray-200 text-gray-700"
                    }`}
                  >
                    <div
                      className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                        selectedCategory === category.id
                          ? "bg-blue-700"
                          : category.color
                      }`}
                    >
                      <category.icon size={20} />
                    </div>
                    <span className="font-medium">{category.name}</span>
                    <ChevronRight size={16} className="ml-auto" />
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Services Content */}
          <div className="lg:col-span-2">
            {selectedCategoryData && (
              <div className="bg-white rounded-lg shadow-lg p-8">
                <div className="flex items-center space-x-4 mb-6">
                  <div
                    className={`w-16 h-16 rounded-lg flex items-center justify-center ${selectedCategoryData.color}`}
                  >
                    <selectedCategoryData.icon size={32} />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-800">
                      {selectedCategoryData.name}
                    </h3>
                    <p className="text-gray-600">
                      Servicios disponibles en esta categoría
                    </p>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  {selectedCategoryData.services.map((service, index) => (
                    <div
                      key={index}
                      className="bg-gray-50 rounded-lg p-4 hover:bg-gray-100 transition-colors"
                    >
                      <div className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                        <p className="text-gray-700 font-medium">{service}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-8 p-4 bg-blue-50 rounded-lg">
                  <p className="text-blue-800 font-medium mb-2">
                    ¿Necesitas más información sobre estos servicios?
                  </p>
                  <p className="text-blue-600">
                    Visita nuestros puntos de atención o escribe al correo
                    electrónico{" "}
                    <strong>
                      {selectedCategory === "vivienda"
                        ? "infraestructura@nobsa-boyaca.gov.co"
                        : "gestionsocial@nobsa-boyaca.gov.co"}
                    </strong>{" "}
                    para recibir asesoría personalizada.
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
