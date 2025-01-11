const forumLatest = "https://cdn.freecodecamp.org/curriculum/forum-latest/latest.json";
const forumTopicUrl = "https://forum.freecodecamp.org/t/";
const forumCategoryUrl = "https://forum.freecodecamp.org/c/";
const avatarUrl = "https://sea1.discourse-cdn.com/freecodecamp";
const postsContainer = document.getElementById("posts-container");

const allCategories = {
  299: { category: "Career Advice", className: "career" },
  409: { category: "Project Feedback", className: "feedback" },
  417: { category: "freeCodeCamp Support", className: "support" },
  421: { category: "JavaScript", className: "javascript" },
  423: { category: "HTML - CSS", className: "html-css" },
  424: { category: "Python", className: "python" },
  432: { category: "You Can Do This!", className: "motivation" },
  560: { category: "Backend Development", className: "backend" },
};

const forumCategory = (id) => {
  let selectedCategory = {};
  if (allCategories.hasOwnProperty(id)){
    const { className, category } = allCategories[id];
  }
};

const timeAgo = (time) => {
  const currentTime = new Date();
  const lastPost = new Date(time);
  const minutes = Math.floor((currentTime - lastPost) / 60000);
  const hours = Math.floor((currentTime - lastPost) / 3600000);
  const days = Math.floor((currentTime - lastPost) / 86400000);
  if (minutes < 60) {
    return `${minutes}m ago`;
  } else if(hours < 24 ){
    return `${hours}h ago`;
  } else {
    return `${days}d ago`
  }
}

const viewCount = (views) => {
  return views >= 1000 ?
  `${Math.floor(views / 1000)}k` :
  views ;  
};

/*
You can use the async keyword to create an asynchronous function, which returns a promise.
The try block is designed to handle potential errors, and the code inside the catch block will be executed in case an error occurs.
The await keyword waits for a promise to resolve and returns the result.

const example = async () => {
  console.log("this is an example");
};

try {
  const name = "freeCodeCamp";
  name = "fCC";
} catch (err) {
  console.log(err); // TypeError: Assignment to constant variable.
}

const example = async () => {
  const data = await fetch("https://example.com/api");
  console.log(data);
}
*/
const fetchData = async () => {
  try{
    const res = await fetch(forumLatest); 
    const data = await res.json();
    showLatestPosts(data);
  } catch(err){
    console.log(err);
  }
};
fetchData();

const showLatestPosts = (data) => {
  const { topic_list, users } = data;
  const { topics } = topic_list;

  postsContainer.innerHTML = topics.map((item) => {
    const {
      id,
      title,
      views,
      posts_count,
      slug,
      posters,
      category_id,
      bumped_at,
    } = item;

    return `
    <tr>
      <td>
        <p class="post-title">${title}</p>
      </td>
      <td>
      
      </td>
      <td>${posts_count - 1}</td>
      <td>${viewCount(views)}</td>
      <td>
      ${timeAgo(bumped_at)}
      </td>
    </tr>`;
  }).join("");
};