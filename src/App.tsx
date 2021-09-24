import { useReducer } from 'react';
import { AddNewItem } from './AddNewItem';
import './App.css';
import { Card } from './Card';
import { Column } from './Column';
import { DragItem } from './DragItem';
import { AppContainer } from './style';
import {useAppState} from './AppStateContext';
interface Task {
  id: string;
  text: string;
}
interface List {
  id: string;
  text: string;
  tasks: Task[];
}
export interface AppState {
  lists: List[];
  draggedItem?: DragItem | undefined;
}
function App() {
  const { state, dispatch } = useAppState();
  return (
    <AppContainer>
      {state.lists.map((list, i) => (
         <Column text={list.text} key={list.id} index={i} id={list.id} />
      ))}
      <AddNewItem
        toggleButtonText="+ Add another list"
        onAdd={(text) => dispatch({type: 'ADD_LIST', payload: {text}})}
      />
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
