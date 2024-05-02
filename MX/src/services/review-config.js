import { push, onValue, ref, update, remove } from "firebase/database";
import db from "./firebase-config.js";

const refReviews = ref(db, "/reviews");

const addReview = (name, review) => {
    return push(refReviews, {
        name: name,
        review: review
    });
}

const updateReview = (name, review, key) => {
    console.log(key)
    const refUpdate = ref(db, `/reviews/${key}`)
    return update(refUpdate, {
        name: name,
        review: review
    });
}

const deleteReview = (key) => {
    const refDelete = ref(db, `/reviews/${key}`);
    return remove(refDelete);
}

const getAllReviews = (callback) => {
    onValue(refReviews, (snapshot) => {
        const reviews = [];
        snapshot.forEach((childSnapshot) => {
            reviews.push({
                key: childSnapshot.key,
                name: childSnapshot.val().name,
                review: childSnapshot.val().review
            });
        });
        callback(reviews);
    });
}

export default {
    addReview,
    getAllReviews,
    updateReview,
    deleteReview
}