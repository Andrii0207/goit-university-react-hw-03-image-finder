import ImageGalleryItem from 'components/ImageGalleryItem/ImageGalleryItem';
// import { Component } from 'react';

export default function ImageGallery() {
  return (
    <ul claclassNamess="gallery">
      <ImageGalleryItem />
    </ul>
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
