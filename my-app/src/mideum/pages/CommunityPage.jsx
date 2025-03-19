
import CommuStyle from './../styles/CommunityStyles';
import PostList from '../Components/PostList';
import TemporaryHeader from './../Components/TemporaryHeader';
import Header from '../../subin/main/Header';

const CommunityPage = () => {

    return (
        <div>
            <Header />
            <CommuStyle>
                <TemporaryHeader />
                <PostList />
            </CommuStyle>
        </div>
    );

};

export default CommunityPage;