## 交作業流程

1. 開啟 Git Bash，cd 到 desktop：`cd desktop`
2. mkdir 一個專屬 Lidemy 的資料夾：`mkdir Lidemy`
3. cd 到 Lidemy 資料夾：`cd Lidemy`
4. 到 GitHub classroom 自己專屬的，交作業的地方：[Lidemy](https://github.com/Lidemy)/[mentor-program-5th-iris1020](https://github.com/Lidemy/mentor-program-5th-iris1020)。 
5. 有一個綠色的 Code 的按鈕，按下去之後可以 Clone （複製）這一個 Repository 的 HTTPS。
6. 把這份資料 Clone 到電腦 （在這裡會 Clone 到在 desktop 的 Lidemy 資料夾裡面）：`git clone https://github.com/Lidemy/mentor-program-5th-iris1020.git `
7. cd 到 mentor-program-5th-iris1020/ 資料夾：`cd mentor-program-5th-iris1020/`
8. 在 mentor-program-5th-iris1020/ 資料夾中建立一個新的 branch ：`git branch week1`
9. 切換到這個 branch 上 ：`git checkout week1`
10. 檢查自己所在的位置是否正確，確認自己是在 week1 branch 上：`git status`
11. 在 hw1.md 上寫作業。
12. 寫完後記得存檔。
13. 查看 hw1.md 內容是否有被新增：`git status`
14. add （加入版本控制）加 commit （版本建立）作業：`git commit -am week1`
15. 檢查作業是否完成 commit ：`git status`
16. 交出去前再次檢查作業有沒有任何問題或是錯誤。
17. 將電腦（本地）裡的資料傳到 GitHub（遠端）：`git push origin week1`
18. 點選 `pull request`
19. 點選 compare & pull request。
20. 點選 create pull request 到 Lidemy 學習系統上的課程總攬，做完自我檢討之後貼上 PR 連結並且送出。
21. 到作業列表檢查有沒有自己的作業。
22. 繳交作業完成！