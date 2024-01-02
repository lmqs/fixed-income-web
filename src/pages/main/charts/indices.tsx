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
      text: 'Basileia e Imobilização',
    },
  },
  scales: {
    y: {
      type: 'linear' as const,
      display: true,
      position: 'left' as const,
    }
  },
};

type ChartIndicesProps = {
  basileia: number[]
  imobilizacao: number[]
  period: string[]
}
export const ChartIndices: React.FC<ChartIndicesProps> = ({ basileia, imobilizacao, period }) => {
  const data = {
    labels: period,
    datasets: [
      {
        label: 'Índice de Basileia',
        data: basileia!,
        borderColor: 'rgb(255, 99, 132)',
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
        fill: true
      },
      {
        label: 'Índice de Imobilização',
        data: imobilizacao!,
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
