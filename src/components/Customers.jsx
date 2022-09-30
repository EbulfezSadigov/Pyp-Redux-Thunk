import React, { Fragment, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import 'antd/dist/antd.min.css';
import { Table, Button, notification } from 'antd';
import { Content } from 'antd/lib/layout/layout';


function Customers() {

    const [customer, setcustomer] = useState([]);

    useEffect(() => {
        fetch('https://northwind.vercel.app/api/customers')
            .then(res => res.json())
            .then(data => setcustomer(data));
    }, []);

    const dispatch = useDispatch();
    const cart = useSelector(state=>state)

    const add = (item) => {
        if (!cart.includes(item)) {
            dispatch({ type: 'ADD_TO_CART', payload: item })
        }
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
            title: "Add to Favorites",
            dataIndex: "id",
            key: "id",
            render: (value, data) => <Button onClick={() => add(data)} type='primary'>Add to Favorites</Button>,

        }
    ];


    return (
        <div className="site-layout-content">
            <Content style={{ padding: '0 100px' }}>
                <Table columns={columns} dataSource={customer} rowKey='id' />
            </Content>
        </div>
    )

}

export default Customers