import ImageCard from "../ImageCard/ImageCard";
import css from "./ImageGallery.module.css";

export type Image = {
  id: string;
  alt_description: string;
  urls: {
    small: string;
  };
};

type Props = {
    images: Image[];
  onClick: (image: Image) => void;
};

export default function ImageGallery({ images, onClick }: Props) {
  return (
    <>
      <ul className={css.list}>
        {images.map((image) => (
          <li key={image.id} onClick={() => onClick(image)}>
            <ImageCard image={image} />
          </li>
        ))}
      </ul>
    </>
  );
}