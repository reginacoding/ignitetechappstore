import React from 'react';
import { Input } from "@/components/ui/input"
import { Home, BarChart2, Users, HelpCircle, Settings } from 'lucide-react';

const Sidebar: React.FC = () => {
  return (
    <div className="w-64 bg-gray-100 h-screen p-4">
      <div className="mb-6">
        <Input type="text" placeholder="Search..." className="w-full" />
      </div>
      <nav className="space-y-1">
        <SidebarItem icon={<Home size={20} />} label="Home" active />
        <SidebarItem icon={<BarChart2 size={20} />} label="Marketing & Sales" />
        <SidebarItem icon={<Users size={20} />} label="BizOps" />
        <SidebarItem icon={<HelpCircle size={20} />} label="Customer Success" />
        <SidebarItem icon={<Settings size={20} />} label="Customer Support" />
      </nav>
    </div>
  );
};

interface SidebarItemProps {
  icon: React.ReactNode;
  label: string;
  active?: boolean;
}

const SidebarItem: React.FC<SidebarItemProps> = ({ icon, label, active }) => {
  return (
    <a
      href="#"
      className={`flex items-center px-4 py-2 text-sm font-medium rounded-md ${
        active
          ? 'bg-blue-100 text-blue-700'
          : 'text-gray-600 hover:bg-gray-200 hover:text-gray-900'
      }`}
    >
      {icon}
      <span className="ml-3">{label}</span>
    </a>
  );
};

export default Sidebar;