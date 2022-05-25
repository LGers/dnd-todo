import { DragDropContext } from 'react-beautiful-dnd';
import { Container, Stack } from "@mui/material";
import { Column } from "./Components/Column/Column";
import { initialState } from "./initial-data";

export const App = () => {
  const state = initialState;
  console.log(state);

  const onDragEnd = (result) => {

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
            console.log(column);
            const tasks = column.taskIds.map((taskId) => {
              console.log(state.tasks[taskId]);
              return state.tasks[taskId]
            });
            console.log(tasks);
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
