import React from "react";
import styled from "styled-components";

const FormContainer = styled.div`
  width: 90vw;
  background-color: white;
  opacity: 1;
  padding: 20px 30px;
`;

const RequestForm = styled.form`
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

const CloseFormBtn = styled.p`
  display: flex;
  height: auto;
  justify-content: flex-end;
  color: #5aa6bf;
  margin-top: 20px;
`;

interface FormTypes {
  closeBtnHandler: React.Dispatch<React.SetStateAction<boolean>>;
}
const Form: React.FC<FormTypes> = ({ closeBtnHandler }) => {
  function formHandler(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
  }
  return (
    //TODO Better form validation
    <FormContainer>
      <RequestForm
        onSubmit={(e) => {
          formHandler(e);
        }}
      >
        <CloseFormBtn onClick={() => closeBtnHandler(true)}>
          <i className="fa-solid fa-circle-xmark fa-2xl"></i>
        </CloseFormBtn>
        <p>
          Make a request for a particular service or product and we would
          response within 1 business day!
        </p>
        <label>
          Name *<br></br>
          <input type="text" required />
        </label>
        <br></br>
        <label>
          Email *<br></br>
          <input type="text" required />
        </label>
        <br></br>
        <label>
          Phone<br></br>
          <input type="text" />
        </label>
        <br></br>
        <label htmlFor="enquiry">
          Request *<br></br>
          <textarea id="enquiry" rows={5} cols={47} required></textarea>
        </label>
        <button type="submit">Submit</button>
      </RequestForm>
    </FormContainer>
  );
};

export default Form;
