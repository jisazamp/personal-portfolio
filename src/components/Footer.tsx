import { Container, Row, Col } from 'react-bootstrap'
import logo from '../assets/img/logo.webp'

export const Footer = () => {
  return (
    <footer style={{ paddingTop: '1rem' }} className='footer'>
      <Container>
        <Row className='align-items-center'>
          <Col
            style={{ display: 'flex', justifyContent: 'center' }}
            size={12}
            sm={12}
          >
            <img src={logo} alt='Logo' />
          </Col>
          <Col
            style={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
            }}
            size={12}
            sm={12}
            className='text-center text-sm-end'
          >
            <p>Copyright 2022. All Rights Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}
