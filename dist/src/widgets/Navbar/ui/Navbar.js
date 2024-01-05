import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Link } from 'react-router-dom';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Navbar.module.scss';
import AppLink from "shared/ui/AppLink/AppLink";
var Navbar = function (_a) {
    var className = _a.className;
    return (_jsx("div", { className: classNames(cls.Navbar), children: _jsxs("div", { className: cls.links, children: [_jsx(AppLink, { to: '/main', className: cls.mainLink, children: "main" }), _jsx(Link, { to: '/about', children: "about" })] }) }));
};
export default Navbar;
