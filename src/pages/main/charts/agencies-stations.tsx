import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import styles from './agencies-stations.module.css';
import { Data } from '../../../models';


ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const options = {
  responsive: true,
  interaction: {
    mode: 'index' as const,
    intersect: false,
  },
  stacked: false,
  plugins: {
    title: {
      display: true,
      text: 'Agências e pontos de atendimentos',
    },
  },
  scales: {
    y: {
      type: 'linear' as const,
      display: true,
      position: 'left' as const,
    }
  },
}

type ChartAgenciesStationsProps = {
  agencies: number[]
  period: string[]
  serviceStations:  number[]
}
export const ChartAgenciesStations: React.FC<ChartAgenciesStationsProps> = ({ serviceStations, agencies, period }) => {
  const data = {
    labels: period,
    datasets: [
      {
        label: 'Número de Agências',
        data: agencies!.map((item)=> {return parseInt(item.toString())}),
        borderColor: 'rgb(255, 99, 132)',
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
        fill: true
      },
      {
        label: 'Número de postos de atendimento',
        data: serviceStations!.map((item)=> {return parseInt(item.toString())}),
        borderColor: 'rgb(53, 162, 235)',
        backgroundColor: 'rgba(53, 162, 235, 0.5)',
      },
    ],
  }

  return (
    <div className={styles.container}>
      <Line options={options} data={data} />
    </div>
  );
}
