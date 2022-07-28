import Wrap from "components/Wrap";
import styled from "styled-components";
import { useState } from "react";
import { NSection } from "./money/NotesSection";
import { NPSection } from "./money/NumberPadSection";
import { TSection } from "./money/TagsSection";
import { CSection } from "./money/CategorySection";
import { useHistoryRecords } from "components/Hooks/useHistoryRecord";

// const CustomCSection = styled(CSection)`
//   > ul {
//     background-color: #6d9a7c;
//   }
// `

const MyWrap = styled(Wrap)`
  display: flex;
  flex-direction: column;
`

type Category = '-' | '+'
const defaultFormData = {
  tagIds : [] as number[],
  note : '',
  category : '-' as Category,
  amount : 0,
};

function Money() {
  const [selected, setSelected] = useState(defaultFormData);

  const onChange = (obj: Partial<typeof selected>) => { // Partial<typeof selected>Partial 获得一个新的类型，可以为Selected里的一部分
    setSelected({...selected,...obj});
  }

  const {addRecord} = useHistoryRecords();
  const submit = () => {
    if (addRecord(selected)) {
    alert('保存成功');
    setSelected(defaultFormData);
    }
  };
  return (
    <MyWrap>
      <TSection value={selected.tagIds} 
                onChange={(tagIds) => onChange({tagIds:tagIds})}/>

      <NSection value={selected.note} 
                onChange={(note) => onChange({note:note})}/>

      <CSection value={selected.category} 
                onChange={(category:'-' | '+')=> onChange({category:category})}/>


      <NPSection value={selected.amount} 
                 onChange={(amount) => onChange({amount:amount})}
                 onOk = {submit}/>
    </MyWrap>

  );
}

export default Money;