import raport from './fakeData.json';

export const getRaport = async (formData) => {
  return new Promise((resolve) => setTimeout(() => {
    const res = raport;
    resolve(res);
  }, 2000));
}