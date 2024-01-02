import React, { useEffect, useState } from 'react';
import styles from './main.module.css';
import { CompanyCard } from './cards/card';
import { Data, InstitutionInfo, Percent } from '../../models';
import { CompanyCardIndices } from './cards/card-indices';
import { ChartAgenciesStations, ChartIndices } from './charts';
import { Tooltip } from '../../components/tooltip';
import { Filter } from './cards/card-filter';
import moneySend from './../../images/money-send.svg'
import moneyIntegral from './../../images/money-integral.svg'
import moneyBag2 from './../../images/money-bag2.svg'
import moneyTgrant from './../../images/money-tgrant.svg'

export const CompanyMainPage: React.FC<{ infos: InstitutionInfo[], data: Data, dataPercents: Percent }> = ({ infos, data, dataPercents }) => {
  const [filterValue, setFilterValue] = useState('')
  const [filterOptions, setFilterOptions] = useState<string[]>([])
  const [indexArray, setIndexArray] = useState(0)
  console.log(indexArray)
  console.log(data.period.length-1)

  useEffect(() => {
    setIndexArray(data.period.length - 1)
    setFilterOptions(data.period)
  }, [data])

  const findIndexByValue = (value: string) => {
    return data?.period?.findIndex((item) => item === value)
  }

  const handleFilterChange = (selectedValue: string) => {
    setFilterValue(selectedValue)
    const index = findIndexByValue(selectedValue)
    setIndexArray(index)
  }

  const reverseOptions = () => {
    const reversedOptions = filterOptions && [...filterOptions]
    reversedOptions.shift()
    return reversedOptions.reverse()
  }
  const companyData = [
    { valuePercent: dataPercents.totalAssetsPercent, icon: moneyBag2, title: 'Total do ativo', value: data.totalAssets[indexArray]},
    { valuePercent: dataPercents.netProfitPercent, icon: moneyIntegral, title: 'Lucro líquido', value: data.netProfit[indexArray]},
    { valuePercent: dataPercents.netWorthPercent, icon: moneySend, title: 'Patrimônio líquido', value: data.netWorth[indexArray]},
    { valuePercent: dataPercents.pickupsPercent, icon: moneyTgrant, title: 'Captações', value: data.pickups[indexArray]},
  ]

  return (
    <div className={styles.companyMainPage}>
      <div className={styles.companyCards}>
        <div className={styles.companyCardIndices}>
          <Tooltip text="Esse é um índice que faz blá bla bla bla bla bla">
            <CompanyCardIndices value={data.basileia[indexArray]} title={'Índice de Basileia'} type={'b'}/>
          </Tooltip>
          <Tooltip text="Esse é um índice que faz blá bla bla bla bla bla">
            <CompanyCardIndices value={data.imobilizacao[indexArray]} title={'Índice de Imobilização'} type={'i'}/>
          </Tooltip>
        </div>

        <div className={`${styles.cardContainer} clearfix`}>
          {companyData.map((company, index) => (
            <CompanyCard key={index} valuePercent={company.valuePercent} title={company.title} icon={company.icon} value={company.value}  legend={data.period[indexArray-1]} />
          ))}
        </div>
      <Filter onFilterChange={handleFilterChange} filterOptions={reverseOptions()} />
      </div>
      <div className={styles.companyCharts}>
        <ChartAgenciesStations agencies={data.agencies} serviceStations={data.serviceStations} period={data.period}/>
        <ChartIndices basileia={data.basileia} imobilizacao={data.imobilizacao} period={data.period}/>
        </div>
    </div>
  )
}
