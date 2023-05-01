import styled from "styled-components";

export const FormContainer = styled.div`
  width: 90vw;
  background-color: white;
  opacity: 1;
  padding: 20px 30px;

  //Tablet
  @media screen and (min-width: 426px) and (max-width: 1200px) {
  }
  //Desktop
  @media screen and (min-width: 1200px) {
    width: 50vw;
  }
`;

export const RequestForm = styled.form`
  label {
    font-size: larger;
    margin-bottom: 10px;
    padding-right: 5px;
    color: rgb(26, 43, 109);
    input,
    textarea {
      margin-top: 10px;
      margin-bottom: 10px;
      padding-left: 5px;
      border: 1px solid #5aa6bf;
      border-top: 0px;
      border-right: 0px;
      border-left: 0px;
      width: 100%;
      height: 40px;
      font-size: large;
    }

    textarea {
      height: initial;
    }
  }

  button {
    color: white;
    width: fit-content;
    margin-top: 20px;
    padding: 10px 20px;
    background-color: #2984ca;
    border-radius: 10px;

    :visited {
      color: white;
    }
  }

  p {
    margin: 25px 0;
  }
`;

export const CloseFormBtn = styled.p`
  display: flex;
  height: auto;
  justify-content: flex-end;
  color: #5aa6bf;
  margin-top: 20px;
  cursor: pointer;

  :hover {
    color: red;
  }
`;
