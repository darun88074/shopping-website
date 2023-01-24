import {
  Badge,
  Button,
  Card,
  Image,
  List,
  message,
  Rate,
  Typography,
  Select,
} from "antd";
import { useEffect, useState } from "react";
import { addToCart, getAllProducts, getProductsByCategory } from "../../api";
import { useNavigate, useParams } from "react-router-dom";

function ProductCard() {
  const [loading, setLoading] = useState(false);
  const param = useParams();
  const [items, setItems] = useState([]);
  const [sortOrder, setSortOrder] = useState("az");

  useEffect(() => {
    setLoading(true);
    (param?.categoryId
      ? getProductsByCategory(param.categoryId)
      : getAllProducts()
    ).then((res) => {
      setItems(res.products);
      setLoading(false);
    });
  }, [param]);

  const getSortedItems = () => {
    const sortedItems = [...items];
    // eslint-disable-next-line array-callback-return
    sortedItems.sort((a, b) => {
      const aLowerCaseTitle = a.title.toLowerCase();
      const bLowerCaseTitle = b.title.toLowerCase();

      if (sortOrder === "az") {
        return aLowerCaseTitle > bLowerCaseTitle
          ? 1
          : aLowerCaseTitle === bLowerCaseTitle
            ? 0
            : -1;
      } else if (sortOrder === "za") {
        return aLowerCaseTitle < bLowerCaseTitle
          ? 1
          : aLowerCaseTitle === bLowerCaseTitle
            ? 0
            : -1;
      } else if (sortOrder === "lowHigh") {
        return a.price > b.price ? 1 : a.price === b.price ? 0 : -1;
      } else if (sortOrder === "highLow") {
        return a.price < b.price ? 1 : a.price === b.price ? 0 : -1;
      }
    });
    return sortedItems;
  };
  const navigate = useNavigate();

  const navigateToDetail = (id, discountPercentage, thumbnail, rating, description, product, title, price) => {
    navigate("/product-detail", {
      state: {
        id: id,
        discountPercentage: discountPercentage,
        thumbnail: thumbnail,
        rating: rating,
        product: product,
        description: description,
        title: title,
        price: price
      }
    });
  }

  return (
    <div className="productsContainer">
      <div className="sort-sections">
        <div>
          {(product, index) => {
            return <div key={index}>TotalCount: {product.id.length}</div>
          }}
        </div>
        <div>
          <Typography.Text>View Items Sorted By: </Typography.Text>
          <Select
            onChange={(value) => {
              setSortOrder(value);
            }}
            defaultValue={"az"}
            options={[
              {
                label: "Alphabetically (a-z)",
                value: "az",
              },
              {
                label: "Alphabetically (z-a)",
                value: "za",
              },
              {
                label: "Price (Low to High)",
                value: "lowHigh",
              },
              {
                label: "Price (High to Low)",
                value: "highLow",
              },
            ]}
          >
          </Select>
        </div>

      </div>
      <List
        loading={loading}
        grid={{ column: 3 }}
        renderItem={(product, index) => {
          return (
            <Badge.Ribbon
              className="itemCardBadge"
              text={`${product.discountPercentage}% Off`}
              color="green"
            >
              <Card
                className="itemCard"
                title={product.title}
                key={index}
                onClick={() => navigateToDetail(
                  product.id,
                  product.discountPercentage,
                  product.thumbnail,
                  product.rating,
                  product,
                  product.description,
                  product.title,
                  product.price
                )}
                cover={
                  <Image className="itemCardImage" src={product.thumbnail} />
                }
                actions={[
                  <Rate allowHalf disabled value={product.rating} />,
                  <AddToCartButton item={product} />,
                ]}
              >
                <Card.Meta
                  title={
                    <Typography.Paragraph>
                      Rs: {product.price}{" "}
                      <Typography.Text delete type="danger">

                        {parseFloat(
                          product.price +
                          (product.price * product.discountPercentage) / 100
                        ).toFixed(2)}
                      </Typography.Text>
                    </Typography.Paragraph>
                  }
                  description={
                    <Typography.Paragraph
                      ellipsis={{ rows: 2, expandable: true, symbol: "more" }}
                    >
                      {product.description}
                    </Typography.Paragraph>
                  }
                ></Card.Meta>
              </Card>
            </Badge.Ribbon>
          );
        }}
        dataSource={getSortedItems()}
      ></List>
    </div>
  );
}

function AddToCartButton({ item }) {
  const [loading, setLoading] = useState(false);
  const addProductToCart = () => {
    setLoading(true);
    addToCart(item.id).then((res) => {
      message.success(`${item.title} has been added to cart!`);
      setLoading(false);
    });
  };
  return (
    <Button
      type="link"
      onClick={() => {
        addProductToCart();
      }}
      loading={loading}
    >
      Add to Cart
    </Button>
  );
}
export default ProductCard;
