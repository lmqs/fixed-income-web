import React from 'react';
import styles from './main.module.css';
import { CompanyCard } from './card';
import { Data, InstitutionInfo, Percent } from '../../models';
import { CompanyCardIndices } from './card-indices';
import moneyBank from './../../images/money-bank.svg'
import moneySend from './../../images/money-send.svg'
import moneyIntegral from './../../images/money-integral.svg'
import moneyTgrant from './../../images/money-tgrant.svg'
import moneyBag2 from './../../images/money-bag2.svg'
import moneyArrow from './../../images/money-arrow.svg'
import moneyMobile from './../../images/money-mobile.svg'
import moneyAccounts from './../../images/money-accounts.svg'
import moneyTarget from './../../images/money-target.svg'
import { ChartAgenciesStations, ChartIndices } from './charts';

export const CompanyMainPage: React.FC<{ infos: InstitutionInfo[], data: Data, dataPercents: Percent }> = ({ infos, data, dataPercents }) => {
  const companyData = [
    { valuePercent: dataPercents.totalAssetsPercent, icon: moneyBag2, title: 'Total do ativo', value: infos[0].totalAssets  },
    { valuePercent: dataPercents.netProfitPercent, icon: moneyIntegral, title: 'Lucro líquido', value: infos[0].netProfit },
    { valuePercent: dataPercents.netWorthPercent, icon: moneySend, title: 'Patrimônio líquido', value: infos[0].netWorth },
    { valuePercent: dataPercents.classifiedCreditPortfolioPercent, icon: moneyMobile, title: 'Carteira de Crédito Classificada', value: infos[0].classifiedCreditPortfolio },
    { valuePercent: dataPercents.currentLiabilitiesPercent, icon: moneyArrow, title: 'Passivo Circulante', value: infos[0].currentLiabilities },
    { valuePercent: dataPercents.pickupsPercent, icon: moneyTgrant, title: 'Captações', value: infos[0].pickups },
    { valuePercent: dataPercents.patrimonyRWAPercent, icon: moneyTarget, title: 'Patrimônio de Referência RWA', value: infos[0].patrimonyRWA },
    { valuePercent: dataPercents.agenciesPercent, icon: moneyAccounts, title: 'Número de agências', valueInt: infos[0].agencies },
    { valuePercent: dataPercents.serviceStationsPercent, icon: moneyBank, title: 'Número de postos de atendimento', valueInt: infos[0].serviceStations }
  ]

  return (
    <div className={styles.companyMainPage}>
      <div className={styles.companyCards}>
        <div className={styles.companyCardIndices}>
          <CompanyCardIndices value={infos[0].basileia} title={'Índice de Basileia'} type={'b'}/>
          <CompanyCardIndices value={infos[0].imobilizacao} title={'Índice de Imobilização'} type={'i'}/>
        </div>

        <div className={`${styles.cardContainer} clearfix`}>
          {companyData.map((company, index) => (
            <CompanyCard key={index} valuePercent={company.valuePercent} title={company.title} icon={company.icon} value={company.value} valueInt={company.valueInt?.toString()} />
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
