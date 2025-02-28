
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';
import { Moon } from './ui/Moon';
import { ThemeToggle } from './ThemeToggle';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  // Set up scroll listener
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Close mobile menu when location changes
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  // Determine the alternate route for the button
  const alternateRoute = location.pathname === '/client' ? '/' : '/client';
  const buttonText = location.pathname === '/client' ? "I'm a medical professional" : "I'm a medical provider";

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-background/80 backdrop-blur-lg shadow-sm' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group">
            <div className="relative p-1">
              <div className="absolute inset-0 rounded-full bg-primary opacity-20 group-hover:opacity-30 transition-opacity"></div>
              <Moon className="h-8 w-8 text-primary relative z-10" />
            </div>
            <span className="font-display font-bold text-lg sm:text-xl">moonlighting.ph</span>
          </Link>
          
          {/* Actions */}
          <div className="flex items-center gap-4">
            <ThemeToggle />
            <div className="hidden md:block">
              <Button size="sm" asChild>
                <Link to={alternateRoute}>{buttonText}</Link>
              </Button>
            </div>
            
            {/* Mobile menu button */}
            <button 
              className="md:hidden p-2 focus:outline-none" 
              onClick={toggleMobileMenu}
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile menu */}
      {isMobileMenuOpen && (
        <div className="absolute top-16 left-0 right-0 bg-background border-b md:hidden">
          <div className="container mx-auto px-4 py-4 flex flex-col gap-4">
            <Button className="w-full sm:w-auto" asChild>
              <Link to={alternateRoute}>{buttonText}</Link>
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
