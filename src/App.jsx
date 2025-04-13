import { useState } from 'react';
import Button from './components/Button/Button';
import { BeakerIcon } from '@heroicons/react/24/solid';
import Switch from './components/switch/Switch';
import Checkbox from './components/Checkbox/Checkbox';
import Bookmark from './components/Bookmark/Bookmark';

const App = () => {
  const [isChecked, setIsChecked] = useState(false);
  const [isCheckbox, setIsCheckbox] = useState(false);
  const [isBookmark, setIsBookmark] = useState(false);
  const handleChange = (e) => {
    setIsChecked(e.target.checked);
  };
  const handleChangeCheckbox = (e) => {
    setIsCheckbox(e.target.checked);
  };
  const handleChangeBookmark = () => {
    setIsBookmark((prev) => !prev);
  };
  return (
    <div className="flex h-screen w-full items-center justify-center gap-4">
      <Button
        label="Button"
        variant="primary"
        size="md"
        icon={<BeakerIcon />}
        iconPosition="right"
      />
      <Switch checked={isChecked} onChange={handleChange} />
      <Checkbox checked={isCheckbox} onChange={handleChangeCheckbox} />
      <Bookmark active={isBookmark} onToggle={handleChangeBookmark} />
    </div>
  );
};

export default App;
