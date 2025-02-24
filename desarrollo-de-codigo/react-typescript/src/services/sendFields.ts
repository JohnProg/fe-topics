export const sendFields = (fields: []) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log(fields);
      resolve(true);
    }, 2000);
  });
};
