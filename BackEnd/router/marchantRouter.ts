import { Router } from "express";
import { createMerchant, marchantLogin, viewAllMarchant, viewOneMarchant } from "../controller/marchantController";



const router:Router = Router()


router.route("/").get(viewAllMarchant)
router.route("/one/:marchantId").get(viewOneMarchant)
router.route("/create").post(createMerchant)
router.route("/login-marchant").post(marchantLogin)

export default router