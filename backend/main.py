"""
The 7 classes of skin cancer lesions included in this dataset are:
Melanocytic nevi (nv)
Melanoma (mel)
Benign keratosis-like lesions (bkl)
Basal cell carcinoma (bcc) 
Actinic keratoses (akiec)
Vascular lesions (vas)
Dermatofibroma (df)

"""

import os

import cv2
import numpy as np
from PIL import Image
from sklearn.preprocessing import LabelEncoder
from tensorflow.keras.models import load_model


def resize_image(img_path, size):
    img = cv2.imread(img_path)
    img_resized = cv2.resize(img, (size, size))
    return img_resized


def getPrediction(filename):
    classes = [
        "Actinic keratoses",
        "Basal cell carcinoma",
        "Benign keratosis-like lesions",
        "Dermatofibroma",
        "Melanoma",
        "Melanocytic nevi",
        "Vascular lesions",
    ]

    le = LabelEncoder()
    le.fit(classes)
    le.inverse_transform([2])

    # Load model
    my_model = load_model("model/final_model.h5")

    SIZE = 32  # Resize to same size as training images
    img_path = "uploaded_images/" + filename

    # # Resize the image
    # img_resized = resize_image(img_path, SIZE)
    img = np.asarray(Image.open(img_path).resize((SIZE, SIZE)))

    # img = np.asarray(Image.fromarray(img_resized))  # Convert to array for compatibility
    img = img / 255.0  # Scale pixel values
    img = np.expand_dims(img, axis=0)  # Get it ready as input to the network

    pred = my_model.predict(img)  # Predict

    # Convert prediction to class name
    pred_class = le.inverse_transform([np.argmax(pred)])[0]
    if pred_class == "Melanoma":
        pred_class = "Melanocytic nevi"
    elif pred_class == "Melanocytic nevi":
        pred_class = "Melanoma"
    print("Diagnosis is:", pred_class)
    return pred_class


# Example usage:
# filename = "test/df.jpg"
# prediction = getPrediction(filename)
