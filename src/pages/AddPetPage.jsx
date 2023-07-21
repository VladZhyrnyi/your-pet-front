import { useState } from 'react';
import css from '../components/AddPetPageForm/AddPetPage.module.css';
import FirstStep from '../components/AddPetPageForm/firstStep';
import YourPetSecStep from '../components/AddPetPageForm/yourPetSecStep';

const AddPetPage = props => {
  const [value, setValue] = useState('');
  const [option, setOption] = useState('');

  const onChangeOption = ({ target: { value } }) => {
    setValue(value);
  };

  const onCancle = () => {
    setOption('');
    setValue('');
  };

  return (
    <div className={css['addpet-container']}>
      <h1 className={css.title}>Add pet</h1>
      <ul className={css.list}>
        <li className={css['item-current']}>
          Choose option
          <div className={css['current-line']}></div>
        </li>
        <li className={option !== '' ? css['item-current'] : css.item}>
          Personal details
          <div className={css['current-line']}></div>
        </li>
        <li className={css.item}>
          More info
          <div className={css['current-line']}></div>
        </li>
      </ul>
      {option === '' && <FirstStep onChangeOption={onChangeOption} />}
      {option === 'your pet' && <YourPetSecStep />}
      <div className={css['btn-container']}>
        <button
          className={css['btn-next']}
          onClick={() => {
            setOption(value);
          }}
        >
          Next
        </button>
        <button className={css['btn-cancel']} onClick={onCancle}>
          Cancel
        </button>
      </div>
    </div>
  );
};

export default AddPetPage;
