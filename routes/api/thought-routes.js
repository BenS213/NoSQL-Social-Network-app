const router = require('express').Router();
const {
  getAllThoughts,
  getThoughtById,
  createThought,
  updateThought,
  deleteThought,
  addReaction,
  removeReaction
} = require('../../controllers/thought-controller');

// /api/thoughts
router.route('/')
  .get(getAllThoughts)
  .post(createThought);

// /api/thought/<userId>
router.route('/:id')
  .post(createThought)
  .get(getThoughtById)
  .put(updateThought)
  .delete(deleteThought);

// /api/thought/<userId>/<thoughtId>
router
  .route('/:thoughtId/reactions')
  .post(addReaction);

// /api/thoughts/<thoughtId>/<replyId>
router.route('/:thoughtId/reactions/:reactionId')
  .delete(removeReaction);

module.exports = router;
