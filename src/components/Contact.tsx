import React, { useState } from 'react';
import { Phone, Mail, MapPin, Clock, MessageCircle, Send, Users, AlertCircle } from 'lucide-react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
    urgent: false
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value
    }));
  };

  const emergencyContacts = [
    { name: 'Línea Nacional de Emergencia', number: '123', description: 'Atención 24/7 para emergencias' },
    { name: 'Línea de Atención a Víctimas', number: '155', description: 'Atención especializada' },
    { name: 'Unidad para las Víctimas', number: '018000 91 1119', description: 'Línea gratuita nacional' }
  ];

  const officeHours = [
    { day: 'Lunes a Viernes', hours: '7:00 AM - 5:00 PM', type: 'regular' },
    { day: 'Sábados', hours: '8:00 AM - 12:00 PM', type: 'limited' },
    { day: 'Domingos y Festivos', hours: 'Cerrado', type: 'closed' }
  ];

  const contactMethods = [
    {
      icon: Phone,
      title: 'Teléfono',
      content: '(608) 123-4567',
      description: 'Llamadas locales y WhatsApp',
      color: 'bg-green-100 text-green-600'
    },
    {
      icon: Mail,
      title: 'Correo Electrónico',
      content: 'atencion@nobsa.gov.co',
      description: 'Respuesta en 24 horas',
      color: 'bg-blue-100 text-blue-600'
    },
    {
      icon: MapPin,
      title: 'Oficina Principal',
      content: 'Plaza Principal, Nobsa',
      description: 'Atención presencial',
      color: 'bg-orange-100 text-orange-600'
    },
    {
      icon: MessageCircle,
      title: 'Chat en Línea',
      content: 'Disponible en el sitio web',
      description: 'Lunes a Viernes 8AM-5PM',
      color: 'bg-purple-100 text-purple-600'
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Contáctanos
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Estamos aquí para ayudarte. Ponte en contacto con nosotros a través de cualquiera 
            de estos canales y recibe la asistencia que necesitas.
          </p>
        </div>

        {/* Emergency Banner */}
        <div className="bg-red-50 border border-red-200 rounded-lg p-6 mb-12">
          <div className="flex items-center space-x-3 mb-4">
            <AlertCircle size={24} className="text-red-600" />
            <h3 className="text-lg font-bold text-red-800">¿Necesitas ayuda urgente?</h3>
          </div>
          <div className="grid sm:grid-cols-3 gap-4">
            {emergencyContacts.map((contact, index) => (
              <div key={index} className="bg-white rounded-lg p-4 border border-red-200">
                <p className="font-bold text-red-800 text-xl">{contact.number}</p>
                <p className="font-medium text-gray-800">{contact.name}</p>
                <p className="text-sm text-gray-600">{contact.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div>
            <h3 className="text-2xl font-bold text-gray-800 mb-6">Información de Contacto</h3>
            
            <div className="space-y-6 mb-8">
              {contactMethods.map((method, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${method.color}`}>
                    <method.icon size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-800">{method.title}</h4>
                    <p className="text-gray-900 font-medium">{method.content}</p>
                    <p className="text-gray-600 text-sm">{method.description}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Office Hours */}
            <div className="bg-gray-50 rounded-lg p-6">
              <h4 className="font-bold text-gray-800 mb-4 flex items-center space-x-2">
                <Clock size={20} />
                <span>Horarios de Atención</span>
              </h4>
              <div className="space-y-3">
                {officeHours.map((schedule, index) => (
                  <div key={index} className="flex justify-between items-center">
                    <span className="text-gray-700">{schedule.day}</span>
                    <span className={`font-medium ${
                      schedule.type === 'closed' ? 'text-red-600' : 
                      schedule.type === 'limited' ? 'text-yellow-600' : 'text-green-600'
                    }`}>
                      {schedule.hours}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Social Media */}
            <div className="mt-8">
              <h4 className="font-bold text-gray-800 mb-4">Síguenos en Redes Sociales</h4>
              <div className="flex space-x-4">
                <button className="bg-blue-600 text-white p-3 rounded-lg hover:bg-blue-700 transition-colors">
                  Facebook
                </button>
                <button className="bg-green-600 text-white p-3 rounded-lg hover:bg-green-700 transition-colors">
                  WhatsApp
                </button>
                <button className="bg-red-600 text-white p-3 rounded-lg hover:bg-red-700 transition-colors">
                  YouTube
                </button>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <h3 className="text-2xl font-bold text-gray-800 mb-6">Envíanos un Mensaje</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Nombre completo *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                    Teléfono *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  Correo electrónico
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                  Asunto *
                </label>
                <select
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  <option value="">Selecciona un asunto</option>
                  <option value="registro">Registro en el RUV</option>
                  <option value="reparaciones">Reparaciones</option>
                  <option value="ayuda">Ayuda humanitaria</option>
                  <option value="documentos">Documentos y trámites</option>
                  <option value="otros">Otros</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Mensaje *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Describe tu consulta o solicitud..."
                />
              </div>

              <div className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  id="urgent"
                  name="urgent"
                  checked={formData.urgent}
                  onChange={handleChange}
                  className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500"
                />
                <label htmlFor="urgent" className="text-sm text-gray-700">
                  Marcar como urgente
                </label>
              </div>

              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700 transition-colors font-medium flex items-center justify-center space-x-2"
              >
                <Send size={20} />
                <span>Enviar Mensaje</span>
              </button>
            </form>
          </div>
        </div>

        {/* Additional Help Section */}
        <div className="mt-16 bg-blue-50 rounded-lg p-8">
          <div className="text-center">
            <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <Users size={32} className="text-white" />
            </div>
            <h3 className="text-2xl font-bold text-gray-800 mb-4">
              Puntos de Atención Presencial
            </h3>
            <p className="text-gray-600 mb-6">
              Si prefieres recibir atención personalizada, visita nuestros puntos de atención 
              donde nuestro equipo te ayudará con cualquier trámite o consulta.
            </p>
            <div className="grid sm:grid-cols-2 gap-4 max-w-2xl mx-auto">
              <div className="bg-white rounded-lg p-4">
                <h4 className="font-bold text-gray-800 mb-2">Oficina Principal</h4>
                <p className="text-gray-600">Plaza Principal, Nobsa</p>
                <p className="text-sm text-gray-500">Lunes a Viernes: 7:00 AM - 5:00 PM</p>
              </div>
              <div className="bg-white rounded-lg p-4">
                <h4 className="font-bold text-gray-800 mb-2">Punto Móvil</h4>
                <p className="text-gray-600">Diferentes ubicaciones</p>
                <p className="text-sm text-gray-500">Consultar horarios específicos</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;