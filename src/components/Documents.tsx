import {Table, TableProps} from 'antd';
import type {ColumnsType} from 'antd/es/table';
import React, {useState} from 'react';

interface DataType {
    key: React.Key;
    name: string;
    age: number;
    address: string;
}

// const columns: ColumnsType<DataType> = [
//     {
//         title: 'Name',
//         dataIndex: 'name',
//     },
//     {
//         title: 'Age',
//         dataIndex: 'age',
//     },
//     {
//         title: 'Address',
//         dataIndex: 'address',
//     },
// ];


const columns: ColumnsType<DataType> = [
    {
        title: 'Name',
        dataIndex: 'name',
        filters: [
            {
                text: 'Joe',
                value: 'Joe',
            },
            {
                text: 'Jim',
                value: 'Jim',
            },
            {
                text: 'Submenu',
                value: 'Submenu',
                children: [
                    {
                        text: 'Green',
                        value: 'Green',
                    },
                    {
                        text: 'Black',
                        value: 'Black',
                    },
                ],
            },
        ],
        // specify the condition of filtering result
        // here is that finding the name started with `value`
        // @ts-ignore
        onFilter: (value: string, record) => record.name.indexOf(value) === 0,
        sorter: (a, b) => a.name.length - b.name.length,
        sortDirections: ['ascend', 'descend'],
        filterResetToDefaultFilteredValue: true,
        width: '70%'
    },
    {
        title: 'Age',
        dataIndex: 'age',
        defaultSortOrder: 'descend',
        sorter: (a, b) => a.age - b.age,
    },
    {
        title: 'Address',
        dataIndex: 'address',
        filters: [
            {
                text: 'London',
                value: 'London',
            },
            {
                text: 'New York',
                value: 'New York',
            },
        ],
        // @ts-ignore
        onFilter: (value: string, record) => record.address.indexOf(value) === 0,
        filterResetToDefaultFilteredValue: true
    },
];

const data = [
    {
        key: '1',
        name: 'John Brown',
        age: 32,
        address: 'New York No. 1 Lake Park',
    },
    {
        key: '2',
        name: 'Jim Green',
        age: 42,
        address: 'London No. 1 Lake Park',
    },
    {
        key: '3',
        name: 'Joe Black',
        age: 32,
        address: 'Sidney No. 1 Lake Park',
    },
    {
        key: '4',
        name: 'Jim Red',
        age: 32,
        address: 'London No. 2 Lake Park',
    },
    {
        key: '5',
        name: 'John Brown',
        age: 32,
        address: 'New York No. 1 Lake Park',
    },
    {
        key: '6',
        name: 'Jim Green',
        age: 42,
        address: 'London No. 1 Lake Park',
    },
    {
        key: '7',
        name: 'Joe Black',
        age: 32,
        address: 'Sidney No. 1 Lake Park',
    },
    {
        key: '8',
        name: 'Jim Red',
        age: 32,
        address: 'London No. 2 Lake Park',
    },
    {
        key: '1',
        name: 'John Brown',
        age: 32,
        address: 'New York No. 1 Lake Park',
    },
    {
        key: '9',
        name: 'Jim Green',
        age: 42,
        address: 'London No. 1 Lake Park',
    },
    {
        key: '10',
        name: 'Joe Black',
        age: 32,
        address: 'Sidney No. 1 Lake Park',
    },
    {
        key: '11',
        name: 'Jim Red',
        age: 32,
        address: 'London No. 2 Lake Park',
    },
    {
        key: '12',
        name: 'John Brown',
        age: 32,
        address: 'New York No. 1 Lake Park',
    },
    {
        key: '13',
        name: 'Jim Green',
        age: 42,
        address: 'London No. 1 Lake Park',
    },
    {
        key: '14',
        name: 'Joe Black',
        age: 32,
        address: 'Sidney No. 1 Lake Park',
    },
    {
        key: '15',
        name: 'Jim Red',
        age: 32,
        address: 'London No. 2 Lake Park',
    },
];

// const data: DataType[] = [];
// for (let i = 0; i < 46; i++) {
//     data.push({
//         key: i,
//         name: `Edward King ${i}`,
//         age: 32,
//         address: `London, Park Lane no. ${i}`,
//     });
// }


const Documents: React.FC = () => {
    const [selectedRowKeys, setSelectedRowKeys] = useState<React.Key[]>([]);
    const [loading, setLoading] = useState(false);

    const start = () => {
        setLoading(true);
        // ajax request after empty completing
        setTimeout(() => {
            setSelectedRowKeys([]);
            setLoading(false);
        }, 1000);
    };

    const onSelectChange = (newSelectedRowKeys: React.Key[]) => {
        setSelectedRowKeys(newSelectedRowKeys);
        console.log('selectedRows: ', selectedRowKeys);
    };

    const rowSelection = {
        selectedRowKeys,
        onChange: onSelectChange,
    };
    const hasSelected = selectedRowKeys.length > 0;

    const onChange: TableProps<DataType>['onChange'] = (pagination, filters, sorter, extra) => {
        console.log('params', pagination, filters, sorter, extra);
    };


    return (
        <>
            <Table
                size="middle"
                showSorterTooltip={true}
                bordered
                rowSelection={rowSelection}
                columns={columns}
                pagination={{
                    position: ['bottomLeft'],
                    hideOnSinglePage: true
                }}
                dataSource={data}
                onChange={onChange}/>
        </>
    );
};

export default Documents;
// import { Table } from 'antd';
// import type { ColumnsType } from 'antd/es/table';
// import React from 'react';
//
// interface DataType {
//     key: React.Key;
//     name: string;
//     age: number;
//     address: string;
// }
//
// const columns: ColumnsType<DataType> = [
//     {
//         title: 'Full Name',
//         width: 100,
//         dataIndex: 'name',
//         key: 'name',
//         fixed: 'left',
//     },
//     {
//         title: 'Age',
//         width: 100,
//         dataIndex: 'age',
//         key: 'age',
//         fixed: 'left',
//     },
//     {
//         title: 'Column 1',
//         dataIndex: 'address',
//         key: '1',
//         width: 150,
//     },
//     {
//         title: 'Column 2',
//         dataIndex: 'address',
//         key: '2',
//         width: 150,
//     },
//     {
//         title: 'Column 3',
//         dataIndex: 'address',
//         key: '3',
//         width: 150,
//     },
//     {
//         title: 'Column 4',
//         dataIndex: 'address',
//         key: '4',
//         width: 150,
//     },
//     {
//         title: 'Column 5',
//         dataIndex: 'address',
//         key: '5',
//         width: 150,
//     },
//     {
//         title: 'Column 6',
//         dataIndex: 'address',
//         key: '6',
//         width: 150,
//     },
//     {
//         title: 'Column 7',
//         dataIndex: 'address',
//         key: '7',
//         width: 150,
//     },
//     { title: 'Column 8', dataIndex: 'address', key: '8' },
//     {
//         title: 'Action',
//         key: 'operation',
//         fixed: 'right',
//         width: 100,
//         render: () => <a>action</a>,
//     },
// ];
//
// const data: DataType[] = [];
// for (let i = 0; i < 100; i++) {
//     data.push({
//         key: i,
//         name: `Edrward ${i}`,
//         age: 32,
//         address: `London Park no. ${i}`,
//     });
// }
//
// const Documents: React.FC = () => (
//     <Table columns={columns} dataSource={data} scroll={{ x: 3000, y: 300 }} />
// );
//
// export default Documents;