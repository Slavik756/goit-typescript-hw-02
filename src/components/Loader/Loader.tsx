import { BarLoader } from "react-spinners";
import css from "./Loader.module.css";

type Props = { loading: boolean };

export default function Loader({ loading }: Props) {
  return (
    <>
      <BarLoader
        className={css.loader}
        loading={loading}
        height="7px"
        width="300px"
        speedMultiplier={0.5}
      />
    </>
  );
}