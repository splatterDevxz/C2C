import React from "react";
import { Row, Col, Divider } from 'antd';
import MBB  from "assets/images/svg/main_bg.svg"

const Main = ()=>{
    return(
        <>
        <section id="main-section">
            <div className="container">
                <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
                    <Col xl={12} lg={12} md={24, {order:1}} sm={24, {order:1}}  xs={24, {order:1}}  >
                        <div id="main-wrapper-content-xl">
                            <span id="upper-content-sub-main">
                                C<span className="span-blue">2</span>C <span>Marketing</span>
                            </span>
                            <h1>
                                Our Clients
                            </h1>
                            <ul>
                                <li>
                                    Publishing Industry
                                </li>
                                <li>
                                    E-commerce Industry
                                </li>
                                <li>
                                   Self-Employed Professionals and Planners
                                </li>
                                <li>
                                   Course Creators, Coaches, and Online Entrepreneurs
                                </li>
                            </ul>
                        </div>
                    </Col> 
                    
                    <Col xl={12} lg={12} md={24} sm={24} xs={24}>
                        <div className="img-wrapper">
                            <img src={MBB} alt="bg-main"/>
                        </div>
                    </Col>
                </Row>
            </div>
        </section>
        </>
    )
}


export default Main;