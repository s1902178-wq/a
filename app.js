let bookmarks =
JSON.parse(localStorage.getItem("bookmarks")) || [];

let historyList =
JSON.parse(localStorage.getItem("history")) || [];

document.getElementById("goBtn")
.addEventListener("click", () => {

  const value =
  document.getElementById("addressBar").value;

  historyList.push(value);

  localStorage.setItem(
    "history",
    JSON.stringify(historyList)
  );

  if(value.startsWith("http")){
    window.open(value,"_blank");
  }else{
    const query =
    encodeURIComponent(value);

    window.open(
      "https://www.google.com/search?q="+query,
      "_blank"
    );
  }
});

document.getElementById("bookmarkBtn")
.addEventListener("click", () => {

  const value =
  document.getElementById("addressBar").value;

  bookmarks.push(value);

  localStorage.setItem(
    "bookmarks",
    JSON.stringify(bookmarks)
  );

  alert("保存しました");
});

document.getElementById("themeBtn")
.addEventListener("click", () => {
  document.body.classList.toggle("dark");
});
