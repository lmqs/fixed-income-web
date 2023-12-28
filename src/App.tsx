import './App.css';
import React, { useState } from 'react'
import { SearchInput, CompanyInfo } from './pages'

const App: React.FC = () => {
  const [company, setCompany] = useState<any>(null);

  const fetchCompany = async (term: string) => {
    try {
      const response = await fetch(`http://localhost:3005/api/institution?name=${term}`);
      if (!response.ok) {
        throw new Error('Failed to fetch company');
      }
      const data = await response.json()
      setCompany(data)
    } catch (error) {
      console.error('Error fetching company:', error);
    }
  }

  return (
    <div className="page-layout">
      <div className="top-bar">
        <div className="search-input-container">
          <SearchInput onSearch={fetchCompany} />
        </div>
      </div>
      <div className="content">
        <div className="side-panel">
          {company && <CompanyInfo company={company[0].institution} />}
        </div>
        <div className="main-content"></div>
      </div>
    </div>
  );
}

export default App;
