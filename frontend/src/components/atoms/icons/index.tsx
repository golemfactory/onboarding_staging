import { XIcon } from './X.icon'

import { MaticIcon } from './matic.icon'
import { GolemIcon } from './golem.icon'
import { YagnaIcon } from './yagna.icon'
import { ArrowsExpandIcon } from './arrowsExpand.icon'
import { CheckmarkIcon } from './checkmark.icon'
import { ChipIcon } from './chip.icon'
import { TerminalIcon } from './terminal.icon'
import { RightArrowIcon } from './rightArrow.icon'
import { ChevronDoubleRightIcon } from './chevronDoubleRight'
import { GolemSmallIcon } from './golem.small.icon'
import { ChevronDownIcon } from './chevron.down'
import { EyeIcon } from './eye.icon'
import { GolemCoinIcon } from './golem.coin.icon'
import { MaticCoinIcon } from './matic.coin.icon'
import { RampIcon } from './ramp.icon'
import { VariableIcon } from './variable.icon'
import { CheckboxCheckedIcon } from './checkbox.checked.icon'
import { TrustStackedIcon } from './trust.stacked.icon'
import { SuccessIcon } from './success.icon'
import { MetamaskIcon } from './metamask.icon'
import { TrustWalletIcon } from './trust.icon'
import { EthereumIcon } from './ethereum.icon'

const icons = {
  x: XIcon,
  matic: MaticIcon,
  golem: GolemIcon,
  yagna: YagnaIcon,
  arrows: ArrowsExpandIcon,
  checkmark: CheckmarkIcon,
  chip: ChipIcon,
  terminal: TerminalIcon,
  rightArrow: RightArrowIcon,
  chevronDoubleRight: ChevronDoubleRightIcon,
  golemSmall: GolemSmallIcon,
  chevronDown: ChevronDownIcon,
  eye: EyeIcon,
  golemCoin: GolemCoinIcon,
  maticCoin: MaticCoinIcon,
  ramp: RampIcon,
  variable: VariableIcon,
  checkboxChecked: CheckboxCheckedIcon,
  trustStacked: TrustStackedIcon,
  success: SuccessIcon,
  metamask: MetamaskIcon,
  trust: TrustWalletIcon,
  ethereum: EthereumIcon,
}

export const Icon = ({ icon, ...props }: { icon: keyof typeof icons }) => {
  const IconComponent = icons[icon]
  return <IconComponent {...props} />
}

export type IconType = keyof typeof icons

export {
  XIcon,
  MaticIcon,
  GolemIcon,
  YagnaIcon,
  ArrowsExpandIcon,
  CheckmarkIcon,
  ChipIcon,
  TerminalIcon,
  RightArrowIcon,
  ChevronDoubleRightIcon,
  GolemSmallIcon,
  ChevronDownIcon,
  EyeIcon,
  VariableIcon,
  GolemCoinIcon,
  MaticCoinIcon,
  RampIcon,
  CheckboxCheckedIcon,
  TrustStackedIcon,
  SuccessIcon,
  MetamaskIcon,
  TrustWalletIcon,
  EthereumIcon,
}
