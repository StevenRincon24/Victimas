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
    { id: "convocatorias", name: "Convocatorias" },
    { id: "conmemoraciones", name: "Conmemoraciones" },
    { id: "culturales", name: "Eventos culturales" },
    { id: "memoriales", name: "Actos memoriales" },
  ];

  const news = [
    {
      title:
        "Día Nacional de la Memoria y Solidaridad con las Víctimas del Conflicto Armado",
      summary:
        "Acto central en la Plaza Principal con participación de comunidades y autoridades locales.",
      date: "2026/04/09",
      category: "conmemoraciones",
      type: "importante",
      readTime: "3 min",
      content:
        "Cada 9 de abril, Colombia recuerda a las víctimas del conflicto armado en un acto de memoria y solidaridad...",
    },
    {
      title:
        "Día Internacional de Conmemoración y Homenaje a las Víctimas del Terrorismo",
      summary:
        "Celebración del día internacional con homenaje a las víctimas del terrorismo.",
      date: "2026/08/21",
      category: "memoriales",
      type: "normal",
      readTime: "2 min",
      content:
        "El 21 de agosto, se celebra el Día Internacional de Conmemoración y Homenaje a las Víctimas del Terrorismo, con la participación de autoridades y comunidades locales...",
    },
    {
      title:
        "Día Internacional en Conmemoración de las Víctimas de Actos de Violencia Basados en la Religión o la Creencia.",
      summary:
        "Celebración del Día Internacional en Conmemoración de las Víctimas de Actos de Violencia Basados en la Religión o la Creencia.",
      date: "2026/08/22",
      category: "memoriales",
      type: "normal",
      readTime: "4 min",
      content:
        "El 22 de agosto, se celebra el Día Internacional en Conmemoración de las Víctimas de Actos de Violencia Basados en la Religión o la Creencia...",
    },
    {
      title: "Declaración Universal de los Derechos Humanos (DUDH)",
      summary: "Reconocimiento de derechos humanos en todo el mundo.",
      date: "2026/12/23",
      category: "memoriales",
      type: "normal",
      readTime: "5 min",
      content:
        "La Declaración Universal de los Derechos Humanos (DUDH) es una declaración internacional que establece los derechos fundamentales de las personas en todo el mundo...",
    },

    {
      title: "Conmemoración 9 de abril",
      summary: "Honraremos a las víctimas del conflicto armado en Colombia.",
      date: "2026/04/09",
      category: "convocatorias",
      type: "importante",
      readTime: "6 min",
      content:
        "Este 9️⃣ de abril, honraremos a las víctimas del conflicto armado en Colombia. \n\nEste es un día para reflexionar sobre la violencia, honrar a las víctimas y reconocer su resiliencia. 🕊️ \n\nDesde Nobsa, hacemos un llamado la NO repetición y a la construcción de paz. \n\n¡Únete a la conmemoración! 🙏\n\nTe esperamos a partir de las 5:00 p. m., en el Auditorio Municipal. ",
      images: ["/images/Conmemoraciones.jpeg"],
    },
    {
      title: "Convocatoria TU VOZ CONSTRUYE TERRITORIO",
      summary:
        "Te invitamos a conformar el Consejo Municipal de Paz, Reconciliación y Convivencia",
      date: "2026/02/09",
      category: "convocatorias",
      type: "importante",
      readTime: "6 min",
      content:
        "Haz parte del Concejo Municipal de Paz, Reconciliación y Convivencia  de Nobsa 🕊️, un espacio de participación ciudadana donde construimos políticas de paz y promovemos el respeto por los derechos humanos. \n\nDesde la Secretaría de Gobierno extendemos esta convocaria a organizaciones sociales, comunidad víctima, juntas de acción comunal o sociedad civil organizada, este espacio es para ti. \n\nPostúlate antes del 13 de febrero y sigamos consolidando juntos a Nobsa como territorio de paz, ¡A Otro Nivel! ✌️🤍",
      images: [
        "/images/Convocatoria1.jpeg",
        "/images/Convocatoria2.jpeg",
        "/images/Convocatoria3.jpeg",
      ],
    },

    {
      title: "I Oferta Presencial y a Distancia SENA 2026",
      summary:
        "Convocatoria para postulantes a la I Oferta Presencial y a Distancia SENA 2026",
      date: "2026/01/29",
      category: "convocatorias",
      type: "importante",
      readTime: "6 min",
      content:
        "📢 La Alcaldía Municipal de Nobsa te invita a postularte a la I Oferta Presencial y a Distancia SENA 2026. \n\n 🗓️ Inscripciones: del 29 de enero al 3 de febrero \n\n Programas técnicos, auxiliares, operarios y tecnólogos en modalidad presencial y virtual en Boyacá. \n\n👉 Inscríbete en: www.betowa.sena.edu.co \n\nℹ️ La población víctima y vulnerable cuenta con acceso preferente. \n\n¡Proyectate hacia tu futuro y fórmate con el SENA!",
      images: ["/images/Sena1.jpeg", "/images/Sena2.jpeg"],
    },
  ];

  const filteredNews = news.filter(
    (item) =>
      selectedCategory === "todas" || item.category === selectedCategory,
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
            Eventos y Conmemoraciones
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
        {/* News Grid tipo masonry */}
        <div className="columns-1 md:columns-2 lg:columns-3 gap-6 mb-12 space-y-6">
          {filteredNews.length > 0 ? (
            filteredNews.map((article, index) => (
              <article
                key={index}
                className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow break-inside-avoid mb-6"
              >
                <div className="p-6">
                  <div className="flex items-center space-x-3 mb-4">
                    <div
                      className={`flex items-center space-x-2 px-3 py-1 rounded-full border ${getTypeColor(
                        article.type,
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

                  <p className="text-black-600 mb-4 text-sm text-justify whitespace-pre-line">
                    {article.content}
                  </p>

                  {/* Imágenes */}
                  {article.images && (
                    <div className="mt-4 space-y-4">
                      {article.images.map((img, i) => (
                        <img
                          key={i}
                          src={img}
                          alt={`Imagen ${i + 1}`}
                          className="rounded-lg w-full h-auto object-cover"
                        />
                      ))}
                    </div>
                  )}

                  <div className="flex items-center justify-between text-sm text-gray-500 mt-4">
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
