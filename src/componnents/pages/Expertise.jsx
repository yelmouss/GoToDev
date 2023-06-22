import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardImage,
  // MDBBtn
} from 'mdb-react-ui-kit';

const Expertise = ({ dark, updatedark }) => {
  document.title = "GoToDev - Expertise";

  return (
    <main className="mt-5">
      <Container className="my-5">
        <div className="text-end fs-1">
          <h1>Expertise in ..</h1>
        </div>
        <hr />
        <div className="my-5 fs-5 text-start">
          <p>
            GoToDev is an IT company that provides a range of services to businesses and organizations looking to build, optimize, and maintain their digital infrastructure. Whether you're a small startup or a large enterprise, we can help you with your IT needs

            <br />
            <br />
            At <b>GoToDev</b>, we are a skilled and experienced team specializing in website and web development, mobile
            application development, UI/UX design, SEO, and ads and more services in the digital world. Our expertise
            lies in creating exceptional websites with optimal functionality and seamless user experiences. We excel in
            crafting innovative and user-friendly mobile solutions across various platforms. Our passion for UI/UX design
            ensures visually appealing and intuitive interfaces. With a deep understanding of SEO techniques, we enhance
            online visibility and drive organic traffic. We also manage targeted ad campaigns for maximum reach. Choose{' '}
            <b>GoToDev</b> for tailored solutions that exceed expectations and drive success.


          </p>
        </div>
        <Row xs={1} sm={2} md={2} lg={4} noGutters>
          <Col>
            <MDBCard>
              <MDBCardImage
                src="https://img.freepik.com/free-photo/medium-shot-woman-working-laptop_23-2150323516.jpg?w=996&t=st=1686589138~exp=1686589738~hmac=8f5b34a8e160eb48befeda3c1af2e82c5f2a1f9ca72475c0299cea139409ecad"
                position="top"
                alt="..."
                className="small-card-image"
              />
              <MDBCardBody className="text-dark !important">
                <MDBCardTitle>Web Application</MDBCardTitle>
                <MDBCardText>
                  Our team has a proven track record of designing and developing robust web applications that empower businesses and enhance userXP.
                </MDBCardText>
              </MDBCardBody>
            </MDBCard>
          </Col>
          <Col>
            <MDBCard>
              <MDBCardImage
                src="https://img.freepik.com/free-vector/app-development-illustration_52683-47931.jpg?w=996&t=st=1686588077~exp=1686588677~hmac=bd7d57dcaa2ad0cb7f6134e0570c378c674dc1103f7a806573183b2929bb43bd"
                position="top"
                alt="..."
                className="small-card-image"
              />
              <MDBCardBody className="text-dark !important">
                <MDBCardTitle>Mobile Application</MDBCardTitle>
                <MDBCardText>
                  We are experts in developing cutting-edge mobile applications that enhance user experiences and drive business growth.
                </MDBCardText>
              </MDBCardBody>
            </MDBCard>
          </Col>
          <Col>
            <MDBCard >
              <MDBCardImage
                src="https://img.freepik.com/free-vector/gradient-ui-ux-background_23-2149052117.jpg?w=996&t=st=1686588112~exp=1686588712~hmac=aefce974e739b32fdf989bfd40e8d73c8f7933d4f04d9fc4b238832e073f74ba"
                position="top"
                alt="..."
                className="small-card-image"
              />
              <MDBCardBody className="text-dark !important">
                <MDBCardTitle>UI/UX Design</MDBCardTitle>
                <MDBCardText>
                  Our team excels in creating captivating and intuitive UI/UX designs that elevate user experiences and visually enhance digital products.
                  <br />

                </MDBCardText>


              </MDBCardBody>
            </MDBCard>
          </Col>
          <Col>
            <MDBCard>
              <MDBCardImage
                src="https://img.freepik.com/free-photo/closeup-photo-megaphone-female-hand_627829-9405.jpg?w=996&t=st=1686588306~exp=1686588906~hmac=f6cec7930e3fb81855236875e5e3dd6b40063ba9c7805dee09d6a3a0ac92cda0"
                position="top"
                alt="..."
                className="small-card-image"
              />
              <MDBCardBody className="text-dark !important">
                <MDBCardTitle>Ads</MDBCardTitle>
                <MDBCardText>

                  We specialize in creating effective and targeted advertising campaigns that drive brand visibility, engagement, and conversions
                </MDBCardText>
              </MDBCardBody>
            </MDBCard>
          </Col>
        </Row>
      </Container>
    </main>
  );
};

export default Expertise;
