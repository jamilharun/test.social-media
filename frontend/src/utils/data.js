export const categories = [
    {
        name: 'anime',
        image: '' //images link
    },
    {
        name: 'memes',
        image: '' //images link
    },
    {
        name: 'cats',
        image: '' //images link
    },
    {
        name: 'dogs',
        image: '' //images link
    },
    {
        name: 'selfies',
        image: '' //images link
    },
    // you can add more categories if you want
]

export const userQuery = (userId) => {
    const query = `*[_type == "user" && _id == '${userId}']`;

    return query;
}
export const searchQuery = (searchTerm) => {
    const query = `*[_type == "pins" && title match '${searchTerm}' || category match '${searchTerm}' || about match '${searchTerm}']{
        image {
            asset -> {
                url
            }
        },
        _id,
        destination,
        postBy -> {
            _id,
            userName,
            image
        },
        save[] {
            _key,
            postedBy -> {
                _id,
                userName,
                image
            },
        },
    }`
    return query
}

export const feedQuery = `*[_type == 'pin'] | order(_createAt desc) {
    image {
        asset -> {
            url
        }
    },
    _id,
    destination,
    postBy -> {
        _id,
        userName,
        image
    },
    save[] {
        _key,
        postedBy -> {
            _id,
            userName,
            image
        },
    },
}`
