export const initialState = {
  tasks: {
    'task-1': { id: 'task-1', title: 'Header', description: 'Header description 1' },
    'task-2': { id: 'task-2', title: 'Body', description: 'Body description 2' },
    'task-3': { id: 'task-3', title: 'Content', description: 'Content description 3' },
    'task-4': { id: 'task-4', title: 'Footer', description: 'Footer description 4' },
  },
  columns: {
    'column-1': {
      id: 'column-1',
      title: 'Backlog',
      description: 'Backlog description',
      taskIds: ['task-1', 'task-2', 'task-3', 'task-4'],
    },
    'column-2': {
      id: 'column-2',
      title: 'Todo',
      description: 'Todo description',
      taskIds: [],
    },
    'column-3': {
      id: 'column-3',
      title: 'InProgress',
      description: 'InProgress description',
      taskIds: [],
    },
  },
  // columnOrder: ['column-1', 'column-2'],
  columnOrder: ['column-1', 'column-2', 'column-3'],
};
