import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

// 필수 요소 등록
ChartJS.register(ArcElement, Tooltip, Legend);

const DailyPieChart = () => {
  const data = {
    labels: ['탄수화물', '단백질', '지방'],
    datasets: [
      {
        label: '비율 (%)',
        data: [50, 30, 20],
        backgroundColor: [
          'rgba(255, 99, 132, 0.6)',   // 탄수화물
          'rgba(54, 162, 235, 0.6)',   // 단백질
          'rgba(255, 206, 86, 0.6)'    // 지방
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)'
        ],
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'bottom',
      },
      tooltip: {
        enabled: true,
      },
    },
  };

  return (
    <div style={{ width: '300px', margin: '0 auto' }}>
      <Pie data={data} options={options} />
    </div>
  );
};

export default DailyPieChart;
