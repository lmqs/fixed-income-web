import React from 'react';

interface CompanyInfoProps {
  imageUrl: string;
  name: string;
  city: string;
  uf: string;
  site: string;
  openingDate: string;
  shareholdingControl: string;
  type: string;
}

export const CompanyInfo: React.FC<any> = ({ company }) => {
  return (
    <div className="company-info">
      <img src={`http://localhost:3005/${company.imageUrl}`} alt="Company Logo" />
      <h2>{company.corporateReason}</h2>
      <p>CNPJ: {company.cnpj}</p>
      <p>SEDE: {company.city} - {company.uf}</p>
      <p>Site: {company.site}</p>
      <p>Data abertura: {company.openingDate}</p>
      <p>Controle Acionário: {company.shareholdingControl}</p>
      <p>Tipo: {company.type}</p>
    </div>
  );
};
