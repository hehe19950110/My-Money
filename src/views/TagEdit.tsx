import Wrap from "components/Wrap";
import { useParams, useHistory } from "react-router-dom";
import { useTags } from "../components/Hooks/useTags";
import React from 'react';
import Icon from "components/Icon";
import { Button } from "components/Button";
import styled from "styled-components";
require('iconfonts/left.svg');

type Params = {
  id : string;
}

const Topbar = styled.header`
  display: flex;
  justify-content:space-between;
  align-items: center;
  margin: 10px 10px;
  padding:10px;
  .icon {
      height: 20px;
      width: 20px;
      margin-top: 5px;
      margin-right: 10px;
    }
  span {
    font-size: 26px;

  }
`
const Center = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 66vh;
`
const Label = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 10px;
  span {
    font-size: 20px;
    padding-right: 10px;
  }
  input {
    font-size: 16px;
    border: none;
    border-radius: 4px;
    padding: 8px 10px;
    width: 60%;
  }

`

const TagEdit: React.FunctionComponent = () => {
  const {findTag, updateTag, deleteTag} = useTags();
  let {id:idString} = useParams<Params>();  // 把id重命名为idString
  const tag = findTag (parseInt(idString));

  const history = useHistory();
  const onClickBack = () => {
    history.goBack();
  }

    return (
      <Wrap>

        <Topbar  >
          <div onClick={onClickBack}>
            <Icon name="left" />
              <span>编辑标签</span>
            <Icon />
          </div>
          
        </Topbar>

        {tag ? <div>
          <Label>
          <span>标签名:</span>
          <input type="text" 
                 placeholder="标签名"
                 value={tag.name} 
                 onChange={(e) => {
                 updateTag(tag.id,{id: tag.id, name:e.target.value}); // id为number
                 }}
           />
          </Label>

          <Center>
            <Button onClick={() => {
              deleteTag(tag.id);
            }}>删除标签</Button>
          </Center>

        </div> : <div> tag 不存在 </div>}

      </Wrap>
    );
  
};

export {TagEdit};