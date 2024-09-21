import{Router} from "express";
import {getDonors,Home,getDonor,editDonor} from "./requestHandler.js";
const router =Router();

router.route("/adddonor").post(Home);
router.route("/getdonors").get(getDonors);
router.route("/getdonor/:id").get(getDonor);
router.route("/editdonor/:_id").put(editDonor);



export default router;

