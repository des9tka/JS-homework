fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(users =>  {
            let mainDiv = document.createElement("div");
            mainDiv.className = `firstMainDiv`;
            for (const user of users) {
                let nameDivWrap = document.createElement("div");
                nameDivWrap.className = `wrapDiv`;

                let titleNameDiv = document.createElement("div");
                let titleText = document.createElement("p");

                titleText.innerText = `Id - ${user.id}\n Name - ${user.name}`;

                titleNameDiv.appendChild(titleText)
                titleNameDiv.className = `titleNameDiv`;

                let btnDiv = document.createElement("div");
                btnDiv.className = `btnDiv`

                let a = document.createElement("a");
                a.href = `user-details.html?id=${user.id}`;
                a.className = `aBtn`;

                let btn = document.createElement("button");
                btn.innerText = `More info`;
                btn.className = `moreInfoBtn`;

                a.appendChild(btn);
                btnDiv.appendChild(a);
                nameDivWrap.append(titleNameDiv, btnDiv);
                mainDiv.append(nameDivWrap);
                document.body.appendChild(mainDiv);
            }});