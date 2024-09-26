import React, { ReactNode } from 'react';
import Sidebar from './Sidebar';

interface LayoutProps {
  children: ReactNode;
  onSelectDepartment: (department: string) => void;
  selectedDepartment: string;
  onSearch: (query: string) => void;
  searchQuery: string;
  clearSearchQuery: () => void;
}

const Layout: React.FC<LayoutProps> = ({ 
  children, 
  onSelectDepartment, 
  selectedDepartment, 
  onSearch, 
  searchQuery,
  clearSearchQuery 
}) => {
  return (
    <div className="flex h-screen bg-gray-100">
      <Sidebar 
        onSelectDepartment={onSelectDepartment}
        selectedDepartment={selectedDepartment}
        onSearch={onSearch}
        searchQuery={searchQuery}
        clearSearchQuery={clearSearchQuery}
      />
      <main className="flex-1 overflow-x-hidden overflow-y-auto bg-white">
        {children}
      </main>
    </div>
  );
};

export default Layout;