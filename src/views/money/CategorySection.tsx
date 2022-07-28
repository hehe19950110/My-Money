import { useState } from "react";
import styled from "styled-components"

const Wrapper = styled.section`
font-size: 24px;
margin-left: -50px;
margin-top:-20px;
> ul {
  display: flex;
  background: rgba(0,0,0,0);
  > li {
    width: 50%;
    text-align: center;
    padding: 16px 0;
    position: relative;
    &.selected::after {
      content: '';
      display: block;
      height: 2px;
      background: #333;
      position: absolute;
      bottom: 0%;
      width: 100%;
    }
  }
}
`


type Props = { 
  value: '-' | '+';
  onChange: (value: '-' | '+') => void;  //返回值为空
  className?: string;
}
const CSection: React.FunctionComponent<Props> = (props) => {
  const categoryMap = {'-':'支出','+':'收入'};
  const [categoryList] = useState< ('-' | '+')[]>(['-' , '+']);
  const category = props.value

  return (
    <Wrapper className={props.className}>
      <ul>
        {categoryList.map(c => 
              <li key ={c}
                  className= {category === c ? 'selected' : ''}
                  onClick = {() => {props.onChange(c);}}
                  >{categoryMap[c]}
              </li>
          )}
      </ul>
    </Wrapper>
  );
};

export {CSection};