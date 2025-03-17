import styled from "styled-components";

const CommuStyle = styled.div`
.TemporaryHeader{
  height: 50px;
  background-color: yellow;
  
}
.TemporaryLogin input{
  height: 30px;
  margin: 10px 10px auto auto;
  display: grid;
  float: right;
}

.memberlist{
  width: 700px;
  height: auto;
  margin: auto;
}

.meminfo {
  display: grid;
  grid-template-columns: 1fr 7fr;
}
.meminfo h2 {
  margin: auto 0;
}

img {
  object-fit: cover;
}

.member_poto_container{
  margin-top: 10px;
  text-align: center;
}

.member_poto{
  width: 700px;
}

.members{
  margin: 15px;
  border: solid yellow;
  border-radius: 50%;
  object-fit: cover;
  width : 70px;
  cursor : pointer;
  border : 1px solid #ccc;
}

// 좋아요 표시
.like_container input {
  position: absolute;
  opacity: 0;
  cursor: pointer;
  height: 0;
  width: 0;
}

.like_container {
  width: 50px;
  /* display: block; */
  position: relative;
  cursor: pointer;
  user-select: none;
}

.like_container svg {
  position: relative;
  top: 0;
  left: 0;
  height: 50px;
  width: 50px;
  transition: all 0.3s;
  fill: #666;
}

.like_container svg:hover {
  transform: scale(1.1);
}

.like_container input:checked ~ svg {
  fill: #ff000d;
}

.likes{
  display: flex;
  align-items: center;
  margin-bottom: 10px;
}

.likes h3 {
  margin-left: 10px;
}
/* 모달 스타일 */
.modal {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
}

.modal-content {
    background: white;
    padding: 20px;
    border-radius: 10px;
    text-align: center;
}

button {
    margin: 5px;
    padding: 10px;
    border: none;
    background: #007BFF;
    color: white;
    border-radius: 5px;
    cursor: pointer;
}

/* 프로필 스타일 */
.user-info {
    display: flex;
    align-items: center;
    gap: 10px;
}

.profile-img {
    width: 50px;
    height: 50px;
    border-radius: 50%;
}
`;

export default CommuStyle;