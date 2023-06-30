
import { React } from "react";
import { Col, Container, Row } from "react-bootstrap";
import Font from "react-font";

import {  BsGoogle, BsInstagram } from "react-icons/bs";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";

const Footer = ({ dark, updateDark }) => {
    const position = [33.991980191627185, -6.874611381541911];
    return (
        <footer className={`footer mt-auto  py-3 mt-5 bg-light bg-opacity-25 ${dark ? "bg-dark" : ""}`}>
            <Container className="p-3" fluid>
                <Row>
                    <Col sm={12} lg={6} md={12} className="rounded p-5">
                        <MapContainer center={position} zoom={15} scrollWheelZoom={false}>
                            <TileLayer
                                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                            />
                            <Marker position={position}>
                                <Popup>
                                    A pretty CSS3 popup. <br /> Easily customizable.
                                </Popup>
                            </Marker>
                        </MapContainer>
                    </Col>
                    <Col>
                        <Font family='Ubuntu'>
                            <div style={{ fontSize: "15px" }}>
                                <h3>   About GoToDev</h3>
                                <hr />
                                <Row className="p-4">
                                    <Col>
                                        <h6>Company Name:</h6>
                                        <p>GoToDev</p>
                                        <h6>Legal Form:</h6>
                                        <p>sole proprietorships</p>
                                        <h6>Address:</h6>
                                        <p>Résidence TISSIR, Av. Mohamed Triki, Rabat 10090</p>
                                    </Col>
                                    <Col>

                                        <h6>Phone:</h6>
                                        <p>+212 312865681</p>
                                        <h6> Email: </h6>
                                        <p>yelmouss.devt@gmail.com</p>
                                        <h6>Website:</h6>
                                        <p>www.gotodev.ma</p>
                                        <h6> SUIVEZ-NOUS:</h6>
                                        <p>
                                            <a className="fs-2 m-1" href={'http://instagram.com/gotodev'} target="_blank"
                                                rel="noreferrer" >
                                                <BsInstagram />
                                            </a>
                                            <a className="fs-2 m-1" href={'http://instagram.com/gotodev'} target="_blank"
                                                rel="noreferrer" >
                                                <BsGoogle />
                                            </a>
                                        </p>
                                    </Col>
                                </Row>
                            </div>
                        </Font>
                    </Col>
                </Row>
            </Container>

        </footer>

    )
}

export default Footer