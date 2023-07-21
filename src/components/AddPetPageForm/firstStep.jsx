import css from './AddPetPage.module.css';

const FirstStep = ({ onChangeOption }) => {
  return (
    <>
      <ul className={css['option-list']}>
        <li className={css.option}>
          <label className={css.label}>
            <input
              onChange={onChangeOption}
              className={css.input}
              type="radio"
              name="radio"
              value="your pet"
            />
            <span className={css.span}>Your pet</span>
          </label>
        </li>
        <li className={css.option}>
          <label className={css.label}>
            <input
              onChange={onChangeOption}
              className={css.input}
              type="radio"
              name="radio"
              value="sell"
            />
            <span className={css.span}>Sell</span>
          </label>
        </li>
        <li className={css.option}>
          <label className={css.label}>
            <input
              onChange={onChangeOption}
              className={css.input}
              type="radio"
              name="radio"
              value="lost/found"
            />
            <span className={css.span}>Lost/Found</span>
          </label>
        </li>
        <li className={css.option}>
          <label className={css.label}>
            <input
              onChange={onChangeOption}
              className={css.input}
              type="radio"
              name="radio"
              value="in good hands"
            />
            <span className={css.span}>In good hands</span>
          </label>
        </li>
      </ul>
    </>
  );
};

export default FirstStep;
