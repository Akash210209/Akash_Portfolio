import { motion } from "framer-motion";
import linkdlen from '../assets/company/linkdlen.jpg'
import github from '../assets/company/github.jpg'
import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";

const Hero = () => {
  return (
    <section className={`relative w-full h-screen mx-auto`}>
      <div
        className={`absolute inset-0 top-[120px]  max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
      >
        <div className='flex flex-col justify-center items-center mt-5'>
          <div className='w-5 h-5 rounded-full bg-[#915EFF]' />
          <div className='w-1 sm:h-80 h-40 violet-gradient' />
        </div>

        <div className="flex flex-col items-start">
  {/* Hero Header */}
  <h1 className={`${styles.heroHeadText} text-white`}>
    Hi, I'm <span className='text-[#915EFF]'>Akash Helawar</span>
  </h1>

  {/* Subheading / Brief Introduction */}
  <p className={`${styles.heroSubText} mt-2 text-white-100`}>
    A software developer specializing in React.js <br className='sm:block hidden' />
    and building scalable web applications.
  </p>

  {/* Tagline */}
  <p className="mt-4 text-white-200">
    Creating user-friendly and responsive interfaces.
  </p>

  {/* Brief Details on Technologies */}
  <p className="mt-2 text-white-200">
    Proficient in <span className="text-[#915EFF]">React.js, JavaScript, Redux,MangoDB ,Nodejs</span>, and modern front-end development tools.
  </p>
</div>


      </div>

      <ComputersCanvas />

      <div className='absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center'>
        <a href='#about'>
          <div className='w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2'>
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className='w-3 h-3 rounded-full bg-secondary mb-1'
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
