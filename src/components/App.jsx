import ContactForm from './Form';
import List from './List/List';
import FilterContact from './Filter/Filter';
import { useSelector } from 'react-redux';
import { error, isLoading } from 'redux/selectors';

export const App = () => {
  const errors = useSelector(error);
  const isLoadings = useSelector(isLoading);

  return (
    <div>
      <h1>PhoneBook </h1>
      <ContactForm />
      <h2>Contacts</h2>
      <FilterContact />
      {isLoadings && <h2>Loading...</h2>}
      {errors && <h2>{errors}</h2>}
      <List />
    </div>
  );
};
