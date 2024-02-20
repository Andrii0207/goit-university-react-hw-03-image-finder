import { Component } from 'react';
import { ToastContainer } from 'react-toastify';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import * as api from './service/api/pixabay';
import Searchbar from './Searchbar/Searchbar';
import ImageGallery from './ImageGallery/ImageGallery';
import Modal from './Modal/Modal';
import LoadMoreBTN from './Button/Button';
import Spinner from './Loader/Loader';
// import smoothScroll from './service/smoothScroll';

export class App extends Component {
  state = {
    images: [],
    query: '',
    page: 1,
    showLoadMore: false,
    isLoading: false,
    error: null,
  };

  componentDidUpdate(_, prevState) {
    const { query, page } = this.state;

    if (prevState.query !== this.state.query || prevState.page !== page) {
      this.setState({ isLoading: true });
      api
        .fetchImages(query, page)
        .then(({ hits, totalHits }) => {
          if (hits.length === 0) {
            toast.error(
              'Opps, we have not found any pictures. Try any more...'
            );
            return;
          }
          if (this.state.page === 1) {
            toast.success(`Horrey! We found ${totalHits} pictures`);
          }

          this.setState(prevState => ({
            images: [...prevState.images, ...hits],
            showLoadMore: page < Math.ceil(totalHits / 12),
          }));
        })
        .catch(error => this.setState({ error }))
        .finally(() => this.setState({ isLoading: false }));
    }
  }

  handleLoadMore = () => {
    this.setState(prevState => ({ page: prevState.page + 1 }));
    // smoothScroll();
  };

  handleFormSubmit = query => {
    if (query === '') {
      this.setState({ images: [], showLoadMore: false });
      return;
    }
    this.setState({
      query,
      images: [],
      page: 1,
      showLoadMore: false,
    });
  };

  render() {
    const { showLoadMore, isLoading } = this.state;
    return (
      <>
        <Searchbar onSubmit={this.handleFormSubmit} />
        <ImageGallery images={this.state.images} />
        {showLoadMore && <LoadMoreBTN onClick={this.handleLoadMore} />}
        {isLoading && <Spinner />}
        <Modal />
        <ToastContainer position="top-right" autoClose={2000} />
      </>
    );
  }
}
