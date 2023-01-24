import { Button, Col, Divider, Image, Rate, Row } from 'antd';
import { useLocation, Link } from 'react-router-dom';
import Products from '../../components/card';
import { LikeOutlined } from '@ant-design/icons';


function ProductDetails() {
    const location = useLocation();
    const detailsview = location.state;
    return (
        <div className="details-page w-100">
            <Row className='w-100 detail-page-content mb-15'>
                <Col md={12} className="detailview-col1">
                    <div className='detail-img-sec'>
                        <Image src={detailsview.thumbnail} />
                    </div>
                </Col>
                <Col md={12} className="p-15">
                    <div className='d-flex mb-2 justify-content-between align-items-center'>
                        <div className='detail-head'>
                            {detailsview.title}
                        </div>
                        <div>
                            <LikeOutlined className='fs-20' />
                        </div>
                    </div>
                    <div>
                        <Rate allowHalf disabled value={detailsview.rating} />
                    </div>
                    <Divider />
                    <div className='mb-15'>
                        <div className='detail-mrp'>
                            MRP  <span className='detail-mrpcut'>Rs. {detailsview.discountPercentage} </span>
                            (Inclusive of all taxes)
                        </div>
                        <div className='d-flex mb-2  align-items-center'>
                            <span className='detail-final-price'> Rs. {detailsview.price}</span>
                            <span className='detail-discount'>{detailsview.discountPercentage} OFF</span>
                        </div>
                    </div>
                    <div className='mb-15'>
                        <Row>
                            <Col span={4}>
                                <div className='w-he'>Color</div>
                            </Col>
                            <Col span={20}>
                                <div className='color-sec'>
                                    <Image src={detailsview.thumbnail} />
                                </div>
                            </Col>
                        </Row>
                    </div>
                    <div className='mb-15'>
                        <Row>
                            <Col span={4}>
                                <div className='w-he'>Size</div>
                            </Col>
                            <Col span={20}>
                                <div className='d-flex justify-content-between'>
                                    <div className='d-flex gap-8px'>
                                        <div className='detail-discount'>S</div>
                                        <div className='detail-discount'>M</div>
                                        <div className='detail-discount'>L</div>
                                        <div className='detail-discount'>XL</div>
                                    </div>
                                    <div className='detail-mrp'>Size Chart</div>
                                </div>
                            </Col>
                        </Row>
                    </div>
                    <div className='mb-15'>
                        <Row>
                            <Col offset={4} md={20} className="gap-8px d-flex">
                                <Link to={'/cart'}>
                                    <Button size='large' type='primary' className='add-to-cart'>ADD To Cart</Button>
                                </Link>
                                <Button size='large' type='secondary' className='buy-now-cart'> Buy Now</Button>
                            </Col>
                        </Row>
                    </div>
                </Col>
            </Row>
            <div className='bg-white'>
                <div className='p-15'>SIMILAR PRODUCTS</div>
                <Products />
            </div>
        </div>
    );
}

export default ProductDetails;