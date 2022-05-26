import { useState } from 'react';
import { DragDropContext } from 'react-beautiful-dnd';
import { Container, Stack } from "@mui/material";
import { Column } from "./Components/Column/Column";
import { initialState } from "./initial-data";

export const App = () => {
  const [state, setState] = useState(initialState);

  const onDragEnd = (result) => {
    // console.log('result', result);
    const { destination, source, draggableId } = result

    if (!destination) {
      return;
    }

    if (
        destination.droppableId === source.droppableId &&
        destination.index == source.index
      ) {
      return;
    }

    const column = state.columns[source.droppableId];
    const newTasksIds = Array.from(column.taskIds);
    // console.log(column.taskIds);
    // console.log(column.newTaskIds);
    newTasksIds.splice(source.index, 1);
    newTasksIds.splice(destination.index, 0, draggableId); // insert draggableId

    const newColumn = {
      ...column,
      taskIds: newTasksIds
    }

    const newState = {
      ...state,
      columns: {
        ...state.columns,
        [newColumn.id]: newColumn,
      },
    }
    setState(newState);
  };

  return (
    <Container sx={{bgcolor: 'gray', height: '100vh'}}>
      <h1>dnd-todo</h1>
      <h2>Columns</h2>
      <DragDropContext
        // onDragStart={}
        // onDragUpdate={}
        onDragEnd={onDragEnd}
      >
        <Stack direction={'row'} spacing={2}>
          {state.columnOrder.map((columnId) => {
            const column = state.columns[columnId];
            // console.log(column);
            const tasks = column.taskIds.map((taskId) => {
              // console.log(state.tasks[taskId]);
              // console.log('taskId', taskId);
              return state.tasks[taskId]
            });
            // console.log('tasks', tasks);
            return (
              <Column
                key={column.id}
                title={column.title}
                description={column.description}
                column={column}
                tasks={tasks}
              />
            )
          })}
        </Stack>
      </DragDropContext>
    </Container>
  );
};
