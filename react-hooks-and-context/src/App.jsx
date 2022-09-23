import styles from './App.module.css';
import { useState, useEffect, useRef, useCallback, useMemo } from 'react';
import {
  // A11yHidden,
  // SR_Only,
  // Banner,
  Spinner,
  ErrorDisplay,
  FormControl,
  SkipToContent,
  Content,
} from './components';

import { useFetch } from './hooks/useFetch';
import { AuthProvider } from './contents/auth';

function App() {
  const [currentUser, setCurrentUser] = useState(null);

  const signIn = useCallback((currentUserInfo) => {
    // 로그인 로직
    setCurrentUser(currentUserInfo);
  }, []);

  const signOut = useCallback(() => {
    // 로그인 로직
  }, []);

  const authValue = useMemo(
    () => ({
      currentUser,
      signIn,
      signOut,
    }),
    [currentUser]
  );

  const containerRef = useRef(null);

  const [visible, setVisible] = useState(true);

  const { loading, error /* data */ } = useFetch('/api/todos');

  useEffect(() => {
    if (containerRef.current) {
      // jQuery 라이브러리
      // $(containerRef.current).plugin();
    }
  });

  if (loading) {
    return (
      <Spinner
        css={`
          position: fixed;
          top: 50%;
          left: 50%;
          translate: -50% -50%;
          width: 300px;
          height: 300px;
        `}
      />
    );
  }

  if (error) {
    return <ErrorDisplay role="alert">{error.message}</ErrorDisplay>;
  }

  return (
    <AuthProvider value={authValue}>
      <div ref={containerRef} className={styles.container}>
        <SkipToContent />
        <FormControl
          id="dkwD2ic"
          label="콘텐츠 표시"
          type="checkbox"
          inputProps={{
            checked: visible,
            onChange(e) {
              setVisible(e.target.checked);
            },
          }}
        />
        {visible && <Content />}
      </div>
    </AuthProvider>
  );
}

export default App;
