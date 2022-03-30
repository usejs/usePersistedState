import { Dispatch, SetStateAction, useEffect, useState } from "react";

export type UsePersistedState = <T>(key:string, initialState: T) => [
  T,
  Dispatch<SetStateAction<T>>
]

const usePersistedState = <T>(key:string, initialState: T) => {
  const [state, setState] = useState(() => {
    if(typeof window !== "undefined") {
      const storageValue = localStorage.getItem(key)

      if(storageValue){
        return JSON.parse(storageValue)
      } else {
        return initialState
      }
    }
  })

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(state))
  }, [key, state])

  return [state, setState];
}

export default usePersistedState

