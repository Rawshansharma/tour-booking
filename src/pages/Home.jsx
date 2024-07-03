import React from 'react'
import '../styles/home.css'
import { Container,Row , Col } from 'reactstrap'
import heroImg from '../assets/images/hero-img01.jpg'
import heroImg02 from '../assets/images/hero-img02.jpg'
import heroVideo from '../assets/images/hero-video.mp4'
import Subtitle from '../shared/Subtitle'
import SearchBar from '../shared/SearchBar'
import worldImage from '../assets/images/world.png'
import ServiceList from '../Services/ServiceList'
import FeaturedTourList from '../components/Featured-tour/FeaturedTourList'
import experienceImg from '../assets/images/experience.png'
import MemoryImageGallery from '../components/ImageGallery/MemoryImageGallery'
 
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
      <section>
      <Container>
         <Row>
          <Col lg = '3'>
          <h5 className='services__subtitle'>What We Serve</h5>
          <h5 className='services__title'>We offer our best services</h5>
          </Col>
          <ServiceList/>
         </Row>
      </Container>
      </section>
      <section>
        <Container>
          <Row>
            <Col lg = '12'>
               <Subtitle subtitle={"Explore"}/>
               <h5 className='featured__tour-title'>Our featured tours</h5>
            </Col>
            <FeaturedTourList/>
          </Row>
        </Container>
      </section>
      <section>
       <Container>
        <Row>
          <Col lg = '6'>
             <div className="experience__content">
              <Subtitle subtitle={'Experience'}/>
              <h2>With our all experience <br />we will serve you</h2>
              <p>Lorem ipsum dolor sit amet  m dolor loremque nostrum, dolorem tenetur rem nihil fugiat minus accusantium?</p>
             </div>
             <div className="counter__wrapper d-flex align-items-center gap-5">
             <div className="counter__box">
              <span>12K+</span>
              <h6>Successful trips</h6>
             </div>
             <div className="counter__box">
              <span>2K+</span>
              <h6>Regular clients</h6>
             </div>
             <div className="counter__box">
              <span>15+</span>
              <h6>Year experience</h6>
             </div>
             </div>
          </Col>
          <Col lg = "6">
             <div className="experience__img">
              <img src={experienceImg} alt="" />
             </div>
          </Col>
        </Row>
       </Container>
      </section>
      <section>
        <Container>
          <Row>
            <Col lg = '12'>
              <Subtitle subtitle={'Gallery'}/>
              <h2 className='gallery__title'>
                Visit our coustomers tour gallery
              </h2>
            </Col>
            <Col lg='12'>
               <MemoryImageGallery/>
            </Col>
          </Row>
        </Container>
      </section>
      </>
  )
}

export default Home