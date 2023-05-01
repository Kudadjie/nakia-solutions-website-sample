import styled from "styled-components";

export const Backdrop = styled.div`
  width: 100vw;
  height: 100vh;
  backdrop-filter: blur(3px) saturate(180%);
  background-color: rgb(16 19 24 / 75%);
  position: fixed;
  z-index: 10;
  display: flex;
  justify-content: center;
  align-items: center;
`;
