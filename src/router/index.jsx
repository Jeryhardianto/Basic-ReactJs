import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Navbar from '../Components/Navbar'
import Home from '../views/Home'
import About from '../views/About'
import Contact from '../views/Contact'
import NotFound from '../views/errors/NotFound'
import Login from '../views/auth/Login'
import UserIndex from '../views/users'
import Show from '../views/users/Show'

function Router() {
    return (
        <Switch>
            <Route exact path='/'>
                {/* Children yg di navbar digunakan disini agar tidak menuliskan className:"py-4" disetiap code */}
                <Navbar>
                    <Home />
                </Navbar>
            </Route>
            <Route path='/about'>
                <Navbar>
                    <About />
                </Navbar>
            </Route>
            <Route path='/contact'>
                <Navbar>
                    <Contact />
                </Navbar>
            </Route>
            {/* exact => pada saat ada path yg sama */}
            <Route exact path='/users'>
                <Navbar>
                    <UserIndex />
                </Navbar>
            </Route>
            <Route path='/users/:identifier'>
                <Navbar>
                    <Show />
                </Navbar>
            </Route>
            {/* Cara ke 2 utk route */}
            {/* <Route path='/contact' component={Contact} /> */}
            {/* Membuat Halaman Not Found */}
            <Route path='/login' component={Login} />
            <Route path='*' component={NotFound} />
        </Switch>
    )
}

export default Router
