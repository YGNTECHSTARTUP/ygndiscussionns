import React,{useRef} from 'react'
import { motion,useInView } from 'framer-motion'
const CardEffect = ({children}) => {
    const ref=useRef(null)
    const view = useInView(ref,{once:true})
  return (
    <div>
      <motion.div ref={ref}initial="init" animate={view?"anime":"init"} variants={{
        init:{
            opacity:0,
            y:200
        },
        anime:{
            opacity:1,
            y:0
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

export default CardEffect
