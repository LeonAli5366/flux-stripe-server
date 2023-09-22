import express from "express";
import { fluxPayment, webHookFlux } from "../controllers/fluxController.js";


const router = express.Router();
router.post("/create-checkout-session", fluxPayment);
router.post('/webhook', express.raw({type: 'application/json'}),webHookFlux)


export default router