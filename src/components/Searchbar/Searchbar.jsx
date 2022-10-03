import { Formik } from 'formik';
import PropTypes from 'prop-types';
import { ImSearch } from 'react-icons/im';
import {
  SearchBar,
  SearchForm,
  SearchFormBtn,
  SearchFormLabel,
  SearchFormInput,
} from './Searchbar.styled';

export const Searchbar = ({ onSubmit }) => (
  <SearchBar>
    <Formik
      initialValues={{ search: '' }}
      onSubmit={async values => await onSubmit(values.search)}
    >
      {({ isSubmitting }) => (
        <SearchForm>
            <SearchFormBtn type="submit" disabled={isSubmitting}>
              <ImSearch/>
            <SearchFormLabel>Search</SearchFormLabel>
          </SearchFormBtn>

          <SearchFormInput
            type="text"
            name="search"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
          />
        </SearchForm>
      )}
    </Formik>
  </SearchBar>
);

Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};