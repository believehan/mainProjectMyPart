
import CommuStyle from './../styles/CommunityStyles';
import PostList from './../Components/PostList';
import TemporaryHeader from './../Components/TemporaryHeader';

const CommunityPage = () => {

    return (
        <div>
            <CommuStyle>
                <TemporaryHeader />
                <PostList />
            </CommuStyle>
        </div>
    );

};

export default CommunityPage;