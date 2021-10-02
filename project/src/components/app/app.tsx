import MainScreen from '../main-screen/main-screen';

type AppScreenProps = {
  cardsCount: number;
  promoTitle: string;
  promoGenre: string;
  promoReleaseYear: number;
}

function App({cardsCount, promoTitle, promoGenre, promoReleaseYear}: AppScreenProps): JSX.Element {
  return (
    <MainScreen
      cardsCount={cardsCount}
      promoTitle={promoTitle}
      promoGenre={promoGenre}
      promoReleaseYear={promoReleaseYear}
    />);
}

export default App;
