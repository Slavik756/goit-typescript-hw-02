import UnsplashPhotoCard from "../ImageCard/ImageCard";
import css from "./ImageGallery.module.css";
import { UnsplashPhoto } from "../Fetch/FetchFoto"


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