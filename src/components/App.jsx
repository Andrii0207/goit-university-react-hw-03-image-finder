import { Component } from 'react';
import { ToastContainer } from 'react-toastify';
import Searchbar from './Searchbar/Searchbar';
// import ImageGallery from './ImageGallery/ImageGallery';
import * as api from './api/pixabay';
import ImageGallery from './ImageGallery/ImageGallery';

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
    api
      .fetchImages(query, page)
      .then(responce => this.setState({ images: responce }));
  }

  async componentDidUpdate(prevProps, _) {
    const { query, page } = this.state;

    if (prevProps.query !== this.state.query) {
      // console.log('componentDidUpdate prevProps.query:', prevProps.query);
      // console.log('componentDidUpdate this.state.query:', this.state.query);
      await api.fetchImages(query, page);
    }
    if (prevProps.images !== this.state.images) {
      // console.log('componentDidUpdate prevProps:', prevProps.images);
      // console.log('componentDidUpdate this.state:', this.state.images);
    }
  }

  handleFormSubmit = query => {
    this.setState({ query });
    // console.log('submit form:', query);
    // console.log('submit images:', this.state.images);
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
        <ImageGallery images={this.state.images} />
        <ToastContainer position="top-right" autoClose={5000} />
      </div>
    );
  }
}
