import styled from "styled-components";

const CommuStyle = styled.div`
img {
  object-fit: cover;
}
.members {
  margin: 15px;
  object-fit: cover;
  border-radius: 50%;
  width : 70px;
  cursor : pointer;
  border : 1px solid #ccc;
}
.like_container input {
  position: absolute;
  opacity: 0;
  cursor: pointer;
  height: 0;
  width: 0;
}

.like_container {
  display: block;
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
  fill: #E3474F;
}
`;

export default CommuStyle;