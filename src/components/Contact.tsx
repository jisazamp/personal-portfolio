import { Container, Row, Col } from 'react-bootstrap'
import contactImg from '../assets/img/contact-img.svg'
import 'animate.css'

export const Contact = () => {
  return (
    <section className='contact' id='connect'>
      <Container>
        <Row className='align-items-center'>
          <Col size={12} md={6}>
            <img src={contactImg} alt='Contact Us' />
          </Col>
          <Col size={12} md={6}>
            <div>
              <h2>Get In Touch</h2>
              <form>
                <Row>
                  <Col size={12} sm={12} className='px-1'>
                    <input type='text' placeholder='First Name' />
                  </Col>
                  <Col size={12} sm={12} className='px-1'>
                    <input type='text' placeholder='Last Name' />
                  </Col>
                  <Col size={12} sm={12} className='px-1'>
                    <input type='email' placeholder='Email Address' />
                  </Col>
                  <Col size={12} sm={12} className='px-1'>
                    <textarea rows={6} placeholder='Message'></textarea>
                  </Col>
                  <Col
                    style={{ display: 'flex', justifyContent: 'center' }}
                    size={12}
                    sm={12}
                  >
                    <button type='submit'>
                      <span>Send</span>
                    </button>
                  </Col>
                </Row>
              </form>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  )
}
