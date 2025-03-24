import React, { useState } from 'react';
import Calendar from './Calendar';
import memberData from '../DB/Member.json';
import DailyPieChart from './DailyPieChart';
import "./CalorieTracker.css";
import FoodInputForm from './FoodInputForm';
import WeeklyBarChart from './WeeklyBarChart';
import Modal from './Modal';

const CalorieTracker = () => {
  const [chartData, setChartData] = useState(null);
  const [modalMessage, setModalMessage] = useState('');
  const userName = '김운동'; // 원하는 사용자 이름으로 설정

  const handleCloseModal = () => {
    setModalMessage('');
  };

  const handleDateSelect = (selectedDate) => {
    const dateString = selectedDate.toISOString().split('T')[0];

    // 이름으로 사용자 데이터 찾기
    const user = memberData.clientData.find((member) => member.name === userName);

    if (!user) {
      setModalMessage('사용자 정보를 찾을 수 없습니다.');
      return;
    }

    const record = user.calorieData?.[dateString];
    if (!record) {
      setModalMessage('해당 날짜에 기록된 식단이 없습니다.');
      setChartData(null);
      return;
    }

    // foodDatabase 준비
    const foodDatabase = {};
    memberData.foodList.forEach((food) => {
      foodDatabase[food.foodName] = food;
    });

    let totalCarbs = 0;
    let totalProtein = 0;
    let totalFat = 0;
    let totalCalories = 0;

    record.food.forEach((foodName) => {
      const foodInfo = foodDatabase[foodName];
      if (foodInfo) {
        totalCarbs += foodInfo.carbs;
        totalProtein += foodInfo.protein;
        totalFat += foodInfo.fat;
        totalCalories += foodInfo.calories;
      }
    });

    setChartData({
      labels: ['탄수화물', '단백질', '지방'],
      datasets: [
        {
          data: [totalCarbs, totalProtein, totalFat],
          backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
        },
      ],
      totalCalories,
      totalCarbs,
      totalProtein,
      totalFat,
      foods: record.food
    });
  };

  return (
    <div className='ChartList'>
      <div>
        <h1>식단 기록 캘린더</h1>
        <Calendar onDateSelect={handleDateSelect} />
        <div className='FoodSet'>
          <FoodInputForm />
          <ul>
            {chartData && chartData.foods.map((food, index) => (
              <li key={index}>{food}</li>
            ))}
          </ul>
        </div>
      </div>
            {modalMessage && <Modal message={modalMessage} onClose={handleCloseModal} />}

      <div className='Charts'>
        <div>
          {chartData && (
            <div>
              <h2>총 칼로리: {chartData.totalCalories} kcal</h2>
              <DailyPieChart
                carbs={chartData.totalCarbs}
                protein={chartData.totalProtein}
                fat={chartData.totalFat}
              />
            </div>
          )}
        </div>
        <WeeklyBarChart />
      </div>
    </div>
  );
};

export default CalorieTracker;
