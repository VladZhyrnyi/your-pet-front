const AddPetContent = ({ onChangeOption }) => {
  return (
    <>
      <label>
        Your pet
        <input
          onChange={onChangeOption}
          type="radio"
          name="category"
          value="your pet"
        />
      </label>
      <label>
        Sell
        <input
          onChange={onChangeOption}
          type="radio"
          name="category"
          value="sell"
        />
      </label>
      <label>
        Lost/Found
        <input
          onChange={onChangeOption}
          type="radio"
          name="category"
          value="lost/found"
        />
      </label>
      <label>
        In good hands
        <input
          onChange={onChangeOption}
          type="radio"
          name="category"
          value="in good hands"
        />
      </label>
    </>
  );
};

export default AddPetContent;
