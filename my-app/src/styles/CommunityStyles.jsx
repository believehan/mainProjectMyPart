import styled from "styled-components";

const CommuStyle = styled.div`
.memberlist{
  width: 700px;
  height: auto;
  margin: auto;
}

.meminfo {
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-content: space-between;
}
.meminfo h2 {
  margin: auto;
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
.comment{
  background-color: white;
  color: black;
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
`;

export default CommuStyle;