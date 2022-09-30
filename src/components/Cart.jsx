import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Button, notification, Table } from 'antd';
import { Content } from 'antd/lib/layout/layout';


const Cart = () => {

  const cart = useSelector(state => state)

  const dispatch = useDispatch();

  const Remove = (item) => {
      dispatch({type: 'REMOVE_CART', payload: item})
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
      title: "Remove From Favorites",
      dataIndex: "id",
      key: "id",
      render: (value, data) => <Button onClick={() => Remove(data)} type='danger'>Delete Customer</Button>,

  }
  ];
  

  return (
    <div>
      <h1 style={{textAlign:'center'}}>Cart Count: {cart.length}</h1>
      <Content style={{ padding: '0 100px' }}>
        <Table columns={columns} dataSource={cart} rowKey='id' />
      </Content>
    </div>
  )
}

export default Cart