import Image from "next/image";
import { useState } from "react";
import styled from "styled-components";

const AuthForm = () => {
  const passcode = "0411";
  const [inputs, setInputs] = useState(["", "", "", ""]);
  const [isValid, setIsValid] = useState(false);

  const handleChange = (index, value) => {
    if (!/^\d?$/.test(value)) return; // Allow only single digit
    const newInputs = [...inputs];
    newInputs[index] = value;
    setInputs(newInputs);

    if (value && index < 3) {
      document.getElementById(`input-${index + 1}`).focus(); // Move to next input
    }

    if (newInputs.join("") === passcode) {
      setIsValid(true);
    } else {
      setIsValid(false);
    }
  };

  if (isValid) {
    return (
      <SuccessContainer>
        <Image
          src={"/static/poopmart/poopmart_1.png"}
          width={500}
          height={500}
          alt="jejes"
        />
        <h1>Your Item is 100% Authentic</h1>
        <p>🎄 Merry Christmas 🎄</p>
      </SuccessContainer>
    );
  } else {
    return (
      <AuthFormContainer>
        <h1>Anti-counterfeiting Verification</h1>
        <label htmlFor="code">
          Please enter the last four digits of the code
        </label>
        <CodeWrapper>
          <p>{"3007"}</p>
          <p>{"-"}</p>
          <p>{"2002"}</p>
          <p>{"-"}</p>
          <p>{"2002"}</p>
          <p>{"-"}</p>
          {inputs.map((input, index) => (
            <StyledInput
              key={index}
              id={`input-${index}`}
              type="text"
              maxLength="1"
              value={input}
              onChange={(e) => handleChange(index, e.target.value)}
            />
          ))}
        </CodeWrapper>
        <VerifyButton>
          <p>Verify</p>
        </VerifyButton>
        <p>Please pay attention to screening and beware of being deceived.</p>
      </AuthFormContainer>
    );
  }
};

export default AuthForm;

const SuccessContainer = styled.div`
  position: relative;
  z-index: 2;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #ffe100ed;
  backdrop-filter: blur(4px);

  color: black;

  width: 82.5%;
  margin: 12px;
  border-radius: 4px;
  padding: 12px;

  & > img {
    width: 25%;
    height: auto;
  }

  & > h1 {
    font-size: 1.25rem;
    font-weight: 600;
  }

  & > p {
    color: #000000;
    margin: 0;
    font-size: 0.8rem;
  }
`;

const AuthFormContainer = styled.form`
  position: relative;
  z-index: 2;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #ffffffee;
  backdrop-filter: blur(4px);
  max-width: 20rem;

  gap: 12px;
  padding: 12px 24px;
  color: black;

  width: 82.5%;
  margin: 12px;
  border-radius: 4px;

  & > h1 {
    margin: 20px 0 24px 0;
    font-size: 1.25rem;
    font-weight: 600;
  }

  & > label {
    color: #535353de;
  }

  & > p {
    color: #a40505;
    margin: 0;
    font-size: 0.8rem;
  }
`;

const CodeWrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: 12px;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;

  font-size: 1.5rem;
  font-weight: 600;
  letter-spacing: 0.25rem;

  & > p {
    margin: 0;
  }
`;

const StyledInput = styled.input`
  width: 1.9rem;
  height: 1.9rem;
  text-align: center;
  font-size: 1.3rem;
  font-weight: 600;
  border: 2px solid #ccc;
  border-radius: 8px;
  background-color: #f9f9f9;
  outline: none;

  &:focus {
    border-color: #007bff;
    background-color: #fff;
  }
`;

const VerifyButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  max-width: 20em;

  & > p {
    color: black;
    font-size: 1rem;
    margin: 0;
  }

  background-color: #fff700;
  padding: 12px;
`;
