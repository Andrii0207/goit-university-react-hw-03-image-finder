import { Component } from 'react';
import { ToastContainer } from 'react-toastify';
import * as api from './api/pixabay';
import Searchbar from './Searchbar/Searchbar';
import ImageGallery from './ImageGallery/ImageGallery';
import Modal from './Modal/Modal';
import LoadMoreBTN from './Button/Button';

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
      return;
    }
    const { query, page } = this.state;
    api
      .fetchImages(query, page)
      .then(({ hits }) => this.setState({ images: hits }));
  }

  componentDidUpdate(_, prevState) {
    const { query, page } = this.state;

    if (prevState.query !== this.state.query || prevState.page !== page) {
      api.fetchImages(query, page).then(({ hits, totalHits }) =>
        this.setState(prevState => ({
          images: [...prevState.images, ...hits],
          showLoadMore: page < Math.ceil(totalHits / 12),
        }))
      );
    }
  }

  handleLoadMore = () => {
    this.setState(prevState => ({ page: prevState.page + 1 }));
    console.log(this.state.page);
  };

  handleFormSubmit = query => {
    this.setState({ query, page: 1 });
  };

  render() {
    const { showLoadMore } = this.state;
    return (
      <>
        <Searchbar onSubmit={this.handleFormSubmit} />
        <ImageGallery images={this.state.images} />
        {showLoadMore && <LoadMoreBTN onClick={this.handleLoadMore} />}

        <Modal />
        <ToastContainer position="top-right" autoClose={5000} />
      </>
    );
  }
}
