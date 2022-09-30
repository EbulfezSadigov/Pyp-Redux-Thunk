import { Button, Form, Input } from 'antd';
import React from 'react';
import { useDispatch } from 'react-redux';
import { postData } from '../redux/actions/customers.action';

const FormCustomer = () => {
    const dispatch = useDispatch();

    const onFinish = (values) => {
        console.log(values);
      dispatch(postData(values));
    };


    return (
        <Form
            name="basic"
            labelCol={{
                span: 7,
            }}
            wrapperCol={{
                span: 10,
            }}
            initialValues={{
                remember: true,
            }}
            autoComplete="off"
            onFinish={onFinish}
        >
            <Form.Item
                label="Company Name"
                name="companyName"
                rules={[
                    {
                        required: true,
                        message: 'Please input your Company Name!',
                    },
                ]}
            >
                <Input />
            </Form.Item>

            <Form.Item
                label="Customer Id"
                name="CustomerID"
                rules={[
                    {
                        required: true,
                        message: 'Please input your Customer Id!',
                    },
                ]}
            >
                <Input />
            </Form.Item>

            <Form.Item
                label="Address"
                name="address"
                rules={[
                    {
                        required: true,
                        message: 'Please input your address!',
                    },
                ]}
            >
                <Input />
            </Form.Item>

            <Form.Item
                wrapperCol={{
                    offset: 11,
                    span: 12,
                }}
            >
                <Button type="primary" htmlType="submit">
                    Submit
                </Button>
            </Form.Item>
        </Form>
    );
};

export default FormCustomer;