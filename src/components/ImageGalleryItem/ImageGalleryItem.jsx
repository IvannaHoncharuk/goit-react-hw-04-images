
import PropTypes from 'prop-types';
import { GalleryItem, PicGallery } from './ImageGalleryItem.styled';

export const ImageGalleryItem = ({
  id,
  smallImage,
  searchValue,
  openModal,
}) => (
  <GalleryItem>
    <PicGallery
      src={smallImage}
      alt={searchValue}
      data-img-id={id}
      onClick={() => openModal(id)}
    />
  </GalleryItem>
);

ImageGalleryItem.propTypes = {
  id: PropTypes.number.isRequired,
  smallImage: PropTypes.string.isRequired,
  bigImage: PropTypes.string.isRequired,
  searchValue: PropTypes.string.isRequired,
  openModal: PropTypes.func.isRequired,
};