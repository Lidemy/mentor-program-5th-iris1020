## 請以自己的話解釋 API 是什麼

API 全名是 Application Programming Interface，中文翻譯是「應用程式介面」。就是一個可以讓雙方交換資料的管道。

以餐廳來舉例，今天我們進到一間壽司店，我們會透過菜單來點餐。

菜單會顯示這間餐廳提供了哪些選項供選擇，沒有在上面的就沒有辦法點。（例如，你說你要一份美式牛排，這個不在菜單上當然就沒辦法點。先不論你是不是奧客能夠奧到讓壽司店生出美式牛排。）

菜單就是 API。

點完餐後菜單會被送到廚房，然後再出餐給我們。

+ 店面 = 網站
+ 菜單 = API
+ 我 = 使用者
+ 廚房 = 資料庫
+ 我點的餐 = 資料

----

## 請找出三個課程沒教的 HTTP status code 並簡單介紹

HTTP status code，也就是 HTTP 狀態碼，是用來表明一個 HTTP 要求是否已經被完成，代表 API 層的直行狀態。

分成五種：

+ 資訊回應 (Informational responses)：100~199
+ 成功回應 (Successful responses)：200~299
+ 重定向 (Redirects)：300~399
+ 用戶端錯誤 (Client errors)：400~499
+ 伺服器端錯誤 (Server errors)：500~599

#### 以下是三個課程中沒教的 HTTP status code：

----

+ 201 Created：請求成功且新的資料成功被創建，通常用於 POST 或一些 PUT 請求後的回應。

+ 301 Moved Permanently：請求資源的 URI 已被改變。有時候，會在回應內給予新的 URI。
+ 403 Forbidden：用戶端並無訪問權限，例如未被授權，所以伺服器拒絕給予應有的回應。不同於401 Unauthorized，伺服端知道用戶的身分。



----

## 假設你現在是個餐廳平台，需要提供 API 給別人串接並提供基本的 CRUD 功能，包括：回傳所有餐廳資料、回傳單一餐廳資料、刪除餐廳、新增餐廳、更改餐廳，你的 API 會長什麼樣子？請提供一份 API 文件。



Base URL: http://yummy666.com



| 說明             | Method | Path             | 參數                    | 範例                  |
| ---------------- | ------ | ---------------- | ----------------------- | --------------------- |
| 獲取所有餐廳資料 | GET    | /restaurants     | _limit:限制回傳資料數量 | /restaurants?_limit=5 |
| 獲取單一餐廳資料 | GET    | /restaurants/:id | 無                      | /restaurants/10       |
| 新增餐廳         | POST   | /restaurants     | name: 店名              | 無                    |
| 刪除餐廳         | DELETE | /restaurants/:id | 無                      | 無                    |
| 廳資訊           | PATCH  | /restaurants/:id | name: 店名              | 無                    |

