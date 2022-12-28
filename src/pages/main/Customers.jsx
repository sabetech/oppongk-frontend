import React from 'react';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import PersonAddAlt1Icon from '@mui/icons-material/PersonAddAlt1';
import InsertDriveFileIcon from '@mui/icons-material/InsertDriveFile';

export default function Customers() {

    return (
        <div style={{display: 'flex', flexDirection: 'column'}}>
            <Stack direction="row" spacing={2}>
                <Button variant="outlined" startIcon={<PersonAddAlt1Icon />}>
                    New Customer
                </Button>
                <Button variant="contained" startIcon={<InsertDriveFileIcon />}>
                    Import Customers
                </Button>
            </Stack>

            <div>
                <Button variant="contained" color="primary">
                    Delete
                </Button>
            </div>

        </div>
    );
}

function CustomerTable() {

    const columnsSchema = [
        { field: 'id', headerName: 'ID', width: 70 },
        { field: 'firstName', headerName: 'First name', width: 130 },
        { field: 'lastName', headerName: 'Last name', width: 130 },
        { field: 'phone', headerName: 'Phone number', width: 80 },
        { field: 'total_spent', headerName: 'Total Spent', width: 120 },
    ];

    const rows = [];
}