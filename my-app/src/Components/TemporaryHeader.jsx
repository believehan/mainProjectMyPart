import TemporaryLogin from './TemporaryLogin';
import { useState, useEffect } from 'react';

const TemporaryHeader = () => {
    const [user, setUser] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [posts, setPosts] = useState([]);
    const [imageUrl, setImageUrl] = useState(''); // URL 상태 추가

    // ✅ 1. DB에서 기존 게시글 불러오기 (GET 요청)
    useEffect(() => {
        fetch("http://localhost:5000/posts")
            .then(res => res.json())
            .then(data => setPosts(data))
            .catch(err => console.error("게시글 불러오기 실패:", err));
    }, []);

    // ✅ 2. 게시글을 DB에 저장하는 함수 (POST 요청)
    const handleUrlChange = (event) => {
        setImageUrl(event.target.value); // URL 상태 업데이트
    };

    const handleSubmit = () => {
        if (!user) {
            console.error("로그인이 필요합니다.");
            return;
        }
    
        const newPost = {
            id: user.id,  // user가 null이 아니므로 안전하게 접근 가능
            url: imageUrl,
            like: 0
        };
    
        fetch("http://localhost:5000/posts", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(newPost)
        })
        .then(res => res.json())
        .then(data => {
            setPosts(prevPosts => [...prevPosts, data]);
            setIsModalOpen(false);
            setImageUrl('');
        })
        .catch(err => console.error("게시글 저장 실패:", err));
    };

    return (
        <div className="TemporaryHeader">
            {user ? (
                <div className="user-info">
                    <img src={user.profilepoto} alt="프로필 사진" className="profile-img" />
                    <h2>{user.name}님</h2>
                    
                    {/* 게시판 작성 버튼 */}
                    <input
                        type="button"
                        value="게시판 작성"
                        onClick={() => setIsModalOpen(true)} // 모달 열기
                    />
                </div>
            ) : (
                <></>
            )}

            {/* 모달 창 */}
            {isModalOpen && (
                <div className="modal">
                    <div className="modal-content">
                        <h3>사진 URL 입력</h3>
                        <input 
                            type="url" 
                            placeholder="이미지 URL을 입력하세요" 
                            value={imageUrl}
                            onChange={handleUrlChange} // URL 변경 처리
                        />
                        <button onClick={handleSubmit}>업로드</button>
                        <button onClick={() => setIsModalOpen(false)}>닫기</button>
                    </div>
                </div>
            )}

            {/* user 상태를 props로 전달 */}
            <TemporaryLogin setUser={setUser} user={user} />
        </div>
    );
};

export default TemporaryHeader;
