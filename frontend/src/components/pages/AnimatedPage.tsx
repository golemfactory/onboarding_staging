import { PropsWithChildren } from 'react'
import { motion } from 'framer-motion'

const pageVariants = {
  initial: { opacity: 0, x: '-100vw' },
  in: { opacity: 1, x: 0 },
  out: { opacity: 0, x: '100vw' },
}

const pageTransition = {
  duration: 1,
  type: 'ease',
}

export const AnimatedPage = (props: PropsWithChildren) => {
  return (
    <motion.div
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
      transition={pageTransition}
      className="h-full flex flex-col"
    >
      {props.children}
    </motion.div>
  )
}
