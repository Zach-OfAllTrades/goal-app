import { Grid } from "@mui/material";
import React, { useState } from "react";
import { Task } from "../models";
import TaskEntry from "./TaskEntry";
import TaskList from "./TaskList";

const BrainDump = () => {
  const [taskList, setTaskList] = useState<Task[]>([]);

  const addTask = (task: Task) => {
    setTaskList([...taskList, task]);
  };

  // TODO: MAKE RESPONSIVE
  // In mobile mode, input will be below list and will stay focused on input
  return (
    <Grid>
      <TaskList taskList={taskList} />
      <TaskEntry addTask={addTask} />
    </Grid>
  );
};

export default BrainDump;
