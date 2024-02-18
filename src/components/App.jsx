import { Component } from 'react';
import Searchbar from './Searchbar/Searchbar';
// import ImageGallery from './ImageGallery/ImageGallery';
import * as ImageService from './api/pixabay';

export class App extends Component {
  state = {
    images: [],
    query: 'random',
    page: 1,
    showLoadMore: false,
    isLoading: false,
  };

  componentDidMount() {
    if (this.state.query === '') {
      console.log('componentDidMount query is empty');
      return;
    }

    const { query, page } = this.state;
    console.log('componentDidMount query is NOT empty');
    ImageService.searchGallery(query, page);
  }

  componentDidUpdate(prevProps, _) {
    const { query, page } = this.state;

    if (prevProps.query !== this.state.query) {
      ImageService.searchGallery(query, page);
    }
  }

  handleFormSubmit = query => {
    this.setState({ query });
    console.log('submit form:', query);
  };

  render() {
    return (
      <div
      // style={{
      //   height: '100vh',
      //   display: 'flex',
      //   justifyContent: 'center',
      //   alignItems: 'center',
      //   fontSize: 40,
      //   color: '#010101',
      // }}
      >
        <Searchbar onSubmit={this.handleFormSubmit} />
        {/* <ImageGallery /> */}
      </div>
    );
  }
}
