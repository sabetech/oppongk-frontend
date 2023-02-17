import React, {useState} from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import { styled, lighten, darken } from '@mui/system';
import { Button } from 'semantic-ui-react';
import Stack from '@mui/material/Stack';
import { DataGrid } from '@mui/x-data-grid';
import Content from '../../layouts/Content';
import { Header } from 'semantic-ui-react';

const GroupHeader = styled('div')(({ theme }) => ({
    position: 'sticky',
    top: '-8px',
    padding: '4px 10px',
    color: theme.palette.primary.main,
    backgroundColor:
      theme.palette.mode === 'light'
        ? lighten(theme.palette.primary.light, 0.85)
        : darken(theme.palette.primary.main, 0.8),
  }));
  
  const GroupItems = styled('ul')({
    padding: 0,
  });

export default function Customers() {

    const [customers, setCustomers] = useState([]);

    const options = customers.map((option) => {
        const firstLetter = option.firstname[0].toUpperCase();
        return {
          firstLetter: /[0-9]/.test(firstLetter) ? '0-9' : firstLetter,
          ...option,
        };
      });

    return (
        <Content>
            <Header as='h1'>Customers</Header>
            <Stack direction="row" spacing={2} sx={{justifyContent: 'flex-end', marginBottom: 2}}>
                <Button>
                    New Customer
                </Button>
                <Button>
                    Import Customers
                </Button>
            </Stack>
            <Stack direction="row" spacing={2} sx={{justifyContent: 'flex-end'}}>
                <Autocomplete
                    id="grouped-demo"
                    options={options.sort((a, b) => -b.firstLetter.localeCompare(a.firstLetter))}
                    groupBy={(option) => option.firstLetter}
                    getOptionLabel={(option) => option.title}
                    sx={{ width: 340 }}
                    renderInput={(params) => <TextField {...params} label="Search for Customer" />}
                    renderGroup={(params) => (
                        <li>
                        <GroupHeader>{params.group}</GroupHeader>
                        <GroupItems>{params.children}</GroupItems>
                        </li>
                    )}
                />
            </Stack>
            <CustomerTable />
        </Content>
        
    );
}

function CustomerTable() {

    const columnsSchema = [
        { field: 'id', headerName: 'ID', width: 70 },
        { field: 'firstName', headerName: 'First name', width: 200 },
        { field: 'lastName', headerName: 'Last name', width: 200 },
        { field: 'phone', headerName: 'Phone number', width: 200 },
        { field: 'total_spent', headerName: 'Total Spent', width: 200 },
    ];

    const rows = [{ id: 1, lastName: 'Snow', firstName: 'Jon', phone: 234535, total_spent: 23 },];

    return (
        <div style={{ height: 400 }}>
            <DataGrid
                rows={rows}
                columns={columnsSchema}
                pageSize={5}
                rowsPerPageOptions={[5]}
                checkboxSelection
            />
        </div>
    );
}