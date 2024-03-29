import React from "react";
import _ from 'lodash';
import Stack from "@mui/material/Stack";
import { Header, Table, Button, Pagination, Input } from 'semantic-ui-react'
import Content from "../../layouts/Content";

export default function Items() {

    const tableData = []

    return (
        <Content>
            <Header as='h1'>Items</Header>
            <Stack direction="row" spacing={2} justifyContent="flex-end" >
                <Button>New Item</Button>
                <Button>CSV Import</Button>
            </Stack>
            <Stack direction="row" spacing={2} justifyContent="flex-end" >
            <Input action='Search' placeholder='Search...' style={{ marginTop: 20 }} />
            </Stack>
            <ItemsTable items={{}} />

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
const ItemsTable = ({ items }) => {
    return (
        <Table sortable celled >
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