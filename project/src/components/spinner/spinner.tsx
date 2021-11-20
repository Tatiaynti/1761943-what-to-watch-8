import {memo} from 'react';

function Spinner(): JSX.Element {
  return (
    <p>Loading...</p>
  );
}

export default memo(Spinner);
