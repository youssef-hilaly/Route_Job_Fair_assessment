import React from 'react'
import { Box, FormControl, InputLabel, MenuItem, Typography, useTheme } from '@mui/material'
import Line from './Line'
import Select from '@mui/material/Select'
import { Customers } from '../../Data/Data';

function LinePage() {
  const [userId, setUserId] = React.useState(1);
  const theme = useTheme();

  const handleChange = (event) => {
    setUserId(event.target.value);
  };

  return (
    <>
      <Box sx={{ width: '100%', marginRight: 'auto', marginBottom: '15px' }}>
        <Typography variant="h4" sx={{ color: theme.palette.primary.main, textTransform: 'capitalize', fontWeight: 'bold' }}>Line Chart</Typography>
        <Typography variant="body1" sx={{}}>Simple Line Chart</Typography>
        <Box sx={{ marginLeft: "auto", marginRight: 14, width: 500 }}>
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">userId</InputLabel>
            <Select
              sx={{ width: 500 }}
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={userId}
              label="Age"
              onChange={handleChange}
            >
              {Customers.map((customer) => (
                <MenuItem value={customer.id}>{customer.name}</MenuItem>
              ))}
            </Select>
          </FormControl>
        </Box>
      </Box>
      <Line userId={userId} />
    </>
  )
}

export default LinePage