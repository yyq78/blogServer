const router = require('koa-router')();
const moment = require('moment');
//
const userSql = require('../allSqlStatement/userSql');

// 获取文章列表
router.get('/getArticle',async(ctx,next) => {
    const params = ctx.query;
    if(JSON.stringify(params)=="{}"){
      const articles = await userSql.getArticle();
      ctx.body = {
        list:articles,
      }
    }else{
      const article = await userSql.getArticleById(params.id);
      ctx.body = {
        data:article
      }
    }
    
});

//更新要修改的地址
router.post('/update_address',async ctx=>{
    const updateResult = await  userSql.updateAddress(ctx.request.body)
    console.log(updateResult);
    ctx.body={
        code:0,
        data:updateResult[0]
    }
});
module.exports = router;
