import Carousel from 'react-bootstrap/Carousel';

function CreateCarousel() {
  return (
    <Carousel className="Carousel">
      <Carousel.Item  >
        <div className="center">
        <img
          className="emoji"
          src="./assets/images/photo.PNG"
          alt="First slide"
        />
        </div>
        <div class="carousel-text">
        <h3 className="carousel-font">Hey i'm Charlotte</h3>
          <p className="carousel-font">I am currently studying web development at the University of Birmingham!</p>
          <p className="carousel-font">I am currently learning to create applications in React just like this one!  </p>
          <p className="carousel-font">Check out my portfolio to see my projects and my resume to see what skills I have!</p>
        </div>
      </Carousel.Item>

  
      <Carousel.Item>
          <div className="center">

            <img
              className="carousel-image2"
              src="./assets/images/languages.PNG"
              alt="Second slide"
            />
          </div>

            <div class="carousel-text">
            <h3 className="carousel-font">Here are some coding languages and dependencies I have been using</h3>
              <p className="carousel-font"></p>
            </div>
      </Carousel.Item>


      <Carousel.Item>
          <div className="center">

            <img
              className="d-block w-100"
              src="https://assets-global.website-files.com/5e39e095596498a8b9624af1/5f6e93d250a6d04f4eae9f02_Backgrounds-WFU-thumbnail-(size).jpg"
              alt="Third slide"
            />
          </div>

            <Carousel.Caption className="card-3">
              <h3 className="carousel-font">More about me</h3>
              <p className="carousel-font">
                Before becoming interested in coding I got my degree in psychology from the University of Sussex. In my free time I 
                love to go bouldering, going to the gym and going out for coffee! As a create person I am very passionate about UI therefore, I am really enjoying using react.
                To see some of the projects I have done throughout this course check out my porfolio page.
                
              </p>
            </Carousel.Caption>
          </Carousel.Item>
    </Carousel>
  );
}

export default CreateCarousel;