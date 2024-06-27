import React from 'react'
import '../styles/home.css'
import { Container,Row , Col } from 'reactstrap'
import heroImg from '../assets/images/hero-img01.jpg'
import heroImg02 from '../assets/images/hero-img02.jpg'
import heroVideo from '../assets/images/hero-video.mp4'
import Subtitle from '../shared/Subtitle'
import SearchBar from '../shared/SearchBar'
import worldImage from '../assets/images/world.png'
 
const Home = () => {
  return (
      <>
      <section>
      <Container>
        <Row>
          <Col lg='6'>
           <div className="hero__content">
            <div className="hero__subtitle d-flex align-items-center ">
               <Subtitle subtitle={'Know Before You Go'}/>
               <img src={worldImage} alt="world-image" />
            </div>
            <h1>Traveling open the door to creating <span className="highlight">memories</span> </h1>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Mollitia voluptate culpa numquam modi id dolores eaque corrupti vitae amet, nesciunt consequatur illo recusandae repellendus sit harum consectetur? Dolorem, nesciunt explicabo.</p>
           </div>
          </Col>
          <Col lg='2'>
          <div className="hero__img-box">
            <img src={heroImg} alt="heroimage" />
          </div>
          </Col>
          <Col lg='2'>
          <div className="hero__img-box mt-4">
            <video src={heroVideo} alt="heroimage" controls />
          </div>
          </Col>
          <Col lg='2'>
          <div className="hero__img-box mt-5">
            <img src={heroImg02} alt="heroimage" />
          </div>
          </Col>
          <SearchBar/>
        </Row>
      </Container>
     </section>
      <Container>
         <Row>
          <Col lg = '3'>
          <h5 className='services__subtitle'>What We Serve</h5>
          <h5 className='services__title'>We offer our best services</h5>
          </Col>
         </Row>
      </Container>
      </>
  )
}

export default Home