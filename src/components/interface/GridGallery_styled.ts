import styled from "styled-components";

//styled components
export const GridGalleryStyled = styled.div`
  display: grid;
  grid: auto-flow / 40vw 40vw;
  width: fit-content;
  grid-column-gap: 41px;

  //Tablet
  @media screen and (min-width: 426px) and (max-width: 1200px) {
    grid: auto-flow / 1fr 1fr 1fr;
  }

  div {
    display: flex;
    flex-direction: column;
    align-items: center;

    p {
      text-align: center;
    }
  }

  //Desktop
  @media screen and (min-width: 1200px) {
  }
`;

export const Image = styled.img`
  width: 160px;
  height: 160px;
`;

export const LookingForMoreText = styled.p`
  text-align: center;
  text-decoration: underline;
`;
