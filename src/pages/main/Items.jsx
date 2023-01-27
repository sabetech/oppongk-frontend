import React from "react";
import _ from 'lodash';
import Stack from "@mui/material/Stack";
import { Table } from 'semantic-ui-react';
import { Button } from 'semantic-ui-react'

export default function Items() {

    const tableData = []

    return (
        <div style={{position: 'fixed', top: '15%'}}>
            <Stack direction="row" spacing={2} justifyContent="flex-end" sx={{marginRight: 5}}>
                <Button>New Item</Button>
                <Button>CSV Import</Button>
            </Stack>
            <ItemsTable items={{}}/>
        </div>
    );
}

const AddNewItem = () => {

}

// Make headings dynamic
const ItemsTable = ({ items }) => {
    return (
        <Table sortable celled fixed>
            <Table.Header>
                <Table.Row>
                    <Table.HeaderCell>ID</Table.HeaderCell>
                    <Table.HeaderCell>Item Name</Table.HeaderCell>
                    <Table.HeaderCell>Category</Table.HeaderCell>
                    <Table.HeaderCell>Quantity</Table.HeaderCell>
                    <Table.HeaderCell>Wholesale Price</Table.HeaderCell>
                    <Table.HeaderCell>Retail Price</Table.HeaderCell>
                    
                </Table.Row>
            </Table.Header>
            <Table.Body>
                {_.map(items, ({ name, code }) => (
                    <Table.Row key={code}>
                        <Table.Cell>{name}</Table.Cell>
                        <Table.Cell>{code}</Table.Cell>
                    </Table.Row>
                ))}
            </Table.Body>
        </Table>
    );
}