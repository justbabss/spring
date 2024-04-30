import { AiFillFacebook, AiFillInstagram, AiFillLinkedin, AiFillTwitterCircle} from "react-icons/ai";

const Footer = () => {
    return ( 
        <section className=" bg-[#F6DA6F] h-full">
            <h1 className=" mt-[3rem] pt-[3rem] font-bold text-center text-[1.4rem]">Have a project in mind? <br /> Let’s get to work</h1>
            <button className=" flex bg-black text-white mt-[2rem] p-[0.3rem] mx-auto rounded-full px-4">Get the app</button> 

            <div className=" mx-[1.5rem] pb-[3rem] md:flex justify-around mt-[3rem]">
                <div>
                    <h1 className=" font-bold">Products</h1>
                    <ul>
                        <li>Features</li>
                        <li>Why Cequence</li>
                        <li>Technology</li>
                        <li>Security</li>
                        <li>Pricing</li>
                    </ul>
                </div>

                <div className=" mt-5 md:mt-0 md:mb-[1rem]">
                    <h1 className=" font-bold">Solution</h1>
                    <ul>
                        <li>Procurement</li>
                        <li>Sales</li>
                        <li>Legal</li>
                        <li>Meduim Business</li>
                        <li>Enterprices</li>
                    </ul>
                </div>

                <div className=" mt-5 md:mt-0">
                    <h1 className=" font-bold">Company</h1>
                    <ul>
                        <li>Careers</li>
                        <li>Case Study</li>
                    </ul>
                </div>

                <div className=" mt-5 md:mt-0">
                    <h1 className=" font-bold">Links</h1>
                    <ul>
                        <li>Facebook</li>
                        <li>Linkedin</li>
                    </ul>
                </div>
            </div>
            

            <div className="flex justify-center gap-11 mx-auto pb-[2rem]">
              <AiFillLinkedin size={30} className=" cursor-pointer" />
              <AiFillFacebook size={30} className=" cursor-pointer" />
              <AiFillInstagram size={30} className=" cursor-pointer" />
              <AiFillTwitterCircle size={30} className=" cursor-pointer" />  
            </div>
            <p className="text-center pb-[3rem]">&copy; 2024 SPRING</p>
        </section>
     );
}
 
export default Footer;