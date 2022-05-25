import { Draggable } from 'react-beautiful-dnd';
import { Card, Paper, Stack, Typography } from '@mui/material';

export const Task = (props) => {
  return (
    <Draggable
      draggableId={props.task.id}
      index={props.index}
    >
      {(provided) => (
        <Stack spacing={2}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          ref={provided.innerRef}
        >
          <Paper sx={{ width: '100%' }}>
            {/* <Typography variant={'h4'} component={'div'}>Column</Typography> */}
            <Typography variant={'h6'} component={'div'}>{props.title}</Typography>
            <Typography component={'div'}>{props.description}</Typography>
          </Paper>
        </Stack>
        // {provided.pl}
      )}
    </Draggable>
)};
