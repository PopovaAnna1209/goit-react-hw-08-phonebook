import { Hearts } from 'react-loader-spinner';
import s from './Loader.module.css';

export const Loader = () => {
  return (
    <div className={s.loading}>
      <Hearts 
          height="100"
          width="100"
          color="rgba(178, 146, 171, 0.742)"
          ariaLabel="hearts-loading"
          wrapperStyle={{}}
          wrapperClass=""
          visible={true}
      />
    </div>
  );
};
export default Loader;
