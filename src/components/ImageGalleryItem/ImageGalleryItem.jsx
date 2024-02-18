import { GalleryItem, StyledImg } from './ImageGalleryItem.styled';

export default function ImageGalleryItem({
  tags,
  webformatURL,
  largeImageURL,
}) {
  return (
    <GalleryItem className="gallery-item">
      <StyledImg src={webformatURL} alt={tags} />
    </GalleryItem>
  );
}
