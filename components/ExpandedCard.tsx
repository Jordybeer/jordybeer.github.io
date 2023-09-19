import React, { useRef, useEffect } from 'react';
import Slider from 'react-slick';
import { motion, AnimatePresence } from 'framer-motion';
import { Box, Flex, Divider, CloseButton } from '@chakra-ui/react';
import { ChevronLeftIcon, ChevronRightIcon } from '@chakra-ui/icons';

const ExpandedCard = ({ data, setSelectedCard }) => {
  const cardRef = useRef(null);
  const sliderRef = useRef(null);

  const handleClickOutside = (e) => {
    if (cardRef.current && !cardRef.current.contains(e.target)) {
      setSelectedCard(null);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const settings = {
    infinite: true,
    slidesToShow: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    adaptiveHeight: true,
    draggable: false,
    pauseOnHover: false,
    swipeToSlide: true,
    variableWidth: false,
    swipe: true,
  };

  const handlePrevClick = () => {
    sliderRef.current.slickPrev();
  };

  const handleNextClick = () => {
    sliderRef.current.slickNext();
  };

  return (
    <AnimatePresence>
      {data && (
        <motion.div
          layoutId={`${data.id}`}
          className="expanded-card"
          ref={cardRef}
          style={{ backgroundColor: 'rgba(173, 216, 230, 0.7)' }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 2 }}
        >
          <Flex className="content-box">
            <div className="top-half">
              <Slider ref={sliderRef} {...settings}>
                {data.images.map((img, index) => (
                  <div key={index}>
                    <img src={img} alt={`Slide ${index + 1}`} className="carousel-img" />
                  </div>
                ))}
              </Slider>
              <CloseButton
                size="lg"
                color="whiteAlpha.700"
                onClick={() => setSelectedCard(null)}
                style={{ position: 'absolute', top: '10px', right: '10px', zIndex: 1 }}
              />
              <div className="thumbnails">
                <ChevronLeftIcon boxSize={6} onClick={handlePrevClick} />
                {data.images.map((img, index) => (
                  <img
                    key={index}
                    src={img}
                    alt={`Thumbnail ${index + 1}`}
                    className="thumbnail-img"
                    onClick={() => sliderRef.current.slickGoTo(index)}
                  />
                ))}
                <ChevronRightIcon boxSize={6} onClick={handleNextClick} />
              </div>
            </div>
            <Divider orientation="horizontal" />
            <div className="bottom-half">
              <h3>{data.title}</h3>
              <p>{data.description}</p>
            </div>
          </Flex>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ExpandedCard;