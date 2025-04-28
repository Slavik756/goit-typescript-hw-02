import { UnsplashPhoto } from "../Fetch/FetchFoto";

type Props = {
    photo: UnsplashPhoto; 
};

export default function ImageCard({
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