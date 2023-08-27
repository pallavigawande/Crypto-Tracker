export const convertDate = (number) => {
  const myDate = new Date(number);
  return myDate.getDate() + "/" + (myDate.getMonth() + 1);
};
