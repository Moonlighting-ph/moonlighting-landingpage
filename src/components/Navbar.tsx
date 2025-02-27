
import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Moon, Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const isClientPage = location.pathname === '/client';

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-background/80 backdrop-blur-md py-3 shadow-md'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        <Link to="/" className="flex items-center group">
          <Moon className="h-6 w-6 text-primary mr-2 group-hover:rotate-12 transition-transform duration-300" />
          <span className="text-xl font-display font-bold">moonlighting.ph</span>
        </Link>

        {/* CTA Buttons */}
        <div className="hidden md:flex items-center space-x-4">
          {/* Sign In button hidden for now */}
          {/* <Button variant="outline" className="rounded-full px-6">
            Sign In
          </Button> */}
          {isClientPage ? (
            <Link to="/">
              <Button className="rounded-full px-6 bg-primary hover:bg-primary/90 text-white">
                I'm a medical professional
              </Button>
            </Link>
          ) : (
            <Link to="/client">
              <Button className="rounded-full px-6 bg-primary hover:bg-primary/90 text-white">
                I'm a medical provider
              </Button>
            </Link>
          )}
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <Button variant="ghost" size="icon" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-background shadow-lg animate-fade-in">
          <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            <div className="flex flex-col space-y-2 pt-2">
              {/* Sign In button hidden for now */}
              {/* <Button variant="outline" className="w-full">
                Sign In
              </Button> */}
              {isClientPage ? (
                <Link to="/">
                  <Button className="w-full bg-primary hover:bg-primary/90 text-white">
                    I'm a medical professional
                  </Button>
                </Link>
              ) : (
                <Link to="/client">
                  <Button className="w-full bg-primary hover:bg-primary/90 text-white">
                    I'm a medical provider
                  </Button>
                </Link>
              )}
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
