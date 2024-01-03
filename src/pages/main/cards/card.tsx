import React from 'react';
import styles from './card.module.css';
import trendDown from './../../../images/arrow-trend-down.svg'
import trendUp from './../../../images/arrow-trend-up.svg'
import line from './../../../images/line-xl.svg'
interface CompanyCardProps {
  icon: string;
  title: string;
  legend: string;
  value: number;
  valueInt?: string;
  valuePercent: number;
}

export const CompanyCard: React.FC<CompanyCardProps> = ({ icon, title, value, legend, valuePercent }) => {
  const formatter = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  })
  const colorMap: { [key: string]: string } = {
    '0': '#d5c515',
    '-1': 'red',
    '1': 'green'
  }

  const iconMap: { [key: string]: string } = {
    '0': line,
    '-1': trendDown,
    '1': trendUp
  }

  let textColor = colorMap[Math.sign(valuePercent).toString()];
  let trend = iconMap[Math.sign(valuePercent).toString()];

  return (
    <div className={styles.companyCard}>
      <div className={styles.top}>
        <img src={icon} alt="Icon" className={styles.cardIcon} />
        <p className={styles.cardTitle}>{title}</p>
      </div>
      <div className={styles.content}>
        <div className={styles.divValue}>
          <p className={styles.cardValue}>{formatter.format(value)}</p>
        </div>
        <div className={styles.percent}>
          <img src={trend} alt="Icon" className={styles.cardTrend} />
          <p className={styles.cardPercent} style={{ color: textColor }}>{valuePercent ?? 0}%</p>
          <p className={styles.cardLegend}>vs {legend}</p>
        </div>
      </div>
    </div>
  )
}
