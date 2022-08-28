let url = new URL(location.href);
let postId = url.searchParams.get('post');

fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
    .then(response => response.json())
    .then(allPostInfo => {
        let mainDiv = document.createElement("div");
        mainDiv.className = `thirdPageMainDiv`;
        let postInfoDiv = document.createElement("div");
        postInfoDiv.className = `postInfoDiv`;
        let postCommentsDiv = document.createElement("div");
        postCommentsDiv.className = ` postCommentsDiv`;

        let userId = document.createElement("div");
        userId.innerText = `UserId - ${allPostInfo.userId}`;
        userId.className = `postUserId`;

        let Id = document.createElement("div");
        Id.innerText = `Id - ${allPostInfo.id}`;
        Id.className = `postId`;

        let title = document.createElement("div");
        title.innerText = `Title - ${allPostInfo.title}`;
        title.className = `postTitle`;

        let content = document.createElement("div");
        content.innerText = `Content: ${allPostInfo.body}`;
        content.className = `postContent`;

            fetch(`https://jsonplaceholder.typicode.com/posts/${postId}/comments`)
                .then(response => response.json())
                .then(comments => {
                        for (const comment of comments) {
                                let commentDiv = document.createElement("div");
                                commentDiv.className = `commentDiv`;
                                let titleComment = document.createElement("div");
                                titleComment.innerText = comment.email;
                                titleComment.className = `postTitleComment`;

                                let bodyComment = document.createElement("div");
                                bodyComment.innerText = comment.body;
                                bodyComment.className = `postBodyComment`;

                                commentDiv.append(titleComment, bodyComment);
                                postCommentsDiv.appendChild(commentDiv);
                        }
                })
        postInfoDiv.append(userId, Id, title, content);
        mainDiv.append(postInfoDiv, postCommentsDiv);
        document.body.appendChild(mainDiv);
    })