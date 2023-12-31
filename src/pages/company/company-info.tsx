import React from 'react'
import { Institution } from '../../models';
import styles from './company-info.module.css'


export const CompanyInfo: React.FC<{ institution: Institution }> = ({ institution }) => {
  let formattedDate
  const date = institution.openingDate && new Date(institution.openingDate);
  formattedDate = date && new Intl.DateTimeFormat('pt-BR').format(date)

  return (
    <div className={styles.containerInfo}>
      <img src={`http://localhost:3005/${institution.imageUrl}`} alt="Company Logo" />
      <h2>{institution.corporateReason ? institution.corporateReason : institution.name}</h2>
      <p>CNPJ: {institution.cnpj}</p>
      <p>SEDE: {institution.city} - {institution.uf}</p>
      <p>Site: {institution.site}</p>
      <p>Data abertura: {formattedDate}</p>
      <p>Controle Acionário: {institution.shareholdingControl}</p>
      <p>Tipo: {institution.type}</p>
    </div>
  );
};
