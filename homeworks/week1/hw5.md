## 請解釋後端與前端的差異。

前端是看的到的部分，後端看不到的部分。例如在一個網頁，看到的圖案和搜尋條等等，都屬於前端。

按下 Enter 之後資料就會傳到伺服器以及資料庫之類的，都屬於後端。後端將搜尋出來的資料傳回來顯示到頁面就又回到前端。



## 假設我今天去 Google 首頁搜尋框打上：JavaScript 並且按下 Enter，請說出從這一刻開始到我看到搜尋結果為止發生在背後的事情。

1. 我叫瀏覽器送出 request（搜尋 JavaScript）
2. Google 瀏覽器叫作業系統送出 request （查詢 JavaScript 的 IP 位置）
3. 作業系統叫網路卡送出 request
4. 網路卡向 DNS 伺服器送出 request
5. DNS 伺服器在 Data Base 找到 IP 位置後，response（回傳）給網路卡
6. 網路卡 response 給作業系統
7. 作業系統 response 給瀏覽器
8. 得到搜尋結果



## 請列舉出 3 個「課程沒有提到」的 command line 指令並且說明功用

- `del `：刪除檔案

- `ren` 或是 `rename`：重新命名檔案

- `start`：開啟另一個視窗來執行指定的程式或命令