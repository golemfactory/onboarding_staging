import { createMachine } from 'xstate'
import { detectMetamask, providerState } from './childMachines/detectMetamask'
import { Steps } from './steps'
import { Commands } from './commands'

export const onboardingMachine = createMachine<
  {},
  { type: Commands.NEXT } | { type: Commands.PREVIOUS }
>({
  id: 'onboarding',
  initial: Steps.SHOW_METAMASK_LINK,
  states: {
    [Steps.CHOOSE_NETWORK]: {},
    [Steps.ON_RAMP]: {},
    [Steps.WELCOME]: {
      on: {
        [Commands.NEXT]: Steps.CONNECT_WALLET,
        [Commands.PREVIOUS]: Steps.CONNECT_WALLET_SUCCESS,
      },
    },
    [Steps.CONNECT_WALLET]: {
      on: {
        [Commands.NEXT]: Steps.DETECT_METAMASK,
      },
    },

    [Steps.DETECT_METAMASK]: {
      invoke: {
        id: 'detect-metamask',
        src: detectMetamask,
        onDone: [
          {
            target: Steps.CONNECT_WALLET_SUCCESS,
            cond: (context, event) => event.data === providerState.METAMASK,
          },
          {
            target: Steps.SHOW_METAMASK_LINK,
            cond: (context, event) => event.data === providerState.NO_PROVIDER,
          },
        ],
      },
    },
    [Steps.CONNECT_WALLET_SUCCESS]: {},
    [Steps.SHOW_METAMASK_LINK]: {},
  },
})
