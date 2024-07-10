import { DownloadOutlined } from '@mui/icons-material';
import { Box, Button, Stack } from '@mui/material'
import React from 'react'
import Header from '../../Header/Header';
import Row1 from './Row1';
import Row2 from './Row2';

function Dashboard() {
  return (
    <>
      <Stack direction={"row"} justifyContent={"space-between"} alignItems={"center"}>
        <Header
          isDashboard={true}
          title={"DASHBOARD"}
          subTitle={"Welcome to your dashboard"}
        />
        <Box sx={{ textAlign: "right", mb: 1.3 }}>
          <Button
            sx={{ padding: "6px 8px", textTransform: "capitalize" }}
            variant="contained"
            color="primary"
          >
            <DownloadOutlined />
            Download Reports
          </Button>
        </Box>
      </Stack>

      <Row2 />
      <Row1 />

    </>
  )
}

export default Dashboard