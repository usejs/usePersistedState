
 <p align="center"><img width="250" src="https://usejs.github.io/.github/public/Use.transparent.png"/></p>


# <p align="center">usePersistedState</p>
<p align="center">
<a href="#details">
<img src="https://img.shields.io/badge/License-MIT-319046?" alt="License-MIT"/>&nbsp;&nbsp;
<img src="https://img.shields.io/badge/npm-0.1.0-319046?" alt="License-MIT"/></a>


</p>

<br/>

A custom hook that persists a state even after refreshing the page. It returns two values just like the standard `useState`, but has one more argument needed.

- Returns:<br/>
  [state](#state) : `any`<br/>
  [setState](#setstate) : `Dispatch<SetStateAction<any>>`<br/>

- Argument<br/>
  [key](#key): `string`<br/>
  [initialState](#initialState): `any`<br/>

### Install
```bash 
npm i @_use/persistedstate
```

### Usage

```tsx 
import usePersistedState from '@_use/persistedstate'

const InputPersisted = () => {

   const [ state, setState ] = usePersistedState('state', '')

  return (<>
    <input 
      value={state}
      onClick={e => setState(e.target.value)}  
    />
     
  </>)
}

export default InputPersisted
```

### Type
> if you need `usePersistedState` type, import inside `UsePersistedState` braces with first letter capitalized.
```ts
import usePersistedState, { UsePersistedState } from '@_use/persistedstate'
```

```ts
type UsePersistedState = <T>(key:string, initialState: T) => [
  T,
  Dispatch<SetStateAction<T>>
]
```

<br/>
<br/>
<br/>

<p align="center">Use.js &copy; 2022 | License MIT</p>