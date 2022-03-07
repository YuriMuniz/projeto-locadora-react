import React from 'react';
import { Route, Routes } from 'react-router-dom';

import CreateMovie from '../pages/Movie/Create';
import EditMovie from '../pages/Movie/Edit';
import Movie from '../pages/Movie';

import CreateUser from '../pages/User/Create';
import EditUser from '../pages/User/Edit';
import User from '../pages/User';
import SelectUser from '../pages/Rental/Create/SelectUser';
import SelectMovies from '../pages/Rental/Create/SelectMovies';
import History from '../pages/History';
 
import Login from '../pages/Login';



import DefaultLayout from '../pages/_layouts/Default';

import { PrivateRoute, LoginRoute } from './Route';
import Rental from '../pages/Rental';
export default function AppRouter() {

    return (
        <Routes>
            <Route path="/login" element={<LoginRoute component={Login} />} />
            <Route path="/" element={<DefaultLayout />}>
                <Route path="/movies" element={<PrivateRoute component={Movie} />} />
                <Route path="/movies/create" element={<PrivateRoute component={CreateMovie} />} />
                <Route path="/movies/edit/:id" element={<PrivateRoute component={EditMovie} />} />
                <Route path="/users" element={<PrivateRoute component={User} />} />
                <Route path="/users/create" element={<PrivateRoute component={CreateUser} />} />
                <Route path="/users/edit/:id" element={<PrivateRoute component={EditUser} />} />
                <Route path="/rentals" element={<PrivateRoute component={Rental} />} />
                <Route path="/rentals/select-user" element={<PrivateRoute component={SelectUser} />} />
                <Route path="/rentals/select-movies/:idUser" element={<PrivateRoute component={SelectMovies} />} />
                <Route path="/history" element={<PrivateRoute component={History} />} />
            </Route>
        </Routes>

    );
}

