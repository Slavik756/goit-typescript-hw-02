import { useEffect, useState } from "react";
import ErrorMessage from "../ErrorMessage/ErrorMessage";
import ImageModal from "../ImageModal/ImageModal";
import ImageGallery from "../ImageGallery/ImageGallery";
import LoadMoreBtn from "../LoadMoreBtn/LoadMoreBtn";
import Loader from "../Loader/Loader";
import Searchbar from "../SearchBar/SearchBar";
import { fetchFotoWithTopic, UnsplashPhoto } from "../Fetch/FetchFoto";
import React from "react";
import { toast } from "react-hot-toast";

const App: React.FC = () => {
  const [fotos, setFoto] = useState<UnsplashPhoto[]>([]);
  const [query, setQuery] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [page, setPage] = useState(1);
  const [modalIsOpen, setIsOpen] = useState(false);
  const [selectFoto, setSelectFoto] = useState<UnsplashPhoto | null>(null);
  function openModal(photo: any) {
    setSelectFoto(photo);
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
    setSelectFoto(null);
  }
  useEffect(() => {
    if (!query) return;

    async function fetchFoto() {
      try {
        setError(false);
        setLoading(true);

        const data = await fetchFotoWithTopic(query, page);
        setFoto((prev) => [...prev, ...data.results]);
      } catch {
        setError(true);
        toast.error("Error");
      } finally {
        setLoading(false);
      }
    }
    fetchFoto();
  }, [query, page]);

  const handleSearch = (topic: string) => {
    setPage(1);
    setQuery(topic);
    setFoto([]);
  };

  return (
    <>
      <Searchbar onSearch={handleSearch} />
      {error ? (
        <ErrorMessage />
      ) : (
        <ImageGallery images={fotos} onClick={openModal} />
      )}
      {loading && <Loader loading={loading} />}

      {fotos.length !== 0 && (
        <LoadMoreBtn onClick={() => setPage(() => page + 1)} />
      )}

      <ImageModal
        isOpen={modalIsOpen}
        onClose={closeModal}
        photo={selectFoto}
      />
    </>
  );
};
export default App;
