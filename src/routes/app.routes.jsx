import {Routes, Route} from 'react-router-dom'

import {New} from '../pages/New'
import {Home} from '../pages/home'
import {Details} from '../pages/Details'
import {Profile} from '../pages/profile'


export function AppRoutes(){

    return(
        <Routes>
            <Route path="/" element={<Home/>} />
            <Route path='/new' element={<New/>} />
            <Route path='/profile' element={<Profile/>} />
            <Route path='/details/:id' element={<Details/>} />
        </Routes>        
    )
}