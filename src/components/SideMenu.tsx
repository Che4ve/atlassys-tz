import '../styles/sideMenu.scss';
import {ReactComponent as BankLogo} from '../assets/bankLogo.svg'
import {ReactComponent as DashboardSvg} from '../assets/home.svg'
import {ReactComponent as TransactionsSvg} from '../assets/transfer 1.svg'
import {ReactComponent as AccountsSvg} from '../assets/user 3 1.svg'
import {ReactComponent as InvestmentsSvg} from '../assets/economic-investment.svg'
import {ReactComponent as CreditCardsSvg} from '../assets/credit-card.svg'
import {ReactComponent as LoansSvg} from '../assets/loan 1.svg'
import {ReactComponent as ServicesSvg} from '../assets/service 1.svg'
import {ReactComponent as MyPrivSvg} from '../assets/econometrics.svg'
import {ReactComponent as SettingSvg} from '../assets/settings solid 1.svg'
import {ReactComponent as SelectorSvg} from '../assets/selector.svg'
import {FunctionComponent, ReactElement, SVGProps} from "react";

interface SideMenuProps {

}

interface MenuOption {
    label: string,
    icon: ReactElement,
}

const menuOptions: MenuOption[] = [
    {label: "Dashboard", icon: <DashboardSvg/>},
    {label: "Transactions", icon: <TransactionsSvg/>},
    {label: "Accounts", icon: <AccountsSvg/>},
    {label: "Investments", icon: <InvestmentsSvg/>},
    {label: "Credit Cards", icon: <CreditCardsSvg/>},
    {label: "Loans", icon: <LoansSvg/>},
    {label: "Services", icon: <ServicesSvg/>},
    {label: "My Privileges", icon: <MyPrivSvg/>},
    {label: "Setting", icon: <SettingSvg/>},
]

export const SideMenu = (props: SideMenuProps) => {

    return (
        <div className="side-menu">
            <BankLogo className={'bank-logo'}/>
            <div className="side-menu-content">
                {menuOptions.map((option: MenuOption, index) => {
                    return (
                        <div className={'content-element'} key={`content-element-${index}`}>
                            <SelectorSvg className={'selector'}/>
                            {option.icon}
                            <p>{option.label}</p>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}