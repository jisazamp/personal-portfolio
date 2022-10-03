import { useState } from 'react'
import { Alert, Container, Row, Col } from 'react-bootstrap'
import { encode } from '../utils/encode'
import { useForm, SubmitHandler } from 'react-hook-form'
import contactImg from '../assets/img/contact-img.svg'
import { toast } from 'react-toastify'

type ContactValues = {
  firstName: string
  lastName: string
  email: string
  message: string
}

export const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false)

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactValues>()

  const onFormSubmit: SubmitHandler<ContactValues> = (data) => {
    setIsSubmitting(true)
    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({ 'form-name': 'contactForm', ...data }),
    })
      .then(() => setIsSubmitting(false))
      .then(() => reset())
      .then(() => window.scrollTo(0, 0))
      .then(() =>
        toast.success('Your message has been sent!', {
          position: toast.POSITION.BOTTOM_CENTER,
        })
      )
      .catch((error) =>
        toast.error(error, {
          position: toast.POSITION.BOTTOM_CENTER,
        })
      )
  }

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
              <form
                name='contactForm'
                data-netlify='true'
                method='POST'
                netlify-honeypot='bot-field'
                onSubmit={handleSubmit(onFormSubmit)}
              >
                <Row>
                  <Col size={12} sm={12} className='px-1'>
                    <input
                      {...register('firstName', {
                        required: true,
                      })}
                      maxLength={20}
                      type='text'
                      placeholder='First name*'
                      className={
                        errors.firstName && 'border border-3 border-danger'
                      }
                      name='firstName'
                    />
                    {errors.firstName &&
                      errors.firstName.type === 'required' && (
                        <Alert variant='danger'>
                          Please provide a first name
                        </Alert>
                      )}
                  </Col>
                  <Col size={12} sm={12} className='px-1'>
                    <input
                      {...register('lastName', { required: true })}
                      type='text'
                      placeholder='Last name*'
                      maxLength={20}
                      className={
                        errors.lastName && 'border border-3 border-danger'
                      }
                      name='lastName'
                    />
                    {errors.lastName && errors.lastName.type === 'required' && (
                      <Alert variant='danger'>Please provide a last name</Alert>
                    )}
                  </Col>
                  <Col size={12} sm={12} className='px-1'>
                    <input
                      {...register('email', {
                        required: true,
                      })}
                      type='email'
                      className={
                        errors.email && 'border border-3 border-danger'
                      }
                      placeholder='Email address*'
                      name='email'
                    />
                    {errors.lastName && errors.lastName.type === 'required' && (
                      <Alert variant='danger'>
                        Please provide a valid email address
                      </Alert>
                    )}
                  </Col>
                  <Col size={12} sm={12} className='px-1'>
                    <textarea
                      {...register('message', {
                        required: true,
                        minLength: 10,
                        maxLength: 2000,
                      })}
                      className={
                        errors.message && 'border border-3 border-danger'
                      }
                      maxLength={2000}
                      name='message'
                      rows={4}
                      placeholder='Message*'
                    ></textarea>
                    {errors.lastName && (
                      <Alert variant='danger'>
                        Message should be a minimum of 10 characters
                      </Alert>
                    )}
                  </Col>

                  <Col
                    className='mt-4'
                    style={{ display: 'flex', justifyContent: 'center' }}
                    size={12}
                    sm={12}
                  >
                    <button disabled={isSubmitting} type='submit'>
                      <span>{isSubmitting ? 'Sending...' : 'Send'}</span>
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
