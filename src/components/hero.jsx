import Image from "next/image";
import  Background from "@/assests/image/jpg/image-01.jpg"
import Style from "@/styles/components/hero.module.css"

import { faArrowRightLong} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'



const Hero = () => {
    return(

        <>
        <div className={Style.wrapper}>
                <h1 className={ Style.heroText}>Plan.<br/>Manage.<br/>Build</h1>
                <div className={Style.rightWrapper}>
                    <div>/</div>
                    <h3>Our Differences Is In <br/>The Finishing</h3>
                    <button> <span>Work</span> <FontAwesomeIcon icon={faArrowRightLong} width={16} /></button>
                </div>
                 
        </div>
                
        
           
           <Image  className ={Style.heroImage} src= {Background} width={"5000"} height={"3000"} alt="hero image" />
        </>
    );
}

export default Hero;