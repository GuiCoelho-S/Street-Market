import orange from '../assets/images/orange.png';
import avocado from '../assets/images/avocado.png';
import kiwi from '../assets/images/kiwi.png';
import banana from '../assets/images/banana.png';
import cranberry from '../assets/images/cranberry.png';
import grape from '../assets/images/grape.png';
import papaya from '../assets/images/papaya.png';
import watermelon from '../assets/images/watermelon.png';

import { Image } from './style';

const ImageFilter = (type) => {

    const Images = {
        orange: <Image src={orange} alt="orange" /> ,
        avocado: <Image src={avocado} alt="avocado" />,
        kiwi: <Image src={kiwi} alt="kiwi" />,
        banana: <Image src={banana} alt="banana" />,
        cranberry: <Image src={cranberry} alt="cranberry" />,
        grape: <Image src={grape} alt="grape" />,
        papaya: <Image src={papaya} alt="papaya" />,
        watermelon: <Image src={watermelon} alt="watermelon" />,
    }

    return Images[type] 
}

export default ImageFilter;