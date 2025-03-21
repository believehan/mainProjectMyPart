import DailyPieChart from '../DietRecordComponents/DailyPieChart';
import DietRecordsStyle from './../styles/DietRecordsStyle';
import WeeklyBarChart from './../DietRecordComponents/WeeklyBarChart';
import FoodInputForm from '../DietRecordComponents/FoodInputForm';
import FoodList from './../DietRecordComponents/FoodList';
import Header from './../../subin/main/Header';

const DietRecordsPage = () => {
    return (
        <div>
            <Header />
            <DietRecordsStyle>
                <div>
                    <FoodInputForm />
                    <FoodList />
                </div>
                <div>
                    <DailyPieChart />
                    <WeeklyBarChart />
                </div>
            </DietRecordsStyle>
        </div>
    );
}

export default DietRecordsPage;