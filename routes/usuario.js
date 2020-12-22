/* import routerx from 'express-promise-router';
import usuarioController from '../controllers/UsuarioController';
import auth from '../middlewares/auth'; */
const routerx = require('express-promise-router');
const usuarioController = require('../controllers/UsuarioController');
const auth = require('../middlewares/auth');

const router = routerx();

// router.post('/add', auth.verifyAdministrador, usuarioController.add);
// router.get('/query', auth.verifyAdministrador, usuarioController.query);
// router.get('/queryUserAuth', auth.verifyAdministrador, usuarioController.queryUserAuth);
// router.get('/list', auth.verifyAdministrador, usuarioController.list);
// router.put('/update', auth.verifyAdministrador, usuarioController.update);
// router.delete('/remove', auth.verifyAdministrador, usuarioController.remove);
// router.put('/activate', auth.verifyAdministrador, usuarioController.activate);
// router.put('/deactivate', auth.verifyAdministrador, usuarioController.deactivate);
// router.post('/login', usuarioController.login);

router.post('/add',usuarioController.add);
router.get('/query', usuarioController.query);
router.get('/queryUserAuth',  usuarioController.queryUserAuth);
router.get('/list',  usuarioController.list);
router.put('/update',  usuarioController.update);
router.delete('/remove',  usuarioController.remove);
router.put('/activate',  usuarioController.activate);
router.put('/deactivate',  usuarioController.deactivate);
router.post('/login', usuarioController.login);

module.exports = router;