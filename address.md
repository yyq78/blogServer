# 地址相关接口说明


## 1.保存地址api：

 1. 请求url : /save_address
 2. 请求方式：post
 3.  参数
 
|参数  |	是否必选  |	类型	 |说明|
|--|--|--|--|
|username	|是|	String|	用户姓名
|phone|	是	|String	|用户手机
|postalId	|否	|String	|邮政编码
|city	|是	|String|	城市
|province	|是	|String|	省份
|area	|是	|Sting	|县，区
|userId	|是|	Int|	一个用户id
|defaultAddress|	是	|Int|	是否设为默认地址
|detailAddress	|是|	String|	详细地址
 4. 返回示例：
```javascript
{
  "code": 0,
  "data": {
    "username": "xly1",
    "id": 11111135,
    "phone": "13188888888",
    "province": "贵州省",
    "city": "贵阳市",
    "area": "高新没有区",
    "detailAddress": "高科一号c",
    "postalId": "510100",
    "defaultAddress": 1,
    "userId": 257783445
  }
}
```
 5. 返回参数说明

|参数   |	类型	 |说明|
|--|--|--|
|username	|	String|	用户姓名
|phone	|String	|用户手机
|postalId	|String	|邮政编码
|city	|String|	城市
|province		|String|	省份
|area	|Sting	|县，区
|userId|	Int|	一个用户id
|defaultAddress	|Int|	是否设为默认地址
|detailAddress|	String|	详细地址
|Id|	Int	|用户单条地址唯一标识
## 2.获取地址api：

 1. 请求url : /get_address
 2. 请求方式：post
 3.  参数
 
|参数  |	是否必选  |	类型	 |说明|
|--|--|--|--|
|userId|	是	|Int|	一个用户id
 4.  返回示例：

```javascript
{
  "code": 0,
  "data": [
    {
      "username": "xx",
      "id": 11111112,
      "phone": "18388888888",
      "province": "四川省",
      "city": "成都",
      "area": "金牛区",
      "detailAddress": "222号",
      "postalId": "610500",
      "defaultAddress": 0,
      "userId": 257783445
    },
    {
      "username": "xx",
      "id": 11111113,
      "phone": "18388888888",
      "province": "四川省",
      "city": "达县",
      "area": "区",
      "detailAddress": "222号",
      "postalId": "610500",
      "defaultAddress": 0,
      "userId": 257783445
},
...
```

 5. 返回参数说明

|参数   |	类型	 |说明|
| --    |--      |--|
|username	|	String|	用户姓名
|phone	|String	|用户手机
|postalId	|String	|邮政编码
|city	|String|	城市
|province		|String|	省份
|area	|Sting	|县，区
|userId|	Int|	一个用户id
|defaultAddress	|Int|	是否设为默认地址
|detailAddress|	String|	详细地址
|Id|	Int	|用户单条地址唯一标识

## 3.更新地址api:

 1. 请求url : /update_address
 2. 请求方式：post
 3. 参数

|参数  |	是否必选  |	类型	 |说明|
|--|--|--|--|
|username	|是|	String|	用户姓名
|phone|	是	|String	|用户手机
|postalId	|否	|String	|邮政编码
|city	|是	|String|	城市
|province	|是	|String|	省份
|area	|是	|Sting	|县，区
|userId	|是|	Int|	一个用户id
|defaultAddress|	是	|Int|	是否设为默认地址
|detailAddress	|是|	String|	详细地址
|Id	|是	|Int|	用户单条地址唯一标识
 4. 返回示例：

```javascript
{
  "code": 0,
  "data": {
    "username": "xly1",
    "id": 11111129,
    "phone": "131000000",
    "province": "贵州省",
    "city": "贵阳市",
    "area": "阿松大11111099999",
    "detailAddress": "高科一号",
    "postalId": "510100",
    "defaultAddress": 1,
    "userId": 257783445
  }
}
```

5. 返回参数说明

|参数   |	类型	 |说明|
|--|--|--|
|username	|	String|	用户姓名
|phone	|String	|用户手机
|postalId	|String	|邮政编码
|city	|String|	城市
|province		|String|	省份
|area	|Sting	|县，区
|userId|	Int|	一个用户id
|defaultAddress	|Int|	是否设为默认地址
|detailAddress|	String|	详细地址
|Id|	Int	|用户单条地址唯一标识
