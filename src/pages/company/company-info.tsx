import React from 'react';
import './styles.module.css';
import { Institution } from '../../models';


export const CompanyInfo: React.FC<{ institution: Institution }> = ({ institution }) => {
  return (
    <div className="company-info">
      <img src={`http://localhost:3005/${institution.imageUrl}`} alt="Company Logo" />
      <h2>{institution.corporateReason ? institution.corporateReason : institution.name}</h2>
      <p>CNPJ: {institution.cnpj}</p>
      <p>SEDE: {institution.city} - {institution.uf}</p>
      <p>Site: {institution.site}</p>
      <p>Data abertura: {institution.openingDate}</p>
      <p>Controle Acionário: {institution.shareholdingControl}</p>
      <p>Tipo: {institution.type}</p>
    </div>
  );
};
