import { FaLinkedin, FaGithub} from 'react-icons/fa';

const Hero = () => {
  return (
    <div className="flex flex-col md:pt-20 md:flex-row items-center text-white py-2 min-h-[500px]">
      
      {/* Intro Section */}
      <div className="flex flex-col mt-28 items-center text-center md:items-start md:text-left md:ml-24">
        <h5 className="text-3xl md:text-5xl font-bold mb-4 md:tracking-[1px]">Hi,I am Pavan Lalacheta</h5>
        <p className="text-blue-500 text-xl md:text-2xl mb-4">
          MCA Student | Mern Stack Developer
        </p>
        <a
          className="sm:items-center sm:justify-center border text-blue-500 border-blue-500 p-3 
        rounded-lg hover:text-white hover:bg-blue-500 transition 
        duration-150 active:scale-95"
        href="public\Pavan_lalcheta_cv.pdf" download
        >
          Download CV
        </a>
        <br></br>    
        <div className='flex gap-4'>
            <a href='https://www.linkedin.com/in/pavan-lalcheta-/'
        target='_blank'
        className='hover:text-blue-500 text-2xl md:text-3xl inline'>
            <FaLinkedin  />
        </a>
        <a href=''
        target='_blank'
        className='hover:text-blue-500 text-2xl md:text-3xl inline'>
            <FaGithub/>
        </a>
        </div>
        
      </div>

      {/* Photo Section */}
      <div className="mt-8 pt-10 md:mt-16 md:ml-[300px]">
        <img className="h-[260px] w-[260px] md:h-[410px] md:w-[400px] rounded-full object-cover border-2 border-blue-500" 
        src="public\my passport photo.jpg">
        </img>
      </div>

    </div>
  );
};

export default Hero;
