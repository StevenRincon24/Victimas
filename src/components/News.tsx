import React, { useState } from "react";
import {
  Calendar,
  Clock,
  ArrowRight,
  Megaphone,
  AlertCircle,
} from "lucide-react";

const News: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState("todas");

  const categories = [
    { id: "todas", name: "Todas las celebraciones" },
    { id: "conmemoraciones", name: "Conmemoraciones" },
    { id: "culturales", name: "Eventos culturales" },
    { id: "memoriales", name: "Actos memoriales" },
  ];

  const news = [
    {
      title:
        "Día Nacional de la Memoria y Solidaridad con las Víctimas del Conflicto Armado",
      summary:
        "Acto central en la Plaza Principal con participación de comunidades y autoridades locales. ",
      date: "2025-04-09",
      category: "conmemoraciones",
      type: "importante",
      readTime: "3 min",
      content:
        "Cada 9 de abril, Colombia recuerda a las víctimas del conflicto armado en un acto de memoria y solidaridad...",
    },
    {
      title: "Velatón por la Paz y la Memoria",
      summary:
        "Jornada nocturna con velas y música en honor a las víctimas del municipio.",
      date: "2025-06-18",
      category: "memoriales",
      type: "normal",
      readTime: "2 min",
      content:
        "Este evento busca rendir homenaje a las víctimas y fortalecer la memoria colectiva a través de actividades simbólicas...",
    },
    {
      title: "Festival Cultural por la Reconciliación",
      summary:
        "Encuentro artístico con teatro, música y exposiciones de arte por la paz.",
      date: "2025-08-15",
      category: "culturales",
      type: "importante",
      readTime: "4 min",
      content:
        "El festival es un espacio para la expresión artística y la sanación colectiva, con participación de grupos culturales locales...",
    },
    {
      title: "Caminata por la Memoria",
      summary: "Recorrido simbólico por sitios representativos del municipio.",
      date: "2025-09-21",
      category: "memoriales",
      type: "normal",
      readTime: "5 min",
      content:
        "La caminata busca visibilizar la historia y promover el respeto por los derechos humanos, recordando a las víctimas...",
    },
  ];

  const filteredNews = news.filter(
    (item) => selectedCategory === "todas" || item.category === selectedCategory
  );

  const getTypeColor = (type: string) => {
    switch (type) {
      case "urgente":
        return "bg-red-100 text-red-800 border-red-200";
      case "importante":
        return "bg-yellow-100 text-yellow-800 border-yellow-200";
      default:
        return "bg-blue-100 text-blue-800 border-blue-200";
    }
  };

  const getTypeIcon = (type: string) => {
    switch (type) {
      case "urgente":
        return <AlertCircle size={16} />;
      case "importante":
        return <Megaphone size={16} />;
      default:
        return <Calendar size={16} />;
    }
  };

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Eventos y Celebraciones
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Mantente actualizado con las celebraciones y eventos importantes de
            la comunidad.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                selectedCategory === category.id
                  ? "bg-blue-600 text-white"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>

        {/* News Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {filteredNews.length > 0 ? (
            filteredNews.map((article, index) => (
              <article
                key={index}
                className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
              >
                <div className="p-6">
                  <div className="flex items-center space-x-3 mb-4">
                    <div
                      className={`flex items-center space-x-2 px-3 py-1 rounded-full border ${getTypeColor(
                        article.type
                      )}`}
                    >
                      {getTypeIcon(article.type)}
                      <span className="text-sm font-medium">
                        {article.type === "urgente"
                          ? "Urgente"
                          : article.type === "importante"
                          ? "Importante"
                          : "Noticia"}
                      </span>
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-3">
                    {article.title}
                  </h3>
                  <p className="text-gray-600 mb-4 text-sm">
                    {article.summary}
                  </p>
                  <p className="text-black-600 mb-4 text-sm">
                    {article.content}
                  </p>
                  <div className="flex items-center justify-between text-sm text-gray-500">
                    <div className="flex items-center space-x-3">
                      <div className="flex items-center space-x-1">
                        <Calendar size={14} />
                        <span>
                          {new Date(article.date).toLocaleDateString("es-ES")}
                        </span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Clock size={14} />
                        <span>{article.readTime}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </article>
            ))
          ) : (
            <div className="col-span-full text-center py-12">
              <p className="text-gray-500 text-lg">
                No se encontraron noticias para la categoría seleccionada.
              </p>
            </div>
          )}
        </div>

        {/* Newsletter Signup */}
        <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-lg p-8 text-white">
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-4">Mantente Informado</h3>
            <p className="mb-6">
              Recibe las últimas noticias y actualizaciones directamente en tu
              correo electrónico.
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
