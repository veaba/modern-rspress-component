import { Button, Icon } from '../dist/es';
import ButtonDev  from '../src/components/button';
import IconDev from '../src/components/Icon';

function App() {
  return (
    <>
      <fieldset>
        <legend>dist: Icon component</legend>
        <Icon />
      </fieldset>

      <fieldset>
        <legend>dist Button component</legend>
        <Button />
      </fieldset>

      <fieldset>
        <legend>dev: Icon component</legend>
        <Icon />
      </fieldset>

      <fieldset>
        <legend>dev Button component</legend>
        <ButtonDev />
      </fieldset>
    </>
  );
}

export default App;
