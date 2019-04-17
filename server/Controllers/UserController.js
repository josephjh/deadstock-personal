module.exports = {
  getAllUsers: async(req, res) => {
      const db = req.app.get('db');
      const {user_id} = req.session.user
      let users = await db.user.get_all_users({user_id})
      res.status(200).send(users)
  },

  following: (req, res) => {

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
    // console.log(followed_user_id)
    let response = await db.user.check_following({user_id, followed_user_id})
    // console.log(response[0])
    res.status(200).send(response[0])

  }
}