const Router = require('express');
const router = new Router();
const libraryController = require('../controller/LibraryController');

router.post('/', libraryController.newPost);
router.get('/', libraryController.allPost);
router.get('/:id', libraryController.onePost);
router.put('/', libraryController.updatePost);
router.delete('/:id', libraryController.deletePost);


module.exports = router;