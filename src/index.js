import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter } from 'react-router-dom';
import Body from './components/Body';
import Maincontainer from './components/Maincontainer';
import WatchPage from './components/WatchPage';
import { RouterProvider } from 'react-router-dom';



const applicationRouter = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children:[
      {
        path: '/',
        element: <Body/>,
        children: [
          {
            path: '/',
            element:<Maincontainer/>
          },
          {
            path: '/watch',
            element:<WatchPage/>
          }
        ]

      }
    ]
  }
])


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  
  <RouterProvider router={applicationRouter}/>
 
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
