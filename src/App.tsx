import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

const App: React.FC = () => {
  const [list, setList] = useState<string[]>([]);

  const handleListClick = ({ currentTarget }: any) => {
    const replaceIdToLi = currentTarget.id.replace('btn', 'li');
    const currLi = document.getElementById(replaceIdToLi)!;
    const removedElement = list.filter(elemen => elemen !== currLi.innerText)
    setList(removedElement)
  }

  const mapList = list.map((item: string, index: number) => {
    return (
      <div>
        <li id={`${ index }-li`} key={`${ index }-li`}>{item}</li>
        <button id={`${index}-btn`} key={`${ index }-btn`} type='button' onClick={handleListClick}>Excluir da lista</button>
      </div>)
  })

  const handleEnter = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') handleSubmit(e)
  }
  const handleSubmit = (e: any) => {
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
