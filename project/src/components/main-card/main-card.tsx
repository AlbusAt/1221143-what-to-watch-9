import FilmCard from '../film-card/film-card';
import FilmPromo from '../film-promo/film-promo';
import PageFooter from '../page-footer/page-footer';
import {Link} from 'react-router-dom';
import {Film} from '../../types/film-type';

type MainCardProps = {
  promoFilm: Film;
  films: Film[];
  setCurrentFilm:React.Dispatch<React.SetStateAction<Film | null>>
}

function MainCard({promoFilm, films, setCurrentFilm}: MainCardProps): JSX.Element {


  return (
    <>
      <FilmPromo promoFilm={promoFilm} />
      <div className="page-content">
        <section className="catalog">
          <h2 className="catalog__title visually-hidden">Catalog</h2>
          <ul className="catalog__genres-list">
            <li className="catalog__genres-item catalog__genres-item--active">
              <Link to="/" className="catalog__genres-link">All genres</Link>
            </li>
            <li className="catalog__genres-item">
              <Link to="/" className="catalog__genres-link">Comedies</Link>
            </li>
            <li className="catalog__genres-item">
              <Link to="/" className="catalog__genres-link">Crime</Link>
            </li>
            <li className="catalog__genres-item">
              <Link to="/" className="catalog__genres-link">Documentary</Link>
            </li>
            <li className="catalog__genres-item">
              <Link to="/" className="catalog__genres-link">Dramas</Link>
            </li>
            <li className="catalog__genres-item">
              <Link to="/" className="catalog__genres-link">Horror</Link>
            </li>
            <li className="catalog__genres-item">
              <Link to="/" className="catalog__genres-link">Kids & Family</Link>
            </li>
            <li className="catalog__genres-item">
              <Link to="/" className="catalog__genres-link">Romance</Link>
            </li>
            <li className="catalog__genres-item">
              <Link to="/" className="catalog__genres-link">Sci-Fi</Link>
            </li>
            <li className="catalog__genres-item">
              <Link to="/" className="catalog__genres-link">Thrillers</Link>
            </li>
          </ul>

          <div className="catalog__films-list">
            {films.map((film: Film) => <FilmCard {...{ setCurrentFilm, film}} key={film.id}/>)}
          </div>

          <div className="catalog__more">
            <button className="catalog__button" type="button">Show more</button>
          </div>
        </section>
        <PageFooter />
      </div>
    </>
  );
}

export default MainCard;
