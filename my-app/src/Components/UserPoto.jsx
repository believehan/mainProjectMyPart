
import Like from './Like';
const UserPoto = ({ selectedImage }) => {

    return (
        <div>
            {selectedImage && (
                <div style={{ marginTop: "20px" }}>
                    <h3>선택한 이미지</h3>
                    <img src={selectedImage} alt="선택한 이미지" width="300" />
                    <Like />
                </div>
            )}
        </div>
    );
}

export default UserPoto;