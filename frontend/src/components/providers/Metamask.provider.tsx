//TODO : improve types to avoid ts-ignore

import { useCallback, useEffect, useState } from 'react'
import detectEthereumProvider from '@metamask/detect-provider'
import { createContext, FC, ReactNode } from 'react'
import { formatBalance } from 'utils/formatBalance'
import { LoadingSpinner } from 'components/atoms/loadingSpinner'

const ethereum = window.ethereum || {
  on: () => {
    console.log('ethereum.on')
  },
  removeListener: () => {
    console.log('ethereum.removeListener')
  },
}

interface WalletState {
  accounts: unknown[]
  balance: string
  chainId: string
}

interface MetaMaskContextData {
  wallet: WalletState
  hasProvider: boolean | null
  error: boolean
  errorMessage: string
  isConnecting: boolean
  connectMetaMask: () => void
  clearError: () => void
  request: typeof ethereum.request
}

const disconnectedState: WalletState = {
  accounts: [],
  balance: '',
  chainId: '',
}

export const MetaMaskContext = createContext<MetaMaskContextData>({} as MetaMaskContextData)

export const MetaMaskContextProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const [hasProvider, setHasProvider] = useState<boolean | null>(null)
  const [isConnecting, setIsConnecting] = useState(false)
  const [errorMessage, setErrorMessage] = useState('')
  const clearError = () => setErrorMessage('')

  const [wallet, setWallet] = useState(disconnectedState)

  const _updateWallet = useCallback(async (providedAccounts?: unknown[]) => {
    const accounts = providedAccounts || (await ethereum.request({ method: 'eth_accounts' }))

    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    //@ts-ignore
    if (accounts.length === 0) {
      setWallet(disconnectedState)
      return
    }

    const balance = formatBalance(
      await ethereum.request<string>({
        method: 'eth_getBalance',
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        //@ts-ignore
        params: [accounts[0], 'latest'],
      })
    )

    const chainId = await ethereum.request<string>({
      method: 'eth_chainId',
    })

    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    //@ts-ignore

    setWallet({ accounts, balance, chainId })
  }, [])

  const updateWalletAndAccounts = useCallback(() => _updateWallet(), [_updateWallet])
  const updateWallet = useCallback(
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    //@ts-ignore
    (accounts: unknown) => _updateWallet(accounts),
    [_updateWallet]
  )

  useEffect(() => {
    const getProvider = async () => {
      const provider = await detectEthereumProvider({ silent: true })
      setHasProvider(Boolean(provider))

      if (provider) {
        updateWalletAndAccounts()
        ethereum.on('accountsChanged', updateWallet)
        ethereum.on('chainChanged', updateWalletAndAccounts)
      }
    }

    getProvider()

    return () => {
      ethereum.removeListener('accountsChanged', updateWallet)
      ethereum.removeListener('chainChanged', updateWalletAndAccounts)
    }
  }, [updateWallet, updateWalletAndAccounts])

  const connectMetaMask = async () => {
    setIsConnecting(true)

    try {
      const accounts = await ethereum.request({
        method: 'eth_requestAccounts',
      })
      clearError()
      updateWallet(accounts)
    } catch (err: unknown) {
      setErrorMessage(err instanceof Error ? err.message : 'Something went wrong')
    }
    setIsConnecting(false)
  }
  console.log('hello')
  return <LoadingSpinner />
}
