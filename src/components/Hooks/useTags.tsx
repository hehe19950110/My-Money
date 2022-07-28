import { useUpdate } from "components/Hooks/useUpdate";
import { useEffect, useState } from "react";
import { createId } from "../../views/lib/createId";

type Tag = {
  id: number,
  name: string
}

const useTags = () => {  //封装一个自定义 HOOK：
  const [tags,setTags] = useState<{id:number; name:string}[]>([]);
  useEffect( ()=> {
    let localTags = JSON.parse(window.localStorage.getItem('tags') || '[]');
    if (localTags.length === 0) {
      localTags = [
        {id:createId(),name:'餐饮'},
        {id:createId(),name:'购物'},
        {id:createId(),name:'居家'},
        {id:createId(),name:'交通'},
      ];
    }
    setTags(localTags);
  },[]);  //组件挂载时执行

  useUpdate( () => {
    window.localStorage.setItem('tags',JSON.stringify(tags));
  },[tags])

  const findTag = (id:number) => tags.filter(tag => tag.id === id)[0];
  const findTagIndex = (id:number) => {
    let result = -1;
    for (let i = 0; i < tags.length; i++) {
      if (tags[i].id === id ) {
        result = i;
        break;
      }
    }
    return result;
  };

  const updateTag = (id: number, obj:Tag) => {
    // // 获取到需要修改的 tag 的下标
    // const index = findTagIndex(id);
    // // 深拷贝tags 得到tagsClone：
    // const tagsClone = JSON.parse(JSON.stringify(tags))  
    // // 把 tagsClone 的第 index 删掉，换成{id:id, name:obj.name}，组成新的 tags:
    // tagsClone.splice(index,1,{id:id, name:obj.name})
    // setTags(tagsClone);

    // setTags(tags.map (tag => {
    //   if (tag.id ===id) {
    //     return obj;
    //   } else {
    //     return tag;
    //   }
    // }));
    // 即：
    setTags(tags.map (tag => tag.id === id ? obj : tag));
  };

  const deleteTag = (id: number) => {
    // // 获取到需要删除的 tag 的下标
    // const index = findTagIndex(id);
    // // 深拷贝tags 得到tagsClone：
    // const tagsClone = JSON.parse(JSON.stringify(tags))  
    // // 把 tagsClone 的第 index 删掉，组成新的 tags:
    // tagsClone.splice(index,1)
    // setTags(tagsClone);

    setTags(tags.filter(tag => tag.id !== id));
  };

  const addTag = () => {
    const tagName = window.prompt('新标签的名字为：');
    if (tagName !== null && tagName !== '') {
      setTags([...tags,{id:createId(), name:tagName}]);
    }
  };

  const getName = (id:number) => {
    const tag = tags.filter(t => t.id === id)[0];
    return tag? tag.name: '';
  };

  return {tags, setTags, findTag, updateTag, findTagIndex, deleteTag, addTag, getName};
};

export {useTags};


