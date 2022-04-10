let state = {
    profilePage: {
        postsData: [
            { id: 1, message: "Привет" },
            { id: 2, message: "Социальная" },
            { id: 3, message: "Сеть" },
            { id: 4, message: "PicoBook" },
            { id: 5, message: "Ебучие" },
            { id: 6, message: "Пропсы" },
            { id: 7, message: "Работайте" },
            { id: 8, message: "Пожалуйста" },
        ]
    },
    messagesPage: {
        messagesData: [
            { id: 1, message: "Привет" },
            { id: 2, message: "Социальная" },
            { id: 3, message: "Сеть" },
            { id: 4, message: "PicoBook" },
            { id: 5, message: "!!!!" },
        ],
        dialogsData: [
            { id: 1, name: "Петя" },
            { id: 2, name: "Вася" },
            { id: 3, name: "Коля" },
            { id: 4, name: "Жорик" },
            { id: 5, name: "Витя" },
        ],
    }
}

export let addPost = (postMessage) => {
    debugger;
    let newPost = {
        id: 9,
        message: postMessage
    }
    state.profilePage.postsData.push(newPost);
}


export default state;