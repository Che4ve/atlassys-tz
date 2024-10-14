import './App.scss';
import {SideMenu} from "./components/SideMenu";
import {Header} from "./components/Header";
import {ProfileBody} from "./components/ProfileBody";


export const App : React.FC = () => {

    return (
        <div className={'app'}>
            <SideMenu/>
            <Header/>
            <ProfileBody/>
        </div>
    );
}