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

const CatTaskList = ({ taskList, removeTask }: TaskListProps) => {
  const onRemove = (task: Task) => {
    removeTask(task);
  };

  return (
    <Box sx={{border: "1px solid red"}}>
      <Stack spacing={1}>
        {taskList.map((task: Task) => (
          <Box sx={itemSx} key={task.id}>
            <Typography>{task.description}</Typography>
            <Button onClick={() => onRemove(task)}>X</Button>
          </Box>
        ))}
      </Stack>
    </Box>
  );
};

export default CatTaskList;
