import styled from "@emotion/styled";

// 바로가기 영역의 CSS-in-JS
export const LinkDiv = styled.div`
  background-color: ${props => props.bc || "yellowgreen"};
`;
// 제품 출력 CSS
export const GoodDetailDiv = styled.div`
  h3 {
    color: red;
  }
  img {
    width: 200px;
  }
`;
