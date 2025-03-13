import Payment from '../models/payment.js';


class paymentController {
    constructor(){
    }

    async create(req, res){
        try {
            const paymentId = Math.random().toString(36).substr(2, 9);
            const paymentUrl = `http://localhost:${process.env.PORT || 3000}/api/payments/${paymentId}`;
            const newPayment = new Payment({
                paymentId,
                amount: req.body.amount,
            });
            const respuesta = await newPayment.save();
            res.status(200).json({ message: 'Payment creado', paymentUrl });
        } catch (error) {
            res.status(500).send(error);
            console.log(error);
        }
    }

    async process(req, res) {
        try {
            const payment = await Payment.findOne({ paymentId: req.params.id });
            if (payment) {
                payment.status = 'completed';
                await payment.save();
                res.status(200).json({ message: 'Payment procesado correctamente', payment });
            } else {
                res.status(404).json({ error: 'Payment no encontrado' });
            }
        } catch (error) {
            res.status(500).send(error);
            console.log(error);
        }
    }

    async update(req, res) {
        try {
            const respuesta = await Payment.findOneAndUpdate(
                { paymentId: req.params.id },
                req.body,
                { new: true }
            );
            res.status(200).json(respuesta);
        } catch (error) {
            res.status(500).send(error);
            console.log(error);
        }
    }

    async delete(req, res) {
        try {
            const respuesta = await Payment.findOneAndDelete({ paymentId: req.params.id });
            res.status(200).json(respuesta);
        } catch (error) {
            res.status(500).send(error);
            console.log(error);
        }
    }

    async getAll(req, res) {
        try {
            const respuesta = await Payment.find();
            res.status(200).json(respuesta);
        } catch (error) {
            res.status(500).send(error);
            console.log(error);
        }
    }

    async getOne(req, res) {
        try {
            const respuesta = await Payment.findOne({ paymentId: req.params.id });
            res.status(200).json(respuesta);
        } catch (error) {
            res.status(500).send(error);
            console.log(error);
        }
    }
}

export default new paymentController();