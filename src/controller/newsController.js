import News from "../model/News";
import errorResponse from "../utils/errorResponse";
import successResponse from "../utils/SuccessResponse";
// import sendEmail from "../utils/email";
// import User from "../model/User";
// import Category from "../model/Category"

class NewsController {
 
  static async createNews(req, res) {
    const news = await News.create(req.body);


    try {
      if(!news){
        return errorResponse(res,401,`news not posted`)
      }
      else{
        return successResponse(res,201,`news successfuly posted`,news)
      }
    } catch (error) {
      return errorResponse(res, 201, error);
    }
   
   }

  static async getAllNews(req, res) {
    const news = await News.find();
    try {
      if (!news) {
        return errorResponse(res, 401, `No news Found`);
      } else {
        return successResponse(res, 200, `News ${news.length} found`, news);
      }
    } catch (error) {
      return errorResponse(res, 404, error);
    }
  }

  static async updateNews(req, res) {
    const { id } = req.params;
    const news = await News.findByIdAndUpdate({ _id: id }, req.body, {
      new: true,
    });
    try {
      if (!news) {
        return errorResponse(res, 401, `news are not updated`);
      } else {
        return successResponse(res, 200, `News are successfuly updated`, news);
      }comment
    } catch (error) {
      return errorResponse(res, 404, error);
    }
  }

  static async getOneNews(req, res) {
    const { id } = req.params;
    const news = await News.findOne({ _id: id });
    try {
      if (!news) {
        return errorResponse(res, 401, `news with id ${id} not found`);
      } else {
        return successResponse(
          res,
          200,
          `news successfuly retrieved with ${news.comment.length} comments`,
          news
        );
      }
    } catch (error) {
      return errorResponse(res, 404, error);
    }
  }
  static async deleteAllNews(req, res) {
    const news = await News.deleteMany();
    return successResponse(res, 200, "all news deleted", news);
   }
  static async deleteOneNews(req, res) {
    const id = req.params.id;
    const news = await News.findByIdAndDelete({ _id: id });
    if (!news) {
      return errorResponse(res, 401, `news with id ${id} not found`);
    } else {
      return successResponse(res, 200, `news successfuly deleted`, news);
    }
  }
}
export default NewsController;
