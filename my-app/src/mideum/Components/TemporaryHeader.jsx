import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'; // react-router-dom의 useNavigate를 사용합니다.
import './TemporaryHeader.css';

const TemporaryHeader = () => {
    // 로그인된 사용자, 게시글, 모달, 입력된 이미지 URL 상태 관리
    const [user, setUser] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [posts, setPosts] = useState([]);
    const [imageUrl, setImageUrl] = useState('');

    const navigate = useNavigate(); // 로그인 페이지로 이동하기 위한 훅

    // DB에서 기존 게시글 불러오기 (GET 요청)
    useEffect(() => {
        fetch("http://localhost:5000/posts")
            .then(res => res.json())
            .then(data => setPosts(data))
            .catch(err => console.error("게시글 불러오기 실패:", err));
    }, []);

    // 이미지 URL 입력 값 업데이트
    const handleUrlChange = (event) => {
        setImageUrl(event.target.value);
    };

    // 새로운 게시글 객체 생성 (user가 있으면 user.id 사용)
    const createNewPost = () => ({
        userId: user ? user.id : null,
        url: imageUrl,
        like: 0,
    });

    // 게시글 저장 함수 (POST 요청)
    const handleSubmit = () => {
        if (!user) {
            alert("로그인이 필요합니다.");
            navigate("/login");
            return;
        }
        if (!imageUrl) {
            alert("이미지 URL을 입력해주세요.");
            return;
        }
        const newPost = createNewPost();

        fetch("http://localhost:5000/posts", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(newPost),
        })
            .then(res => res.json())
            .then(data => {
                setPosts(prevPosts => [...prevPosts, data]);
                setIsModalOpen(false);
                setImageUrl('');
            })
            .catch(err => console.error("게시글 저장 실패:", err));
    };

    // "게시판 작성" 버튼 클릭 시 처리 함수
    const handlePostButtonClick = () => {
        if (!user) {
            alert("로그인이 필요합니다.");
            navigate("/login");
            return;
        }
        setIsModalOpen(true); // 로그인되어 있으면 모달 열기
    };

    return (
        <div className="TemporaryHeader">
            <div className="user-info">
                {user ? (
                    <>
                        <img src={user.profilepoto} alt="프로필 사진" className="profile-img" />
                        <h2>{user.name}님</h2>
                    </>
                ) : (
                    <></>
                )}
                {/* 게시판 작성 버튼은 로그인 여부와 상관없이 항상 보입니다. */}
                <input
                    type="button"
                    value="게시판 작성"
                    onClick={handlePostButtonClick}
                />
            </div>

            {/* 모달 창: 사진 URL 입력 */}
            {isModalOpen && (
                <div className="modal">
                    <div className="modal-content">
                        <h3>사진 URL 입력</h3>
                        <form onSubmit={(e) => e.preventDefault()}>
                            <input
                                type="url"
                                placeholder="이미지 URL 입력 (jpg, png)"
                                required
                                pattern="https?:\/\/.*\.(jpg|png)(\?.*)?$"
                                value={imageUrl}
                                onChange={handleUrlChange}
                                onInvalid={(e) =>
                                    e.target.setCustomValidity("유효한 이미지 URL(.jpg, .png)만 입력해주세요.")
                                }
                                onInput={(e) => e.target.setCustomValidity("")}
                            />
                        </form>
                        <button onClick={handleSubmit}>업로드</button>
                        <button onClick={() => setIsModalOpen(false)}>닫기</button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default TemporaryHeader;
