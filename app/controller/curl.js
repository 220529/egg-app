const Controller = require('egg').Controller;

class CurlController extends Controller {
  async index() {
    const { ctx } = this;
    const res = await ctx.curl("https://dog.ceo/api/breeds/image/random", {
      dataType: 'json', // 自动解析返回的JSON数据
    });

    console.log("curl.res: ", res.data);
    ctx.body = res.data; // 直接返回解析后的JSON数据
  }
}

module.exports = CurlController;