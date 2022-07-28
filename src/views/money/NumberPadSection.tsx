import React, { useState } from "react";
import styled from "styled-components";
import { numberPabOutput } from "./NumberPadSection/numberPabOutput";

const Wrapper = styled.section`
display: flex;
flex-direction: column;
margin-top: -20px;
.output {
  background: white;
  font-size: 36px;
  line-height: 50px;
  text-align: right;
  padding: 0 16px;
}
.pad {
  button {
    font-size: 18px;
    float: left;
    width: 20%;
    height: 64px;
    background: #f8f8f6;
    &.ok {
      height: 128px;
      float: right;
    }
    &.zero {
      width: 40%;
      float: left;
    }
    &.date{
      height: 128px;
      float: right;
    }
  }
}
`
type Props = { 
  value: number;
  onChange: (value: number) => void;  //返回值为空
  onOk ?: () => void; 
 }
const NPSection: React.FunctionComponent<Props> = (props) => {
  //const output = props.value.toString();
  const [output,_setOutput] = useState(props.value.toString());
  const setOutput = (output: string) => {
    let newOutput: string;
    if (output.length > 20) {
      newOutput = output.slice(0,20) ;  // 变成小数
    } else if (output.length === 0) {
      newOutput = '0';
    } else {
      newOutput = output;
    }
    _setOutput(newOutput);
    props.onChange(parseFloat( newOutput));
  };
  const onClickButtonWrapper = (e:React.MouseEvent) => {
    const text = (e.target as HTMLButtonElement).textContent;
    if (text === null) {return;}
    if (text === 'OK') {
      if (props.onOk){props.onOk();}
      return;
    }
    if ('0123456789.'.split('').concat(['删除','清空']).indexOf(text) >=0) {
      setOutput (numberPabOutput(text,output));
    }
  };

  return (
    <Wrapper>
        <div className="output">
          {output}
        </div>

        <div className="pad clearfix" onClick={onClickButtonWrapper}>
          <button>1</button>
          <button>2</button>
          <button>3</button>
          <button>删除</button>
          <button className="date">日期</button>
          <button>4</button>
          <button>5</button>
          <button>6</button>
          <button>清空</button>
          <button>7</button>
          <button>8</button>
          <button>9</button>
          <button className="add">➕</button>
          <button className="ok">OK</button>
          <button className="zero">0</button>
          <button className="dot">.</button>
          <button className="cut">➖</button>
        </div>
    </Wrapper>
  );
};

export {NPSection};