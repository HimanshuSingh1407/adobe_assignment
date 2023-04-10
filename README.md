# adobe_assignment

# Method = Post(User)
Api = https://adobebackend-mjc1.onrender.com/users

Request = {
"name" : "rahul",
"email": "rahul@gmail.com",
"bio": "hello rahul"
}

Response = {
"id": "14c3rv1ilgadkihv",
"name": "rahul",
"email": "rahul@gmail.com",
"bio": "hello rahul",
"\_id": "64339a39828bf8155164454b",
"createdAt": "2023-04-10T05:10:17.251Z",
"updatedAt": "2023-04-10T05:10:17.251Z",
"\_\_v": 0
}

# Method = Post(post)
Api = https://adobebackend-mjc1.onrender.com/posts

Request = {
"content": "hello rahul how are you"
}

Response = {
{"\_id":{"$oid":"64339d12828bf8155164455c"},"id":"14c3rv1ilgae050t","user_id":{"$oid":"64339cf7828bf81551644558"},"content":"hello rahul how are you","likes":{"$numberInt":"0"},"createdAt":{"$date":{"$numberLong":"1681104146285"}},"updatedAt":{"$date":{"$numberLong":"1681104146285"}},"__v":{"$numberInt":"0"}}
}

# Method = Get(user)
Api = https://adobebackend-mjc1.onrender.com/users

Request = {}

Response = [
    {
        "_id": "6431415edc4a8860cb2f2098",
        "id": "2c59bb2polg7tzn3j",
        "name": "imran",
        "email": "himanshu@gmail.com",
        "bio": "hello",
        "createdAt": "2023-04-08T10:26:38.401Z",
        "updatedAt": "2023-04-09T18:05:42.026Z",
        "__v": 0
    },
    {
        "_id": "6431c1f5f4a2cbfda05d5567",
        "id": "8cxcclb2olg8dl7cx",
        "name": "nidhi",
        "email": "nidhi123@gmail.com",
        "bio": "My name is nidhi",
        "createdAt": "2023-04-08T19:35:17.206Z",
        "updatedAt": "2023-04-09T11:12:40.649Z",
        "__v": 0
    },
    {
        "_id": "6432326edd349bc299e0b466",
        "id": "sp59v29828lg8uqcd7",
        "name": "fdbdfbdcbvc",
        "email": "nidhi12@gmail.com",
        "bio": "My name is nidhi1",
        "createdAt": "2023-04-09T03:35:10.387Z",
        "updatedAt": "2023-04-09T11:13:13.933Z",
        "__v": 0
    },
    {
        "_id": "6432332edd349bc299e0b468",
        "id": "sp59v29828lg8uugpk",
        "name": "chandra",
        "email": "abs@gmail.com",
        "bio": "my name is chandra",
        "createdAt": "2023-04-09T03:38:22.618Z",
        "updatedAt": "2023-04-09T03:38:22.618Z",
        "__v": 0
    },
    {
        "_id": "64327310dd349bc299e0b471",
        "id": "sp59v29828lg94kzin",
        "name": "abcd",
        "email": "abcd@gmail.com",
        "bio": "dkfhdskjhgkjdfhgvkjsdbvjksjdvhns",
        "createdAt": "2023-04-09T08:10:56.630Z",
        "updatedAt": "2023-04-09T08:10:56.630Z",
        "__v": 0
    },
    {
        "_id": "64327356dd349bc299e0b473",
        "id": "sp59v29828lg94mh9m",
        "name": "abcd",
        "email": "abcd@gmail.com",
        "bio": "dkfhdskjhgkjdfhgvkjsdbvjksjdvhns",
        "createdAt": "2023-04-09T08:12:06.252Z",
        "updatedAt": "2023-04-09T08:12:06.252Z",
        "__v": 0
    },
    {
        "_id": "6432847314bb5f211d826f86",
        "id": "hfgfrj08lg978dyp",
        "name": "imran",
        "email": "imran@gmail.com",
        "bio": "jdkfjskjflsjfkljsdfkjds;fj;jf;ksd",
        "createdAt": "2023-04-09T09:25:07.982Z",
        "updatedAt": "2023-04-09T09:25:07.982Z",
        "__v": 0
    },
    {
        "_id": "643397c3828bf81551644541",
        "id": "14c3rv1ilgad70ej",
        "name": "priya",
        "email": "priya@gmail.com",
        "bio": "hello priya",
        "createdAt": "2023-04-10T04:59:47.278Z",
        "updatedAt": "2023-04-10T04:59:47.278Z",
        "__v": 0
    },
    {
        "_id": "64339cf7828bf81551644558",
        "id": "14c3rv1ilgadzkgo",
        "name": "rahul",
        "email": "rahul@gmail.com",
        "bio": "hello rahul",
        "createdAt": "2023-04-10T05:21:59.640Z",
        "updatedAt": "2023-04-10T05:21:59.640Z",
        "__v": 0
    }
]

# Method = GetUserById(user)
Api = https://adobebackend-mjc1.onrender.com/users/${id}

Request = {}

Response = {
    "_id": "643397c3828bf81551644541",
    "id": "14c3rv1ilgad70ej",
    "name": "priya",
    "email": "priya@gmail.com",
    "bio": "hello priya",
    "createdAt": "2023-04-10T04:59:47.278Z",
    "updatedAt": "2023-04-10T04:59:47.278Z",
    "__v": 0
}


