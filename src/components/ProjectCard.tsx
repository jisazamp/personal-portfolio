import { ButtonGroup, Card, Col } from 'react-bootstrap'
import { FaGithub, FaEye } from 'react-icons/fa'

interface ProjectCardProps {
  description: string
  imgUrl: string
  link?: string
  repo?: string
  title: string
}

export const ProjectCard = ({
  description,
  imgUrl,
  link,
  repo,
  title,
}: ProjectCardProps) => {
  return (
    <Col className='mt-3' xs={12} md={6} lg={4}>
      <Card className='bg-dark'>
        <Card.Img variant='top' src={imgUrl} style={{ height: '200px' }} />
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text className='w-100 m-0' style={{ textAlign: 'justify' }}>
            {description}
          </Card.Text>
          <ButtonGroup
            className='w-100 mt-4'
            style={{ border: '1px solid #cacaca' }}
          >
            {repo && (
              <a
                className='btn btn-dark d-flex justify-content-center align-items-center gap-2 p-2'
                target='_blank'
                style={{ textDecoration: 'none' }}
                href={link}
              >
                <FaGithub size={25} /> Repo
              </a>
            )}
            <a
              className='btn btn-dark d-flex justify-content-center align-items-center gap-2 p-2'
              target='_blank'
              style={{ textDecoration: 'none' }}
              href={link}
            >
              <FaEye size={25} />
              Preview
            </a>
          </ButtonGroup>
        </Card.Body>
      </Card>
    </Col>
  )
}
