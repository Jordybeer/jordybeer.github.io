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
    arrows: false,
    autoplaySpeed: 6000,
    adaptiveHeight: true,
    draggable: true,
    pauseOnHover: true,
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

  const handleThumbnailClick = (index) => {
    sliderRef.current.slickGoTo(index);
    sliderRef.current.slickPause();
  };

  return (
    <AnimatePresence>
      {data && (
        <motion.div
          layoutId={`${data.id}`}
          className="expanded-card"
          ref={cardRef}
          style={{
            maxWidth: '400px',
            maxHeight: '700px',
            backgroundColor: 'transparent',
            position: 'fixed',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            zIndex: 9999,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Flex direction="column" className="content-box" h="100%">
            <Box flex="0">
              <Slider ref={sliderRef} {...settings}>
                {data.images.map((img, index) => (
                  <div key={index}>
                    <img src={img} alt={`Slide ${index + 1}`} className="carousel-img" />
                  </div>
                ))}
              </Slider>
              <CloseButton
                size="lg"
                color="#1D2636"
                onClick={() => setSelectedCard(null)}
                style={{
                  position: 'absolute',
                  top: '10px',
                  right: '10px',
                  zIndex: 1,
                  boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.8)',
                }}
              />
              <Box className="thumbnails">
                <ChevronLeftIcon boxSize={6} onClick={handlePrevClick} />
                {data.images.map((img, index) => (
                  <img
                    key={index}
                    src={img}
                    alt={`Thumbnail ${index + 1}`}
                    className="thumbnail-img"
                    onClick={() => handleThumbnailClick(index)}
                  />
                ))}
                <ChevronRightIcon boxSize={6} onClick={handleNextClick} />
              </Box>
            </Box>

            <Divider my={2} />

            <Box
  flex="1"
  pt={2}
  sx={{
    overflowY: 'auto',
    scrollbarWidth: 'thin',
    scrollbarColor: 'gray.400 gray.700',
    scrollBehavior: 'smooth',
    '::-webkit-scrollbar': {
      width: '12px',
    },
    '::-webkit-scrollbar-thumb': {
      backgroundColor: 'gray.400',
    },
    '::-webkit-scrollbar-track': {
      backgroundColor: 'gray.700',
    },
  }}
>
<Box className="card-title-large" >
                <h3>{data.title}</h3>
              </Box>
              <Box p={4} marginBottom={4} className="card-description-large">
                <p>{data.description}</p>
              </Box>
            </Box>
          </Flex>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ExpandedCard;
