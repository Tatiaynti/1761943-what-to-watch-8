import {useEffect, useState} from 'react';
import {TabList, Tabs, Tab, TabPanel} from 'react-tabs';
import {Film} from '../../types/film';
import Details from './details-tab';
import Overview from './overview-tab';
import Reviews from './reviews-tab';

type FilmProps = {
  film: Film,
};

function FilmTabs(props: FilmProps): JSX.Element {
  const [tabIndex, setTabIndex] = useState<number>(0);
  const {film} = props;

  useEffect(() => setTabIndex(0), [props.film]);

  const handleSelect = (index: number) => {
    setTabIndex(index);
  };

  return (
    <Tabs
      selectedTabClassName={'film-nav__item--active'}
      selectedIndex={tabIndex}
      onSelect={handleSelect}
    >
      <nav className="film-card__nav">
        <TabList className="film-nav__list">
          <Tab className=" film-nav__item">
            <span className="film-nav__link">Overview</span>
          </Tab>
          <Tab className="film-nav__item">
            <span className="film-nav__link">Details</span>
          </Tab>
          <Tab className="film-nav__item">
            <span className="film-nav__link">Reviews</span>
          </Tab>
        </TabList>
      </nav>
      <TabPanel>
        <Overview film={film}/>
      </TabPanel>
      <TabPanel>
        <Details film={film}/>
      </TabPanel>
      <TabPanel>
        <Reviews filmId={film.id.toString()}/>
      </TabPanel>
    </Tabs>
  );
}

export default FilmTabs;
