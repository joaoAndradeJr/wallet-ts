export const request = (url: string) => (
  fetch(url)
    .then((response) => response.json())
    .then((data) => data)
    .catch((error) => console.error(error))
);
