export const SkipableStep = {
  WELCOME: 'welcome',
  ADD_GLM: 'add-glm',
} as const

export const Step = {
  ...SkipableStep,
  FINISH: 'finish',
  CONNECT_WALLET: 'connect-wallet',
  DETECT_METAMASK: 'detect-metamask',
  NOT_METAMASK: 'not-metamask',
  CONNECT_WALLET_SUCCESS: 'connect-wallet-success',
  CHOOSE_NETWORK: 'choose-network',
  ON_RAMP: 'on-ramp',
  CHECK_ACCOUNT_BALANCES: 'check-account-balances',
  SWAP: 'swap',
  GASLESS_SWAP: 'gasless-swap',
  TRANSFER: 'transfer',
  CHOOSE_WALLET: 'choose-wallet',
} as const

export type SkipableStepType = (typeof SkipableStep)[keyof typeof SkipableStep]
export type StepType = (typeof Step)[keyof typeof Step]
