import React, {createContext} from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import UserStore from "./store/UserStore";
import DeviceStore from "./store/DeviceStore";
import MobileMessage from './pages/MobileMessage';

export const Context = createContext(null)
const isMobile = window.innerWidth <= 600

ReactDOM.render(
    <Context.Provider value={{
        user: new UserStore(),
        device: new DeviceStore(),
    }}>
        {isMobile ? 
        <>
            <MobileMessage/>
        </>
            : 
        <>
            <App />
        </>
        }
    </Context.Provider>,
    document.getElementById('root')
);

