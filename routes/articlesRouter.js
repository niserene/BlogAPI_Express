const articlesController = require('../controllers/articlesController');
const { authUser } = require('../middlewares/auth');
const router = require('express').Router();

// GET /api/articles/               Get all the list of articles
router.get('/', articlesController.getAllArticles);

// GET /api/articles/feed           Get a feed of articles for authenticated user
router.get('/feed', authUser, articlesController.getFeedArticles);

// GET /api/articles/:slug          Get a single article
router.get('/:slug', articlesController.getArticleBySlug);

// POST api/articles                Create a new article
router.post('/', authUser, articlesController.createArticle);

//PATCH api/articles/:slug
router.patch('/:slug', authUser, articlesController.updateArticle);

// DELETE api/articles/:slug        Delete an article
router.delete('/:slug', authUser, articlesController.deleteArticle)


module.exports = router