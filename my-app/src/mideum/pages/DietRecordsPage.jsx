import DietRecordsStyle from './../styles/DietRecordsStyle';
import WeeklyBarChart from './../DietRecordComponents/WeeklyBarChart';
import CalorieTracker from '../DietRecordComponents/CalorieTracker';
import Header from './../../subin/main/Header';

const DietRecordsPage = () => {
    return (
        <div>
            <Header />
            <DietRecordsStyle>
                <div>

                        <CalorieTracker />

                </div>
            </DietRecordsStyle>
        </div>
    );
}

export default DietRecordsPage;