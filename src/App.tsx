import './App.css';
import { APP_TITLE } from './constants/app';

import IconCupHot from './assets/icons/cup-hot.svg?sprite=inline';
import IconDiagram from './assets/icons/diagram.svg?sprite=owo';
import IconGrid1x2 from './assets/icons/grid-1x2.svg';
import IconGrid2x2 from './assets/icons/heart.svg';

function App() {
  return (
    <>
      <div>
        <IconCupHot width={32} height={32} />
        <IconDiagram width={32} height={32} />
        {/* @ts-ignore */}
        <IconGrid1x2 width={32} height={32} />
        {/* @ts-ignore */}
        <IconGrid2x2 width={32} height={32} />
      </div>
      <h1>{APP_TITLE}</h1>
    </>
  );
}

export default App;
