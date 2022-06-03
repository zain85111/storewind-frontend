import { useState } from 'react';

export default function useToken() {
  const getToken = () => {
    if (typeof window !== 'undefined') {

    const tokenString = localStorage.getItem('token');
    
    const userToken = JSON.parse(tokenString);
    return userToken?.token
    }
  };

  const [token, setToken] = useState(getToken());

  const saveToken = userToken => {
    if (typeof window !== 'undefined') {

    localStorage.setItem('token', JSON.stringify(userToken));
    setToken(userToken.token);
    console.log("asdjalksdjalksdjlkasjd");
    }
  };

  return {
    setToken: saveToken,
    token
  }
}