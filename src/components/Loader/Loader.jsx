import useWindowWidth from 'hooks/useWindowWidth';
import SpriteIcon from 'components/SpriteIcon/SpriteIcon';
import {Wrapper1, Wrapper2, Paw1, Paw2, Paw3, Paw4, Paw5, Paw6, LoaderThumb} from './Loader.styled';

const Loader = () => {  
  const windowWidth = useWindowWidth();
  const isTablet = windowWidth >= 768;

    return (
     <LoaderThumb>
      <Wrapper1>
          <Paw1>{isTablet ? 
            (<SpriteIcon icon="pawprint" size = "60px"/>) : 
            (<SpriteIcon icon="pawprint" size = "48px"/>)}
          </Paw1>
          <Paw2>{isTablet ? 
            (<SpriteIcon icon="pawprint" size = "60px"/>) : 
            (<SpriteIcon icon="pawprint" size = "48px"/>)}
          </Paw2>
          <Paw3>{isTablet ? 
            (<SpriteIcon icon="pawprint" size = "60px"/>) : 
            (<SpriteIcon icon="pawprint" size = "48px"/>)}
          </Paw3>           
      </Wrapper1>
      <Wrapper2>  
        <Paw4>{isTablet ? 
          (<SpriteIcon icon="pawprint" size = "60px"/>) : 
          (<SpriteIcon icon="pawprint" size = "48px"/>)}
        </Paw4> 
        <Paw5>{isTablet ? 
          (<SpriteIcon icon="pawprint" size = "60px"/>) : 
          (<SpriteIcon icon="pawprint" size = "48px"/>)}
        </Paw5>
        <Paw6>{isTablet ? 
          (<SpriteIcon icon="pawprint" size = "60px"/>) : 
          (<SpriteIcon icon="pawprint" size = "48px"/>)}
        </Paw6>
      </Wrapper2>    
    </LoaderThumb>
    )
  };
  
  export default Loader;

  
    