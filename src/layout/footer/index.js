import { Button, Col, Image, Input, Row, Typography } from "antd";

function AppFooter() {
  return (
    <>
      <Row className="secure-payment">
        <Col xs={24} md={12} lg={12} xl={6} >
          <div className="card-footer">
            <img className="card-f-img" src={require('../../assets/img/shield.png')} alt="shield" />
            <div className="top-heading">100% Secure Payments</div>
            <p className="subText mt12">Moving your card details to a much more </p>
            <p className="subText">secured place</p>
          </div>
        </Col>
        <Col xs={24} md={12} lg={12} xl={6} >
          <div className="card-footer">
            <img className="card-f-img" src={require('../../assets/img/money.png')} alt="money" />
            <div className="top-heading">TrustPay</div>
            <p className="subText mt12">100% Payment Protection. Easy</p>
            <p className="subText">Return Policy </p>
          </div>
        </Col>
        <Col xs={24} md={12} lg={12} xl={6} >
          <div className="card-footer">
            <img className="card-f-img" src={require('../../assets/img/help-desk.png')} alt="help-desk" />
            <div className="top-heading">Help Center</div>
            <p className="subText mt12">Got a question? Look no further.</p>
            <p className="subText">Browse our FAQs or submit your query here.</p>
          </div>
        </Col>
        <Col xs={24} md={12} lg={12} xl={6} >
          <div className="card-footer">
            <img className="card-f-img" src={require('../../assets/img/smartphone.png')} alt="smartphone" />
            <div className="top-heading">Shop on the Go</div>
            <p className="subText mt12">Download the app and get exciting </p>
            <p className="subText">secured place</p>
          </div>
        </Col>
      </Row>

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
