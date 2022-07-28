import { Button } from "components/Button";
import Icon from "components/Icon";
import Wrap from "components/Wrap";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { useTags } from "../components/Hooks/useTags";
require('iconfonts/right.svg');

const TagList = styled.ol`
  font-size: 18px;
  background: white;
  margin: 20px;
  border-radius:10px;
  li {
      border-bottom: 1px solid #898888;
      margin-left: -30px;
      /* display: flex;
      justify-content: space-between;
      align-items: center; */
      padding: 12px 6px;
      a {
        display:flex;
        align-items: center;
        width: 100%;
        svg {
          margin-left: auto;
        }
      }
   }
   .icon {
      margin-right: 10px;
      height: 12px;
      width: 12px;
    }
`
const Center = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`

function Tags() {
  const {tags,addTag} = useTags();
  return (
    <Wrap>
      <TagList>
          {tags.map(tag => 
            <li key={tag.id}>
              <Link to={'/tags/' + tag.id} >
                <span className="oneLine">{tag.name}</span>
                <Icon name="right"/>
              </Link>
            </li>
          )}
      </TagList>

      <Center>
        <Button onClick={addTag}>新增标签</Button>
      </Center>
    </Wrap>
  );
}
export default Tags;