import React, { useEffect } from 'react';
import { initFireworks } from '../../../utils/fireworks';
import BlurCard from '../../common/BlurCard/BlurCard';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const HeroSection = () => {
    useEffect(() => {
        initFireworks();
    }, []);

    return (
        <section style={{ position: 'relative', width: '100%', height: '100vh', overflow: 'hidden' }}>
            <div id="fireworks-container" style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: 1 }}>
            </div>
            <Container style={{ height: '100%' }}>
                <Row className="h-100">
                    <Col lg={12} className="d-flex justify-content-center align-items-center flex-column">
                        <div className='center hero' style={{ position: 'relative', zIndex: 2 }}>
                            <BlurCard />
                            <small style={{color: "white"}}>Ideated and Developed by <Link className='link' to="https://codersforum.netlify.app/">Coders Forum</Link></small>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default HeroSection;
