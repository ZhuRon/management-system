# node-ele 接口文档
```
baseUrl:htts://elm.candu.org
```

## 目录

[1、获取验证码](#1获取验证码)<br>

## 接口列表：

### 1、获取验证码

#### 请求URL：
```
https://elm.cangdu.org/v1/captchas
```

#### 请求示例：
[https://elm.cangdu.org/v1/captchas](https://elm.cangdu.org/v1/captchas)

#### 请求方式
```
  POST
```

#### 请求参数：query

|参数|是否必选|类型|说明|
|:----|:------:|:----|:-----|
|data |Y       |picture  |图片验证码附带数据


#### 返回示例
```
{
    data:image/png;base64,
}
```