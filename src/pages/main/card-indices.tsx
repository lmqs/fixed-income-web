
import React from 'react';

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
    <svg width="200" height="200">
      <circle
        cx="100"
        cy="100"
        r="50"
        fill="none"
        stroke="#e3e3e3"
        strokeWidth="10"
      />
      <circle
        cx="100"
        cy="100"
        r="50"
        fill="none"
        stroke={fillColor}
        strokeWidth="10"
        strokeDasharray={`${(2 * Math.PI * 50 * percentage) / 100}, 999`}
      />
      <text x="50%" y="50%" textAnchor="middle" fill="#333" fontSize="24" dominantBaseline="central">
        {value?.toString().replace('.',',')}%
      </text>
      <text x="50%" y="85%" textAnchor="middle" fill="#333" fontSize="16">
        {title}
      </text>
    </svg>
  );
}
