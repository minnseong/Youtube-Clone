import express from "express";
import routes from "../routes";
import { deleteVidoe, editVideo, upload, videoDetail, vidoes } from "../controllers/videoController";

const videoRouter = express.Router();

videoRouter.get(routes.videos, vidoes);
videoRouter.get(routes.upload, upload);
videoRouter.get(routes.videoDetail, videoDetail);
videoRouter.get(routes.editVideo, editVideo);
videoRouter.get(routes.deleteVideo, deleteVidoe);

export default videoRouter;