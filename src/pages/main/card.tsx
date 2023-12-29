// CompanyCard.tsx

import React from 'react';
import styles from './card.module.css';

interface CompanyCardProps {
  icon: string;
  title?: string;
  value: number;
}

export const CompanyCard: React.FC<CompanyCardProps> = ({ icon, title, value }) => {
  return (
    <div className={styles.companyCard}>
      <img src={icon} alt="Company Icon" className={styles.cardIcon} />
      <p className={styles.cardValue}>{title}</p>
      <p className={styles.cardValue}>R$ {value}</p>
    </div>
  )
}
