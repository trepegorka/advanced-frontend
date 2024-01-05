import { useContext } from 'react';
import { LOCAL_STORAGE_THEME_KEY, Theme, ThemeContext } from "./ThemeContext";
export function useTheme() {
    var _a = useContext(ThemeContext), theme = _a.theme, setTheme = _a.setTheme;
    var changeTheme = function () {
        var newTheme = theme === Theme.DARK ? Theme.NORMAL : Theme.DARK;
        setTheme(newTheme);
        localStorage.setItem(LOCAL_STORAGE_THEME_KEY, newTheme);
    };
    return {
        theme: theme,
        changeTheme: changeTheme
    };
}
