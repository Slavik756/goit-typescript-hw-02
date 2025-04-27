import css from "./LoadMoreBtn.module.css";

type Props = {
  onClick: () => void;
};

export default function LoadMoreBtn({ onClick }: Props) {
  return (
    <>
      <button className={css.btn} onClick={onClick}>
        Load more
      </button>
    </>
  );
}
