import React, { createContext, useContext, useState, useEffect } from 'react';

export type PageType = 'protocolo' | 'clinica';

interface NavigationContextType {
  currentPage: PageType;
  navigateTo: (page: PageType, hash?: string) => void;
}

const NavigationContext = createContext<NavigationContextType | undefined>(undefined);

function getInitialPage(): PageType {
  if (typeof window === 'undefined') return 'protocolo';
  
  const path = window.location.pathname.toLowerCase();
  const search = window.location.search.toLowerCase();
  const hash = window.location.hash.toLowerCase();

  if (
    path.includes('clinica') ||
    path.includes('tratamentos') ||
    path.includes('especialidades') ||
    search.includes('page=clinica') ||
    search.includes('page=tratamentos') ||
    hash.includes('clinica') ||
    hash.includes('tratamentos')
  ) {
    return 'clinica';
  }

  return 'protocolo';
}

export const NavigationProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [currentPage, setCurrentPage] = useState<PageType>(getInitialPage);

  useEffect(() => {
    const handlePopState = () => {
      setCurrentPage(getInitialPage());
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const navigateTo = (page: PageType, hash?: string) => {
    setCurrentPage(page);

    const newPath = page === 'clinica' ? '/clinica' : '/';
    const finalUrl = hash ? `${newPath}${hash.startsWith('#') ? hash : `#${hash}`}` : newPath;

    window.history.pushState({ page }, '', finalUrl);

    if (hash) {
      const element = document.querySelector(hash.startsWith('#') ? hash : `#${hash}`);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
        return;
      }
    }

    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <NavigationContext.Provider value={{ currentPage, navigateTo }}>
      {children}
    </NavigationContext.Provider>
  );
};

export const useNavigation = (): NavigationContextType => {
  const context = useContext(NavigationContext);
  if (!context) {
    throw new Error('useNavigation must be used within a NavigationProvider');
  }
  return context;
};
