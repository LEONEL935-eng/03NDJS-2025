const users = [];
let idCounter = 1;

module.exports = {
  create: (user) => {
    const newUser = { id: idCounter++, ...user };
    users.push(newUser);
    return newUser;
  },
  
  findByEmail: (email) => users.find(user => user.email === email),
  
  findById: (id) => users.find(user => user.id === id),
  
  getAll: () => users.map(user => ({ id: user.id, email: user.email })),
  
  delete: (id) => {
    const index = users.findIndex(user => user.id === id);
    if (index !== -1) {
      return users.splice(index, 1)[0];
    }
    return null;
  }
};