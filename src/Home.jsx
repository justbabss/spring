import HomeImg from './assets/HomeImg.png'
import GraphicsImg from './assets/GraphicsImg.png'
import LayoutImg from './assets/LayoutImg.png'

const Home = () => {
  return (
    <section className=" md:flex justify-between gap-[10rem] mt-[5rem] mx-[1.5rem] md:mx-[5rem]">
      <div>
        <h1 className=" font-bold text-[2.5rem] md:text-[2.8rem] w-[30rem]">We Build <br /> Experiences <br /> For Your Clients</h1>
        <p className=" font-normal text-[0.9rem] mt-[1rem]">Revolver Template is a professional webflow <br /> template with multifile sections that you can <br /> fullly customize</p>
        <h4 className=" text-[0.7rem] mt-[8rem] mb-[0.8rem]">quickrakibull@gmail.com</h4>
        <hr className=' border-black w-[100%]'/>
        <button className=" flex bg-black text-white p-[0.3rem] rounded-full px-4 mt-6">Get Free Trail</button> 
      </div>

      <div>
        <img src={HomeImg} alt=""  className='w-[33rem] mt-10 md:mt-0'/>

        <div className=' md:flex justify-between gap-[3rem] md:ml-[2rem] mt-[3rem]'>
          <div>
            <img src={LayoutImg} alt="" className=' w-[1.7rem]' />
            <p className=' font-bold mt-3'>Layout Design</p>
            <p className=' mt-2'>Curabitur auctor metus et cursus feugiat phasellus tempus nibh non.</p>
            <button className=" text-[#FF7A00] mt-3">Learn More</button> 
          </div>
          <div>
            <img src={GraphicsImg} alt="" className=' w-[1.7rem] mt-8 md:mt-0' />
            <p className=' font-bold mt-3'>Graphic Designer</p>
            <p className=' mt-2'>Curabitur auctor metus et cursus feugiat phasellus tempus nibh non.</p>
            <button className=" text-[#FF7A00] mt-3">Learn More</button> 
          </div>
        </div>
      </div>
    </section>
  );
}

export default Home