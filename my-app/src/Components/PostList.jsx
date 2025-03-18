import { useState, useEffect } from 'react';
import UserPoto from './UserPoto'; // 이미 잘 작성된 컴포넌트

function PostList() {
    const [posts, setposts] = useState([]);
    const [clientData, setClientData] = useState([]);


    useEffect(() => {
        fetch('http://localhost:5000/posts')
            .then(response => response.json())
            .then(data => {
                setposts(data.reverse());
            })
            .catch(error => console.error('Error fetching data:', error));
    }, []);

    useEffect(() => {
        // DB에서 clientData를 불러오는 부분
        fetch('http://localhost:5000/clientData')
            .then(response => response.json())
            .then(data => {
                setClientData(data);
            })
            .catch(error => console.error('Error fetching data:', error));
    }, []); // 빈 배열은 컴포넌트가 처음 렌더링될 때 한 번만 실행됨

    return (
        <div >
            <div className="memberlist">
                {posts.map(post =>
                    clientData.map(image =>
                        image.id === post.userId && (
                            <div key={post.id} className='post'>
                                <div className="meminfo">
                                    <img
                                        className="members"
                                        src={image.profilepoto}
                                        alt={image.name}
                                    />
                                    <h2>{image.name}</h2>
                                </div>
                                <UserPoto selectedImage={post.url} initialLike={post.like} />
                                <hr />
                            </div>
                        )
                    )
                )}
            </div>
        </div>
    );
}

export default PostList;
