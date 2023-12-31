import React from 'react';
import styles from './main.module.css';
import { CompanyCard } from './card';
import { Data, InstitutionInfo } from '../../models';
import { CompanyCardIndices } from './card-indices';
import moneyBagIcon from './../../images/money-bag.svg'
import moneySend from './../../images/money-send.svg'
import moneyIntegral from './../../images/money-integral.svg'
import { ChartAgenciesStations } from './charts';
import { ChartIndices } from './charts/indices';

export const CompanyMainPage: React.FC<{ infos: InstitutionInfo[], data: Data }> = ({ infos, data }) => {

  const companyData = [
    { valuePercent:-1.10, icon: moneyBagIcon, title: 'Total do ativo', value: infos[0].totalAssets  },
    { valuePercent:0.10, icon: moneyIntegral, title: 'Lucro líquido', value: infos[0].netProfit },
    { valuePercent:-3.10, icon: moneySend, title: 'Patrimônio líquido', value: infos[0].netWorth },
    { valuePercent:-3.10, icon: moneySend, title: 'Carteira de Crédito Classificada', value: infos[0].classifiedCreditPortfolio },
    { valuePercent:-3.10, icon: moneySend, title: 'Passivo Circulante e Exigível a Longo Prazo e Resultados de Exercícios Futuros', value: infos[0].currentLiabilities },
    { valuePercent:-3.10, icon: moneySend, title: 'Captações', value: infos[0].pickups },
    { valuePercent:-3.10, icon: moneySend, title: 'Patrimônio de Referência para Comparação com o RWA', value: infos[0].patrimonyRWA },
    { valuePercent:-3.10, icon: moneySend, title: 'Número de agências', value: infos[0].agencies },
    { valuePercent:-3.10, icon: moneySend, title: 'Número de postos de atendimento', value: infos[0].serviceStations }
  ];

  return (
    <div className={styles.companyMainPage}>
      <div className={styles.companyCards}>
        <div className={styles.companyCardIndices}>
          <CompanyCardIndices value={infos[0].basileia} title={'Índice de Basileia'} type={'b'}/>
          <CompanyCardIndices value={infos[0].imobilizacao} title={'Índice de Imobilização'} type={'i'}/>
        </div>

        <div className={`${styles.cardContainer} clearfix`}>
          {companyData.map((company, index) => (
            <CompanyCard key={index} valuePercent={company.valuePercent} title={company.title} icon={company.icon} value={company.value} />
          ))}
        </div>
      </div>
      <div className={styles.companyCharts}>
        <ChartAgenciesStations agencies={data.agencies} serviceStations={data.serviceStations} period={data.period}/>
        <ChartIndices basileia={data.basileia} imobilizacao={data.imobilizacao} period={data.period}/>
      </div>
    </div>
  );
};
