import { Image } from "../ImageGallery/ImageGallery";

type Props = {
    image : Image;
};

export default function imageCard({
    image: {
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