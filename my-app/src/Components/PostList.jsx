import MemberData from "./../DB/Member.json";
import UserPoto from './UserPoto';
// import Comment from './Comment';

function PostList() {

    return (

        <div>
            <div className="memberlist">
                {MemberData[0].clientData.map((image) => (

                    <div key={image.id}>
                        <div className="meminfo">
                            <img
                                className="members"
                                src={image.profilepoto}
                                alt={image.name} />
                            <h2>{image.name}</h2>
                        </div>
                        <UserPoto selectedImage={image.url} initialLike={image.like} />
                        {/* <Comment /> */}
                        <hr />
                    </div>

                ))}
            </div>
        </div>
    );
}

export default PostList;
