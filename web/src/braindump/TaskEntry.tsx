import { Box, Button, TextField } from "@mui/material";
import React, { useState } from "react";

const TaskEntry = ({ addTask }: any) => {
  const [task, setTask] = useState('');

  const onSubmit = () => {
    addTask(task);
    setTask('');
  };

  const onEnterPress = (e: any) => {
    if (e.keyCode === 13) {
      e.preventDefault();

      addTask(task);
      setTask('');
    }
  };

  return (
    <Box>
      <TextField
        type="text"
        placeholder="Enter Task"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        onKeyDown={onEnterPress}
      />
      <Button onClick={onSubmit}>Submit</Button>
    </Box>
  );
};

export default TaskEntry;
