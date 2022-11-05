//commented out testing resources for new project
//const { setTokenCookie, requireAuth, restoreUser } = require('../../utils/auth.js');
//   router.get('/set-token-cookie', async (_req, res) => {
//     const user = await User.findOne({
//         where: {
//           username: 'Demo-lition'
//         }
//       });
//     await setTokenCookie(res, user);
//     return res.json({ user });
//   });



// router.get(
//   '/restore-user',
//   (req, res) => {
//     return res.json(req.user);
//   }
// );

//   // GET /api/require-auth
//   router.get(
//     '/require-auth',
//     requireAuth,
//     (req, res) => {
//       return res.json(req.user);
//     }
//   );

const router = require('express').Router();
const sessionRouter = require("./session.js")
const usersRouter = require("./users.js")
const { restoreUser } = require("../../utils/auth.js")

// Connect restoreUser middleware to the API router
  // If current user session is valid, set req.user to the user in the database
  // If current user session is not valid, set req.user to null
router.use(restoreUser);

router.use("/session", sessionRouter);
router.use("/users", usersRouter);

router.post('/test', (req, res) => {
  res.json({ requestBody: req.body });
});




module.exports = router;