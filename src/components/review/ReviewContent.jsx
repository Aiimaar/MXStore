import React, { useState, useEffect } from 'react';
import ReviewService from "../../services/review-config.js";
import "./ReviewContent.css";

function ReviewContent() {
    const [name, setName] = useState("");
    const [reviewText, setReviewText] = useState("");
    const [reviews, setReviews] = useState([]);
    const [adminPassword, setAdminPassword] = useState("");
    const [showPasswordDialog, setShowPasswordDialog] = useState(false);
    const [selectedReviewToBeModified, setSelectedReviewToBeModified] = useState(null);
    const [selectedReviewId, setSelectedReviewId] = useState(null); // Nuevo estado para guardar la clave de la reseña seleccionada para eliminar
    const [canAdd, setCanAdd] = useState(true);
    const [errorMessage, setErrorMessage] = useState("");

    const getAllReviews = () => {
        ReviewService.getAllReviews((data) => {
            setReviews(data);
        });
    }

    useEffect(() => {
        getAllReviews();
    }, []);

    const handleChangeName = (e) => {
        setName(e.target.value);
    }

    const handleChangeReviewText = (e) => {
        setReviewText(e.target.value);
    }

    const handleAddOrModifyReview = (e) => {
        e.preventDefault();
        if (name.trim() === "" || reviewText.trim() === "") {
            setErrorMessage("Todos los campos son obligatorios.");
            return;
        }
        if (canAdd) {
            addReview(name, reviewText);
        } else {
            updateReview(name, reviewText, selectedReviewToBeModified.key);
        }
    }

    const addReview = (nameData, reviewTextData) => {
        ReviewService.addReview(nameData, reviewTextData).then(() => {
            console.log("Reseña añadida con éxito");
            setName("");
            setReviewText("");
            getAllReviews();
            setErrorMessage("");
        }).catch(error => {
            console.error("Error al añadir la reseña:", error);
            alert("Ocurrió un error al añadir la reseña. Por favor, inténtalo de nuevo más tarde.");
        });
    }

    const updateReview = (nameData, reviewTextData, keyData) => {
        ReviewService.updateReview(nameData, reviewTextData, keyData).then(() => {
            console.log("Reseña actualizada con éxito");
            setName("");
            setReviewText("");
            setSelectedReviewToBeModified(null);
            getAllReviews();
            setCanAdd(true);
        }).catch(error => {
            console.error("Error al actualizar la reseña:", error);
            alert("Ocurrió un error al actualizar la reseña. Por favor, inténtalo de nuevo más tarde.");
        });
    }

    const handleModifyReview = (review) => {
        setCanAdd(false);
        setSelectedReviewToBeModified(review);
        setShowPasswordDialog(true);
    }

    const handleDeleteReview = (reviewKey) => {
        setSelectedReviewId(reviewKey);
        setShowPasswordDialog(true);
    }

    const handleConfirmPassword = () => {
        if (adminPassword === "123") {
            if (selectedReviewToBeModified) {
                setName(selectedReviewToBeModified.name);
                setReviewText(selectedReviewToBeModified.review);
                setCanAdd(false);
            } else if (selectedReviewId) {
                ReviewService.deleteReview(selectedReviewId)
                    .then(() => {
                        console.log("Reseña eliminada con éxito");
                        getAllReviews();
                    })
                    .catch(error => {
                        console.error("Error al eliminar la reseña:", error);
                        alert("Ocurrió un error al eliminar la reseña. Por favor, inténtalo de nuevo más tarde.");
                    });
                setSelectedReviewId(null);
            }
            setShowPasswordDialog(false);
            setErrorMessage("");
        } else {
            alert("Contraseña incorrecta. Por favor, inténtalo de nuevo.");
        }
        setAdminPassword("");
    }

    return (
        <div className="review-container">
            <div className="review-overlay">
                <div className="review-content">
                    <h2>¿Que Opinan Nuestros Clientes?</h2>
                    <ul className="reviews-list">
                        {reviews.map((review, index) => (
                            <li key={index}>
                                <div className="review-item">
                                    <strong>{review.name}: </strong> {review.review}
                                    <div className="review-buttons">
                                        <button onClick={() => handleModifyReview(review)}>Modificar</button>
                                        <button onClick={() => handleDeleteReview(review.key)}>Eliminar</button>
                                    </div>
                                </div>
                            </li>
                        ))}
                    </ul>
                    {errorMessage && (
                        <p style={{ backgroundColor: "red", color: "black", textAlign: "center", padding: "5px" }}>{errorMessage}</p>
                    )}
                    <form onSubmit={handleAddOrModifyReview}>
                        <label htmlFor="name">Nombre </label>
                        <input type="text" id="name" name="name" value={name} onChange={handleChangeName} />
                        <label htmlFor="reviewText">¿Cual Es Tu Opinión? </label>
                        <textarea id="reviewText" name="reviewText" value={reviewText} onChange={handleChangeReviewText} />
                        <button type="submit">{selectedReviewToBeModified ? "Actualizar Reseña" : "Añadir Reseña"}</button>
                    </form>
                </div>
            </div>
            {showPasswordDialog && (
                <div className="popup-overlay">
                    <div className="popup-content">
                        <p>¿Estás seguro de querer {selectedReviewToBeModified ? 'modificar la reseña' : 'eliminar la reseña'}?</p>
                        <input type="password" value={adminPassword} onChange={(e) => setAdminPassword(e.target.value)} placeholder="Introduce la contraseña del admin" />
                        <button onClick={handleConfirmPassword}>Confirmar</button>
                    </div>
                </div>
            )}
        </div>
    );
}

export default ReviewContent;