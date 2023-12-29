import React from 'react';
import styles from './main.module.css';
import { CompanyCard } from './card';

interface CompanyMainProps {
  imageUrl: string;
  name: string;
  city: string;
  uf: string;
  site: string;
  openingDate: string;
  shareholdingControl: string;
  type: string;
}

export const CompanyMainPage: React.FC<any> = ({infos}) => {
  const companyData = [
    { icon: 'url_icone_1', title: 'netProfit', value: infos[0].netProfit },
    { icon: 'url_icone_1', title: 'pickups', value: infos[0].pickups },
    { icon: 'url_icone_1', title: 'patrimonyRWA', value: infos[0].patrimonyRWA },
    { icon: 'url_icone_1', title: 'netWorth', value: infos[0].netWorth },
    { icon: 'url_icone_1', title: 'totalAssets', value: infos[0].totalAssets }
  ];

  return (
    <div className={styles.companyMainPage}>
      <div className={`${styles.cardContainer} clearfix`}>
        {companyData.map((company, index) => (
          <CompanyCard key={index} title={company.title} icon={company.icon} value={company.value} />
        ))}
      </div>
    </div>
  );
};