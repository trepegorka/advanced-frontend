import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import './styles/index.scss';
import { useTheme } from "app/providers/ThemeProvider";
import { classNames } from "shared/lib/classNames/classNames";
import { AppRouter } from "app/providers/router";
import { Navbar } from "widgets/Navbar";
var App = function () {
    var _a = useTheme(), theme = _a.theme, changeTheme = _a.changeTheme;
    return (_jsxs("div", { className: classNames('app', {}, [theme]), children: [_jsx(Navbar, {}), _jsx(AppRouter, {}), _jsx("button", { onClick: changeTheme, children: "setTheme" }), _jsx("br", {})] }));
};
export default App;
