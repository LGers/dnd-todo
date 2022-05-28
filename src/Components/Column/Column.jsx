import { Droppable, Draggable } from 'react-beautiful-dnd';
import { Card, Typography, Stack, Container } from '@mui/material';
import { Task } from '../Task/Task';

export const Column = (props) => {
  const { title, description, tasks } = props;

  return (
      <Draggable draggableId={props.column.id} index={props.index}>
        {(provided) => (
            <Card
              sx={{
                width: '250px',
                // height: '100%',
                bgcolor: '#d5d5ff',
                overflow: 'auto',
                display: 'flex',
                flexDirection: 'column',
              }}
              // {...provided.draggableProps}
              // {...provided.dragHandleProps}
              // ref={provided.innerRef}
            >
              <Container
                sx={{
                  overflowY: 'auto',
                  height: '100%'
                }}
              >
                <Typography variant={'h4'} component={'div'}>Column</Typography>
                <Typography variant={'h5'} component={'div'}>{title}</Typography>
                <Typography variant={'h6'} component={'div'}>{description}</Typography>
                <Droppable droppableId={props.column.id} type={'task'}>
                  {(provided, snapshot) => (
                    // TODO what is inner ref
                    // FIXME what is inner ref
                      <Card
                        sx={{
                          // overflowY: 'auto',
                          // height: '100%',
                          display: 'flex',
                          flexDirection: 'column',
                          bgcolor: '#1d1d1d',
                        }}
                      >
                        <Stack
                          spacing={2}
                          ref={provided.innerRef}
                          {...provided.droppableProps}
                          sx={{
                            // overflow: 'hidden',
                            // height: '100%',
                            // dispaly: 'flex',
                            // flexDirection: 'column',
                            // overflowY: 'auto',
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
                      </Card>
                  )}
                </Droppable>
              </Container>
            </Card>
        )}
      </Draggable>
)};
