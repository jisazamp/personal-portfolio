import { Container, Row, Col, Tab, Nav } from 'react-bootstrap'
import { ProjectCard } from './ProjectCard'
import { projects, projects2 } from '../data/projects'

import 'animate.css'

export const Projects = () => {
  return (
    <section className='project' id='projects'>
      <Container>
        <Row>
          <Col size={12}>
            <div>
              <h2>Projects</h2>
              <p>Some of my side projects</p>
              <Tab.Container id='projects-tabs' defaultActiveKey='first'>
                <Nav
                  variant='pills'
                  className='nav-pills mb-5 justify-content-center align-items-center'
                  id='pills-tab'
                >
                  <Nav.Item>
                    <Nav.Link eventKey='first'>Tab 1</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey='second'>Tab 2</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey='third'>Tab 3</Nav.Link>
                  </Nav.Item>
                </Nav>
                <Tab.Content id='slideInUp'>
                  <Tab.Pane eventKey='first'>
                    <Row>
                      {projects.map((project, index) => {
                        return <ProjectCard key={index} {...project} />
                      })}
                    </Row>
                  </Tab.Pane>
                  <Tab.Pane eventKey='second'>
                    <Row>
                      {projects2.map((project, index) => {
                        return <ProjectCard key={index} {...project} />
                      })}
                    </Row>
                  </Tab.Pane>
                  <Tab.Pane eventKey='third'>
                    <p>Coming soon...</p>
                  </Tab.Pane>
                </Tab.Content>
              </Tab.Container>
            </div>
          </Col>
        </Row>
      </Container>
      <div className='background-image-right'></div>
    </section>
  )
}
