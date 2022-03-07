import { useState } from 'react';
import {Route, BrowserRouter, Routes} from 'react-router-dom';
import {AppRoute, AuthorizationStatus} from '../../const';
import { Film } from '../../types/film-type';
import AddCard from '../add-card/add-card';
import MainCard from '../main-card/main-card';
import MoviePages from '../movie-pages/movie-pages';
import MyListPage from '../my-list/my-list';
import NotFoundPage from '../not-found-screen/not-found-screen';
import Player from '../player/player';
import PrivateRoute from '../private-route/private-route';
import SignIn from '../sign-in/sign-in';

type AppScreenProps = {
  promoFilm: Film;
  films: Film[];
}

function App({promoFilm, films}: AppScreenProps): JSX.Element {

  const [currentFilm, setCurrentFilm] = useState<Film | null>(null);

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path={AppRoute.Main}
          element={<MainCard {...{ setCurrentFilm, promoFilm, films }} />}
        />
        <Route
          path={AppRoute.SignIn}
          element={<SignIn/>}
        />
        <Route
          path={AppRoute.Film}
          element={<MoviePages setCurrentFilm = {setCurrentFilm} film={currentFilm} similarFilms={films}/>}
        />
        <Route
          path={AppRoute.Player}
          element={<Player/>}
        />
        <Route
          path={AppRoute.MyList}
          element={
            <PrivateRoute authorizationStatus={AuthorizationStatus.NoAuth}>
              <MyListPage {...{ setCurrentFilm, films }}/>
            </PrivateRoute>
          }
        />
        <Route
          path={AppRoute.AddReview}
          element={<AddCard film={currentFilm}/>}
        />
        <Route
          path="*"
          element={<NotFoundPage/>}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
