import { A11yHidden } from './A11yHidden';
import { useAuth } from '../contents/auth';

export const Banner = ({ url, width, height, children, ...restProps }) => {
  const { currentUser, signIn } = useAuth();

  console.log(currentUser);

  return (
    <figure {...restProps}>
      <img src={url} alt="" width={width} height={height} />
      <A11yHidden as="figcaption">{children}</A11yHidden>
      <button
        type="button"
        onClick={() =>
          signIn({
            name: 'yamoo9',
            age: 17,
          })
        }
      >
        로그인
      </button>
    </figure>
  );
};
