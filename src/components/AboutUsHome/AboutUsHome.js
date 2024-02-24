import React from "react";
import styles from './AboutUsHome.module.css';
import img1 from '../../assets/home/about1.png';
import img2 from '../../assets/home/about2.png';
import img3 from '../../assets/home/about3.png';

const AboutUsHome = ({ call }) => {
    return (
        <>
            <div className={`container ${styles.contain}`}>
                <div className="row overflow-hidden">
                    <div className="col-md-6">
                        {/* <p data-aos="slide-right" className={styles.head}>ABOUT US</p> */}
                        <p data-aos="slide-left" className={styles.heading}>Your Cybersecurity Partner</p>
                        <div data-aos="zoom-in">
                            <p className={styles.content}>At Cybertech Gate, we're your unwavering shield against digital threats. In today's interconnected world, safeguarding your digital assets isn't just a priority — it's essential. With expertise and innovation, we offer tailored cybersecurity services, from threat detection to rapid response. Our mission is your peace of mind in an increasingly complex cyber landscape.</p>
                        </div>
                        <div data-aos='zoom-in' style={{ textAlign: 'left' }}>
                            <button className={`btn custom_btn ${styles.btn}`} onClick={() => call()}> MEET OUR TEAM</button>
                        </div>

                    </div>

                    <div className="col-md-6 mt-5 overflow-hidden">
                        <div className={styles.row}>
                            <div className={`${styles.column} ${styles.col1}`}>
                                <img data-aos="zoom-in-right" src={img1} alt="" />
                            </div>
                            <div className={styles.column}>
                                <img data-aos="zoom-in-left" src={img2} style={{ width: '110%' }} alt="" />
                                <img data-aos="zoom-in-left" src={img3} alt="" />
                            </div>

                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}

export default AboutUsHome;