import React from 'react';
import styles from './card.module.css';
import trendDown from './../../images/arrow-trend-down.svg'
import trendUp from './../../images/arrow-trend-up.svg'
interface CompanyCardProps {
  icon: string;
  title: string;
  value?: number;
  valueInt?: string;
  valuePercent: number;
}

export const CompanyCard: React.FC<CompanyCardProps> = ({ icon, title, value, valueInt, valuePercent }) => {
  const formatter = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  })
  const textColor = valuePercent > 0 ? 'green' : 'red';
  const trend = valuePercent > 0 ? trendUp : trendDown;

  return (
    <div className={styles.companyCard}>
      <div className={styles.top}>
        <img src={icon} alt="Icon" className={styles.cardIcon} />
        <p className={styles.cardTitle}>{title}</p>
      </div>
      <div className={styles.content}>
        <div className={styles.divValue}>
          <p className={styles.cardValue}>{value? formatter.format(value) : valueInt}</p>
        </div>
        <div className={styles.percent}>
          <img src={trend} alt="Icon" className={styles.cardTrend} />
          <p className={styles.cardPercent} style={{ color: textColor }}>{valuePercent ?? 0}%</p>
        </div>

      </div>
    </div>
  )
}
