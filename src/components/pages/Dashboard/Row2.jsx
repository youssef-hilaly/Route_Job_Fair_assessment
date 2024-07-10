import { Box, IconButton, Paper, Stack, Typography, useTheme } from "@mui/material";
import Line from "../Charts/Line/Line";
import React from "react";
import { DownloadOutlined } from "@mui/icons-material";
import { Customers, Transactions } from "../Data/Data";

const Row2 = () => {
    const theme = useTheme();
    return (
        <Stack direction={"row"} flexWrap={"wrap"} gap={1.2} mt={1.3}>
            <Paper sx={{ maxWidth: 900, flexGrow: 1, minWidth: "400px" }}>
                <Stack
                    alignItems={"center"}
                    direction={"row"}
                    flexWrap={"wrap"}
                    justifyContent={"space-between"}
                >
                    <Box>
                        <Typography
                            color={theme.palette.secondary.main}
                            mb={1}
                            mt={2}
                            ml={4}
                            variant="h6"
                            fontWeight={"bold"}
                        >
                            Revenue Generated
                        </Typography>
                        <Typography variant="body2" ml={4}>
                            $59,342.32
                        </Typography>
                    </Box>

                    <Box>
                        <IconButton sx={{ mr: 3 }}>
                            <DownloadOutlined />
                        </IconButton>
                    </Box>
                </Stack>

                <Line isDashboard={true} />
            </Paper>

            <Box
                sx={{
                    overflow: "auto",
                    borderRadius: "4px",
                    minWidth: "280px",
                    maxHeight: 355,
                    flexGrow: 1,
                }}
            >
                <Paper>
                    <Typography
                        color={theme.palette.secondary.main}
                        fontWeight={"bold"}
                        p={1.2}
                        variant="h6"
                    >
                        Recent Transactions
                    </Typography>
                </Paper>

                {Transactions.map((item) => {
                    return (
                        <Box key={item.id}>
                            <Paper
                                sx={{
                                    mt: 0.4,
                                    display: "flex",
                                    justifyContent: "space-between",
                                    alignItems: "center",
                                }}
                            >
                                <Box p={1.2}>
                                    <Typography variant="body1">Transaction Id : {item.id}</Typography>
                                    <Typography variant="body2">User : {GetUserName(item.customer_id)} </Typography>
                                </Box>
                                <Typography variant="body1">{item.date} </Typography>

                                <Typography
                                    borderRadius={1.4}
                                    p={1}
                                    bgcolor={theme.palette.error.main}
                                    color={theme.palette.getContrastText(theme.palette.error.main)}
                                    variant="body2"
                                >
                                    ${item.amount}
                                </Typography>
                            </Paper>
                        </Box>
                    );
                })}
            </Box>
        </Stack>
    );
};

const GetUserName = (id) => {
    return Customers.find((item) => item.id === id).name;
}

export default Row2;