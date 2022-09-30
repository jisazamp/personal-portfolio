interface CarouselItemProps {
  img: string
  level: string
  text: string
}

const CarouselItem = ({ img, level, text }: CarouselItemProps) => {
  return (
    <div className='item'>
      <img src={img} alt='Image' />
      <h5>{text}</h5>
      <h6 style={{ color: '#dadada' }}>{level}</h6>
    </div>
  )
}

export default CarouselItem
