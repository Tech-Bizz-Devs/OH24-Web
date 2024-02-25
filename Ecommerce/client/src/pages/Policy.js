import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const PrivacyPolicy = () => {
  return (
    <Container className="mt-5">
      <Row>
        <Col>
          <h1 className="mb-4 text-center">Privacy Policy</h1>
          <p className="lead">
            Welcome to MAYUR PUMPS SERVICES operated by AMAN and HIMANSHU. This page
            informs you of our policies regarding the collection, use, and disclosure of personal data when you use our
            Service and the choices you have associated with that data.
          </p>
          <p className="lead">
            We use your data to provide and improve the Service. By using the Service, you agree to the collection and
            use of information in accordance with this policy.
          </p>

          {/* Add more content for your Privacy Policy */}

          <h2 className="mt-4">Information Collection and Use</h2>
          <p>
            For a better experience while using our Service, we may require you to provide us with certain personally
            identifiable information, including but not limited to your name, phone number, and postal address. The
            information that we collect will be used to contact or identify you.
          </p>

          {/* Add more sections based on your Privacy Policy content */}

          <div className="text-center mt-5">
            <p>
              Last Updated: 19/02/2024
            </p>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default PrivacyPolicy;
