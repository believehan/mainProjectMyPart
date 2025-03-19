import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, BarElement, CategoryScale, LinearScale, Tooltip, Legend } from 'chart.js';

// ChartJS에 사용할 요소 등록
ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend);

const WeekCal = () => {
  const data = {
    labels: ['월', '화', '수', '목', '금', '토', '일'],
    datasets: [
      {
        label: '섭취 칼로리',
        data: [1800, 1900, 1700, 2100, 2000, 1850, 1750],
        backgroundColor: 'rgba(75,192,192,0.6)',
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
    },
  };

  return <Bar data={data} options={options} />;
};

export default WeekCal;
