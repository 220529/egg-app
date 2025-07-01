// app/middleware/log_request.js
module.exports = (options, app) => {
  return async (ctx, next) => {
    const start = Date.now();
    console.log(`[Request] ${ctx.method} ${ctx.url}`);
    await next(); // 执行下一个中间件或 Controller
    const duration = Date.now() - start;
    console.log(`[Response] ${ctx.status} (${duration}ms)`);
  };
};