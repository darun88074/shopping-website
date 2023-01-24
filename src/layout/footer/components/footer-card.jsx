import { Col, Row } from "antd";


const SecureCard = ({
    imageSrc,
    HeadingText,
    subtext1,
    subtext2
}) => {
    return (
        <>
            <div className="card-footer">
                <img className="card-f-img" src={imageSrc} alt="shield" />
                <div className="top-heading">{HeadingText}</div>
                <p className="subText mt12">{subtext1} </p>
                <p className="subText">{subtext2}</p>
            </div>
        </>
    )
}

export const CardFooter = () => {
    return (
        <>
            <Row className="secure-payment">
                <Col xs={24} md={12} lg={12} xl={6} >
                    <SecureCard
                        imageSrc={require('../../../assets/img/shield.png')}
                        HeadingText={'100% Secure Payments'}
                        subtext1={'Moving your card details to a much more'}
                        subtext2={'secured place'}
                    />
                </Col>
                <Col xs={24} md={12} lg={12} xl={6} >
                    <SecureCard
                        imageSrc={require('../../../assets/img/money.png')}
                        HeadingText={'TrustPay'}
                        subtext1={'100% Payment Protection. Easy'}
                        subtext2={'Return Policy'}
                    />
                </Col>
                <Col xs={24} md={12} lg={12} xl={6} >
                    <SecureCard
                        imageSrc={require('../../../assets/img/help-desk.png')}
                        HeadingText={'Help Center'}
                        subtext1={'Got a question? Look no further.'}
                        subtext2={'Browse our FAQs or submit your query here.'}
                    />
                </Col>
                <Col xs={24} md={12} lg={12} xl={6} >
                    <SecureCard
                        imageSrc={require('../../../assets/img/smartphone.png')}
                        HeadingText={'Shop on the Go'}
                        subtext1={'Download the app and get exciting '}
                        subtext2={'secured place'}
                    />
                </Col>
            </Row>
        </>
    )
}

