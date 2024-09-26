import React from 'react';
import { Input } from "@/components/ui/input"
import { Home, BarChart2, Users, HelpCircle, Settings, Search } from 'lucide-react';

interface SidebarProps {
  onSelectDepartment: (department: string) => void;
  selectedDepartment: string;
  onSearch: (query: string) => void;
  searchQuery: string;
  clearSearchQuery: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ 
  onSelectDepartment, 
  selectedDepartment, 
  onSearch, 
  searchQuery,
  clearSearchQuery 
}) => {
  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const query = e.target.value;
    onSearch(query);
  };

  return (
    <div className="w-64 bg-white h-screen p-4 border-r border-gray-200">
      <div className="mb-6 relative">
        <Input 
          type="text" 
          placeholder="Search..." 
          value={searchQuery}
          onChange={handleSearch}
          className="w-full pl-10 bg-white focus:bg-white focus:ring-2 focus:ring-gray-200 focus:border-gray-300 focus:outline-none" 
        />
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
      </div>
      <nav className="space-y-1">
        <SidebarItem 
          icon={<Home size={20} />} 
          label="Home" 
          active={selectedDepartment === 'all'} 
          onClick={() => {
            onSelectDepartment('all');
            clearSearchQuery();
          }}
        />
        <SidebarItem 
          icon={<BarChart2 size={20} />} 
          label="Marketing & Sales" 
          active={selectedDepartment === 'marketing'} 
          onClick={() => onSelectDepartment('marketing')}
        />
        <SidebarItem 
          icon={<Users size={20} />} 
          label="BizOps" 
          active={selectedDepartment === 'bizops'} 
          onClick={() => onSelectDepartment('bizops')}
        />
        <SidebarItem 
          icon={<HelpCircle size={20} />} 
          label="Customer Success" 
          active={selectedDepartment === 'customerSuccess'} 
          onClick={() => onSelectDepartment('customerSuccess')}
        />
        <SidebarItem 
          icon={<Settings size={20} />} 
          label="Product" 
          active={selectedDepartment === 'product'} 
          onClick={() => onSelectDepartment('product')}
        />
      </nav>
    </div>
  );
};

interface SidebarItemProps {
  icon: React.ReactNode;
  label: string;
  active: boolean;
  onClick: () => void;
}

const SidebarItem: React.FC<SidebarItemProps> = ({ icon, label, active, onClick }) => {
  return (
    <a
      href="#"
      className={`flex items-center px-4 py-2 text-sm font-medium rounded-md ${
        active
          ? 'bg-blue-100 text-blue-700'
          : 'text-gray-600 hover:bg-gray-200 hover:text-gray-900'
      }`}
      onClick={onClick}
    >
      {icon}
      <span className="ml-3">{label}</span>
    </a>
  );
};

export default Sidebar;