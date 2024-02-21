import ImageGalleryItem from 'components/ImageGalleryItem/ImageGalleryItem';
import { Gallery } from './ImageGallery.styled';

export default function ImageGallery({ imageList, onOpenModal }) {
  return (
    <Gallery className="gallery">
      {imageList.map(({ id, webformatURL, largeImageURL, tags }) => (
        <ImageGalleryItem
          key={id}
          tags={tags}
          webformatURL={webformatURL}
          largeImageURL={largeImageURL}
          onOpenModal={onOpenModal}
        />
      ))}
    </Gallery>
  );
}
