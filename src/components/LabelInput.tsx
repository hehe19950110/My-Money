import styled from "styled-components";

const Label = styled.label`
  display: flex;
  align-items: center;
  span {
    margin-right: 1px;
    white-space: nowrap;
  }
  input {
    display: block;
    width: 100%;
    height: 36px;
    background: none;
    border: none;
    font-size: 16px;
  }
`
type Props = {
  label: string;
} & React.InputHTMLAttributes<HTMLInputElement>;

const Input: React.FunctionComponent<Props> = (props) => {
  const {label,children,...rest} = props;
  
  return(
    <Label>
      <span> {props.label} </span>
      <input  {...rest}/> 
    </Label>
  );
};

export {Input};