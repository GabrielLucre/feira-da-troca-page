import styled from "styled-components";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const CarouselContainer = styled.div`
  max-width: 800px;
  margin: 4rem auto;
  
  .swiper {
    border-radius: 10px;
  }

  iframe {
    width: 100%;
    height: 400px;
    border-radius: 10px;
  }

  @media (max-width: 768px) {
    iframe {
      height: 250px;
    }
  }
`;

const VideoCarousel = () => {
    return (
        <CarouselContainer>
            <iframe
                src="https://www.youtube.com/embed/21qngWcR0wg"
                frameBorder="0"
                allowFullScreen
            ></iframe>
        </CarouselContainer>
    );
};

export default VideoCarousel;
