import css from './YourPetSecStep.module.css';

const YourPetSecStep = () => {
  return (
    <div className={css.container}>
      <ul className={css.list}>
        <li className={css.item}>
          <label className={css.label}>
            Pet’s name
            <input
              className={css.input}
              type="text"
              name="name"
              placeholder="Type name pet"
            />
          </label>
        </li>
        <li className={css.item}>
          <label className={css.label}>
            Date of birth
            <input
              className={css.input}
              type="text"
              name="birth"
              placeholder="Type date of birth"
            />
          </label>
        </li>
        <li className={css.item}>
          <label className={css.label}>
            Type
            <input
              className={css.input}
              type="text"
              name="type"
              placeholder="Type of pet"
            />
          </label>
        </li>
      </ul>
    </div>
  );
};

export default YourPetSecStep;
