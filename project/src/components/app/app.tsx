import {BrowserRouter, Route, Routes} from 'react-router-dom';
import {AppRoute} from '../../const';
import MainPage from '../main-page/main-page';
import SignIn from '../sign-in/sign-in';
import MyList from '../my-list/my-list';
//import PageReview from '../add-review/add-review';

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
      </Routes>
    </BrowserRouter>
  );
}

export default App;
