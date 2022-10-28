import styled from 'styled-components'

export const LiContainer = styled.li`
  margin: 10px;
`
export const Button = styled.button`
  border-radius: 13px;
  height: 30px;
  cursor: pointer;
  padding: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-family: 'Roboto';
  color: ${props => props.textColorCode};
  text-align: center;
  border: solid 1px #db1c48;
  background-color: ${props => props.bgColor};
`
