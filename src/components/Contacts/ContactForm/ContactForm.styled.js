import styled from "styled-components";

export const FormWrapper = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  color: #474f7a;
  margin-bottom: 40px;
`;

export const InputBox = styled.input`
  padding: 10px;
  margin-top: 5px;
  margin-bottom: 20px;
  background-color: #8e7ab5;
  color: #fefbf6;
  border: none;
  outline: none;
  width: 50%;
`;

export const InputLabel = styled.label`
  font-size: 18px;
  font-weight: 500;
  color: #474f7a;
  font-weight: 700;
`;

export const SubmitBtn = styled.button`
  margin-top: 10px;
  padding: 10px;
  width: 25%;
  border: none;
  outline: none;
  font-size: 16px;
  color: #8e7ab5;
  background-color: #fefbf6;
  border-left: 3px solid #8e7ab5;
  border-right: 3px solid #8e7ab5;
  font-weight: 700;
  transition: all 250ms ease;
  cursor: pointer;

  &:hover {
    color: #fefbf6;
    background-color: #8e7ab5;
  }
`;
