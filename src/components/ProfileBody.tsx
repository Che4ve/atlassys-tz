import '../styles/profileBody.scss';
import profilePic from '../assets/profilePic.png';
import {ReactComponent as SelectorSvg} from "../assets/selectorDown.svg";
import {FormElement} from "./FormElement";

export const ProfileBody = () => {

    return (
        <div className="profile-body">
            <div className="profile-body-navigation">
                <div className="profile-body-navigation-item" id={'edit-profile'}>
                    <p>Edit Profile</p>
                    <SelectorSvg/>
                </div>
                <div className="profile-body-navigation-item" id={'preferences'}>
                    <p>Preferences</p>
                    <SelectorSvg/>
                </div>
                <div className="profile-body-navigation-item" id={'security'}>
                    <p>Security</p>
                    <SelectorSvg/>
                </div>
            </div>
            <hr/>
            <div className="profile-body-content">
                <div className={'profile-body-picture-container'}>
                    <img src={profilePic}/>
                </div>
                <div className={'profile-body-form'}>
                    <div className={'form-column'} id={'form-column-1'}>
                        <FormElement label={'Your Name'} placeholder={'Charlene Reed'}/>
                        <FormElement label={'Email'} placeholder={'charlenereed@gmail.com '}/>
                        <FormElement label={'Date of Birth'} placeholder={'25 January 1990'}/>
                        <FormElement label={'Permanent Address'} placeholder={'San Jose, California, USA'}/>
                        <FormElement label={'Postal Code'} placeholder={'45962'}/>
                    </div>
                    <div className={'form-column'} id={'form-column-2'}>
                        <FormElement label={'User Name'} placeholder={'Charlene Reed'}/>
                        <FormElement label={'Password'} placeholder={'**********'}/>
                        <FormElement label={'Present Address'} placeholder={'San Jose, California, USA'}/>
                        <FormElement label={'City'} placeholder={'San Jose'}/>
                        <FormElement label={'Country'} placeholder={'USA'}/>
                    </div>
                </div>
            </div>
            <button className={'save-button'}>Save</button>
        </div>
    )
}