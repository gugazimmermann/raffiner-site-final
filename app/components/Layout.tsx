import { Link } from "react-router";
import { useState, useEffect, useRef, memo, useMemo, useCallback } from "react";
import { useNavigation } from "../hooks/useNavigation";
import { Icon } from "./ui/Icon";
import { Button } from "./ui/Button";
import { SITE_CONFIG, SOCIAL_LINKS } from "../lib/constants";

interface LayoutProps {
  children: React.ReactNode;
}

export const Layout = memo(function Layout({ children }: LayoutProps) {
  const { isActive, isServicesActive, getNavigationItems } = useNavigation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  
  const navigationItems = useMemo(() => getNavigationItems(), [getNavigationItems]);

  const handleClickOutside = useCallback((event: MouseEvent) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
      setIsServicesOpen(false);
    }
  }, []);

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [handleClickOutside]);

  const toggleMenu = useCallback(() => {
    setIsMenuOpen(prev => !prev);
  }, []);

  const toggleServices = useCallback(() => {
    setIsServicesOpen(prev => !prev);
  }, []);

  const closeMenu = useCallback(() => {
    setIsMenuOpen(false);
  }, []);

  const closeServices = useCallback(() => {
    setIsServicesOpen(false);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-[rgb(240_238_235)] via-[rgb(221_218_212)] to-[rgb(200_197_192)]">
      <header className="bg-white/95 backdrop-blur-sm shadow-xl border-b border-gray-100 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link to="/" className="flex items-center space-x-3">
              <img 
                src="/logo/logo_h.png" 
                alt={SITE_CONFIG.name}
                className="h-12 w-auto"
              />
            </Link>
            <nav className="hidden lg:flex space-x-6">
              {navigationItems.map((item) => {
                if (item.children) {
                  return (
                    <div key={item.path} className="relative" ref={dropdownRef}>
                      <button
                        onClick={toggleServices}
                        className={`flex items-center space-x-1 transition-colors ${
                          isServicesActive() 
                            ? 'text-[rgb(63_9_22)] font-semibold' 
                            : 'text-gray-600 hover:text-[rgb(63_9_22)]'
                        }`}
                      >
                        <span>{item.label}</span>
                        <Icon 
                          name="chevronDown" 
                          className={`transition-transform ${isServicesOpen ? 'rotate-180' : ''}`}
                          size="sm"
                        />
                      </button>
                      
                      {isServicesOpen && (
                        <div className="absolute top-full left-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-200 py-2 z-50">
                          {item.children.map((child) => (
                            <Link 
                              key={child.path}
                              to={child.path} 
                              className={`block px-4 py-2 text-sm transition-colors ${isActive(child.path) ? 'text-[rgb(63_9_22)] bg-[rgb(221_218_212)]' : 'text-gray-600 hover:text-[rgb(63_9_22)] hover:bg-[rgb(221_218_212)]'}`}
                              onClick={closeServices}
                            >
                              {child.label}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  );
                }
                
                return item.external ? (
                  <a 
                    key={item.path}
                    href={item.path} 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="transition-colors text-gray-600 hover:text-[rgb(63_9_22)]"
                  >
                    {item.label}
                  </a>
                ) : (
                  <Link 
                    key={item.path}
                    to={item.path} 
                    className={`transition-colors ${isActive(item.path) ? 'text-[rgb(63_9_22)] font-semibold' : 'text-gray-600 hover:text-[rgb(63_9_22)]'}`}
                  >
                    {item.label}
                  </Link>
                );
              })}
            </nav>

            <button
              onClick={toggleMenu}
              className="lg:hidden p-2 text-gray-600 hover:text-[rgb(63_9_22)] transition-colors"
            >
              <Icon name="menu" size="md" />
            </button>
            
            <Button
              href={SOCIAL_LINKS.whatsapp}
              variant="secondary"
              size="md"
              external
              className="hidden lg:flex"
            >
              <Icon name="whatsapp" size="sm" />
              <span>WhatsApp</span>
            </Button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="lg:hidden bg-white border-t border-gray-200 shadow-lg">
            <div className="px-4 py-4 space-y-2">
              {navigationItems.map((item) => {
                if (item.children) {
                  return item.children.map((child) => (
                    <Link 
                      key={child.path}
                      to={child.path} 
                      className={`block px-4 py-2 rounded-lg transition-colors ${isActive(child.path) ? 'text-[rgb(63_9_22)] bg-[rgb(221_218_212)]' : 'text-gray-600 hover:text-[rgb(63_9_22)] hover:bg-[rgb(221_218_212)]'}`}
                      onClick={closeMenu}
                    >
                      {child.label}
                    </Link>
                  ));
                }
                
                return item.external ? (
                  <a 
                    key={item.path}
                    href={item.path} 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block px-4 py-2 rounded-lg transition-colors text-gray-600 hover:text-[rgb(63_9_22)] hover:bg-[rgb(221_218_212)]"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.label}
                  </a>
                ) : (
                  <Link 
                    key={item.path}
                    to={item.path} 
                    className={`block px-4 py-2 rounded-lg transition-colors ${isActive(item.path) ? 'text-[rgb(63_9_22)] bg-[rgb(221_218_212)]' : 'text-gray-600 hover:text-[rgb(63_9_22)] hover:bg-[rgb(221_218_212)]'}`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.label}
                  </Link>
                );
              })}
            </div>
          </div>
        )}
      </header>

      <main>
        {children}
      </main>

      <footer className="bg-[rgb(63_9_22)] text-white py-12 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <img 
                  src="/logo/logo_h_w.png" 
                  alt={SITE_CONFIG.name}
                  className="h-10 w-auto"
                />
              </div>
              <p className="text-gray-300">{SITE_CONFIG.description}</p>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Navegação</h4>
              <ul className="space-y-2 text-gray-300">
                {navigationItems.map((item) => {
                  if (item.children) {
                    return item.children.map((child) => (
                      <li key={child.path}>
                        <Link to={child.path} className="hover:text-rose-400 transition-colors">
                          {child.label}
                        </Link>
                      </li>
                    ));
                  }
                  return (
                    <li key={item.path}>
                      {item.external ? (
                        <a 
                          href={item.path} 
                          target="_blank"
                          rel="noopener noreferrer"
                          className="hover:text-rose-400 transition-colors"
                        >
                          {item.label}
                        </a>
                      ) : (
                        <Link to={item.path} className="hover:text-rose-400 transition-colors">
                          {item.label}
                        </Link>
                      )}
                    </li>
                  );
                })}
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Contato</h4>
              <ul className="space-y-2 text-gray-300">
                <li>
                  <a 
                    href={SOCIAL_LINKS.whatsapp}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-green-400 transition-colors"
                  >
                    WhatsApp: {SITE_CONFIG.phone}
                  </a>
                </li>
                <li>
                  <a 
                    href={SOCIAL_LINKS.email}
                    className="hover:text-blue-400 transition-colors"
                  >
                    E-mail: {SITE_CONFIG.email}
                  </a>
                </li>
                <li>
                  <a 
                    href={SOCIAL_LINKS.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-pink-400 transition-colors"
                  >
                    Instagram: {SITE_CONFIG.instagram}
                  </a>
                </li>
                <li>
                  <a 
                    href={SOCIAL_LINKS.youtube}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-red-400 transition-colors"
                  >
                    YouTube: @raffiner.mesaposta
                  </a>
                </li>
                <li>
                  <a 
                    href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent("R. Alexandre Fleming, 289 - Centro - Itajaí / SC")}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-rose-400 transition-colors"
                  >
                    Endereço: R. Alexandre Fleming, 289 - Centro - Itajaí / SC
                  </a>
                </li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Redes Sociais</h4>
              <div className="flex space-x-4">
                <a href={SOCIAL_LINKS.whatsapp} target="_blank" rel="noopener noreferrer" className="text-green-400 hover:text-green-300 transition-colors">
                  <Icon name="whatsapp" size="md" />
                </a>
                <a href={SOCIAL_LINKS.instagram} target="_blank" rel="noopener noreferrer" className="text-pink-400 hover:text-pink-300 transition-colors">
                  <Icon name="instagram" size="md" />
                </a>
                <a href={SOCIAL_LINKS.youtube} target="_blank" rel="noopener noreferrer" className="text-red-400 hover:text-red-300 transition-colors">
                  <Icon name="youtube" size="md" />
                </a>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-300">
            <p>&copy; {new Date().getFullYear()} {SITE_CONFIG.name}. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
});
