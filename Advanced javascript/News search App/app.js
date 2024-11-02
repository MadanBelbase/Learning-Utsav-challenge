const apiKey = '7570889739d34b81bd032b1760535ee2';
const blogContainer = document.getElementById("blog-container");

async function fetchNews() {
    try {
        const url = `https://newsapi.org/v2/everything?q=tesla&pageSize=10&apiKey=${apiKey}`;
        const response = await fetch(url);
        const data = await response.json();
        return data.articles; 
    }
    catch (error) {
        console.error("Error in fetching API", error);
        return [];
    }
}

function displayBlogs(articles) {
    blogContainer.innerHTML = ""; // Clear previous content

    articles.forEach((article) => {
        // Create the main blog post container
        const blogPost = document.createElement("div");
        blogPost.classList.add("blog-post");

        // Create and append the image element
        const img = document.createElement("img");
        img.src = article.urlToImage || 'placeholder.png'; // Use placeholder if no image
        img.alt = article.title || "Image placeholder";
        blogPost.appendChild(img);

        // Create and append the title element
        const title = document.createElement("h2");
        title.textContent = article.title || "This is a title"; // Default title if missing
        blogPost.appendChild(title);

        // Create and append the description element
        const description = document.createElement("p");
        description.textContent = article.description || "Lorem ipsum dolor sit amet consectetur adipisicing elit. Id libero blanditiis nostrum corrupti aut assumenda nobis, ea pariatur sunt enim modi sed tempore qui ut tempora possimus distinctio laboriosam voluptate."; // Default text if missing
        blogPost.appendChild(description);

        // Append the completed blog post to the main container
        blogContainer.appendChild(blogPost);
    });
}

// IIFE to load and display the news
(async () => {
    try {
        const articles = await fetchNews();
        displayBlogs(articles);
    }
    catch (error) {
        console.error("Error in displaying blogs", error);
    }
})();
