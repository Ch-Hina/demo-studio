import styles from "@/styles/components/navbar.module.css"
import Image from "next/image"
import logo from "@/assests/svg/logo/logo-dark.svg"



const NavBar = () => {
    return(
        <>
         <div className={styles.navbar}>
             <div className={styles.container}>
             <div><Image src={logo} width={48} height={48} /></div>
                <ul className={styles.nevitems}>
                  <li>Product</li>
                  <li>Solution</li>
                  <li>Pricing</li>
                  <li>Developers</li>
               </ul>

                 <div className={styles.right_action}>
                  <a>FAQ</a>
                  <button>Get Quote</button>
             </div>
                 </div>
          </div>
          

        </>
    );
}

export default NavBar