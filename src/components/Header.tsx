import React from 'react';
import { Home, Menu, X, Phone, MapPin } from 'lucide-react';

interface HeaderProps {
  currentSection: string;
  onSectionChange: (section: string) => void;
  isMobileMenuOpen: boolean;
  setIsMobileMenuOpen: (open: boolean) => void;
}

const Header: React.FC<HeaderProps> = ({
  currentSection,
  onSectionChange,
  isMobileMenuOpen,
  setIsMobileMenuOpen
}) => {
  const menuItems = [
    { id: 'inicio', label: 'Inicio', icon: Home },
    { id: 'servicios', label: 'Servicios' },
    { id: 'instituciones', label: 'Instituciones' },
    { id: 'mapa', label: 'Mapa de Servicios', icon: MapPin },
    { id: 'documentos', label: 'Documentos' },
    { id: 'noticias', label: 'Noticias' },
    { id: 'testimonios', label: 'Testimonios' },
    { id: 'preguntas', label: 'Preguntas Frecuentes' },
    { id: 'contacto', label: 'Contacto', icon: Phone }
  ];

  return (
    <header className="bg-gradient-to-r from-blue-600 to-blue-700 text-white shadow-lg sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
              <span className="text-blue-600 font-bold text-lg">N</span>
            </div>
            <div>
              <h1 className="text-xl font-bold">Nobsa Te Acompaña</h1>
              <p className="text-blue-100 text-sm">Servicios para Víctimas del Conflicto</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex space-x-1">
            {menuItems.slice(0, 5).map((item) => (
              <button
                key={item.id}
                onClick={() => onSectionChange(item.id)}
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                  currentSection === item.id
                    ? 'bg-blue-500 text-white'
                    : 'text-blue-100 hover:bg-blue-500 hover:text-white'
                }`}
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 rounded-md hover:bg-blue-500 transition-colors"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="lg:hidden py-4 border-t border-blue-500">
            <nav className="flex flex-col space-y-2">
              {menuItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => {
                    onSectionChange(item.id);
                    setIsMobileMenuOpen(false);
                  }}
                  className={`flex items-center space-x-3 px-4 py-3 rounded-md text-left transition-colors ${
                    currentSection === item.id
                      ? 'bg-blue-500 text-white'
                      : 'text-blue-100 hover:bg-blue-500 hover:text-white'
                  }`}
                >
                  {item.icon && <item.icon size={20} />}
                  <span className="font-medium">{item.label}</span>
                </button>
              ))}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;