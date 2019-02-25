let bookNowButton = document.getElementById('book-now-button');
let hcomBestUrl = "https://hcombest.com" + window.location.pathname + window.location.search

let hcomBestButton = bookNowButton.cloneNode(true);
hcomBestButton.innerText = "Hcom BEST";
hcomBestButton.href = hcomBestUrl;
hcomBestButton.removeAttribute("data-target");
hcomBestButton.target="_blank";

bookNowButton.parentNode.insertBefore(hcomBestButton, bookNowButton);