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