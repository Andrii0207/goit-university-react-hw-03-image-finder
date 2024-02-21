import { GalleryItem, StyledImg } from './ImageGalleryItem.styled';

export default function ImageGalleryItem({
  tags,
  webformatURL,
  largeImageURL,
  onOpenModal,
}) {
  return (
    <GalleryItem className="gallery-item">
      <StyledImg src={webformatURL} alt={tags} onClick={onOpenModal} />
    </GalleryItem>
  );
}
