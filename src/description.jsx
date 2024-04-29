import DesImg from './assets/desImage.png'

const Description = () => {
    return ( 
        <section className='mx-[1.5rem] md:mx-[2rem]'>
            <div className=' md:flex justify-around'>
               
                <img src={DesImg} alt="" className=' w-[23rem] h-[20rem] mt-[-4rem] md:mt-[3rem]'/>

                <div className=' mt-[2rem] md:mt-[11rem]'>
                    <h2 className=' font-bold md:text-[1.8rem] text-[1.8rem]'>Welcome</h2>
                    <p className=' text-[1rem]'>We help you build something amazing</p>
                    <button className=" flex bg-black text-white p-[0.3rem] rounded-full px-4 mt-3">Learn more</button> 
                </div>

                <div className=' mt-[2rem] md:mt-[10.5rem]'>
                <h2 className=' font-bold md:text-[1.8rem] text-[1.5rem] mb-2'>We Provide This Service</h2>
                    <div className=' flex justify-around gap-5 '>
                        <div className=' w-[35%] px-3 mb-3 py-1 border-[0.1rem] rounded-lg hover:bg-[#F6DA6F] cursor-pointer hover:border-transparent hover:px-3 hover:py-1'>
                        <p className='md:inline-block md:whitespace-nowrap'>Graphic Design</p>
                            <p className=' text-[0.7rem]'>Learn more</p>
                        </div>

                        <div className=' w-[35%] px-3 mb-3 py-1 border-[0.1rem] rounded-lg hover:bg-[#F6DA6F] cursor-pointer hover:border-transparent hover:px-3 hover:py-1'>
                        <p className=' md:inline-block md:whitespace-nowrap'>Graphic Design </p>
                            <p className=' text-[0.7rem]'>Learn more</p>
                        </div>

                        <div className=' w-[35%] px-3 mb-3 py-1 border-[0.1rem] rounded-lg hover:bg-[#F6DA6F] cursor-pointer hover:border-transparent hover:px-3 hover:py-1'>
                        <p className=' md:inline-block md:whitespace-nowrap'>Mobile Design </p>
                            <p className=' text-[0.7rem]'>Learn more</p>
                        </div>
                    </div>    
                    <div className=' flex justify-around gap-5'>
                        <div className=' w-[35%] px-3 mb-3 py-1 border-[0.1rem] rounded-lg hover:bg-[#F6DA6F] cursor-pointer hover:border-transparent hover:px-3 hover:py-1'>
                            <p>App Design</p>
                            <p className=' text-[0.7rem]'>Learn more</p>
                        </div>

                        <div className=' w-[35%] px-3 mb-3 py-1 border-[0.1rem] rounded-lg hover:bg-[#F6DA6F] cursor-pointer hover:border-transparent hover:px-3 hover:py-1'>
                            <p >Web Design</p>
                            <p className=' text-[0.7rem]'>Learn more</p>
                        </div>

                        <div className=' w-[35%] px-3 mb-3 py-1 border-[0.1rem] rounded-lg hover:bg-[#F6DA6F] cursor-pointer hover:border-transparent hover:px-3 hover:py-1'>
                            <p >Landing Page</p>
                            <p className=' text-[0.7rem]'>Learn more</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
     );
}
 
export default Description;