import { Button, Col, Image, Input, Row, Typography } from "antd";

function AppFooter() {
  return (
    <>
      <Row className="secure-payment">
        <Col xs={6} lg={6} md={6}>
          <div className="card-footer">
            {/* <Image src="../assets/img/help-desk.png"></Image>
            <img src="../assets/img/help-desk.png" alt="help-desk"/> */}
            <p className="top-heading">100% Secure Payments</p>
            <p className="subText mt12">Moving your card details to a much more </p>
            <p className="subText">secured place</p>
          </div>
        </Col>
        <Col xs={6} lg={6} md={6}>
          <div className="card-footer">
            <p className="top-heading">TrustPay</p>
            <p className="subText mt12">100% Payment Protection. Easy</p>
            <p className="subText">Return Policy </p>
          </div>
        </Col>
        <Col xs={6} lg={6} md={6}>
          <div className="card-footer">
            <p className="top-heading">Help Center</p>
            <p className="subText mt12">Got a question? Look no further.</p>
            <p className="subText">Browse our FAQs or submit your query here.</p>
          </div>
        </Col>
        <Col xs={6} lg={6} md={6}>
          <div className="card-footer">
            <p className="top-heading">Shop on the Go</p>
            <p className="subText mt12">Download the app and get exciting </p>
            <p className="subText">secured place</p>
          </div>
        </Col>
      </Row>

      <div className="appFooter">
        <Row className="secure-payment">
          <Col xs={6} lg={6} md={6}>
            <div >
              <p className="middle-heading">Policy Info</p>
              <ul class="middle-content">
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
          <Col xs={6} lg={6} md={6}>
            <div >
              <p className="middle-heading">COMPANY</p>
              <ul class="middle-content">
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

          <Col xs={6} lg={6} md={6}>
            <div >
              <p className="middle-heading">POPULAR LINKS</p>
              <ul class="middle-content">
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
          <Col xs={6} lg={6} md={6}>
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
      <div class="copyrights">
        Copyright © 2021, COMPANY Limited. All Rights Reserved
      </div>
    </>
  );
}
export default AppFooter;
