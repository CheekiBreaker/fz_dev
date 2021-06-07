import {Redirect, Route, Switch} from 'react-router-dom';
import { INDEX_ROUTE,LIBRARY_ROUTE } from '../paths/const';
import { authRoutes, publicRoutes } from '../routes';
import {Context} from '../index';
import { useContext } from 'react';

const AppRouter = () => {
    const {user} = useContext(Context);
            console.log(user);
            {user.checkAuth && authRoutes.map(({path, Component}) => 
            <Route key={path} path ={path} component={Component} exact/>
            )}
    return(
        <Switch>
            
            
            {publicRoutes.map(({path, Component}) => 
            <Route key={path} path ={path} component={Component} exact/>
            )}
            <Redirect to = {LIBRARY_ROUTE}/>
        </Switch>
    )
}

export default AppRouter;