import React, { useContext } from 'react';
import { any, oneOf, oneOfType, shape, string, number, func } from 'prop-types';

// 컨텍스트 생성
const AuthContext = React.createContext();

// 컨텍스트 래퍼 컴포넌트
export const AuthProvider = ({ value, children }) => {
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

AuthProvider.propTypes = {
  value: shape({
    currentUser: oneOfType([
      oneOf([null]),
      shape({
        name: string,
        age: number,
        email: string,
      }),
    ]),
    signIn: func,
    signOut: func,
  }),
  children: any,
};

// 커스텀 훅
export const useAuth = () => {
  const value = useContext(AuthContext);
  if (!value) {
    throw new Error(
      'useAuth 훅은 AuthProvider 컴포넌트 내부에서만 사용 가능합니다.'
    );
  }
  return value;
};
