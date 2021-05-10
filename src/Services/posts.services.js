import { db } from '../firebase'

const getPostService = {
    async getPosts() {
        const data = []
        try {
            await db.collection('posts')
                .get()
                .then(res => {
                    res.forEach(doc => {
                        let post = doc.data();
                        data.push(post)
                    });
                })

            return data

        } catch (error) {
            throw new Error(error);
        }
    }
};

export default getPostService;