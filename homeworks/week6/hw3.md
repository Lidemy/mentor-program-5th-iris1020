## 請找出三個課程裡面沒提到的 HTML 標籤並一一說明作用。

1. `<table>` ：元素用來製作表格。表格內容是一列一列撰寫的。

2. `<tr>` ：用來表示每一列的開始。後面會跟著一個或是多個 `<td>` 元素（每一個都代表該列上的每個儲存格）。在結尾用`</tr>` 結束。

3. `<td>` ：每個表格儲存格是用 `<td>` 來代表的。

4. `colspan` ：可用在`</tr>` 和 `<td>` 上，而且可以設定儲存格要跨多少格。以欄（橫的）來跨。

5. `rowspan `：可用在`</tr>` 和 `<td>` 上，而且可以設定儲存格要跨多少格。以列（直的）來跨。

   ## 範例

`<table>`
    `<tr>`
        `<th></th>`
        `<th>9 am</th>`
        `<th>10 am</th>`
        `<th>11 am</th>`
        `<th>12 am</th>`
   ` </tr>`
    `<tr>`
       ` <th>Monday</th>`
       ` <td colspan="2">Work</td>`
       ` <td>Meeting</td>`
       ` <td rowspan="2">Lunch</td>`
   ` </tr>`
   ` <tr>`
`<th>Tuesday</th>`
        `<td colspan="3">I don't want to work :P</td>`
    `</tr>`
`</table>`

## 會變成這樣

<table>
    <tr>
        <th></th>
        <th>9 am</th>
        <th>10 am</th>
        <th>11 am</th>
       <th>12 am</th>
   </tr>
   <tr>
        <th>Monday</th>
        <td colspan="2">Work</td>
       <td>Meeting</td>
        <td rowspan="2">Lunch</td>
   </tr>
   <tr>
<th>Tuesday</th><td colspan="3">I don't want to work :P</td>
    </tr>
</table>

---

## 請問什麼是盒模型（box modal）

在 CSS 裡面，html 的每個元素都可以被當作是一個盒子（box modal）。然後可以針對這個盒子去做調整。Box modal 主要包含 Margin, Padding, Border 和  Content 。

+ Margin：負責調整元素與元素之間的間距，屬於元素外部的邊界調整。
+ Padding：負責調整元素內所有內容與元素本身的邊界間距（內距），屬於元素內部的邊界調整。
+ Border：元素最外層的邊界，就是元素的外框。

---

## 請問 display: inline, block 跟 inline-block 的差別是什麼？

display 可以更改行內/區塊的狀態。每一個 html 標籤元素都會有一個預設的 display 屬性。可以讓你把一個行內元素轉為區塊層級元素，或相反之。

display 屬性可以接受三個值：

+ inline：這會讓區塊層級元素表現出行內元素的行為。
  + 元素可以在同一行內呈現，圖片或文字都不換行。
  + 沒辦法設定長寬，元素的寬高由他的內容撐開。
  + 不會讓其他地方變形但是有可能會蓋到其他地方。
+ block：這會讓行內元素表現出區塊層級元素的行為。
  + 元素寬度預設會撐到最大。
  + 可以設定長寬/margin/padding。
  + 會換行。
+ inline-block：這會讓區塊層級元素和行內元素一樣排成一行，但是依然保持區塊層級元素的其他屬性。
  + 可以設定長寬/margin/padding。
  + 可以水平排成一行。
+ none：這會將元素從葉面中隱藏起來。元素在網頁上是看不到的，但是檢是原始碼的時候還是看的到。

-----


## 請問 position: static, relative, absolute 跟 fixed 的差別是什麼？

+ position: static：預設定位。每個區塊層級元素都是由上往下層疊排列。這是瀏覽器處理 html 的預設方式，所以不用特別使用 css 來設定。

+ position: relative：相對定位。移動的方式，是像對於預設定位的位置。也就是說，可以講他移動到原本位置的 n 像素，或者向上下左右移 n%。

  + 使用 top/bottom 上下垂直移動。使用 left/right 左右水平移動。

  + 通常以 像素（px），百分比（%）或是 em 為單位。

+ position: absolute：絕對定位。以自身階層開始往上算，第一個父層且不是 static 的元素為基準點。如果沒有，預設是以 body 元素（整個視窗）為基準。

+ position: fixed：固定定位。是一種絕對定位，會將元素放在跟瀏覽器視窗相對的位置上。當向下捲動頁面時，他就會待在完全相同的位置。

  + 會蓋住所有其他元素。
