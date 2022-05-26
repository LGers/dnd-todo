import { useRef } from 'react';
import { Droppable } from 'react-beautiful-dnd';
import { Card, Typography, Stack, Container } from '@mui/material';
import { Task } from '../Task/Task';

export const Column = (props) => {
  const { title, description, tasks } = props;

  return (
    <Card sx={{ width: '250px', bgcolor: '#d5d5ff', height: '100%' }}>
      <Container>
        <Typography variant={'h4'} component={'div'}>Column</Typography>
        <Typography variant={'h5'} component={'div'}>{title}</Typography>
        <Typography variant={'h6'} component={'div'}>{description}</Typography>
        <Droppable droppableId={props.column.id}>
          {(provided, snapshot) => (
            // TODO what is inner ref
            // FIXME what is inner ref
            // <div ref={provided.innerRef} {...provided.droppableProps}>
              <Stack
                spacing={2}
                ref={provided.innerRef}
                {...provided.droppableProps}
                sx={{
                  transition: 'transform 0.05s ease',
                  transform: snapshot.isDragging ? 'rotate(5deg)' : undefined,
                  bgcolor: snapshot.isDraggingOver ? '#bdbdd5' : '#d5d5ff',
                  }}
              >
                {tasks.map((task, index) => {
                    return <Task
                      key={task.id}
                      title={task.title}
                      description={task.description}
                      task={task}
                      index={index}
                    />
                  }
                )}
                {provided.placeholder}
              </Stack>
            // </div>
          )}
        </Droppable>
      </Container>
    </Card>
)};
