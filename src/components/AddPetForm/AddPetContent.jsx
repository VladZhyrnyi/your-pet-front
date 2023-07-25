import { FormOption, RadioBtn, RadioLabel } from './AddPerForm.styled';

const AddPetContent = ({ onChangeOption, data }) => {
  return (
    <FormOption>
      <RadioBtn
        id="1"
        onChange={onChangeOption}
        type="radio"
        name="category"
        value="your pet"
        checked={data.category === 'your pet'}
      />
      <RadioLabel htmlFor="1">Your pet</RadioLabel>

      <RadioBtn
        id="2"
        onChange={onChangeOption}
        type="radio"
        name="category"
        value="sell"
        checked={data.category === 'sell'}
      />
      <RadioLabel htmlFor="2">Sell</RadioLabel>

      <RadioBtn
        id="3"
        onChange={onChangeOption}
        type="radio"
        name="category"
        value="lost/found"
        checked={data.category === 'lost/found'}
      />
      <RadioLabel htmlFor="3">Lost/Found</RadioLabel>

      <RadioBtn
        id="4"
        onChange={onChangeOption}
        type="radio"
        name="category"
        value="in good hands"
        checked={data.category === 'in good hands'}
      />
      <RadioLabel htmlFor="4">In good hands</RadioLabel>
    </FormOption>
  );
};

export default AddPetContent;