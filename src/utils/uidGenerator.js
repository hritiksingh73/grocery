// Add Dummy data
export const uidGenerator = () => {
  let S4 = function () {
    return (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);
  };
  return (
    S4() +
    S4() +
    '-' +
    S4() +
    '-' +
    S4() +
    '-' +
    S4() +
    '-' +
    S4() +
    S4() +
    S4()
  );
};
export const orderpaymentId = () => {
  let S4 = function () {
    return (((1 + Math.random()) * 0x10) | 0).toString(16).substring(1);
  };
  return S4() + S4() + '-' + S4()+'-' + S4()+ S4()+S4() +
  S4();
};
