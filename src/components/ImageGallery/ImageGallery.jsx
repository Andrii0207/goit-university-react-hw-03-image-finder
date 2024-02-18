import ImageGalleryItem from 'components/ImageGalleryItem/ImageGalleryItem';
import { Gallery } from './ImageGallery.styled';

// import { Component } from 'react';

export default function ImageGallery({ images }) {
  console.log('ImageGallery >>>', images);
  return (
    <Gallery classNamess="gallery">
      {images.map(({ id, webformatURL, largeImageURL, tags }) => (
        <li key={id}>
          <ImageGalleryItem
            tags={tags}
            webformatURL={webformatURL}
            largeImageURL={largeImageURL}
          />
        </li>
      ))}
    </Gallery>
  );
}

// export default class ImageGallery extends Component {
//   state = {
//     page: 1,
//     showLoadMore: false,
//     isLoading: false,
//   };

//   render() {
//     return (
//       <ul claclassNamess="gallery">
//         <ImageGalleryItem />
//       </ul>
//     );
//   }
// }
