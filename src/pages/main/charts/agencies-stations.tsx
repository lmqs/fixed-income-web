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

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top' as const,
    },
    title: {
      display: true,
      text: 'Agências e pontos de atendimentos',
    },
  }
};

type ChartAgenciesStationsProps = Data
export const ChartAgenciesStations: React.FC<ChartAgenciesStationsProps> = ({ serviceStations, agencies, period }) => {
  console.log(agencies)
  const data = {
    labels: period,
    datasets: [
      {
        label: 'Número de Agências',
        data: agencies,
        borderColor: 'rgb(255, 99, 132)',
        backgroundColor: 'rgba(255, 99, 132, 0.5)'
      },
      {
        label: 'Número de postos de atendimento',
        data: serviceStations,
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
