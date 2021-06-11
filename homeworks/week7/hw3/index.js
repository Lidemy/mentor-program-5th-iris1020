document.querySelector(".btn-new").addEventListener("click", () =>
	{
	const value = document.querySelector(".input-todo").value;
	if (!value) return
	const div = document.createElement("div")
	div.classList.add("todo")
	div.innerHTML = 
		`
			<input class="todo__check" type="checkbox" />
			<div class="todo__title">${escapeHtml(value)}</div>
			<button class="btn-delete">刪除</button>
		`
		document.querySelector(".todos").appendChild(div)
		document.querySelector(".input-todo").value = " " /*讓東西新增完之後不會繼續留在框框中*/
})

/*event delegation / proxy 透過共同的 parent 來偵測底下的元素做甚麼事情 對動態元素有效*/
document.querySelector(".todos").addEventListener("click", (event) => 
	{
	const {target} = event /*delete to do*/
	if (target.classList.contains("btn-delete")) {
		target.parentNode.remove()
		return
	}

	/*check/uncheck to do*/
	if (target.classList.contains("todo__check")) {
		if (target.checked) {
			target.parentNode.classList.add("done")
		} else {
			target.parentNode.classList.remove("done")
		}
	}
})

function escapeHtml(unsafe) {
	return unsafe
		.replace(/&/g, "&amp;")
		.replace(/</g, "&lt;")
		.replace(/>/g, "&gt;")
		.replace(/"/g, "&quot;")
		.replace(/'/g, "&#039;")
} 
/*特殊符號經過轉譯顯示正確的符號*/