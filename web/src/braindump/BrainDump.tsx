import { Grid, Typography } from "@mui/material";
import React, { useState } from "react";
import { Task } from "../models";
import TaskEntry from "./TaskEntry";
import TaskList from "./lists/TaskList";

const BrainDump = () => {
  const [taskList, setTaskList] = useState<Task[]>([]);
  // TODO: Remove ---- TEMPORARY
  const [currentId, setCurrentId] = useState<number>(0);

  const addTask = (taskDesc: string) => {
    // TODO: Remove ---- TEMPORARY
    const task: Task = { id: currentId, description: taskDesc };
    setCurrentId(currentId + 1);

    setTaskList([...taskList, task]);
  };

  const removeTask = (task: Task) => {
    console.log(task);
    const newTaskList = taskList.filter((t) => t.id !== task.id);
    console.log(newTaskList);
    setTaskList(newTaskList);
  };

  // TODO: MAKE RESPONSIVE
  // In mobile mode, input will be below list and will stay focused on input
  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <Typography variant="h1" gutterBottom>
          Brain Dump
        </Typography>
      </Grid>
      <Grid container spacing={2}>
        <TaskEntry addTask={addTask} />
        <TaskList taskList={taskList} removeTask={removeTask} />
      </Grid>
    </Grid>
  );
};

export default BrainDump;
