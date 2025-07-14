import React from "react";
import { MapPin, Phone, Clock, ExternalLink, Navigation } from "lucide-react";

const ServiceMap: React.FC = () => {
  const servicePoints = [
    {
      name: "Alcaldía de Nobsa",
      type: "Punto de Atención Principal",
      address: "Plaza Principal, Nobsa, Boyacá",
      coordinates: "5.7685° N, 72.9417° O",
      phone: "(608) 123-4567",
      hours: "Lunes a Viernes: 7:00 AM - 5:00 PM",
      services: [
        "Registro de víctimas",
        "Atención psicosocial",
        "Trámites administrativos",
      ],
      color: "bg-blue-500",
    },
    {
      name: "Personería Municipal",
      type: "Defensoría del Pueblo",
      address: "Calle 12 #3-45, Nobsa",
      coordinates: "5.7690° N, 72.9420° O",
      phone: "(608) 123-4568",
      hours: "Lunes a Viernes: 8:00 AM - 4:00 PM",
      services: ["Asesoría jurídica", "Derechos humanos", "Mediación"],
      color: "bg-green-500",
    },
    {
      name: "Estación de Policía",
      type: "Seguridad y Protección",
      address: "Carrera 8 #10-15, Nobsa",
      coordinates: "5.7700° N, 72.9425° O",
      phone: "(608) 123-4569",
      hours: "24 horas",
      services: ["Seguridad", "Denuncias", "Protección"],
      color: "bg-yellow-500",
    },
    {
      name: "Centro de Salud",
      type: "Atención Médica",
      address: "Calle 10 #5-20, Nobsa",
      coordinates: "5.7675° N, 72.9410° O",
      phone: "(608) 123-4570",
      hours: "Lunes a Viernes: 7:00 AM - 6:00 PM",
      services: ["Atención médica", "Salud mental", "Medicamentos"],
      color: "bg-red-500",
    },
    {
      name: "Fiscalía - Punto de Atención",
      type: "Justicia",
      address: "Calle 13 #4-30, Nobsa",
      coordinates: "5.7695° N, 72.9430° O",
      phone: "(608) 123-4571",
      hours: "Lunes a Viernes: 8:00 AM - 5:00 PM",
      services: ["Denuncias penales", "Investigación", "Justicia"],
      color: "bg-purple-500",
    },
    {
      name: "Inspección de Policía",
      type: "Autoridad Local",
      address: "Carrera 7 #11-25, Nobsa",
      coordinates: "5.7680° N, 72.9415° O",
      phone: "(608) 123-4572",
      hours: "Lunes a Viernes: 8:00 AM - 5:00 PM",
      services: ["Policía judicial", "Contravenciones", "Mediación"],
      color: "bg-orange-500",
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Mapa de Servicios
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Encuentra fácilmente todos los puntos de atención en Nobsa. Aquí
            tienes la información completa para acceder a cada servicio.
          </p>
        </div>

        <div className="mb-12">
          <img
            src="/images/RutaAtencion.jpg" // Ruta relativa a la carpeta "public"
            alt="Apoyo a víctimas en Nobsa"
            className="mx-auto rounded-lg shadow-lg max-w-3xl w-full"
          />
        </div>
        {/* Map Placeholder */}
        {/*div className="bg-gray-100 rounded-lg p-8 mb-12 text-center">
          <div className="w-20 h-20 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
            <MapPin size={40} className="text-white" />
          </div>
          <h3 className="text-xl font-bold text-gray-800 mb-2">
            Mapa Interactivo
          </h3>
          <p className="text-gray-600 mb-4">
            Visualiza todos los puntos de atención en el mapa de Nobsa
          </p>
          <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors flex items-center space-x-2 mx-auto">
            <Navigation size={20} />
            <span>Abrir Mapa Interactivo</span>
          </button>
        </div>
        */}
        {/* Service Points Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {servicePoints.map((point, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
            >
              <div className={`${point.color} p-4 text-white`}>
                <div className="flex items-center space-x-3">
                  <MapPin size={24} />
                  <div>
                    <h3 className="font-bold text-lg">{point.name}</h3>
                    <p className="text-sm opacity-90">{point.type}</p>
                  </div>
                </div>
              </div>

              <div className="p-6">
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <MapPin size={18} className="text-gray-500 mt-1" />
                    <div>
                      <p className="text-gray-700 font-medium">
                        {point.address}
                      </p>
                      <p className="text-gray-500 text-sm">
                        {point.coordinates}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-3">
                    <Phone size={18} className="text-gray-500" />
                    <p className="text-gray-700">{point.phone}</p>
                  </div>

                  <div className="flex items-start space-x-3">
                    <Clock size={18} className="text-gray-500 mt-1" />
                    <p className="text-gray-700">{point.hours}</p>
                  </div>
                </div>

                <div className="mt-6">
                  <h4 className="font-bold text-gray-800 mb-3">
                    Servicios disponibles:
                  </h4>
                  <div className="space-y-2">
                    {point.services.map((service, serviceIndex) => (
                      <div
                        key={serviceIndex}
                        className="flex items-center space-x-2"
                      >
                        <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                        <span className="text-gray-700 text-sm">{service}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-6 flex space-x-3">
                  <button className="flex-1 bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors text-sm">
                    Llamar
                  </button>
                  <button className="flex-1 border border-blue-600 text-blue-600 py-2 px-4 rounded-lg hover:bg-blue-50 transition-colors text-sm">
                    Ver en Mapa
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Emergency Contact */}
        <div className="mt-12 bg-red-50 border border-red-200 rounded-lg p-8">
          <div className="flex items-center space-x-4 mb-4">
            <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center">
              <Phone size={32} className="text-white" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-red-800">
                Línea de Emergencia
              </h3>
              <p className="text-red-600">
                Para situaciones que requieren atención inmediata
              </p>
            </div>
          </div>
          <div className="grid sm:grid-cols-2 gap-4">
            <div className="bg-white p-4 rounded-lg">
              <p className="text-red-800 font-bold text-2xl">123</p>
              <p className="text-gray-600">Línea de emergencia nacional</p>
            </div>
            <div className="bg-white p-4 rounded-lg">
              <p className="text-red-800 font-bold text-2xl">155</p>
              <p className="text-gray-600">Línea de atención a víctimas</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceMap;
