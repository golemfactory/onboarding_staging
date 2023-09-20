// components/welcome/intro.tsx
import { motion } from 'framer-motion'
import { OnboardingStep } from 'components/templates/OnboardingStep.template'
import { MouseEventHandler, useEffect } from 'react'
import { useSDK } from '@metamask/sdk-react'

import { getContracts } from 'utils/getContracts'
import { swapETHForGLM } from 'ethereum/actions/swap'
import { parseUnits } from 'ethers'
import { getBalances } from 'utils/getBalances'

const variants = {
  show: { opacity: 1 },
  hidden: { opacity: 0 },
}
const SwapTokensPresentational = ({ onSwapButtonClick }: { onSwapButtonClick: MouseEventHandler }) => {
  return (
    <div className="text-center">
      <motion.h1 className="text-4xl font-bold mb-4 text-gray-800" variants={variants}>
        Swap tokens
      </motion.h1>
      <motion.p className="max-w-md text-white my-4 text-lg" variants={variants}>
        You have only native tokens in your wallet. You need to swap them to have GLM
      </motion.p>
      <motion.button
        className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-300"
        variants={variants}
        onClick={onSwapButtonClick}
      >
        Swap
      </motion.button>
    </div>
  )
}

export const SwapTokens = ({ onConfirm }: { onConfirm: MouseEventHandler }) => {
  const { sdk } = useSDK()

  return (
    <OnboardingStep>
      <SwapTokensPresentational
        onSwapButtonClick={() => {
          swapETHForGLM({
            value: parseUnits('1', 18),
          })
        }}
      />
    </OnboardingStep>
  )
}
