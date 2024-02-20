import { Component } from 'react';
import { toast } from 'react-toastify';
import { IoSearchOutline } from 'react-icons/io5';
import 'react-toastify/dist/ReactToastify.css';
import {
  ButtonLabel,
  HeaderStyled,
  SearchForm,
  SearchFormBTN,
  SearchInput,
} from './Searchbar.styled';

export default class Searchbar extends Component {
  state = {
    query: '',
  };

  handleChange = e => {
    this.setState({ query: e.currentTarget.value });
  };

  handleSubmit = e => {
    e.preventDefault();

    if (this.state.query.trim() === '') {
      toast.warn('Please, enter your query for search', {
        position: 'top-right',
        autoClose: 2000,
      });
    }
    this.props.onSubmit(this.state.query);
    this.setState({ query: '' });
  };

  render() {
    return (
      <HeaderStyled className="searchbar" onSubmit={this.handleSubmit}>
        <SearchForm className="form">
          <SearchFormBTN type="submit" className="button">
            <IoSearchOutline
              style={{
                width: '24px',
                height: '24px',
              }}
            />
            <ButtonLabel className="button-label">Search</ButtonLabel>
          </SearchFormBTN>

          <SearchInput
            className="input"
            type="text"
            autoComplete="off"
            autoFocus
            value={this.state.query}
            placeholder="Search images and photos"
            onChange={this.handleChange}
          />
        </SearchForm>
      </HeaderStyled>
    );
  }
}
