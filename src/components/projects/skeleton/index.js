import React from "react";
import Skeleton from "@mui/material/Skeleton";
import Stack from "@mui/material/Stack";
import { Box, Grid } from "@material-ui/core";

export default function SkeletonComponent() {
  return (
    <Stack spacing={1}>
      <Grid container>
        {Array.from(new Array(8)).map((_, index) => {
          return (
            <Grid key={index} item lg={3} md={4} sm={6} xs={12}>
              <Box p={4}>
                <Skeleton variant='rectangular' width={335} height={160} />
                <Skeleton variant='text' width={335} height={50} />
                <Skeleton variant='text' width={335} height={50} />
              </Box>
            </Grid>
          );
        })}
      </Grid>
    </Stack>
  );
}
