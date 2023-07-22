const MoreInfoLost = ({ onChangeDetails }) => {
  return (
    <>
      <label>
        The sex
        <input
          onChange={onChangeDetails}
          type="radio"
          name="sex"
          value="female"
        />
        <input
          onChange={onChangeDetails}
          type="radio"
          name="sex"
          value="male"
        />
      </label>
      <label>
        Add photo
        <input onChange={onChangeDetails} type="file" name="file" />
      </label>
      <label>
        location
        <input onChange={onChangeDetails} type="text" name="location" />
      </label>
      <label>
        Comments
        <textarea
          onChange={onChangeDetails}
          name="comments"
          rows="5"
        ></textarea>
      </label>
    </>
  );
};

export default MoreInfoLost;
