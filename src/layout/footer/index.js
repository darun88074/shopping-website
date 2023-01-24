import { Button, Col, Input, Row } from "antd";
import { CardFooter } from "./components/footer-card";

function AppFooter() {
  return (
    <>
      <div>
        <CardFooter />
      </div>

      <div className="appFooter">
        <Row className="secure-payment">
          <Col xs={24} md={12} lg={12} xl={6} >
            <div >
              <p className="middle-heading">Policy Info</p>
              <ul className="middle-content">
                <li>
                  <span >
                    Privacy Policy
                  </span>
                </li>
                <li>
                  <span >Terms of Sale</span>
                </li>
                <li>
                  <span >Terms of Use</span>
                </li>
                <li>
                  <span  >Report Abuse &amp; Takedown Policy</span>
                </li>
                <li>
                  <span >FAQ</span>
                </li>
              </ul>
            </div>
          </Col>
          <Col xs={24} md={12} lg={12} xl={6} >
            <div >
              <p className="middle-heading">COMPANY</p>
              <ul className="middle-content">
                <li>
                  <span >
                    Impact@COMPANY
                  </span>
                </li>
                <li>
                  <span >Careers</span>
                </li>
                <li>
                  <span >Blog</span>
                </li>
                <li>
                  <span  >Sitemap</span>
                </li>
                <li>
                  <span >Contact Us</span>
                </li>
              </ul>
            </div>
          </Col>

          <Col xs={24} md={12} lg={12} xl={6} >
            <div >
              <p className="middle-heading">POPULAR LINKS</p>
              <ul className="middle-content">
                <li>
                  <span >
                    Lehenga
                  </span>
                </li>
                <li>
                  <span >Kid's Clothing</span>
                </li>
                <li>
                  <span >Sarees</span>
                </li>
                <li>
                  <span  >Winter Wear</span>
                </li>
              </ul>
            </div>
          </Col>
          <Col xs={24} md={12} lg={12} xl={6} >
            <div>
              <p className="middle-heading">SUBSCRIBE</p>
              <p>
                <Input.Group compact>
                  <Input
                    style={{
                      width: 'calc(100% - 200px)',
                    }}
                    defaultValue="www.arunkumardhayalan.com"
                  />
                  <Button type="primary">Submit</Button>
                </Input.Group>
              </p>
              <span className="">Register now to get updates on promotions andcoupons. Or Download App
              </span>
            </div>
          </Col>
        </Row>
      </div>
      <div className="copyrights">
        Copyright © 2021, COMPANY Limited. All Rights Reserved
      </div>
    </>
  );
}


export default AppFooter;
