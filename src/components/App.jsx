import  React from 'react';
import './app.less';
import {BrowserRouter, Route, Routes, Navigate} from "react-router-dom";
import Main from "./main/Main";
import Card from "./card/Card";
import Error from "./main/Error";

function App() {

    return (
         <BrowserRouter>
             <div className='container'>
                 <Routes>
                     <Route exact path='/' element={<Main />}/>
                     <Route path='/card/:username/:reponame' element={<Card />}/>
                     <Route path='/error' element={<Error />}/>
                     <Route path='*' element={
                         <Navigate to='/' replace/>
                     }/>
                 </Routes>
             </div>
         </BrowserRouter>
    );
}

export default App;
