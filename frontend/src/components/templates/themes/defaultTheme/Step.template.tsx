import { FC, useCallback, useEffect, useState } from 'react'
import globalStyle from 'styles/global.module.css'
import templateStyle from './step.template.module.css'
import { StepRenderDetailsType } from 'types/ui'
import { Bullet, Button } from 'components/atoms'
import {
  InfoTooltip,
  InfoTooltipTrigger,
} from 'components/organisms/tooltip/InfoTooltip'
import { useOnboarding } from 'hooks/useOnboarding'
import { Commands } from 'state/commands'
import { RightDot } from 'components/atoms/ornaments/rightDot'
import { AnimatePresence, motion } from 'framer-motion'
import { AnimatedText } from 'components/molecules/animateText/AnimatedText'
import { useTooltip } from 'components/providers/Tooltip.provider'
import { useNetwork } from 'hooks/useNetwork'

const style = {
  ...globalStyle,
  ...templateStyle,
}

//TODO : divide into two components to separate logic and presentation

export const StepTemplate: FC<StepRenderDetailsType> = function (
  stepRenderDetails: StepRenderDetailsType
) {
  const {
    main: MainComponent,
    layout: LayoutComponent,
    ornament: OrnamentComponent,
    placement,
    name,
    showNextButton,
  } = stepRenderDetails
  const [isReadyForNextStep, setIsReadyForNextStep] = useState(true)
  const [isNextCalled, setIsNextCalled] = useState(false)
  const { send } = useOnboarding()
  const [namespace, setNamespace] = useState(`${name}.step`)
  const { chain } = useNetwork(false)
  const [textVisible, setTextVisible] = useState(true)
  const [componentPlacement, setComponentPlacement] = useState('')
  useEffect(() => {
    setComponentPlacement('')
    setTimeout(() => {
      setComponentPlacement(placement)
    }, 1000)
  }, [placement])

  useEffect(() => {
    setTextVisible(!textVisible)
    setTimeout(() => {
      setTextVisible(textVisible)
      setNamespace(`${name}.step`)
    }, 1000)
  }, [name])

  const goToNextStep = useCallback(() => {
    send(Commands.NEXT)
  }, [])

  const tooltip = useTooltip(name)

  return (
    <div className={style.container}>
      <RightDot />
      <div className={style.textContainer}>
        <div className=" col-span-10 mt-12 justify-between grid grid-cols-10">
          <motion.div
            initial={{ opacity: 0, y: -100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className={`${style.title} col-span-4`}
          >
            <AnimatedText
              i18nKey="title"
              ns={namespace}
              visibility={textVisible ? 'visible' : 'hidden'}
              values={{
                chain: chain?.name,
                token: chain?.nativeCurrency.symbol,
              }}
            />
          </motion.div>
          <div className="col-span-3 col-start-7 relative">
            <AnimatePresence>
              {OrnamentComponent && componentPlacement !== '' ? (
                <motion.div
                  initial={{
                    opacity: 0,
                  }}
                  animate={{
                    opacity: 1,
                  }}
                  transition={{
                    duration: 2,
                  }}
                >
                  <OrnamentComponent />
                </motion.div>
              ) : (
                ''
              )}
            </AnimatePresence>
          </div>
        </div>
        <div className="col-span-2"></div>
        <div className={style.descriptionContainer}>
          <div className="col-span-1">
            <Bullet useTopStroke={false} />
          </div>
          <div className="col-span-11 flex flex-col gap-4">
            <div className="flex flex-wrap justify-between">
              <div className={style.subtitle}>
                <AnimatedText
                  i18nKey="subtitle"
                  ns={namespace}
                  visibility={textVisible ? 'visible' : 'hidden'}
                  values={{
                    chain: chain?.name,
                    token: chain?.nativeCurrency.symbol,
                  }}
                />{' '}
              </div>
              <motion.div
                variants={{
                  visible: {
                    opacity: 1,
                  },
                  hidden: {
                    opacity: 0,
                  },
                }}
                transition={{
                  duration: 1,
                }}
                initial="hidden"
                animate={textVisible ? 'visible' : 'hidden'}
                className={style.tooltipTriggerContainer}
              >
                <InfoTooltipTrigger id={name} appearance="primary" />
              </motion.div>
              <div className="ml-auto">
                <InfoTooltip id={name} appearance="primary" />
              </div>
            </div>

            <div className={style.description}>
              <div className="col-span-10">
                <AnimatedText
                  i18nKey="description"
                  ns={namespace}
                  visibility={textVisible ? 'visible' : 'hidden'}
                />{' '}
              </div>
            </div>
            <AnimatePresence>
              {componentPlacement === 'inside' ? (
                <LayoutComponent isTooltipVisible={tooltip.visible}>
                  <MainComponent
                    setIsCompleted={setIsReadyForNextStep}
                    isNextCalled={isNextCalled}
                    goToNextStep={goToNextStep}
                  />
                </LayoutComponent>
              ) : (
                ''
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
      <AnimatePresence>
        {componentPlacement === 'outside' ? (
          <LayoutComponent isTooltipVisible={tooltip.visible}>
            <MainComponent
              setIsCompleted={setIsReadyForNextStep}
              isNextCalled={isNextCalled}
              goToNextStep={goToNextStep}
            />
          </LayoutComponent>
        ) : (
          ''
        )}
      </AnimatePresence>

      <div className="col-span-12 flex justify-end mt-4">
        {showNextButton ? (
          <Button
            buttonStyle="solid"
            className="py-4 px-9 text-button-large"
            useDefault={false}
            onClick={() => {
              setIsNextCalled(true)
              if (isReadyForNextStep) {
                setIsNextCalled(false)
                send(Commands.NEXT)
              }
            }}
          >
            {' '}
            Next
          </Button>
        ) : (
          ''
        )}
      </div>
    </div>
  )
}
