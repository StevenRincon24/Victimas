import React from "react";
import {
  Heart,
  Phone,
  Mail,
  MapPin,
  ExternalLink,
  Facebook,
  Instagram,
  Youtube,
} from "lucide-react";

const Footer: React.FC = () => {
  const institutions = [
    { name: "Unidad para las Víctimas", href: "www.unidadvictimas.gov.co" },
    { name: "Alcaldía de Nobsa", href: "www.nobsa-boyaca.gov.co" },
    { name: "Gobernación de Boyacá", href: "www.boyaca.gov.co" },
    {
      name: "Personería Municipal",
      href: "http://www.personeria-nobsa-boyaca.gov.co/",
    },
  ];

  return (
    <footer className="bg-gray-800 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 justify-center">
          {" "}
          {/* Logo and Description */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center">
                <Heart size={24} />
              </div>
              <div>
                <h3 className="text-xl font-bold">Nobsa Te Acompaña</h3>
                <p className="text-gray-300 text-sm">Servicios para Víctimas</p>
              </div>
            </div>
            <p className="text-gray-300 mb-4">
              Información completa sobre servicios, programas y apoyo disponible
              para víctimas del conflicto en el municipio de Nobsa.
            </p>
            {/* Social Media Icons */}
            {/*}
            <div className="flex space-x-3">
              <a
                href="#"
                className="text-gray-300 hover:text-white transition-colors"
              >
                <Facebook size={20} />
              </a>
              <a
                href="#"
                className="text-gray-300 hover:text-white transition-colors"
              >
                <Instagram size={20} />
              </a>
              <a
                href="#"
                className="text-gray-300 hover:text-white transition-colors"
              >
                <Youtube size={20} />
              </a>
            </div>*/}
          </div>
          {/* Quick Links */}
          {/* Institutions */}
          <div>
            <h4 className="text-lg font-bold mb-4">Instituciones</h4>
            <ul className="space-y-2">
              {institutions.map((institution, index) => (
                <li key={index}>
                  <a
                    href={institution.href}
                    className="text-gray-300 hover:text-white transition-colors text-sm flex items-center space-x-1"
                  >
                    <span>{institution.name}</span>
                    <ExternalLink size={12} />
                  </a>
                </li>
              ))}
            </ul>
          </div>
          {/* Resources */}
        </div>

        {/* Contact Information */}
        <div className="border-t border-gray-700 mt-8 pt-8">
          <div className="grid md:grid-cols-3 gap-6">
            <div className="flex items-center space-x-3">
              <Phone size={20} className="text-blue-400" />
              <div>
                <p className="font-medium">Línea de Atención</p>
                <p className="text-gray-300 text-sm">
                  123 - 155 - 018000 91 1119
                </p>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <Mail size={20} className="text-blue-400" />
              <div>
                <p className="font-medium">Correo Electrónico</p>
                <p className="text-gray-300 text-sm">
                  gestionsocial@nobsa-boyaca.gov.co
                </p>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <MapPin size={20} className="text-blue-400" />
              <div>
                <p className="font-medium">Dirección</p>
                <p className="text-gray-300 text-sm">
                  Secretaría de la Mujer y Programas Sociales - Antigua
                  Alcaldía, segundo piso
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Emergency Banner */}
        <div className="bg-red-600 rounded-lg p-6 mt-8">
          <div className="text-center">
            <h4 className="text-xl font-bold mb-2">
              ¿Necesitas ayuda urgente?
            </h4>
            <p className="mb-4">
              Llama inmediatamente a nuestras líneas de emergencia
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <span className="bg-white text-red-600 px-4 py-2 rounded-lg font-bold">
                123
              </span>
              <span className="bg-white text-red-600 px-4 py-2 rounded-lg font-bold">
                155
              </span>
              <span className="bg-white text-red-600 px-4 py-2 rounded-lg font-bold">
                018000 91 1119
              </span>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 mt-8 pt-6 text-center">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-300 text-sm">
              © 2025 Nobsa Te Acompaña. Todos los derechos reservados.
            </p>
            <div className="flex space-x-6 text-sm">
              <a
                href="#"
                className="text-gray-300 hover:text-white transition-colors"
              >
                Política de Privacidad
              </a>
              <a
                href="#"
                className="text-gray-300 hover:text-white transition-colors"
              >
                Términos de Uso
              </a>
              <a
                href="#"
                className="text-gray-300 hover:text-white transition-colors"
              >
                Accesibilidad
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
