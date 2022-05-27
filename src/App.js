import { useState } from 'react';
import { DragDropContext, Droppable } from 'react-beautiful-dnd';
import { Container, Stack, CssBaseline } from "@mui/material";
import { Column } from "./Components/Column/Column";
import { initialState } from "./initial-data";

export const App = () => {
  const [state, setState] = useState(initialState);

  const onDragEnd = (result) => {
    document.body.style.color = 'inherit';
    const { destination, source, draggableId, type } = result;

    if (!destination) {
      return;
    }

    if (
        destination.droppableId === source.droppableId &&
        destination.index == source.index
      ) {
      return;
    }

    if (type === 'column') {
      const newColumnOrder = Array.from(state.columnOrder);
      newColumnOrder.splice(source.index, 1);
      newColumnOrder.splice(destination.index, 0, draggableId);

      const newState = {
        ...state,
        columnOrder: newColumnOrder,
      };
      setState(newState);
      return;
    }
    // const column = state.columns[source.droppableId];
    const startColumn = state.columns[source.droppableId];
    const finishColumn = state.columns[destination.droppableId];
    
    if (startColumn === finishColumn) {
      const newTasksIds = Array.from(startColumn.taskIds);
      newTasksIds.splice(source.index, 1);
      newTasksIds.splice(destination.index, 0, draggableId);
  
      const newColumn = {
        ...startColumn,
        taskIds: newTasksIds,
      };
  
      const newState = {
        ...state,
        columns: {
          ...state.columns,
          [newColumn.id]: newColumn,
        },
      };
      setState(newState);
      return;
    }

    // Moving from one list to another
    const startTaskIds = Array.from(startColumn.taskIds);
    startTaskIds.splice(source.index, 1);

    const newStartColumn = {
      ...startColumn,
      taskIds: startTaskIds,
    };

    const finishTaskIds = Array.from(finishColumn.taskIds);
    finishTaskIds.splice(destination.index, 0, draggableId);

    const newFinishColumn = {
      ...finishColumn,
      taskIds: finishTaskIds,
    };

    const newState = {
      ...state,
      columns: {
        ...state.columns,
        [newStartColumn.id]: newStartColumn,
        [newFinishColumn.id]: newFinishColumn,
      },
    };
    setState(newState);
  };

  return (
    <Container sx={{
        bgcolor: 'gray',
        height: '100vh',
        marginTop: 0,
        pt: 0,
        overflow: 'hidden',
        // overflow: 'auto',
        // marginBottom: '30px',
        }}
    >
      <CssBaseline />
      <Container sx={{
        bgcolor: 'darkgray',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        // flexGrow: 1,
        // overflow: 'hidden',
        // overflow: 'auto',
        // margin: '30px',
        // marginBottom: '30px',
        }}
      >
        <h1>dnd-todo</h1>
        <h2>Columns</h2>
        <DragDropContext
          // onDragStart={onDragStart}
          // onDragUpdate={onDragUpdate}
          onDragEnd={onDragEnd}
        >
          <Droppable droppableId='board' direction='horizontal' type='column' 

          >
            {(provided) => (
              <Stack
                direction={'row'}
                spacing={2}
                {...provided.droppableProps}
                ref={provided.innerRef}
                sx={{
                  // height: '100%',
                  // height: '300px',
                  bgcolor: '#f1f111',
                  overflow: 'auto',
                }}
              >
                {state.columnOrder.map((columnId, index) => {
                  const column = state.columns[columnId];
                  const tasks = column.taskIds.map((taskId) => {
                    return state.tasks[taskId];
                  });
                  return (
                    <Column
                      key={column.id}
                      title={column.title}
                      description={column.description}
                      column={column}
                      tasks={tasks}
                      index={index}
                      sx={{
                        // height: '100%',
                        // height: '300px',
                        overflow: 'auto',
                        // overflow: 'hidden',
                      }}
                    />
                  )
                })}
                {provided.placeholder}
              </Stack>
            )}
          </Droppable>
        </DragDropContext>
        <div>
          <h1>Footer</h1>
        </div>
      </Container>
    </Container>
  );
};
