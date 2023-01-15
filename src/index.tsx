import * as React from 'react'
import { WallterAdd } from './svg/WalletAdd'
import { WalletEmpty } from './svg/WalletEmpty'
import { WalletCheck } from './svg/WalletCheck'
import { ReceiptItem } from './svg/ReceiptItem'
import { ReceiptDiscount } from './svg/ReceiptDiscount'
import { WalletEmptyRemove } from './svg/WalletEmptyRemove'
import { WalletEmptyAdd } from './svg/WalletEmptyAdd'
import { ReceiptMinus } from './svg/ReceiptMinus'
import { WalletSearch } from './svg/WalletSearch'
import { StrongBox } from './svg/StrongBox'
import { ReceiptAdd } from './svg/ReceiptAdd'
import { Money } from './svg/Money'
import { WalletEmptyTime } from './svg/WalletEmptyTime'
import { TransactionMinus } from './svg/TransactionMinus'
import { Money2 } from './svg/Money2'
import { WalletEmptyChange } from './svg/WalletEmptyChange'
import { Money3 } from './svg/Money3'
import { PercentageSquare } from './svg/PercentageSquare'
import { WalletEmptyTick } from './svg/WalletEmptyTick'
import { Money4 } from './svg/Money4'
import { Group } from './svg/Group'
import { ChartSquare } from './svg/ChartSquare'

export const ExampleComponent: React.FC = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <div>
        <WallterAdd />
        <WalletEmpty />
        <WalletCheck />
        <ReceiptItem />
        <ReceiptDiscount />
        <WalletEmptyRemove />
        <WalletEmptyAdd />
        <ReceiptMinus />
        <WalletSearch />
        <StrongBox />
        <WalletEmptyTick />
      </div>
      <div>
        <ReceiptAdd />
        <Money />
        <WalletEmptyTime />
        <TransactionMinus />
        <Money2 />
        <WalletEmptyChange />
        <Money3 />
        <PercentageSquare />
        <Money4 />
        <Group />
        <ChartSquare />
      </div>
    </div>
  )
}
