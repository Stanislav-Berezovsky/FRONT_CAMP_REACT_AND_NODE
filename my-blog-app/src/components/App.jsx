import React, {Component} from 'react';
import {Switch, Route} from 'react-router-dom';
import {renderRoutes} from "react-router-config";
import routes from '../routes';

// class App extends Component {
//     constructor(props) {
//         super(props);
//     }
//
//     render() {
//         return (
//             <div>{renderRoutes(props.route.routes)}</div>
//             // <Switch>
//             //     {routes.map((route, i) => <Route key={i} {...route}/>)}
//             // </Switch>
//         );
//     }
// }
const App = ({route}) => (
    <div>
        <h1>Root</h1>
        {/* child routes won't render without this */}
        {renderRoutes(route.routes)}
    </div>
);
export {App};
