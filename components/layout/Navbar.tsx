'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useTheme } from '@/components/interactive/ThemeProvider';
import { Button } from '@/components/ui/Button';
import { SearchModal } from '@/components/interactive/SearchModal';
import { scrollToSection } from '@/lib/utils';
import { Sun, Moon, Search, Menu, X, Command, Code2 } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export const Navbar = () => {
  const { theme, toggleTheme } = useTheme();
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const sections = ['hero', 'about', 'skills', 'projects', 'resume', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'Home', id: 'hero' },
    { label: 'About', id: 'about' },
    { label: 'Skills', id: 'skills' },
    { label: 'Projects', id: 'projects' },
    { label: 'Résumé', id: 'resume' },
    { label: 'Contact', id: 'contact' }
  ];

  const handleNavClick = (id: string) => {
    setIsMobileMenuOpen(false);
    scrollToSection(id);
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'glass-panel py-3 shadow-sm'
            : 'bg-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo / Brand */}
            <button
              onClick={() => handleNavClick('hero')}
              className="flex items-center gap-2.5 group cursor-pointer"
            >
              <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-indigo-600 to-indigo-500 flex items-center justify-center text-white font-black text-lg shadow-md shadow-indigo-500/20 group-hover:scale-105 transition-transform">
                TD
              </div>
              <div className="text-left hidden sm:block">
                <div className="font-bold text-slate-900 dark:text-slate-100 text-sm tracking-tight flex items-center gap-1.5">
                  <span>Tshiamo Diphoko</span>
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                </div>
                <div className="text-[11px] text-slate-500 dark:text-slate-400 font-medium">
                  Modern Full Stack Developer
                </div>
              </div>
            </button>

            {/* Desktop Nav Items */}
            <nav className="hidden md:flex items-center gap-1 bg-slate-100/80 dark:bg-slate-900/80 p-1.5 rounded-2xl border border-slate-200/80 dark:border-slate-800/80 backdrop-blur-md">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
                    activeSection === item.id
                      ? 'bg-white dark:bg-slate-800 text-indigo-600 dark:text-indigo-400 shadow-sm'
                      : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </nav>

            {/* Actions: Search, Theme Toggle, CTA */}
            <div className="flex items-center gap-2">
              {/* Cmd+K Search Button */}
              <button
                onClick={() => setIsSearchOpen(true)}
                aria-label="Open search dialog"
                className="flex items-center gap-2 px-3 py-2 rounded-xl text-xs text-slate-500 dark:text-slate-400 bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-indigo-500/40 dark:hover:border-indigo-500/40 transition-colors"
              >
                <Search className="w-3.5 h-3.5 text-indigo-500" />
                <span className="hidden lg:inline">Search...</span>
                <kbd className="hidden sm:inline-flex items-center gap-0.5 text-[10px] font-mono font-medium px-1.5 py-0.5 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded text-slate-400">
                  <Command className="w-2.5 h-2.5" /> K
                </kbd>
              </button>

              {/* Theme Toggle */}
              <button
                onClick={toggleTheme}
                aria-label="Toggle color theme"
                className="p-2.5 rounded-xl bg-slate-100 dark:bg-slate-900 text-slate-600 dark:text-slate-400 border border-slate-200 dark:border-slate-800 hover:bg-slate-200 dark:hover:bg-slate-800 transition-colors cursor-pointer"
              >
                {theme === 'dark' ? (
                  <Sun className="w-4 h-4 text-amber-400" />
                ) : (
                  <Moon className="w-4 h-4 text-indigo-600" />
                )}
              </button>

              {/* CTA Button */}
              <div className="hidden sm:block">
                <Button
                  size="sm"
                  onClick={() => handleNavClick('contact')}
                  className="shadow-sm"
                >
                  Get In Touch
                </Button>
              </div>

              {/* Mobile Hamburger Button */}
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                aria-label="Toggle navigation menu"
                className="md:hidden p-2 rounded-xl bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-400"
              >
                {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu Drawer */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden glass-panel border-b border-slate-200 dark:border-slate-800 px-4 py-4 mt-2 space-y-2 overflow-hidden"
            >
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`w-full text-left px-4 py-3 rounded-xl text-sm font-semibold transition-colors flex items-center justify-between ${
                    activeSection === item.id
                      ? 'bg-indigo-50 dark:bg-indigo-950/60 text-indigo-600 dark:text-indigo-400'
                      : 'text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800'
                  }`}
                >
                  <span>{item.label}</span>
                  {activeSection === item.id && (
                    <span className="w-1.5 h-1.5 rounded-full bg-indigo-600 dark:bg-indigo-400" />
                  )}
                </button>
              ))}
              <div className="pt-2">
                <Button
                  className="w-full"
                  onClick={() => handleNavClick('contact')}
                >
                  Get In Touch
                </Button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* Command Palette Modal */}
      <SearchModal isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} />
    </>
  );
};
