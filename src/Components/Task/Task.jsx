import { Card, Paper, Stack, Typography } from '@mui/material';

export const Task = (props) => {
  return (
    <Stack spacing={2}>
      <Paper sx={{ width: '100%' }}>
        {/* <Typography variant={'h4'} component={'div'}>Column</Typography> */}
        <Typography variant={'h6'} component={'div'}>{props.title}</Typography>
        <Typography component={'div'}>{props.description}</Typography>
      </Paper>
    </Stack>
)};
