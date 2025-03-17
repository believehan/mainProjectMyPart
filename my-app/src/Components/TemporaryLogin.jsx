
import { useState, useEffect } from 'react';
const TemporaryLogin = ({ setUser, user }) => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [users, setUsers] = useState([]);

    useEffect(() => {
        fetch("http://localhost:5000/clientData")
            .then((res) => res.json())
            .then((data) => setUsers(data))
            .catch((error) => console.error("데이터 불러오기 실패:", error));
    }, []);

    return (
        <div className="TemporaryLogin">
            {/* 로그인하지 않은 경우만 버튼 표시 */}
            {!user && (
                <input 
                    type="button" 
                    value="임시 로그인" 
                    onClick={() => setIsModalOpen(true)} 
                />
            )}

            {isModalOpen && (
                <div className="modal">
                    <div className="modal-content">
                        <h3>사용자 선택</h3>
                        {users.map(user => (
                            <button 
                                key={user.id} 
                                onClick={() => {
                                    setUser(user);
                                    setIsModalOpen(false);
                                }}
                            >
                                {user.name}
                            </button>
                        ))}
                        <button onClick={() => setIsModalOpen(false)}>닫기</button>
                    </div>
                </div>
            )}
        </div>
    );
};
export default TemporaryLogin;