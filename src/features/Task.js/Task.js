import  React from 'react';

export const Task = ( { task, markTaskHandler, deleteTaskHandler }) => {

  return (
      <div>
        <h4>{task.data} {task.isSelected ? 'SELECTED' : ''} </h4>
        <button onClick={() => markTaskHandler(task)}>+</button>
        <button onClick={() => deleteTaskHandler(task)}>-</button>
      </div>
  );
}