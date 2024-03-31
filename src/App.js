
import './App.scss';

import BoxChat from './components/box-chat/BoxChat';
import ButtonGroup from './components/buttons/button-group/ButtonGroup';
import ButtonIcon from './components/buttons/button-icon/ButtonIcon';
import DefaultLayout from './layouts/default-layout/DefaultLayout';

function App() {
  const buttons = [
    {
      item: <BoxChat/>
    },
    {
      item:<BoxChat/>
    },
    {
      item: <BoxChat/>
    }
  ]
  return (
    <div>
      <DefaultLayout/>
     
    </div>
  );
}

export default App;
