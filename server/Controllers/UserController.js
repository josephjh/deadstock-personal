module.exports = {
  getAllUsers: async(req, res) => {
      const db = req.app.get('db');
      const {user_id} = req.session.user
      let users = await db.user.get_all_users({user_id})
      res.status(200).send(users)
  },

  following: async (req, res) => {  
    const db =  req.app.get('db');
    const {user_id} = req.session.user;
    let followers = await db.home.get_feed({user_id});
    res.status(200).send(followers)
  },

  addFollower: async (req, res) => {
    const db = req.app.get('db');
    const {user_id} = req.session.user
    const {followed_user_id} = req.params
    await db.user.follow_user({user_id, followed_user_id})
    res.sendStatus(200)
  },

  unfollow: async (req, res) => {
    const db = req.app.get('db')
    const {user_id} = req.session.user
    const {followed_user_id} = req.params
    await db.user.unfollow_user({user_id, followed_user_id})
    res.sendStatus(200)
  },

  checkFollowing: async (req, res) => {
    const db = req.app.get('db');
    const {user_id} = req.session.user
    const {followed_user_id} = req.params
    let response = await db.user.check_following({user_id, followed_user_id})
    res.status(200).send(response[0])

  }
}