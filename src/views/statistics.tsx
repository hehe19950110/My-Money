import { useTags } from "components/Hooks/useTags";
import Wrap from "components/Wrap";
import {ReactNode, useState } from "react";
import styled from "styled-components";
import { CSection } from "./money/CategorySection";
import day from 'dayjs';
import {useHistoryRecords } from "components/Hooks/useHistoryRecord";
import 'core-js';

const Item = styled.span`
display: flex;
flex-direction: row;
font-size: 18px;
line-height: 20px;
padding: 10px 16px;
> div {
  display: flex;
  //flex: 1;
  justify-content: space-between;
}
> .note {
  margin-right: 20px;
  margin-left: 20px;
  color: #666;
}
> .amount {
  justify-content: flex-end;
  
}

`
type category = '+' | '-';

function Statistics() {
  const [category,setCategory] = useState<'+' | '-'> ('-');
  const {records} = useHistoryRecords();
  const {getName} = useTags();
  const selectedRecords = (category:category) => records.filter(r => r.category === category);
  
  let outcomes = selectedRecords(category);
  
  let result1:any = {};
  for(let i=0; i<outcomes.length; i++) {
    const key = day(outcomes[i].createAt).format('YYYY-MM-DD')
    console.log(key)
    if(result1[key] !==undefined) {
      result1[key].push(outcomes[i])
    } else {
      result1[key] = [outcomes[i]]
    }
  }

  console.log(result1)
  let result2:any = [];
  for(let key in result1) {
    result2.push({
      date: key,
      items: result1[key]
    })
  }
  console.log(result2);
  result2 = result2.sort((v1:any, v2:any) => {
    if(v1.date > v2.date) return 1
    return -1
  })
  
  return (
    <Wrap>

      <CSection value={category}
                onChange={value => setCategory(value)}/>
      {result2.map( (v:any) => <div>
        <h3>{v.date}</h3>
        <div>
        {v.items.map((r:any) => {
          return <Item>
            <div className="tags oneLine">
            {r.tagIds
            .map((tagId:any)=> <span key = {tagId}>{getName(tagId)}</span>)
            .reduce( (result2:any, span:any, index:any, array:any)=> 
              result2.concat(index < array.length -1 ? [span,','] : [span]), [] as ReactNode)
            }
            </div>

            {r.note ? <div className="note">
              {r.note}
            </div> : null}
            <hr />
            {/* {day(r.createAt).format('YYYY年MM月DD日')} */}

            <div className="amount">
             ￥{r.amount}
           </div>
          </Item>;
        })}
        </div>
      </div>)}

    </Wrap>
  );
}

export default Statistics;


