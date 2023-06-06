import { Box, List, ListItem } from "@mui/material";
import React, { useEffect, useState } from "react";
import { Task } from "../models";

type TaskListProps = {
  taskList: Task[];
};

const itemSx = {
  margin: 2,
  borderRadius: "5px",
  border: "solid 2px",
  borderColor: "black",
  width: "100%",
};

const TaskList = ({ taskList }: TaskListProps) => {
  const [emptyList, setEmptyList] = useState(true);

  useEffect(() => {
    if (taskList?.length) {
      setEmptyList(false);
    }
  }, [taskList]);

  return (
    <>
      {emptyList ? (
        <Box>Add a task to begin</Box>
      ) : (
        <List>
          {taskList.map((task, index) => (
            <ListItem sx={itemSx} key={`${task}-${index}`}>
              {task}
            </ListItem>
          ))}
        </List>
      )}
    </>
  );
};

export default TaskList;
