import React from 'react'
import './Header.scss'
import bg from '../../assets/bg.png'
import {motion} from 'framer-motion'
import { images } from '../../constants'
import { AppWrapper } from '../../wrapper/'

const scaleVarients = {
  whileInView: {
    scale: [0, 1],
    opacity: [0, 1],
    transition: {
      duration: 1,
      ease:   'easeInOut'
      
    }

  }
}

const Header = () => {
  return (
    <div id="home" className='app__header app__flex'>

      <motion.div
        whileInView={{ x: [-100, 0], opacity: [0, 1] }}
        transition={{ duration: 5 }}
        className="app__header-info"
      
      >
        <div className="app__header-badge">
          <div className="badge-cmp app__flex">
            <span>👋 </span>
            <div className="" style={{ marginLeft: 20 }}>
              <p className='p-text'>Hello, I am</p>
             <h1 className="head-text">Dindu</h1> 
            
            
            </div>
</div>
          <div className="tag-cmp app__flex">
            <p className="p-text">Software Developer</p>
            <p className="p-text">FullStack Developer</p>
            {/* <p className="p-text">Backend WebDeveloper</p> */}
            
            <p className="p-text">Freelancer</p>
</div>

        </div>

      </motion.div>
      <motion.div whileInView={{ opacity: [0, 1] }}
        transition={{ duration: 0.5 }}
        className="app__header-img"

      >

        <img src={bg} alt='profile_bg' />

        <motion.img
        whileInView={{ scale: [0, 1] }}
        transition={{ duration: 1, ease: 'easeInOut' }}
        src={images.circle}
        alt="profile_circle"
        className="overlay_circle"
      />
        

      </motion.div>
      <motion.div
        variants={scaleVarients}
        whileInView={scaleVarients.whileInView}
        className="app__header-circles"
        
      >
        {[images.react, images.redux, images.sass].map((circle, index) =>(
          <div className="circle-cmp app__flex" key={`circle-${index}`}>
            <img src={circle} alt='circle' />
            
</div>

        ))}


      </motion.div>



    </div>
  )
}

export default AppWrapper (Header,  'home')
