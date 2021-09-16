// import { useReducer } from 'react';
import { AddNewItem } from './AddNewItem';
import './App.css';
import { Card } from './Card';
import { Column } from './Column';
import { AppContainer } from './style';
function App() {
  return (
    <AppContainer>
      <Column text="To Do">
        <Card text ="Generate App scaffold" />
      </Column>
      <Column text="In Progress">
        <Card text ="Learn Typescript" />
      </Column>
      <Column text="Done">
        <Card text ="begin to use static typing" />
      </Column>
      <AddNewItem toggleButtonText="Add another list" onAdd={console.log}/>
    </AppContainer>
  );
}

/* interface State{
  count:number;
}

type Action = {
  type:'increment'
}
|{
  type:'decrement'
}
const counterReducer = (state:State,action:Action)=>{
  switch(action.type){
    case 'increment':
      return {
        count:state.count+1
      }
    case 'decrement':
      return {
        count:state.count-1
      }
    default:
      throw new Error()
  }
}

const App = ()=>{
  const [state,dispatch] = useReducer(counterReducer,{count:0})
  return (
    <>
    <p>Count:{state.count}</p>
    <button onClick={()=>dispatch({type:'decrement'})}>-</button>
    <button onClick={()=>dispatch({type:'increment'})}>+</button>
    </>
  )
} */



export default App;
