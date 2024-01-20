// import React,{useRef} from 'react'
// import {motion,useInView} from "framer-motion"
// const Textanimate = ({text,delay}) => {
//   const ref = useRef(null)
//   const view = useInView(ref,{once:true})
//     const defaultVarients ={
//         hidden:{
//             opacity:0,
//             y:0,
        
//         },
//         visible:{
//           delay,
//             opacity:1,
//             y:10,
          
//         }
//     }
//   return (
//     <>
//       <motion.span ref={ref} initial="hidden" animate={view?"visible":"hidden"} transition={{
       
//        staggerChildren:0.1
//       }}>
//         {   
//             text.split(" ").map((word)=>(
//                 <span>
                    
//               {
//                 word.split("").map((e,i)=>{
//                     return(
                    
//                     <motion.span
//                     key={i}
//                     variants={defaultVarients}>
//                         {e}
//                         </motion.span>
//                 )})
//             }  </span>))
           
//         }
            

//       </motion.span>
//     </>
//   )
// }

// export default Textanimate
