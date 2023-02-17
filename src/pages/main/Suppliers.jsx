import React from "react";
import Content from "../../layouts/Content";
import { Header, Button, Input, Pagination, Table } from "semantic-ui-react";
import { Stack } from "@mui/material";
import _ from 'lodash';

export default function Suppliers() { 

    const tableData = []

    return (
        <Content>
            <Header as='h1'>Suppliers</Header>
            <Stack direction="row" spacing={2} justifyContent="flex-end" >
                <Button>New Item</Button>
                <Button>CSV Import</Button>
            </Stack>
            <Stack direction="row" spacing={2} justifyContent="flex-end" >
                <Input action='Search' placeholder='Search...' style={{ marginTop: 20 }} />
            </Stack>
            
            <SuppliersTable items={{tableData}} />

            <Pagination
                defaultActivePage={1}
                firstItem={null}
                lastItem={null}
                pointing
                secondary
                totalPages={3}
                style={{marginTop: 20, marginLeft: 20}}
            />
        </Content>
    );
}

const AddNewItem = () => {

}

// Make headings dynamic
const SuppliersTable = ({ items }) => {
    return (
        <Table sortable celled >
            <Table.Header>
                <Table.Row>
                    <Table.HeaderCell>ID</Table.HeaderCell>
                    <Table.HeaderCell>Suppliers Name</Table.HeaderCell>
                    <Table.HeaderCell>Email</Table.HeaderCell>
                    <Table.HeaderCell>Phone</Table.HeaderCell>
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