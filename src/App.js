// import { Route, Routes } from 'react-router-dom';
// import Home from './pages/HomePage';
// import Header from './components/Header';
// import Details from './components/Details';

// const WebApp = () => {
//   <>
//     <Header />
//     <Routes>
//       <Route path="/" element={<Home />} />
//       <Route path="/details" element={<Details />} />
//     </Routes>
//   </>
// };

// const App = () => (
//   ReactDOM.createRoot(document.getElementById('root'))
//     .render(
//       <React.StrictMode>
//         <BrowserRouter>
//           <Provider store={store}>
//             <App />
//           </Provider>
//         </BrowserRouter>
//       </React.StrictMode>,
//     )
// );

// export default App;

import React from 'react';
import ReactDOM from 'react-dom/client';
import { Route, Routes, BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/configStore';
import Header from './components/Header';
import Home from './pages/HomePage';
import Details from './components/Details';

const WebApp = () => (
  <>
    <Header />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/details" element={<Details />} />
    </Routes>
  </>
);

const App = () => (
  ReactDOM.createRoot(document.getElementById('root'))
    .render(
      <React.StrictMode>
        <Router>
          <Provider store={store}>
            <WebApp />
          </Provider>
        </Router>
      </React.StrictMode>,
    )
);

export default App;
