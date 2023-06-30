import React from 'react'
import Font from 'react-font'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
// import Team1 from '../../img/Team1.png'
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
    <main>
      <Container fluid>
        <Row className='bgTeam2 text-center  '  >
          <div className=' bg-dark bg-opacity-50 p-5 text-light '>  <Font family='ubuntu'>
            <h1 className='fs-1 fw-bold text-start'>Who We Are</h1>
            <hr />
            <p className="fs-5" >"GoToDev is an IT company that provides a range of services to businesses and organizations looking to build,
             optimize, and maintain their digital infrastructure. Whether you're a small startup or a large enterprise,
              we can help you with your IT needs."
          <br /> GoToDev has extended its horizons outside Morocco and Africa.
            </p>
          </Font>

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
          </div>
        </Row>

      </Container>
      <Container className='bg-info p-5  bg-opacity-25' fluid>

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


      <Container className=' bg-dark bg-opacity-75 p-5 text-light' fluid>
        <div className="fs-1 p-2 bg-dark bg-opacity-75 container col-lg-5 ">
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

            </p>
          </Font></Col>
        </Row>
      </Container>

      <Container className='d-flex justify-content-center bg-info p-5  bg-opacity-25' fluid>
        <Row className='d-flex justify-content-center text-center col-10'>
          {Resources.map((item, i) => (
            <Col lg={2} md={4} sm={4} className='m-2 border card text-dark text-center'>
              <div className="Mycontainer">
                <div class="centered ">  <CountUp end={item.Number} duration={2} className={` fw-bolder fst-italic mb-5 Counters  text-info`} /></div>
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