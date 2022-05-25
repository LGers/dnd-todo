import { useRef } from 'react';
import { Droppable } from 'react-beautiful-dnd';
import { Card, Paper, Typography, Stack, Container } from '@mui/material';
import { Task } from '../Task/Task';

export const Column = (props) => {
  const { title, description, tasks } = props;
  console.log(tasks);
  const ref = useRef();

  return (
    <Card sx={{ width: '250px', bgcolor: '#d5d5ff' }}>
      <Container>
        <Typography variant={'h4'} component={'div'}>Column</Typography>
        <Typography variant={'h5'} component={'div'}>{title}</Typography>
        <Typography variant={'h6'} component={'div'}>{description}</Typography>
        <Droppable droppableId={props.column.id}>
          {(provided) => (
            // TODO what is inner ref
            // FIXME what is inner ref
            <div ref={provided.innerRef} {...provided.droppableProps}>
              <Stack
                spacing={2}
                // innerRef={provided.innerRef}
                // {...provided.droppableProps}
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
            </div>
          )}
          {/* <Stack spacing={2}>
            {tasks.map((task) => {
                return <Task key={task.id} title={task.title} description={task.description} />
              }
            )}
          </Stack> */}
        </Droppable>
      </Container>
    </Card>
)};
