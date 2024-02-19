import styled from "styled-components";

export const ContactListWrapper = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 20px;
  list-style: none;
  margin: 0;
  padding: 0;
`;

export const ContactLiItem = styled.li`
  color: #474f7a;
  font-size: 16px;
  position: relative;
`;

export const DelBtn = styled.button`
  padding: 8px;
  width: 15%;
  border: none;
  outline: none;
  background-color: #81689d;
  color: #fff3cf;
  font-size: 16px;
  transition: all 250ms ease;
  cursor: pointer;
  /* margin-left: 20px; */
  position: absolute;
  top: 0;
  right: 0;

  &:hover {
    background-color: #fff3cf;
    color: #81689d;
    border-left: 2px solid #81689d;
    border-right: 2px solid #81689d;
  }
`;

export const ContactName = styled.span`
  margin-right: 15px;
  font-size: 17px;
  font-weight: 500;
`;

export const ContactNumber = styled.span`
  color: #81689d;
  font-size: 17px;
  font-weight: 500;
`;
