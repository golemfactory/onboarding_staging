// components/welcome/intro.tsx
import { motion } from 'framer-motion'

import { settings } from 'settings'
import { getNativeToken } from 'utils/getNativeToken'
import onboardingStyle from '../Onboarding.module.css'

import buttonStyle from 'components/atoms/button/button.module.css'
const variants = {
  show: { opacity: 1 },
  hidden: { opacity: 0 },
}
import { ChangeEvent, useState } from 'react'
import { Slider, ISliderProps } from 'components/atoms/slider/slider'
import { formatEther, parseUnits } from 'ethers'
import { swapETHForGLM } from 'ethereum/actions/swap'
import { useMetaMask } from 'components/providers'

const SwapTokensPresentational = ({
  onSwapButtonClick,
  sliderProps,
}: {
  onSwapButtonClick: () => void
  sliderProps: ISliderProps
}) => {
  const [isLoading, setIsLoading] = useState(false)

  const handleSwapButtonClick = async () => {
    setIsLoading(true)
    await onSwapButtonClick()
  }
  return (
    <div className={onboardingStyle.step}>
      <motion.h1 className={onboardingStyle.title} variants={variants}>
        Swap tokens
      </motion.h1>
      <motion.p className={onboardingStyle.description} variants={variants}>
        You have only native tokens in your wallet. You need to swap them to
        have GLM
        <Slider {...sliderProps} />
      </motion.p>
      <motion.button
        className={buttonStyle.primaryButton}
        variants={variants}
        onClick={handleSwapButtonClick}
        disabled={isLoading}
      >
        {isLoading ? (
          <div className="flex justify-center items-center ">
            <div className="relative">
              <div className="animate-spin ml-2 mr-2 h-6 w-6 rounded-full border-t-4 border-b-4 border-white"></div>
            </div>
          </div>
        ) : (
          'Swap'
        )}
      </motion.button>
    </div>
  )
}

export const SwapTokens = ({ goToNextStep }: { goToNextStep: () => void }) => {
  const nativeToken = getNativeToken()

  const minimalAmount = parseFloat(settings.minimalSwap[nativeToken])
  const [amount, setAmount] = useState(minimalAmount)
  const { wallet } = useMetaMask()

  const sliderProps = {
    min: minimalAmount,
    step: 0.01,
    max: parseFloat(formatEther(wallet?.balance.NATIVE)).toFixed(2),
    label: '',
    value: amount,
    displayValue: (v: number) => `Swap ${v} Matic`,
    onChange: (e: ChangeEvent<HTMLInputElement>) => {
      const value = parseFloat(e.currentTarget.value)
      setAmount(value)
    },
  }

  return (
    <div>
      <SwapTokensPresentational
        sliderProps={sliderProps}
        onSwapButtonClick={async () => {
          const transaction = await swapETHForGLM({
            value: parseUnits(amount.toString(), 18),
          })
          await transaction.wait()
          goToNextStep()
        }}
      />
    </div>
  )
}