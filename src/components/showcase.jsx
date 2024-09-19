import Image from "next/image"
import Disnep from "@/assests/svg/logo/png/disnep_logo.png"
import Dropbox from "@/assests/svg/logo/png/dropbox_logo.png"
import Monday from "@/assests/svg/logo/png/monday_logo.png"
import Ncr from "@/assests/svg/logo/png/ncr_logo.png"
import Rakuten from "@/assests/svg/logo/png/rakuten_logo.png"
import User01 from "@/assests/image/jpg/user-01.jpg"
import User02 from "@/assests/image/jpg/user-02.jpg"
import User03 from "@/assests/image/jpg/user-03.jpg"
import User04 from "@/assests/image/jpg/user-04.jpg"

const Showcase = () => {
    return (
        <>
         <div>
            <Image src={Disnep} width={56} height={36} alt="" />
            <Image src={Dropbox} width={56} height={36} alt="" />
            <Image src={Monday} width={56} height={36} alt="" />
            <Image src={Ncr} width={56} height={36} alt="" />
            <Image src={Rakuten} width={56} height={36} alt="" />
         </div>
         <h1>To enhance the growth of your website, it's essentail to expedite the release of new pages.</h1>
        
         <div>
            <Image src={User01} width={156} height={136} alt="" />
            <Image src={User02} width={156} height={136} alt="" />
            <Image src={User03} width={156} height={136} alt="" />
            <Image src={User04} width={156} height={136} alt="" />
            
         </div>

         <h1>/</h1>
         <div>
             <h3>We Received A Great Amount Of Work in Just 2 Week Timeline!</h3>
             <span> Deniel, Desgin Lead @Google</span>
         </div>

        </>
    );
}
export default Showcase;