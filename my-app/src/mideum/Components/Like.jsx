import { useState } from 'react';
import "./Like.css"

const Like = ({ initialLike }) => {
    const [isLiked, setIsLiked] = useState(initialLike >= 1);



    const handleLikeToggle = async () => {
        const newLikeStatus = isLiked ? 0 : 1; //  현재 상태 반전
        setIsLiked(newLikeStatus === 1); // UI 업데이트
    };

    return (
        <div className='likes'>
            <label className="like_container">
                <input type="checkbox" checked={isLiked} onChange={handleLikeToggle} />
                <svg id="Layer_1" version="1.0" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M16.4,4C14.6,4,13,4.9,12,6.3C11,4.9,9.4,4,7.6,4C4.5,4,2,6.5,2,9.6C2,14,12,22,12,22s10-8,10-12.4C22,6.5,19.5,4,16.4,4z" />
                </svg>
            </label>
                <h3>{initialLike}</h3>
        </div>
    );
}

export default Like;