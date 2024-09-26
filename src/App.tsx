import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useState } from 'react';
import Layout from './components/Layout';
import Dashboard from './components/Dashboard';
import ProjectDetailView from './components/ProjectDetailView';

function App() {
  const [selectedDepartment, setSelectedDepartment] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const handleSelectDepartment = (department: string) => {
    setSelectedDepartment(department);
  };

  const handleSearch = (query: string) => {
    setSearchQuery(query);
  };

  const clearSearchQuery = () => {
    setSearchQuery('');
  };

  return (
    <Router>
      <Layout 
        onSelectDepartment={handleSelectDepartment}
        selectedDepartment={selectedDepartment}
        onSearch={handleSearch}
        searchQuery={searchQuery}
        clearSearchQuery={clearSearchQuery}
      >
        <Routes>
          <Route 
            path="/" 
            element={
              <Dashboard 
                selectedDepartment={selectedDepartment} 
                searchQuery={searchQuery} 
                clearSearchQuery={clearSearchQuery}
              />
            } 
          />
          <Route path="/project/:id" element={<ProjectDetailView />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;