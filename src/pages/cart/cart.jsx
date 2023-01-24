import {
    Button,
    Checkbox,
    Drawer,
    Form,
    Input,
    InputNumber,
    message,
    Table,
    Typography,
} from "antd";
import { useEffect, useState } from "react";
import { getCart } from "../../api";

function CartPage() {
    const [cartItems, setCartItems] = useState([]);
    const [, setCartDrawerOpen] = useState(false);
    const [checkoutDrawerOpen, setCheckoutDrawerOpen] = useState(false);
    useEffect(() => {
        getCart().then((res) => {
            setCartItems(res.products);
        });
    }, []);
    const onConfirmOrder = (values) => {
        console.log({ values });
        setCartDrawerOpen(false);
        setCheckoutDrawerOpen(false);
        message.success("Your order has been placed successfully.");
    };

    return (
        <div className="cart-page w-100">
            <div className="cart-sections">
                <div className="d-flex align-items-center justify-content-between mb-15">
                    <div className="cart-heading">Shopping Cart</div>
                    <div>
                        <Button onClick={() => {
                            setCheckoutDrawerOpen(true);
                        }} size='large' type='secondary' className='buy-now-cart'> Checkout Your Cart</Button>
                    </div>
                </div>
                <Table
                    pagination={false}
                    columns={[
                        {
                            title: "Title",
                            dataIndex: "title",
                        },
                        {
                            title: "Price",
                            dataIndex: "price",
                            render: (value) => {
                                return <span>${value}</span>;
                            },
                        },
                        {
                            title: "Quantity",
                            dataIndex: "quantity",
                            render: (value, record) => {
                                return (
                                    <InputNumber
                                        min={0}
                                        defaultValue={value}
                                        onChange={(value) => {
                                            setCartItems((pre) =>
                                                pre.map((cart) => {
                                                    if (record.id === cart.id) {
                                                        cart.total = cart.price * value;
                                                    }
                                                    return cart;
                                                })
                                            );
                                        }}
                                    ></InputNumber>
                                );
                            },
                        },
                        {
                            title: "Total",
                            dataIndex: "total",
                            render: (value) => {
                                return <span>${value}</span>;
                            },
                        },
                    ]}
                    dataSource={cartItems}
                    summary={(data) => {
                        const total = data.reduce((pre, current) => {
                            return pre + current.total;
                        }, 0);
                        return <div className="total-text">Total: ${total}</div>;
                    }}
                />
            </div>
            {/* checkout popup start */}
            <Drawer
                open={checkoutDrawerOpen}
                onClose={() => {
                    setCheckoutDrawerOpen(false);
                }}
                title="Confirm Order"
            >
                <Form onFinish={onConfirmOrder}>
                    <Form.Item
                        rules={[
                            {
                                required: true,
                                message: "Please enter your full name",
                            },
                        ]}
                        label="Full Name"
                        name="full_name"
                    >
                        <Input placeholder="Enter your full name.." />
                    </Form.Item>
                    <Form.Item
                        rules={[
                            {
                                required: true,
                                type: "email",
                                message: "Please enter a valid email",
                            },
                        ]}
                        label="Email"
                        name="your_name"
                    >
                        <Input placeholder="Enter your email.." />
                    </Form.Item>
                    <Form.Item
                        rules={[
                            {
                                required: true,
                                message: "Please enter your address",
                            },
                        ]}
                        label="Address"
                        name="your_address"
                    >
                        <Input placeholder="Enter your full address.." />
                    </Form.Item>
                    <Form.Item>
                        <Checkbox defaultChecked disabled>
                            Cash on Delivery
                        </Checkbox>
                    </Form.Item>
                    <Typography.Paragraph type="secondary">
                        More methods coming soon
                    </Typography.Paragraph>
                    <Button type="primary" htmlType="submit">
                        {" "}
                        Confirm Order
                    </Button>
                </Form>
            </Drawer>
            {/* checkout popup ends */}
        </div>
    );
}
export default CartPage;