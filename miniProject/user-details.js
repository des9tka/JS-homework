let url = new URL(location.href);
let id = url.searchParams.get('id');

fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
    .then(response => response.json())
    .then(user => {
         let wrapSecPage = document.createElement("div");
         wrapSecPage.className = `wrapSecPage`;

         let mainDiv = document.createElement("div");
         mainDiv.className = 'secPageMainDiv';

         let idDiv = document.createElement("div");
         idDiv.innerText = `Id - ${user.id}`;
         idDiv.className = `standart secPageId margin10 border contentCenter`;

         let nameDiv = document.createElement("div");
         nameDiv.innerText = `Name - ${user.name}`;
         nameDiv.className = `standart secPageName margin10 border contentCenter`;

         let userNameDiv = document.createElement("div");
         userNameDiv.innerText = `Username - ${user.username}`;
         userNameDiv.className = `standart secPageUserName margin10 border contentCenter`;

         let userEmailDiv = document.createElement("div");
         userEmailDiv.innerText = `Email - ${user.email}`;
         userEmailDiv.className = `standart secPageUserEmail margin10 border contentCenter`;

         let userAddressDiv = document.createElement("div");
         userAddressDiv.innerText = `Address:\n Street - ${user.address.street}\n Suite - ${user.address.suite}\n City - ${user.address.city}\n ZipCode - ${user.address.zipcode}\n\n\ Geo:\n lat - ${user.address.geo.lat}\n lng - ${user.address.geo.lng}`
         userAddressDiv.className = `standart secPageUserAddress margin10 border contentCenter`;

         let userPhoneDiv = document.createElement("div");
         userPhoneDiv.innerText = `Phone - ${user.phone}`;
         userPhoneDiv.className = `standart secPageUserPhone margin10 border contentCenter`;

         let userWebsiteDiv = document.createElement("div");
         userWebsiteDiv.innerText = `Website - ${user.website}`;
         userWebsiteDiv.className = `standart secPageUserWebsite margin10 border contentCenter`;

         let userCompanyDiv = document.createElement("div");
         userCompanyDiv.innerText = `Company:\n Name - ${user.company.name}\n CatchPhrase - ${user.company.catchPhrase}\n bs - ${user.company.bs}`;
         userCompanyDiv.className = `standart secPageUserCompany margin10 border contentCenter`;


         let allPostsA = document.createElement("a");
         allPostsA.className = `secPostA`;

         let allPostsBtn = document.createElement("button");
         allPostsBtn.innerText = `Post of current user`;
         allPostsBtn.className = `secPageUserBtn margin10`;

         allPostsA.appendChild(allPostsBtn);

         let click = 0;

        let userPostsDiv = document.createElement("div");
        userPostsDiv.className = `allPosts`;

         allPostsBtn.onclick = function () {
             fetch(`https://jsonplaceholder.typicode.com/users/${id}/posts`)
             .then(response => response.json())
                 .then(postInf0 => {
                     if (click === 0) {
                         for (const post of postInf0) {
                             let onePostDiv = document.createElement("div");
                             onePostDiv.className = `oneOfThePosts`;

                             let postTitle = document.createElement("div");
                             postTitle.innerText = post.title;
                             postTitle.className = `postTitle`;
                             postTitle.style.fontSize = `12px`;

                             let postBtn = document.createElement("button");
                             postBtn.innerText = `Post details`;
                             postBtn.className = `postBtn`;

                             let linkBtn = document.createElement("a");
                             linkBtn.href = `post-details.html?post=${post.id}`;

                             linkBtn.appendChild(postBtn);

                             onePostDiv.append(postTitle, linkBtn);
                             userPostsDiv.appendChild(onePostDiv);
                         }
                         wrapSecPage.appendChild(userPostsDiv);
                         click++;
                     } else if (click === 1) {
                             wrapSecPage.removeChild(userPostsDiv);
                             click++;
                         } else if (click === 2) {
                             wrapSecPage.appendChild(userPostsDiv);
                             click--;
                         }
                 })
         }
         mainDiv.append(idDiv, nameDiv, userNameDiv, userEmailDiv, userAddressDiv, userPhoneDiv, userWebsiteDiv, userCompanyDiv, allPostsA);
         wrapSecPage.appendChild(mainDiv);
         document.body.appendChild(wrapSecPage);
     })