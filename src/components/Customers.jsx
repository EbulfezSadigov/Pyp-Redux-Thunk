import React, { Fragment, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import 'antd/dist/antd.min.css';
import { Table, Button, notification } from 'antd';
import { Content } from 'antd/lib/layout/layout';
import { getCustomers, removeCustomer } from '../redux/actions/customers.action';


function Customers() {


    const dispatch = useDispatch();
    const customers = useSelector(state => state)

    useEffect(() => {
        dispatch(getCustomers())
    }, [])

    const remove = (id) => {
        dispatch(removeCustomer(id))
    }


    const columns = [
        {
            title: 'Company Name',
            dataIndex: 'companyName',
            key: 'companyName',
        },
        {
            title: 'Customer Id',
            dataIndex: 'id',
            key: 'id',
        },
        {
            title: 'Address',
            dataIndex: 'address',
            key: 'address',
            render: (address) => <p>{address.city}, {address.country}</p>,
        },
        {
            title: "Remove",
            dataIndex: "id",
            key: "id",
            render: (value, data) => <Button onClick={() => remove(value)} type='danger'>Delete Customer</Button>,
        }

    ];


    return (
        <div className="site-layout-content">
            <Content style={{ padding: '0 100px' }}>
                <Table columns={columns} dataSource={customers} rowKey='id' />
            </Content>
        </div>
    )

}

export default Customers