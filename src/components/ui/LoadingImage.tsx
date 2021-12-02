import styles from "./LoadingImage.module.scss";
import LoadingSpinner from "./LoadingSpinner";

const LoadingImage: React.FC<{}> = (props) => {
  return (
    <div className={styles.placeholderContainer}>
      <LoadingSpinner />
    </div>
  );
};

export default LoadingImage;
