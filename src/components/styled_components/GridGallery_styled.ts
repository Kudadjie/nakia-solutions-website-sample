import styled from "styled-components";

//styled components
export const FilterSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 10px;
  align-items: center;

  //Tablet

  //Desktop
  @media screen and (min-width: 1200px) {
    display: flex;
    flex-direction: row;
  }
`;

export const FilterBtn = styled.button`
  background-color: white;
  border: 3px solid #e69500;

  i {
    padding-left: 15px;
  }

  :hover {
    border: 3px solid #e69500;
  }
`;
export const GridGalleryStyled = styled.div`
  display: grid;
  grid: auto-flow / 40vw 40vw;
  width: fit-content;
  grid-column-gap: 20px;
  margin-top: 80px;

  div {
    display: flex;
    flex-direction: column;
    align-items: center;

    p {
      text-align: center;
    }
  }

  //Tablet
  @media screen and (min-width: 426px) and (max-width: 1200px) {
    grid: auto-flow / 1fr 1fr 1fr;
  }

  //Desktop
  @media screen and (min-width: 1200px) {
    grid: auto-flow / 1fr 1fr 1fr 1fr;
    grid-column-gap: 41px;
  }
`;

export const Image = styled.img`
  width: 100px;
  height: 100px;

  //Desktop
  @media screen and (min-width: 1200px) {
    width: 160px;
    height: 160px;
  }
`;

export const LookingForMoreText = styled.p`
  text-align: center;
  text-decoration: underline;
  cursor: pointer;
`;
