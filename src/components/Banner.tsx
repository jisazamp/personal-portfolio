import 'animate.css'
import headerImg from '../assets/img/header-img.svg'
import { Container, Row, Col } from 'react-bootstrap'
import { ArrowRightCircle } from 'react-bootstrap-icons'

export const Banner = () => {
  return (
    <section className='banner' id='home'>
      <Container>
        <Row className='aligh-items-center'>
          <Col xs={12} md={6} xl={7}>
            <div>
              <span className='tagline'>Welcome to my Portfolio</span>
              <h1>Hi! I'm Juan Pablo, Software Engineer</h1>
              <p>
                I'm a qualified and professional software engineer with two
                years of experience working in the education management
                industry. Passionate about programming and generating solutions
                through technology.
              </p>
              <button className='mb-4' onClick={() => console.log('connect')}>
                Let’s Connect <ArrowRightCircle size={25} />
              </button>
            </div>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <div>
              <img src={headerImg} alt='Header Img' />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  )
}
