// 跟用户操作有关的sql语句
const allServices = require('./index');

let  userSql = {
        // 获取文章列表
        getArticle:function(){
                let _sql = 'select * from article';
                return allServices.query(_sql);
        },
        // 通过文章id获得详情
        getArticleById:function(id){
                let _sql = `select * from article where articleID = ${id} `;
                return allServices.query(_sql);
        },
        addUser:function(user) {
                let _sql = `insert into user_info (tel,username,userId) values (${user.tel},'${user.username}',${user.userId});`;
                return allServices.query(_sql);
        },
        queryMaxUserId:function(){
                let _sql = 'select Max(userId) from user_info';
                return allServices.query(_sql);
        },
        //保存用户地址
        saveAddress:function (info) {
                //判断是否设置为默认地址
                if(info.defaultAddress == 1){
                        // console.log('保存中',info.defaultAddress);
                        let _sql_update = `UPDATE address_info set defaultAddress = 0 WHERE userId = '${info.userId}';`;
                        allServices.query(_sql_update);
                }
                //准备一条插入语句
                let _sql = `INSERT into address_info (username,phone,city,province,area,detailAddress,userId,defaultAddress,postalId) 
                                    VALUES('${info.username}',
                                    '${info.phone}',
                                    '${info.city}',
                                    '${info.province}',
                                    '${info.area}',
                                    '${info.detailAddress}',
                                    '${info.userId}',
                                     ${info.defaultAddress},
                                    '${info.postalId}');`;
                //保存
                allServices.query(_sql);
                //将保存的地址信息查询出来并返回给前端
                let _get_save_sql = `SELECT * FROM address_info WHERE (username,phone,city,province,area,detailAddress,userId,defaultAddress,postalId) = 
                                    ('${info.username}',
                                    '${info.phone}',
                                    '${info.city}',
                                    '${info.province}',
                                    '${info.area}',
                                    '${info.detailAddress}',
                                     ${info.userId},
                                     ${info.defaultAddress},
                                    '${info.postalId}')`;
                return allServices.query(_get_save_sql);
        },
        //查询是否存在相同地址
        findAddress:function(info){
                let _sql_find = `SELECT count(*) as info_sum FROM address_info WHERE (username,phone,city,province,area,detailAddress,userId,postalId) = 
                                    ('${info.username}',
                                     '${info.phone}',
                                     '${info.city}',
                                     '${info.province}',
                                     '${info.area}',
                                     '${info.detailAddress}',
                                      ${info.userId},
                                     '${info.postalId}') group by username;`;
                return  allServices.query(_sql_find);
        },
        updateAddress:function (info) {
                //判断是否更新为默认地址
                if(info.defaultAddress == 1){
                        // console.log('保存中',info.defaultAddress);
                        let _sql_update = `UPDATE address_info set defaultAddress = 0 WHERE userId = '${info.userId}';`;
                        allServices.query(_sql_update);
                }
                let _sql = `UPDATE address_info set 
                username = '${info.username}',
                phone='${info.phone}',
                city='${info.city}',
                province='${info.province}',
                area='${info.area}',
                detailAddress='${info.detailAddress}',
                defaultAddress='${info.defaultAddress}',
                postalId='${info.postalId}' WHERE  id =  ${info.id};`;
                //更新
                allServices.query(_sql);
                let _get_update_sql = `SELECT * FROM address_info WHERE id = ${info.id}`;
                //返回跟新后的数据
                return allServices.query(_get_update_sql);
        }
};
module.exports = userSql;
