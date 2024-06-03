
import './App.css';
// import Body from './components/Body';
import Head from './components/Head';
import appstore from './utils/appstroe';
import { Provider } from 'react-redux';
// import Maincontainer from './components/Maincontainer';
// import { createBrowserRouter } from 'react-router-dom';
// import WatchPage from './components/WatchPage'
import { Outlet } from 'react-router-dom'


// const appRouter = createBrowserRouter([
//   {
//     path: '/',
//     element: <Body />,
//     children: [
//       {
//         path: '/',
//         element:<Maincontainer/>
//       },
//       {
//         path: '/watch',
//         element:<WatchPage/>
//       }
      
//     ]
//   }

// ])

function App() {
  return (
      <Provider store={appstore}>
      <Head />
      <Outlet/>
      </Provider>
  );
}

export default App;
