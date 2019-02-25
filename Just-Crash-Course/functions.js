const functions = {
  add: (num1, num2) => num1 + num2,
  isNull: () => null,
  checkValue: x => x,
  createUser: () => {
    user = { firstName: 'Hannha' };
    user['lastName'] = 'Johns';
    return user;
  }
}
module.exports = functions;
