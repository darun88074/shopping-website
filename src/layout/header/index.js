import {
  HomeFilled,
  ShoppingCartOutlined,
  UserOutlined
} from "@ant-design/icons";
import {
  Badge,
  Input,
  Menu,
  Space,
} from "antd";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { getCart } from "../../api";

const { Search } = Input;

function AppHeader() {
  const navigate = useNavigate();

  const onMenuClick = (item) => {
    navigate(`/${item.key}`);
  };

  const menuItems = [
    {
      label: <HomeFilled />,
      key: "",
    },
    {
      label: "Men",
      key: "men",
      children: [
        {
          label: "Men's Shirts",
          key: "mens-shirts",
        },
        {
          label: "Men's Shoes",
          key: "mens-shoes",
        },
        {
          label: "Men's Watches",
          key: "mens-watches",
        },
      ],
    },
    {
      label: "Women",
      key: "women",
      children: [
        {
          label: "Women's Dresses",
          key: "womens-dresses",
        },
        {
          label: "Women's Shoes",
          key: "womens-shoes",
        },
        {
          label: "Women's Watches",
          key: "womens-watches",
        },
        {
          label: "Women's Bags",
          key: "womens-bags",
        },
        {
          label: "Women's Jewellery",
          key: "womens-jewellery",
        },
      ],
    },
    {
      label: "Fragrances",
      key: "fragrances",
    },
  ]
  return (
    <>
      <div className="header-up">
        <HeaderUpSection />
      </div>

      <div className="appHeader">
        <div>
          <img src={require('../../assets/img/logo.png')} alt="logo" className="logo-height" />
        </div>
        <div>
          <Menu
            className="appMenu"
            onClick={onMenuClick}
            mode="horizontal"
            items={menuItems}
          />
        </div>
        <Space>
          <div className="pe-2">
            <Search
              placeholder="Search here"
              style={{
                width: 300,
              }}
            />
          </div>
          <div className="login-user" >
            <AppCart />
          </div>
          <div className="fs-20 login-user">
            <UserOutlined className="login-user-img" /> Arunkumar Dhayalan
          </div>
        </Space>

      </div>
    </>
  );
}

function AppCart() {
  const [cartItems, setCartItems] = useState([]);
  useEffect(() => {
    getCart().then((res) => {
      setCartItems(res.products);
    });
  }, []);
  return (
    <div>
      <Link to={'/cart'}>
        <Badge
          count={cartItems.length}
          className="soppingCartIcon"
        >
          <ShoppingCartOutlined />
        </Badge>
      </Link>
    </div>
  );
}

const HeaderUpSection = () => {
  return (
    <>
      <div>Brand Waali Quality, Bazaar Waali Deal!</div>
      <div className="d-flex gap-2">
        <div>Impact@Company</div>
        <div>Gift Cards</div>
        <div>Help Center</div>
        <div>Sell On shopping</div>
      </div>
    </>
  )
}

export default AppHeader;
