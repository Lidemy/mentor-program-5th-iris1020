## 教你朋友 CLI

操作電腦的方法有兩種，一種是 Graphical User Interface (GUI) 圖形化介面，另一種就是 Command Line Interface (CLI) 命令列介面。

Windows 系統內建的 Command Line Interface 叫做 Command Prompt 命令提示字元。在電腦業面左下方打命令提示字元就會跑出來。

開啟 Command Prompt 之後，會看到 `C:\Users\你所在的資料夾>`，在這個字串旁邊就可以開始打字了。

----



## 一些基本的功能：

`dir /w` ：列出現在位置裡的內容

`cd`：進入一個資料夾

`cd .. ：回上一個資料夾

`cls` ：清理頁面

`mdkir` ：建立資料夾（空格之後，後面接資料夾名稱）

`cd.` ：建立檔案（空格之後，後面接檔案名稱還有附檔名）

----

> 一切都是假定在使用 Windows 系統的情況下（因為我的電腦是 Windows 系統，所以也假設 h0w 哥的電腦是 Windows 系統，就用 Command Prompt 教他，想說第四個作業要教人家 Git 這一題可能不能教 Git） 

----

嗨 h0w 哥，希望以上對 Command Line 是甚麼的解釋，以及基本的指令用法你有理解。接下來我會一步一步的教你如何建立 wifi 資料夾，以及在資料夾裡面再建立一個 afu.js 的檔案。

我們把資料夾建在桌面吧，這樣比較好找！

1. 先跳到 desktop （桌面）：`cd desktop`
2. 建立 wifi 資料夾：`mkdir wifi`
3. 再跳到 wifi 資料夾裡面：`cd wifi`
4. 建立 afu.js 檔案：`cd. > afu.js`
5. 大功告成！