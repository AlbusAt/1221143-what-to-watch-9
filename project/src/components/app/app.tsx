import {BrowserRouter, Route, Routes} from 'react-router-dom';
import {AppRoute, AuthorizationStatus} from '../../const';
import MainPage from '../main-page/main-page';
import SignIn from '../sign-in/sign-in';
import MyList from '../my-list/my-list';
import FilmPage from '../film-page/film-page';
import PageReview from '../add-review/add-review';
import Player from '../player/player';
import PrivateRoute from '../private-route/private-route';
import NotFoundScreen from '../not-found-screen/not-found-screen';

type AppScreenProps = {
  title: string,
  genre: string,
  year: number;
};

function App({genre,title,year}: AppScreenProps): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path = {AppRoute.Main}
          element = {<MainPage title={title} genre={genre} year={year} />}
        />
        <Route
          path = {AppRoute.Login}
          element = {<SignIn />}
        />
        <Route
          path = {AppRoute.Film}
          element = {<FilmPage/>}
        />
        <Route
          path = {AppRoute.Review}
          element = {<PageReview/>}
        />
        <Route
          path = {AppRoute.Player}
          element = {<Player/>}
        />
        <Route
          path = {AppRoute.MyList}
          element = {
            <PrivateRoute authorizationStatus = {AuthorizationStatus.NoAuth}>
              <MyList/>
            </PrivateRoute>
          }
        />
        <Route
          path="*"
          element={<NotFoundScreen />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
