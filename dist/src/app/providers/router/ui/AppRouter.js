import { jsx as _jsx } from "react/jsx-runtime";
import { Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import { routeConfig } from "shared/config/routeConfig/routeConfig";
var AppRouter = function () {
    return (_jsx(Suspense, { children: _jsx(Routes, { children: Object.values(routeConfig).map(function (_a) {
                var element = _a.element, path = _a.path;
                return (_jsx(Route, { path: path, element: element }, path));
            }) }) }));
};
export default AppRouter;
