import Image from "next/image";
import  background from "@/assests/image/jpg/image-01.jpg"
import Style from "@/styles/components/hero.module.css"




const Hero = () => {
    return(

        <>
        <div className={Style.wrapper}>
                <h1 className={ Style.heroText}>Plan.<br/>Manage.<br/>Build</h1>
                <div>/</div>
                <h3>Our Differences Is In The Finishing</h3>
                <button>Work</button>
        </div>
                
        
           
           <Image  className ={Style.heroImage} src= {background} width={"5000"} height={"3000"} alt="hero image" />
        </>
    );
}

export default Hero;