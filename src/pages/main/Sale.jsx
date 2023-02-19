import React from "react";
import Content from "../../layouts/Content";
import { Header, Button, Input, Pagination, Table } from "semantic-ui-react";
import { Stack } from "@mui/material";
import _ from 'lodash';
import { Box } from "@mui/system";

export default function Sale() { 

    const tableData = []

    return (
        <Content>
            <Header as='h1'>Sales</Header>
            <Stack direction="row" spacing={1} >
                <Stack direction="column" sx={{ width: '100%',}}>
                <Box sx={{ backgroundColor: 'grey', height: 90 }}>

                </Box>
                <Box sx={{ backgroundColor: 'blue',  height: 90 }}>

                </Box>
                <Box sx={{ backgroundColor: 'yellow', height: 90 }}>

                </Box>
                </Stack>
                <Box sx={{ backgroundColor: 'grey', width: '40%' }}>

                </Box>
            </Stack>
            

        </Content>    
    );  
}
