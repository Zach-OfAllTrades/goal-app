import { Grid, Button, TextField, Stack } from "@mui/material";
import React, { useState } from "react";
import { validateTask } from "../utils/validation";

const TaskEntry = ({ addTask }: any) => {
  const [task, setTask] = useState("");

  const onSubmit = () => {
    if (validateTask(task)) return;
    addTask(task);
    setTask("");
  };

  const onEnterPress = (e: any) => {
    if (e.keyCode === 13) {
      e.preventDefault();

      if (validateTask(task)) return;
      addTask(task);
      setTask("");
    }
  };

  return (
    <Grid item xs={4}>
      <Stack spacing={1}>
        <TextField
          type="text"
          placeholder="Enter Task"
          value={task}
          onChange={(e) => setTask(e.target.value)}
          onKeyDown={onEnterPress}
        />
        <Button onClick={onSubmit}>Submit</Button>
      </Stack>
    </Grid>
  );
};

export default TaskEntry;
