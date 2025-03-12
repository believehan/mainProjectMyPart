import imageData from "./../DB/Member.json"
import UserPoto from './UserPoto';
import { useState } from 'react';

function PostList() {
    const [selectedImage, setSelectedImage] = useState(null);
    const handleClick = (url) => {
        setSelectedImage(url); // 이미지 클릭 시 상태 업데이트
    };
    return (
        <div>
            <div>
                {imageData[0].clientData.map((image) => (
                    <img className="members"
                        key={image.id}
                        src={image.profilepoto}
                        onClick={() => handleClick(image.url)}
                        alt={image.name}
                    />
                ))}
            </div>
            <UserPoto selectedImage={selectedImage} />
        </div>
    )
}

export default PostList;