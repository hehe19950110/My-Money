import { Input } from "components/LabelInput";
import { ChangeEventHandler } from "react";
import styled from "styled-components"

const Wrapper = styled.section`
padding: 12px 20px;
font-size: 16px;
`

type Props = { 
  value: string;
  onChange: (value: string) => void;  //返回值为空
 }
const NSection: React.FunctionComponent<Props> = (props) => {
  const note = props.value
  const onChange:ChangeEventHandler<HTMLInputElement> = (e) => {
    props.onChange(e.target.value);
  };
  return (
    <Wrapper>
      <Input type="text" 
             label="备注：" 
             value={note} 
             onChange={onChange}
             placeholder="请填写备注"
             >
      </Input>
    </Wrapper>
  );
};

export {NSection};
