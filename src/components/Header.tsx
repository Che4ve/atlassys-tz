import '../styles/header.scss';
import profilePic from '../assets/profilePic.png';
import {ReactComponent as NotificationSvg} from "../assets/002-notification-1.svg";
import {ReactComponent as SettingsSvg} from "../assets/settings 1.svg";
import {ReactComponent as GlassSvg} from "../assets/magnifying-glass 1.svg";

export const Header = () => {

    return (
        <div className="header">
            <p className={'main-text'}>Setting</p>
            <div className={'search'}>
                <GlassSvg/>
                <input placeholder={"Search for something"}/>
            </div>
            <div className={'settings'}>
                <SettingsSvg/>
            </div>
            <div className={'notification'}>
                <NotificationSvg/>
            </div>
            <div className={'profile-picture'}>
                <img src={profilePic}/>
            </div>
        </div>
    )
}