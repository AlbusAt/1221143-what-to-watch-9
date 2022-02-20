import {BrowserRouter, Route, Routes} from 'react-router-dom';
import {AppRoute} from '../../const';
import MainPage from '../main-page/main-page';
import SignIn from '../sign-in/sign-in';
import MyList from '../my-list/my-list';
import FilmPage from '../film-page/film-page';
import PageReview from '../add-review/add-review';
import Player from '../player/player';

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
          path = {AppRoute.MyList}
          element = {<MyList/>}
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
      </Routes>
    </BrowserRouter>
  );
}

export default App;
