import UnsplashPhotoCard from "../ImageCard/ImageCard";
import css from "./ImageGallery.module.css";

export type UnsplashPhoto = {
  id: string;
  alt_description: string;
  urls: {
    small: string;
  };
};

type Props = {
  photos: UnsplashPhoto[];
  onClick: (photo: UnsplashPhoto) => void;
};

export default function ImageGallery({ photos, onClick }: Props) {
  return (
    <>
      <ul className={css.list}>
        {photos.map((photo) => (
          <li key={photo.id} onClick={() => onClick(photo)}>
            <UnsplashPhotoCard photo={photo} />
          </li>
        ))}
      </ul>
    </>
  );
}