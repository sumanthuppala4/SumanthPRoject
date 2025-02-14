import { useState, useId } from "react";

function OptimisticTodoList() {
  const id = useId();
  const id2=useId();
  console.log(id,id2);

  return (
    <div>
      <h2>Optimistic To-Do List</h2>
    </div>
  );
}

export default OptimisticTodoList;
