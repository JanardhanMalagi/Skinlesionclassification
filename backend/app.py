"""
Werkzeug provides a bunch of utilities for developing WSGI-compliant applications.
These utilities do things like parsing headers, sending and receiving cookies,
providing access to form data, generating redirects, generating error pages when
there's an exception, even providing an interactive debugger that runs in the browser.
Flask then builds upon this foundation to provide a complete web framework.
"""

import os

from flask import Flask, flash, jsonify, request
from flask_cors import CORS
from main import getPrediction
from werkzeug.utils import secure_filename

# Save images to the 'static' folder as Flask serves images from this directory
UPLOAD_FOLDER = "uploaded_images/"

# Create an app object using the Flask class.
app = Flask(__name__, static_folder="static")
CORS(app)

# Add reference fingerprint.
# Cookies travel with a signature that they claim to be legit.
# Legitimacy here means that the signature was issued by the owner of the cookie.
# Others cannot change this cookie as it needs the secret key.
# It's used as the key to encrypt the session - which can be stored in a cookie.
# Cookies should be encrypted if they contain potentially sensitive information.
app.secret_key = "secret key"

# Define the upload folder to save images uploaded by the user.
app.config["UPLOAD_FOLDER"] = UPLOAD_FOLDER


# Define the route to be home.
# The decorator below links the relative route of the URL to the function it is decorating.
# Here, index function is with '/', our root directory.
# Running the app sends us to index.html.
# Note that render_template means it looks for the file in the templates folder.
@app.route("/")
def index():
    return {"message": "Hello, World!"}


# Add Post method to the decorator to allow for form submission.
@app.route("/upload", methods=["POST"])
def upload():
    if request.method == "POST":
        if "file" not in request.files:
            return jsonify({"message": "No file"})
        file = request.files["file"]
        if file.filename == "":
            return jsonify({"message": "No file"})
        if file:
            filename = secure_filename(
                file.filename
            )  # Use this werkzeug method to secure filename.
            file.save(os.path.join(app.config["UPLOAD_FOLDER"], filename))
            # getPrediction(filename)
            label = getPrediction(filename)
            flash(label)
            print(flash(label))
            full_filename = os.path.join(app.config["UPLOAD_FOLDER"], filename)
            flash(full_filename)
            return jsonify({"message": [label, full_filename]})


if __name__ == "__main__":
    app.run()
