import{Router} from "express";
import {getDonors,Home} from "./requestHandler.js";
const router =Router();

router.route("/adddonor").post(Home);
router.route("/getdonors").get(getDonors);

export default router;

