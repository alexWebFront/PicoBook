window.onload = function () {
    let sendButton = document.querySelector(".posts__send");
    let message = document.querySelector(".posts__field");

    let messageOut = document.querySelector(".posts__items");

    let count = 0;

    function clearTextarea() {
        message.value = "";
    }

    sendButton.onclick = () => {
        let temp = message.value;

        clearTextarea();

        function createPost() {
            if (temp !== "") {
                count++;
                let post = document.createElement("div");
                post.classList.add("posts__item");
                post.innerHTML = `<p class="post-count">Пикомысль №${count}<p/>${temp}`;
                messageOut.prepend(post);
            } else {
                return;
            }
        }
        createPost();
    }
};
