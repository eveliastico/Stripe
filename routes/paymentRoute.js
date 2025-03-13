import express from 'express';
import paymentController from '../controller/paymentController.js';

const router = express.Router();

// En esta clase se definen las rutas que se pueden usar

router.post('/', paymentController.create);
router.get('/:id', paymentController.getOne);
router.put('/:id', paymentController.update);
router.delete('/:id', paymentController.delete);
router.get('/', paymentController.getAll);
router.post('/:id/proccess', paymentController.process);

// Con esta linea se dice que estas rutas estan disponibles 
// para ser usadas en otros archivos
export default router;