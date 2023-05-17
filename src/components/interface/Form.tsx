import React, { useRef, useState } from "react";
import {
  FormContainer,
  RequestForm,
  CloseFormBtn,
} from "../styled_components/Form_styled";
import emailjs from "@emailjs/browser";

interface FormPropsTypes {
  closeBtnHandler: React.Dispatch<React.SetStateAction<boolean>>;
}

const successEmail = (
  <span>
    <i
      className="fa-solid fa-circle-check fa-lg"
      style={{ color: "#11ff00", margin: "0px 10px" }}
    ></i>
    Request Sent
  </span>
);

const failedEmail = (
  <span>
    <i
      className="fa-solid fa-xmark fa-lg"
      style={{ color: "#ff0000", margin: "0px 10px" }}
    ></i>
    An error occured. Please try again.
  </span>
);

const Form: React.FC<FormPropsTypes> = ({ closeBtnHandler }) => {
  const form = useRef<HTMLFormElement>(null);
  const [EmailState, setEmailState] = useState<boolean>();

  function formHandler(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (form.current == null) return;
    emailjs
      .sendForm(
        "service_wnaa785",
        "template_mdoigun",
        form.current,
        "R24arYF8SEz4txpS_"
      )
      .then(
        //SUCCESS
        () => {
          setEmailState(true);
        },
        //FAILED
        () => {
          setEmailState(false);
        }
      );
  }
  return (
    <FormContainer>
      <RequestForm ref={form} onSubmit={formHandler}>
        <CloseFormBtn onClick={() => closeBtnHandler(true)}>
          <i className="fa-solid fa-circle-xmark fa-2xl"></i>
        </CloseFormBtn>
        <p>
          Make a request for a particular service or product and we would
          response within 1 business day!
        </p>
        <label>
          Name *<br></br>
          <input type="text" required name="from_name" />
        </label>
        <br></br>
        <label>
          Email *<br></br>
          <input type="text" required name="from_email" typeof="email" />
        </label>
        <br></br>
        <label>
          Phone<br></br>
          <input type="text" name="from_phone" />
        </label>
        <br></br>
        <label htmlFor="enquiry">
          Request *<br></br>
          <textarea
            id="enquiry"
            rows={5}
            cols={47}
            required
            name="message"
          ></textarea>
        </label>
        <button type="submit" value="send">
          Submit
        </button>
        {EmailState === true && successEmail}
        {EmailState === false && failedEmail}
      </RequestForm>
    </FormContainer>
  );
};

export default Form;
