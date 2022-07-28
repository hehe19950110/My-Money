import { useEffect, useRef } from "react";

const useUpdate = (fn: () => void, deps: any[]) => {
  const count = useRef(0);

  useEffect( () => {
    count.current += 1;
  });
  useEffect( () => {
    if(count.current > 1){
      fn();
      //window.localStorage.setItem('tags',JSON.stringify(tags));
    }
  },[fn])  //只要tags变化了（新的对象），就把tags存到localStorage里
}

export {useUpdate};