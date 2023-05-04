
const setCookie = (cookieName: string, dueDate: number): void => {
  const now = new Date();
  now.setDate(now.getDate() + dueDate);

  document.cookie = `${cookieName}=${true}; Expires=${now.toUTCString()}`;
};

const hasCookie = (cookieName: string): boolean => {
  const cookies = document.cookie.split(';').reduce((acc: {[key: string]: string}, cookie) => {
    const [name, value] = cookie.split('=').map(cookieString => cookieString.trim());
    return { ...acc, [name]: value };
  }, {});

  return cookies[cookieName] === 'true';
}; 

export {
  hasCookie,
  setCookie
};
