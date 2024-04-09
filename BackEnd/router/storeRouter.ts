import { Router } from "express";
import { createStore, viewMerchantStore, viewStore } from "../controller/storeController2";
import multer from "multer"

const upload = multer().single("image")

const router: Router = Router();

// router.route("/").get(viewAllMarchant);
router.route("/one/:marchantId").get(viewMerchantStore);
router.route("/create-store/:marchantId").post(upload, createStore);
router.route("/store").get(viewStore);

export default router;
