const User = require('../models/User');

module.exports = {
  getMe: (req, res) => {
    try {
      const user = User.findById(req.user.id);
      if (!user) {
        return res.status(404).json({ message: 'Utilisateur non trouvé' });
      }
      res.json({ email: user.email });
    } catch (err) {
      console.error(err);
      res.status(500).json({ message: 'Erreur serveur' });
    }
  },

  getAllUsers: (req, res) => {
    try {
      const users = User.getAll();
      res.json(users);
    } catch (err) {
      console.error(err);
      res.status(500).json({ message: 'Erreur serveur' });
    }
  },

  deleteUser: (req, res) => {
    try {
      const userId = parseInt(req.params.id);
      const deletedUser = User.delete(userId);
      
      if (!deletedUser) {
        return res.status(404).json({ message: 'Utilisateur non trouvé' });
      }
      
      res.json({ message: 'Utilisateur supprimé' });
    } catch (err) {
      console.error(err);
      res.status(500).json({ message: 'Erreur serveur' });
    }
  }
};