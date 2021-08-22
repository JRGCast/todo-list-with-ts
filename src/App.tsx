import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

const App: React.FC = () => {
  const [list, setList] = useState<string[]>([]);

  const handleListClick = ({currentTarget}: any) => {
    const newStyle = {textDecoration: 'line-through'}
    const currLi = document.getElementById(`${currentTarget.id}`)
    const theStyle = currLi?.getAttribute('style');
    if(theStyle === null || theStyle !== 'text-decoration:line-through') {
      currLi?.setAttribute('style', 'text-decoration:line-through')
    } else {
      currLi?.setAttribute('style', 'text-decoration:none')
    }
      
    console.log(currLi, theStyle)
  }
  const mapList = list.map((item: string, index: number) => {
  return (<li id={`${index}`} key={index} onClick={handleListClick}>{item}</li>)
  })
  
  const handleEnter = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if(e.key === 'Enter') handleSubmit(e)
  }
  const handleSubmit = (e:any) => {
    const theInput = (document.getElementById('todo-input') as HTMLInputElement);
    e.preventDefault();
      setList([...list, theInput.value])
      theInput.value = ''
  }
  return (
    <div>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <label htmlFor='todo-input'> Coloque sua tarefa aqui:&nbsp;
        <input id='todo-input' type='text' placeholder='tarefas' onKeyDown={handleEnter} ></input>
        </label>
        <button type='submit' onClick={(e) => handleSubmit(e)}>Adicionar tarefa</button>
        <ol id='todo-ol'>
          {mapList}
        </ol>
      </header>
    </div>
  );
}

export default App;
