let state = {
   profilePage: {
       postData: [
           {message: 'Hi there', likesCount: 11},
           {message: 'This is my first react app', likesCount: 12},
           {message: 'I am very happy to do this project', likesCount: 33},
           {message: 'This posts will be update in short time', likesCount: 51}
       ]
   },
    messagesWindow: {
        dialogData: [
            {name: 'Mike', id: 1, avatarSource: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHpRxV2tcx9wtnuGsnV2-RSAIUX2pF6fuXwg&usqp=CAU' },
            {name: 'David', id: 2, avatarSource: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRs6im7lK8hccrEWsTm2vcRpD1MAXQdySNklA&usqp=CAU'},
            {name: 'Sara', id: 3, avatarSource: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQPyLojKz7-P2jf3ZYFiY39NT0X8CrFsqKdg&usqp=CAU'},
            {name: 'Michele', id: 4, avatarSource: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTC4jRg1btnvqAdcADoMgIw6RyQIXMOpZw-kg&usqp=CAU'},
            {name: 'Diana', id: 5, avatarSource: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYC7L9L-A8G_Cb2y4I5jBBVEt-lD1tfxdX8Q&usqp=CAU'}
        ],
        messages: [
            {message: "Hi"},
            {message: "How are you?"},
            {message: "Maybe we will do something with project?"},
            {message: "Yo. I will write message to you soon"}
        ]
    },
    sidebar: {
       friends: [
{name: 'Mike', id: 1, avatarSource: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHpRxV2tcx9wtnuGsnV2-RSAIUX2pF6fuXwg&usqp=CAU' },
{name: 'David', id: 2, avatarSource: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRs6im7lK8hccrEWsTm2vcRpD1MAXQdySNklA&usqp=CAU'},
{name: 'Sara', id: 3, avatarSource: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQPyLojKz7-P2jf3ZYFiY39NT0X8CrFsqKdg&usqp=CAU'},
{name: 'Michele', id: 4, avatarSource: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTC4jRg1btnvqAdcADoMgIw6RyQIXMOpZw-kg&usqp=CAU'},
{name: 'Diana', id: 5, avatarSource: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYC7L9L-A8G_Cb2y4I5jBBVEt-lD1tfxdX8Q&usqp=CAU'}
   ]
    }
}

export default state;