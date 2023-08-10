import {useState, useEffect} from "react";
import {Container, Row, Col} from "react-bootstrap";
import headerImg from "../assets/img/header-img.svg";
import {ArrowRightCircle} from 'react-bootstrap-icons';
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import './Banner.style.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import linkedin from '../assets/img/icons8-linkedin-100.png'
import github from '../assets/img/icons8-github-squared-100.png'
import email from '../assets/img/icons8-mail-100.png'

const Banner = () => {

    const [loopNum, setLoopNum] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const [text, setText] = useState('');
    const [delta, setDelta] = useState(300 - Math.random() * 100);
    const [index, setIndex] = useState(1);
    const [showConnect, setShowConnect] = useState(false)

    const toRotate = ["Web Developer", "Data Scientist"];
    const period = 2000;


    useEffect(() => {
        let ticker = setInterval(() => {
            tick();
        }, delta);

        return () => {
            clearInterval(ticker)
        };
    }, [text])

    const tick = () => {
        let i = loopNum % toRotate.length;
        let fullText = toRotate[i];
        let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

        setText(updatedText);

        if (isDeleting) {
            setDelta(prevDelta => prevDelta / 2);
        }

        if (!isDeleting && updatedText === fullText) {
            setIsDeleting(true);
            setIndex(prevIndex => prevIndex - 1);
            setDelta(period);
        } else if (isDeleting && updatedText === '') {
            setIsDeleting(false);
            setLoopNum(loopNum + 1);
            setIndex(1);
            setDelta(500);
        } else {
            setIndex(prevIndex => prevIndex + 1);
        }
    }

    const connectClick = () => {
        setShowConnect(current => !current)
    }

    return (
        <section className="banner" id="home">
            <Container>
                <Row className="aligh-items-center">
                    <Col xs={12} md={6} xl={7}>
                        <TrackVisibility>
                            {({isVisible}) =>
                                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                                    <span className="tagline">Welcome to my Portfolio</span>
                                    <h1>{`Hi! I'm Jiahui Yu`} <span className="txt-rotate take-span" dataPeriod="1000"
                                                                    data-rotate='[ "Web Developer", "Data Scientist" ]'><span
                                        className="wrap">{text}</span></span></h1>
                                    <p>
                                        Having recently completed my Master of Engineering in Electrical and Computer
                                        Engineering with a specialization in Data Science and Computer Vision from Rice
                                        University, I am eager to contribute my skills and knowledge to a dynamic and
                                        innovative company.
                                        <br/>
                                        I am also actively self-learning front-end technologies such as HTML, CSS,
                                        JavaScript, and React, and I have taken relevant courses on digital signal
                                        processing to expand my skill set.
                                    </p>
                                    <button onClick={connectClick}>Let’s Connect <ArrowRightCircle
                                        size={25}/></button>
                                    <div className={showConnect ? 'social-icon show-icon' : 'social-icon'}>
                                        <a href="https://www.linkedin.com/in/jiahuiyu729/"><img src={linkedin} alt=""/></a>
                                        <a href="https://github.com/KarenYu729"><img src={github} alt=""/></a>
                                        <a href="karenyu729@yahoo.com"><img src={email} alt=""/></a>
                                    </div>
                                </div>}
                        </TrackVisibility>
                    </Col>
                    <Col xs={12} md={6} xl={5}>
                        <TrackVisibility>
                            {({isVisible}) =>
                                <div className={isVisible ? "animate__animated animate__zoomIn" : ""}>
                                    <img className={'float-img'} src={headerImg} alt="Header Img"/>
                                </div>}
                        </TrackVisibility>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default Banner;