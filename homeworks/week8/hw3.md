## 什麼是 Ajax？

Ajax (Asynchronous JavaScript and XML) 非同步的 JavaScript 與 XML 技術：是任何非同步跟伺服器交換資料的 JavaScript 的統稱。不需要換頁。（就是不會刷新整個網頁，只針對需要改變的項目作出更改）

- Asynchronous：非同步
- JavaScript：使用的程式語言
- XML：XMLHttpRequest 用來向網路伺服器索取資料的，但是並非只能用 XML，也可以使用純文字檔或是 JSON 來做資料交換。

#### 重點是非同步的特性

所謂非同步簡單來說就是你不知道事件甚麼時候會發生，但你可以先把要發生的函式準備好，等到事件發生時就進行處理。

例如，到了咖啡廳點完餐後拿著號碼牌找個位子坐下把號碼牌放在桌上，等餐點好了店員就會找到你幫你送過來。在這期間你可以在位置上做自己的事情，不必停在收銀台等你的餐點做好。

相反的，同步的話會先確保每一行的程式確實質行並得到結果才會繼續執行下一行。

例如，你必須站在收銀台前等到餐做好之後自己拿到座位上，餐還沒做好你就只能一直再收銀檯前乾等，不能做其他事情，後面的客人也會一直卡在你後面。

Ajax 屬非同步。



## 用 Ajax 與我們用表單送出資料的差別在哪？

承上題的同步與非同步性，表單使用的是同步，Ajax 使用的是非同步。

表單送出使用 GET 或 POST 送出 request，server 收到之後回傳，直接刷新網頁。他會得到 response 之後才會跑出結果來。（與 javascript 沒有任何關係）

Ajax 則是用 javascript 來和 server 做資料交換讓網頁可以在不需要刷新的情況下更新需要更改的部分。（不用整頁換新）

比起 form，Ajax 提供較好的使用者體驗。



## JSONP 是什麼？

JSONP (JSON with Padding)：是一種跨領域資料交換的"方式"。

它可以透過 `<script>` 等一些 HTML 標籤來跳過 Ajax 的瀏覽器安全性限制無法跨網域使用的問題 (Same-origin policy)。可以讓一個網頁從別的網域請求資料。

使用 JSONP 的時候，server 通常會在 URL 提供一個 callback 的參數給 client 使用，例如第二個作業，串 twitch API 時使用的，twitch 提供的 `https://api.twitch.tv/kraken/games/top?client_id=xxx&callback=getTopGames`。

server 會在傳給瀏覽器前，將資料填進 callback function 中。接著用 `<script>` 載入 URL，就可以得到從其他來源動態產生的 JSON 資料。

寫法：

`<script src="https://api.twitch.tv/kraken/games/top?client_id=xxx&callback=getTopGames"></script>`

`<script> function getTopGames (response) {`

  `console.log(response);`

`}`

`</script>` 

不過，JSONP 的用法有一個缺點是參數只能使用附加在網址上的方式帶過去，也就是用 GET，沒辦法使用 POST。

## 要如何存取跨網域的 API？

除了使用 JSONP 之外，還可以使用 CORS (Cross-Origin Resource Sharing 跨來源資源共享) 這個規範來存取跨領域的 API。

Server 端會在 Response Headers 加上 `Access-Control-Allow-Origin` ，`Access-Control-Allow-Origin: *` 代表允許任何跨來源的請求。另外，還可以透過 `Access-Control-Allow-Methods` 和 `Access-Control-Allow-Headers` ，定義要允許哪些 HTTP Request Methods，以及在 Request Headers 要附帶甚麼選項或驗證。

因此，如果想要存取跨網域的 API，必須先確認 sever 端有加上 `Access-Control-Allow-Origin` ，不然 Response 會被瀏覽器給擋下來。




## 為什麼我們在第四週時沒碰到跨網域的問題，這週卻碰到了？

第四週的時候是用 node.js 在自己的電腦發 request，這一週則是透過瀏覽器來發 request。

使用 node 不會有中間層的限制，但透過瀏覽器的話會受到同源政策的限制 。
