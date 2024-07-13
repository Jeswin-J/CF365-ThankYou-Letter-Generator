import React, { useEffect } from 'react';
import { initFireworks } from '../../../utils/fireworks';
import Button from '../../common/Button/Button';

const HeroSection = () => {
    useEffect(() => {
        initFireworks();
    }, []);

    return (
        <section style={{ position: 'relative', width: '100%', height: '100vh' }}>
            <div id="fireworks-container" style={{ position: 'absolute', width: '100%', height: '100%' }}>
            </div>
            <div className='center hero'>
                <Button style={{ position: 'relative', zIndex: 1 }} />
            </div>
        </section>
    );
};

export default HeroSection;
