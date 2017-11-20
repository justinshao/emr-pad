import React from 'react';
import {
    BrowserRouter as Router,
    Route,
    Switch,
    Redirect
} from 'react-router-dom';
import Home from './components/Home';
import EmrSign from './components/EmrSign';
import EmrInformed from './components/EmrInformed';
import EmrWrapper from './components/EmrWrapper';
import EmrMedias from './components/EmrMedias';
import Login from './components/Login';
import Setting from './components/Setting';
import ModuleWrapper from './components/ModuleWrapper';
import NotFound from './components/404';
import auth from './auth';

const PrivateRoute = ({ component: Component, ...rest }) => (
    <Route {...rest} render={props => (
        auth.isAuthenticated ? (
            <Component {...props} />
        ) : (
                <Redirect to={{
                    pathname: '/login',
                    state: { from: props.location }
                }} />
            )
    )} />
);

const AppRouter = () => (
    <Router>
        <div>
            <Switch>
                <PrivateRoute exact path="/" component={Home} />
                <PrivateRoute path="/home/:wardId?" component={Home} />
                <PrivateRoute path="/emr/:regId?/:emrId?" component={EmrWrapper} />
                {/* 整体功能模块的界面 */}
                <PrivateRoute path="/ModuleWrapper/:regId?" component={ModuleWrapper}/>
                <PrivateRoute path="/sign/:regId/:emrId" component={EmrSign} />
                <PrivateRoute path="/informed/:regId/:emrId" component={EmrInformed} />
                <PrivateRoute path="/media/:regId/:emrId/:pos?" component={EmrMedias} />
                <Route path="/setting" component={Setting} />
                <Route path="/login" component={Login} />
                <Route component={NotFound} />
            </Switch>
        </div>
    </Router>
);

export default AppRouter;