import servImg from './assets/services.png'

const Services = () => {
    return ( 
        <section className=" md:flex justify-between mx-[1.5rem] md:mx-[7rem]">
            <div className=' mt-5 md:mt-[16rem]'>
                <h1 className=' font-bold md:text-[2rem] text-[1.5rem]'>More About Our Services With Transfer money</h1>
                <p className=' mt-2 md:mt-5'>Product offer from services in that there’s no obilgation beyond the transaction digital products should be to create more product and convince <br /> your product.</p>
                <div className=" flex justify-between mt-7">
                    <button className=" flex bg-black text-white p-[0.3rem] rounded-full px-4">Get the app</button> 
                    <button className=" text-[#FF7A00]">Learn More</button> 
                </div>
            </div>

            <img src={servImg} alt="" className=' md:my-[5rem] mt-[3rem] md:h-[40rem]' />
        </section>
     );
}
 
export default Services;