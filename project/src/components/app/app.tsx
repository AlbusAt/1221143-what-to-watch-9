import MainPage from '../main-page/main-page';
import PageReview from '../add-review/add-review';

type AppScreenProps = {
  title: string,
  genre: string,
  year: number;
};

function App({genre,title,year}: AppScreenProps): JSX.Element {
  return (
    <><MainPage title={title} genre={genre} year={year} /><PageReview /></>
  );
}

export default App;
