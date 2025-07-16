import React from 'react'

import { motion } from 'motion/react'
import { cn } from '@/app/lib/utils'
import { getLogoForTechnology, getTechnologyDisplayName } from '@/app/utils/logo-mapper'  


export const StackItem = ({technology, className}: {technology: string, className?: string}) => {
  return (
    <motion.div
    whileHover="animate"
    whileTap="animate"
    initial="initial"
    className={cn("flex items-center justify-start rounded-full border border-neutral-200 bg-neutral-100 p-1 text-xs text-neutral-500 dark:border-neutral-700 dark:bg-neutral-800 dark:text-neutral-400", className)}
    >
        
        <motion.span
        variants={{
            animate:{ paddingRight: 6 },
        }}
        transition={{
            type: 'spring',
            stiffness: 300,
            damping: 30,
        }}    
        
        >
            {getLogoForTechnology(technology)}
        </motion.span>
        <motion.span
        variants={{
            initial: { width: 0, opacity: 0 },
            animate: { width: 'auto', opacity: 1 },
            exit: { width: 0, opacity: 0 },
        }}
        transition={{ 
            type: 'spring',
            stiffness: 300,
            damping: 30,
            mass: 0.8,
        }}    
        className="overflow-hidden whitespace-nowrap text-neutral-500 dark:text-neutral-400"
        >
            {getTechnologyDisplayName(technology)}
        </motion.span>
    </motion.div>
  )
}
