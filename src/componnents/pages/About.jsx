import React from 'react'
import Font from 'react-font'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { InfosTeam } from '../../Datas/InfosTeam';
import Carousel from 'react-bootstrap/Carousel';
import { BsWhatsapp, BsGithub } from 'react-icons/bs';


import { BiMailSend } from "react-icons/bi";

function About({ dark, updateDark }) {

  return (
    <>
      <main className="pt-5 min-vh-100" >


         
        <Container fluid>
          <Font family='Ubuntu'>
            <Row className='p-5'>
              <div className="text-center fs-1">
                <h1>The Team</h1>
              </div>
              <hr />          
              <Col lg={7}>
                <Carousel>
                  {InfosTeam.map((item, i) => (
                    <Carousel.Item>
                      <div className="row d-flex justify-content-center">
                        <div className={`bg-light p-3 py-4 col-11 shadow-lg  ${dark ? "bg-transparent" : "bg-opacity-75"}`}>
                          <div className="text-end">
                            <img src={item.image} alt={item.Name} width="200" height={200} className="rounded objectfit" />
                          </div>
                          <div className="text-end">
                            <h5 className="mt-2 mb-0 fs-2" >{item.Name} </h5>
                          </div>
                          <div className="text-start mt-1">
                            <h1 className='fs-3 mt-1' >{item.Title} </h1>
                            <div className="px-4 mt-1 ">
                              <p className="fonts">{item.Description}  </p>
                            </div>
                          </div>
                          <Col className="text-start m-5 ">
                            <a className="fs-1  m-1 btn " href={item.Github} target="_blank"
                              rel="noreferrer" ><BsGithub /></a>
                            <ab className="fs-1  m-1 btn " onClick={() => window.location = `mailto:${item.Mail}`}><BiMailSend /></ab>
                            <a className="fs-1 m-1 btn " href={item.Whatsap} target="_blank"
                              rel="noreferrer" ><BsWhatsapp /></a>
                          </Col>
                        </div>
                      </div>
                    </Carousel.Item>
                  ))}

                </Carousel>
              </Col>
              <Col className='bg-dark  d-flex p-5 fw-bold  text-light'>
                <Font family='Ubuntu'>
                  <h2 className='fs-4'>
                    At GOTODEV, we pride ourselves on our exceptional team of talented individuals who are passionate
                    about pushing the boundaries of innovation.
                    Allow us to introduce you to the remarkable individuals behind our success.</h2>
                  <hr />
                  <h2 className='fs-5'>Each member of the GOTODEV team brings a unique set of skills and expertise to the table,
                    working together harmoniously to deliver exceptional results.
                    With our combined passion for development and unwavering commitment to excellence,
                    we are ready to tackle any project and transform your ideas into reality.</h2>
                </Font>
              </Col>
            </Row>
          </Font>
        </Container>
      </main >
     <br />
    </>
  );

}

export default About;
