import { Box, Button, Grid, Stack, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { Task } from "../../models";

type TaskListProps = {
  taskList: Task[];
  removeTask: any;
};

const itemSx = {
  borderRadius: "5px",
  border: "solid 2px",
  borderColor: "black",
  width: "100%",
  display: "flex",
  justifyContent: "space-between",
  p: 1,
};

const NoCatTaskList = ({ taskList, removeTask }: TaskListProps) => {
  const onDelete = (task: Task) => {
    removeTask(task);
  };

  return (
    <Stack spacing={1}>
      {taskList.map((task: Task) => (
        <Box sx={itemSx} key={task.id}>
          <Typography>{task.description}</Typography>
          <Button onClick={() => onDelete(task)}>X</Button>
        </Box>
      ))}
    </Stack>
  );
};

export default NoCatTaskList;
