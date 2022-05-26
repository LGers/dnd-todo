import { Draggable } from 'react-beautiful-dnd';
import { Paper, Stack, Typography } from '@mui/material';

export const Task = (props) => {
  return (
    // <Paper sx={{ bgcolor: 'blue', width: '100%' }}>
    <Draggable
      draggableId={props.task.id}
      index={props.index}
    >
      {(provided, snapshot) => (
        <Stack spacing={2}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          ref={provided.innerRef}
        >
          <Paper sx={{
            width: '100%',
            transition: 'transform 0.05s ease',
            transform: snapshot.isDragging ? 'rotate(5deg)' : undefined,
            }}
          >
            <Typography variant={'h6'} component={'div'}>{props.title}</Typography>
            <Typography component={'div'}>{props.description}</Typography>
            {/* <input /> */}
          </Paper>
        </Stack>
      )}
    </Draggable>
    // </Paper>
)};
