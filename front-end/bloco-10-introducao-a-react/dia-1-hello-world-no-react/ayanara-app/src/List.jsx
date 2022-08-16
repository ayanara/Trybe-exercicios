import React from 'react';

class List extends React.Component {
  render() {
    const list = ['Estudar', 'Ler', 'Fazer almoço']
    const Task = list.map((elemento) => <li>{elemento}</li>)
    return (
        <div>
        <h1>Ayanara Nathane</h1>
        <h2>Minhhas Tarefas</h2>
        <ul>{Task}</ul>
        </div>
    )
  }
}
export default List;
