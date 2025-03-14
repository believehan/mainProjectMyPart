import Like from './Like';

const UserPoto = ({ selectedImage, initialLike, id }) => {
    return (
        <div>
            {selectedImage && (
                <div className='member_poto_container'>
                    <img className="member_poto" src={selectedImage} alt="선택한 이미지" />
                    <Like initialLike={initialLike} id={id}/>  
                </div>
            )}
        </div>
    );
}

export default UserPoto;
