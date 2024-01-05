import './styles/index.scss'
import {useTheme} from "app/providers/ThemeProvider";
import {classNames} from "shared/lib/classNames/classNames";
import {AppRouter} from "app/providers/router";
import {Navbar} from "widgets/Navbar";


const App = () => {

    const {theme, changeTheme} = useTheme()
    return (
        <div className={classNames('app', {}, [theme])}>
            <Navbar/>
            <AppRouter/>
            <button onClick={changeTheme}>setTheme</button>
            <br/>
        </div>
    );
};

export default App;