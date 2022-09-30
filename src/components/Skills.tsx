import 'react-multi-carousel/lib/styles.css'
import CarouselItem from './CarouselItem'
import Carousel from 'react-multi-carousel'
import colorSharp from '../assets/img/color-sharp.png'
import { Container, Col, Row } from 'react-bootstrap'
import { skills } from '../data/skills'

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  }

  return (
    <section className='skill' id='skills'>
      <Container>
        <Row>
          <Col>
            <div className='skill-bx wow zoomIn'>
              <h2>Skills</h2>
              <p>
                Some of the tools, programming languages and frameworks that I
                use on my day to day basis
              </p>
              <Carousel
                responsive={responsive}
                infinite={true}
                className='owl-carousel owl-theme skill-slider'
              >
                {skills.map((skill) => (
                  <CarouselItem
                    img={skill.img}
                    key={skill.id}
                    level={skill.level}
                    text={skill.text}
                  />
                ))}
              </Carousel>
            </div>
          </Col>
        </Row>
      </Container>
      <img className='background-image-left' src={colorSharp} alt='Image' />
    </section>
  )
}
