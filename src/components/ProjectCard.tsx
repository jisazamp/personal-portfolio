import { Col } from 'react-bootstrap'

interface ProjectCardProps {
  description: string
  imgUrl: string
  link?: string
  title: string
}

export const ProjectCard = ({
  description,
  imgUrl,
  link,
  title,
}: ProjectCardProps) => {
  return (
    <Col size={12} sm={6} md={4}>
      <div className='proj-imgbx'>
        <img src={imgUrl} />
        <div className='proj-txtx'>
          <h4>{title}</h4>
          <span>{description}</span>
          {link && (
            <button>
              <a target='_blank' href={link}>
                Preview
              </a>
            </button>
          )}
        </div>
      </div>
    </Col>
  )
}
