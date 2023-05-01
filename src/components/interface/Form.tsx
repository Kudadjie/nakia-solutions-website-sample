import React from "react";
import { FormContainer, RequestForm, CloseFormBtn } from "./Form_styled";

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
