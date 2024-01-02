
import React from 'react';
import styles from './card-indices.module.css';

type CompanyCardProps = {
  title: string;
  type: string;
  value: number;
}

export const CompanyCardIndices: React.FC<CompanyCardProps> = ({ value, title, type }) => {
  const percentage = Math.min(Math.max(value, 0), 100)
  let fillColor = value >= 11 ? 'green' : 'red';
  if(type === 'i'){
    fillColor = value > 50 ? 'red' : 'green';
  }

  return (
    <div className={styles.container}>
      <svg width="120" height="120">
        <circle
          cx="60"
          cy="60"
          r="40"
          fill="none"
          stroke="#e3e3e3"
          strokeWidth="8" />
        <circle
          cx="60"
          cy="60"
          r="40"
          fill="none"
          stroke={fillColor}
          strokeWidth="8"
          strokeDasharray={`${(2 * Math.PI * 40 * percentage) / 100}, 999`} />
        <text x="50%" y="55%" textAnchor="middle" fill="#333" fontSize="18" dominantBaseline="central">
          {!value ? '-' : value?.toString().replace('.', ',') + '%'}
        </text>
      </svg>
      <span>{title}</span>
    </div>
  );

}
