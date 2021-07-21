## 資料庫欄位型態 VARCHAR 跟 TEXT 的差別是什麼

儲存字串可以使用 char、varchar 還有 text 三種。

- char：無法變更長度，長度可為 0~255 的任何值。

- varchar：可變長度，長度可為 0~65,535 的字串。實際的最大長度需要看資料列大小限制而定。建議當資料行資料項目的大小變化相當大時，使用varchar。

- text：純文字欄位，最大長度為 0~65,535 的字串，儲存時會附加兩個位元組在最前面用來記錄長度。

text 比起 varchar 可以儲存長度更長的字串，而且 text 沒辦法設定他的存取字串長度（沒辦法限定最多只能輸入多少數字）但是 varchar 可以。



## Cookie 是什麼？在 HTTP 這一層要怎麼設定 Cookie，瀏覽器又是怎麼把 Cookie 帶去 Server 的？

1. Cookie 就像是帶著一小塊資訊的檔案（例如一組用戶名稱和密碼），用來讓 server 端辨識出使用者是誰，能夠提升使用者體驗。Cookie 是由 server 提供，server 也會給每一位使用者一組辨識身分的 ID 在 Cookie 裡面。Server 靠著這個 ID 來記住專屬於此使用者的資訊（例如上一次購物時瀏覽或是將甚麼東西放進了購物車等）。
2. user 將 HTTP request 發給 server，server 將 cookie 放到 HTTP response header 中，之後這個  cookie 就會被存在瀏覽器裡面，user 在瀏覽這個網站的時候，瀏覽器會將 cookie 放在 request header 中，這樣子 server 收到這個 request 的時候看到 request header 裡面的 cookie 裡面的資訊後就會知道是哪一個使用者到這個網站了。




## 我們本週實作的會員系統，你能夠想到什麼潛在的問題嗎？

1. 帳號密碼忘記的話，有沒有可以驗證然後更改並重新登入的功能
2. 惡意留言內容的偵測
