import routes from "../routes"
import Video from "../models/Video"

export const home = async(req, res) => {
    // await 부분이 끝나기전까지 render부분을 실행하지 않을 것
    // error가 생겨도 끝났으니, 다음으로 넘어감
    try {
        const videos = await Video.find({});
        res.render("home", { pageTitle : "Home", videos });
    } catch(error) {
        console.log(error);
        res.render("home", { pageTitle : "Home", videos : [] });
    }
};

export const search = (req, res) => {
    //const searchingBy = req.query.term;
    const {
        query: { term: searchingBy }
    } = req;
    res.render("search", { pageTitle : "Seach" , searchingBy, videos});
};

export const getUpload = (req, res) => {
    res.render("upload", { pageTitle : "Upload" });
};

export const postUpload = async(req, res) => {
    const {
        body: { title, description },
        file: { path }
    } = req;

    const newVideo = await Video.create({
        fileUrl: path,
        title,
        description
      });

    console.log(newVideo)
    res.redirect(routes.videoDetail(newVideo.id))
}

export const videoDetail = (req, res) => res.render("videoDetail", { pageTitle : "Video Detail" });

export const editVideo = (req, res) => res.render("editVideo", { pageTitle : "Edit Video" });

export const deleteVidoe = (req, res) => res.render("deleteVideo", { pageTitle : "Delete Video" });
