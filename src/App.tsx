import './App.css'
import React, { useState } from 'react'
import { SearchInput, CompanyInfo, CompanyMainPage } from './pages'
import { CompaniesProps } from './models'

const App: React.FC = () => {
  const [companies, setCompanies] = useState<CompaniesProps>([])

  const fetchCompany = async (term: string) => {
    try {
      const response = await fetch(`http://localhost:3005/api/institution?name=${encodeURIComponent(term)}`);
      if (!response.ok) {
        throw new Error('Failed to fetch companies');
      }
      const data = await response.json()
      setCompanies(data)
    } catch (error) {
      console.error('Error fetching companies:', error);
    }
  }

  return (
    <div className="page-layout">
      <div className="top-bar">
        <SearchInput onSearch={fetchCompany} />
      </div>
      <div className="content">
        <div className="side-panel">
          <p>LOGO SITE</p>
          {companies.length > 0 && <CompanyInfo institution={companies[0].institution} />}
        </div>
        <div className="main-content">
          {companies.length > 0 && <CompanyMainPage data={companies[0].data} dataPercents={companies[0].dataPercents} />}
        </div>
      </div>
    </div>
  );
}

export default App;
