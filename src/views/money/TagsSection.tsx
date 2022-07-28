import styled from "styled-components"
import { useTags } from "components/Hooks/useTags";

const Wrapper = styled.section`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-start;
  border: 1px dotted yellowgreen;
  ol {
    li{
      background: #e7e7c6;
      border-radius: 10px;
      display: inline-block;
      padding: 3px 10px;
      margin: 15px 30px -60px -20px;
      font-size: 16px;
      &.selected {
        background: #2e7e49;
        color: white;
      }
    }
  }
  button {
    font-size: 16px;
    background: none;
    color: #666;
    border: none;
    border-bottom: 1px solid #2e7e49;
    margin: 0px 12px 5px 16px;
  }
`

type Props = { 
  value: number[];
  onChange: (selected: number[]) => void;  //返回值为空
 }

const TSection: React.FunctionComponent<Props> = (props) => {
  const {tags, addTag} = useTags();
  const selectedTagIds = props.value;

  const onToggleTag = (tagId:number) => {
    const index = selectedTagIds.indexOf(tagId);
    if (index > -1) {
      props.onChange(selectedTagIds.filter (t => t !== tagId));
    } else {
      props.onChange([...selectedTagIds,tagId])
    }
  };
  return (
    <Wrapper>
        <ol>
          {tags.map(tag =>
            <li key={tag.id} 
                onClick= { 
                 () => {onToggleTag(tag.id);}
                } className = {selectedTagIds.indexOf(tag.id) > -1 ? 'selected' : ''}>
                {tag.name}
            </li>
          )}
        </ol>
        <button onClick={addTag}>新增标签</button>
    </Wrapper>
  );
};

export {TSection};