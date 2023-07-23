import './sellPetForm.css';

const MoreInfo = ({ onChangeDetails, onChangeOption }) => {
  return (
    <>
      <label>
        The sex
        <div className="wrapper">
          <div className="option">
            <input
              className="input"
              type="radio"
              name="sex"
              value="Female"
              onChange={onChangeOption}
            />
            <div className="btn">
              <span className="span">Female</span>
            </div>
          </div>
          <div className="option">
            <input
              className="input"
              type="radio"
              name="sex"
              value="Male"
              onChange={onChangeOption}
            />
            <div className="btn">
              <span className="span">Male</span>
            </div>
          </div>
        </div>
      </label>
      <label>
        Load the pet’s image:
        <input type="file" name="file" placeholder="add pet photo" />
      </label>
      <label>
        Location
        <input
          onChange={onChangeDetails}
          type="text"
          name="location"
          placeholder="Pet location"
        />
      </label>
      <label>
        Price
        <input
          onChange={onChangeDetails}
          type="text"
          name="price"
          placeholder="Pet price"
        />
      </label>
      <label>
        Comments
        <textarea
          onChange={onChangeDetails}
          name="comments"
          placeholder="Something about pet"
          maxLength="100"
        ></textarea>
      </label>
    </>
  );
};

export default MoreInfo;
