
export type Institution = {
  imageUrl: string;
  name: string;
  city: string;
  uf: string;
  site: string;
  openingDate: string;
  shareholdingControl: string;
  corporateReason?: string;
  type: string;
  cnpj: string;
}

export type InstitutionInfo = {
  id: number;
  institutionId: number;
  tcb: string;
  sr: string;
  td: string;
  tc: string;
  data: string;
  totalAssets: number;
  classifiedCreditPortfolio: number;
  currentLiabilities: number;
  pickups: number;
  netWorth: number;
  netProfit: number;
  patrimonyRWA: number;
  basileia: number;
  imobilizacao: number;
  agencies: number;
  serviceStations: number;
}

export type Data = {
  agencies: number[]
  period: string[]
  serviceStations:  number[]
  basileia:  number[]
  imobilizacao: number[]
  netProfit:  number[]
  netWorth:  number[]
  totalAssets:  number[]
  pickups: number[]
  currentLiabilities: number[]
  patrimonyRWA: number[]
}

export type Percent = {
  netProfitPercent: number
  netWorthPercent: number
  totalAssetsPercent: number
  basileiaPercent: number
  imobilizacaoPercent: number
  agenciesPercent: number
  serviceStationsPercent: number
  classifiedCreditPortfolioPercent: number
  pickupsPercent: number
  patrimonyRWAPercent: number
  currentLiabilitiesPercent: number
}

export type CompaniesProps = {
  institution: Institution;
  info: InstitutionInfo[];
  data: Data,
  dataPercents: Percent
}[]
