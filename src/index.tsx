import * as React from 'react'
import { WallterAdd } from './svg/WalletAdd'
import { WalletEmpty } from './svg/WalletEmpty'
import { WalletCheck } from './svg/WalletCheck'
import { ReceiptItem } from './svg/ReceiptItem'
import { ReceiptDiscount } from './svg/ReceiptDiscount'
import { WalletEmptyRemove } from './svg/WalletEmptyRemove'
import { WalletEmptyAdd } from './svg/WalletEmptyAdd'
import { ReceiptMinus } from './svg/ReceiptMinus'

export const ExampleComponent: React.FC = () => {
  return (
    <div>
      <WallterAdd />
      <WalletEmpty />
      <WalletCheck />
      <ReceiptItem />
      <ReceiptDiscount />
      <WalletEmptyRemove />
      <WalletEmptyAdd />
      <ReceiptMinus />
    </div>
  )
}
