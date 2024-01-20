import React,{useRef} from 'react'
import { motion,useInView } from 'framer-motion'
const TextEffect = ({children}) => {
    const ref=useRef(null)
    const view = useInView(ref,{once:true})
  return (
    <div>
      <motion.div ref={ref}initial="init" animate={view?"anime":"init"} variants={{
        init:{
            opacity:0,
            x:-100
        },
        anime:{
            opacity:1,
            x:0
        }
        
      }}
      transition={{
        delay:0.1,
        duration:0.5
      }}>
        {children}
      </motion.div>
    </div>
  )
}

export default TextEffect
