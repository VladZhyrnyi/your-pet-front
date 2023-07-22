const MoreInfoPet = ({ onChangeDetails }) => {
  return (
    <>
      <label>
        Load the pet’s image:
        <input onChange={onChangeDetails} type="file" name="file" />
      </label>
      <label>
        <textarea
          onChange={onChangeDetails}
          placeholder="Stay your comment"
          name="comments"
          rows="5"
        ></textarea>
      </label>
    </>
  );
};

export default MoreInfoPet;
