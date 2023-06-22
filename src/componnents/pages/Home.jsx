import React, { useEffect } from 'react'
import Font from 'react-font'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Team1 from '../../img/Team1.png'
import Azeddine1 from '../../img/azeddine.jpeg'
import Yassine from '../../img/Yassine.jpg'
import Numbers from '../../img/Numbers.png'
import CountUp from "react-countup";
import { ProjectsData } from "../../Datas/Counters";
import { SOLUTIONS } from "../../Datas/SOLUTIONS";
import { Resources } from "../../Datas/Resources";
import { Card } from 'react-bootstrap';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';

  
const Home = ({ dark, updatedark }) => {
  document.title = "GoToDev - Home"



  return (
    <main class="pt-5">
      <Container className='mt-5'>
        <Row className=' card bgTeam2 p-5'  >
          {/* <Col sm={4}>
            <Container className='d-flex justify-content-center '>
              <img src={Team1} alt="Team-1" className='img-fluid  shaked' />
            </Container>
          </Col> */}
   
     
          <div className=' bg-dark bg-opacity-50 p-5 text-light '>  <Font family='ubuntu'>
              <h1 className='fs-1 fw-bold'>Who We Are</h1>
              <hr />
              <p className="fs-5" >GoToDev is a benchmark player in Managed Services and Digitalization. With an ambition for
                significant growth and development, GoToDev has extended its horizons outside Morocco and Africa.
              </p>              
            </Font></div>
        </Row>
      </Container>
      <Container className='bg-info p-5  bg-opacity-25 mt-5' fluid>
        <Row>
          {ProjectsData.map((item, i) => (
            <Col lg={4} xs={12}>
              <div className='text-center text-light fw-bolder bg-dark  bg-opacity-50 rounded p-2 h-100 border '>
                <h1 className='Counters'>
                  <CountUp end={item.Count} duration={5} className="text fw-bolder" />
                </h1>
                <Card.Title>{item.title}</Card.Title>
                <Card.Text>
                  {item.desc}
                </Card.Text>
              </div>
            </Col>
          ))}
        </Row>
        <br />
        <Row className='mt-5 p-2'>
          <Col sm={8}>  <Font family='Ubuntu'>
            <h1 className='fs-1 fw-bold'>Digital Solutions</h1>
            <hr />
            <p className="fs-5 text-start" >
              For each of your business process digitization needs, GoToDev provides the right solutions with high added value.
              <br />
              Through its software suite, GoToDev offers solutions to digitize your business processes. Its proven solutions have been adopted by more than 800 companies in 2021 and streamline interactions within these organizations.
              <br />
              GoToDev consultants integrate this software into your application environment and complete the processes specific to your organization with tailor-made applications.
            </p>
          </Font></Col>
          <Col sm={4}>
            <Container>
              <img src={Azeddine1} alt="Team-1" className='img-fluid rounded MyShadow' />
            </Container>
          </Col>
        </Row>
      </Container>


      <Container className='mt-5 bg-dark bg-opacity-75 p-5 text-light' fluid>
        <div className="fs-1 p-2 bg-dark bg-opacity-75 container col-lg-6 ">
          <Font family='Ubuntu' className='fs-1'>
            <h1 className='fs-1 fw-bold text-center'>Our Solutions</h1>
          </Font>
        </div>
        <br />
        <Tabs
          defaultActiveKey="profile"
          id="uncontrolled-tab-example"
          className="mb-3 d-flex justify-content-center fw-bold text-light"
        >
          {SOLUTIONS.map((item, i) => (
            <Tab eventKey={item.title} title={item.Icon}>
              <Row>
                <Col className='fs-3   border-end'>
                  {item.Question}
                </Col>
                <Col className='fs-5 '>
                  {item.Reponse}
                </Col>
              </Row>

            </Tab>
          ))}
        </Tabs>
      </Container>
      <Container className='p-5'>
        <Row className=' p-2'>
          <Col sm={4}>
            <img src={Yassine} alt="Team-1" className='img-fluid rounded mt-5 object-fit MyShadow' />
          </Col>
          <Col sm={8}>  <Font family='Ubuntu'>
            <h1 className='fs-1 fw-bold mt-5'>Managed Solutions</h1>
            <hr />
            <p className="fs-5" >
              Entrust us with your IT service, in part or in whole, and focus on your core business.
              <br />
              With a wide range of expertise, GoToDev deploys teams of highly qualified engineers to ensure the security and operationalization of your platforms, while maintaining a very high quality front and back office service.
              <br />
              We have developed more than 10 years of expertise in this field in the service of international clients.
              <br />
              Our scope of expertise includes IT infrastructure management, Business Intelligence and Consulting. GoToDev intervenes on the 5 stages of the information system.
            </p>
          </Font></Col>
        </Row>
      </Container>

      <Container className='d-flex justify-content-center bg-info p-5  bg-opacity-25' fluid>
        <Row className='d-flex justify-content-center text-center col-10'>
          {Resources.map((item, i) => (
            <Col lg={2} md={4} className='m-2 border'>
              <div className="Mycontainer">
                <div class="centered ">  <CountUp end={item.Number} duration={2} className={` fw-bolder fst-italic mb-5 Counters ${dark ? "text-light" : "text-dark"}`} /></div>
                <img src={Numbers} alt="Snow" className='img-fluid mt-4 ' />
              </div>
              <hr />
              <h6> {item.title}</h6>
              <hr className='col-6 text-center' />
              <p className='text-start'>{item.Description}</p>
            </Col>
          ))}
        </Row>
      </Container>
    </main>
  )
}

export default Home