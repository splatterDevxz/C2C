import React from "react";
import { Row, Col, Divider } from 'antd';
import MBB  from "assets/images/svg/main_bg.svg"

const Main = ()=>{
    return(
        <>
        <section id="main-section">
            <div className="container">
                <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
                    <Col span={12}>
                        <div id="">
                            <span id="upper-content-sub-main">
                                C<span>2</span>C <span>Marketing</span>
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
                                    Start-Up Enterprises
                                </li>
                            </ul>
                        </div>      
                    </Col>
                    
                    <Col span={12}>
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