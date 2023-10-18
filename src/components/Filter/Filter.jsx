import { useDispatch, useSelector } from 'react-redux';
import { Form, Section, Label, Input } from './Filter.styled';
import { filterContacts } from 'redux/filterSlice';
import { getContactsState } from 'redux/selectors';

const FilterContact = () => {
  const { filter } = useSelector(getContactsState);

  const dispatch = useDispatch();

  const changeFilter = e => {
    const { value } = e.currentTarget;
    dispatch(filterContacts(value));
  };

  return (
    <Section>
      <Form>
        <Label>Find contact by name</Label>
        <Input
          type="text"
          name="name"
          value={filter}
          onChange={changeFilter}
          required
        />
      </Form>
    </Section>
  );
};

export default FilterContact;
