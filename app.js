// Get DOMs
const searchBarInput = document.getElementById("search-bar-input");
const searchBarButton = document.getElementById("search-bar-button");
const subredditInput = document.getElementById("subreddit-input");
const tooltip = document.getElementById("tooltip");

// Reset DOMs
searchBarInput.value = "";
subredditInput.value = "";

function searchReddit(query, subreddit = "") {
    const url = `https://www.google.com/search?q=${query} site:reddit.com/r/${subreddit} -"?tl="&udm=14`;
    open(url);
}

function search() {
    if (searchBarInput.value.trim() === "") {
        tooltip.style.opacity = 1;
        setTimeout(() => {
            tooltip.style.opacity = 0;
        }, 3000);
    } else {
        searchReddit(searchBarInput.value, subredditInput.value);
    }
}

// Handle searching
searchBarButton.addEventListener("click", search);
document.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
        search();
    }
});
