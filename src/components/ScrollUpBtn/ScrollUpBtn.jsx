import { useState, useEffect } from "react";
import SpriteIcon from 'components/SpriteIcon/SpriteIcon';
import Button  from './ScrollUpBtn.styled';

const ScrollUpBtn = () => {
  const [isShow, setIsShow] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsShow(window.scrollY > 400)
    }

    window.addEventListener("scroll", handleScroll);
    return () => {window.removeEventListener('scroll', handleScroll);};          
    
  }, []);

  const scrollUp = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      {isShow && (
        <Button type='button' onClick={scrollUp}>
          <SpriteIcon icon='arrow-left'/>
        </Button>)}      
    </>
  )
};

export default ScrollUpBtn;