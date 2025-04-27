import { UnsplashPhoto } from "../ImageGallery/ImageGallery";

type Props = {
    photo: UnsplashPhoto; 
};

export default function imageCard({
    photo: {
        alt_description,
        urls: {small}
    },
}: Props) {
    return (
        <>
        <img src={small} alt={alt_description}/>
        </>
    );
}