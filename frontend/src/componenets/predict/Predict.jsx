import { useState, useEffect } from "react";
import axios from "axios";
import "./predict.css";

function Predict({ disease, imagePath, predict, disable }) {
	const [data, setData] = useState("");
	const [val, setVal] = useState("Upload image to predict");
	const [flag, setFlag] = useState(false);
	const [filename, setFilename] = useState("No file Uploaded");
	const [file, setFile] = useState(null);
	const [imageURL, setImageURL] = useState(null); // State to store image URL
	// console.log("data:", data);

	useEffect(() => {
		fetch("http://localhost:5000")
			// fetch("https://8hlxsc9c-5000.inc1.devtunnels.ms/")
			// fetch("https://8hlxsc9c-5000.inc1.devtunnels.ms/")
			.then((res) => res.json())
			.then((data) => {
				// console.log("msg :", data.message);
				setData(data.message);
			});
	}, [val]);

	const handleSubmit = async (event) => {
		event.preventDefault();
		if (filename !== "No file Uploaded") {
			const formData = new FormData();
			formData.append("file", file);
			predict(true);

			try {
				axios
					.post(
						// "https://8hlxsc9c-5000.inc1.devtunnels.ms/upload",
						"http://localhost:5000/upload",
						formData
					)
					.then((res) => {
						console.log("data-message", res.data.message);
						setVal(res.data.message);
						disease(res.data.message[0]);
						imagePath(res.data.message[1]);
					});
			} catch (error) {
				console.error(error);
			}
		} else {
			setFlag(true);
		}
	};

	const handleFileUpload = (e) => {
		e.preventDefault();
		const uploadedFile = e.target.files[0];
		setFile(uploadedFile);
		setFilename(uploadedFile.name);
		// Read the file and set the image URL
		const reader = new FileReader();
		reader.onload = () => {
			setImageURL(reader.result);
		};
		reader.readAsDataURL(uploadedFile);
	};

	const handleDrop = (e) => {
		e.preventDefault();
		const uploadedFile = e.dataTransfer.files[0];
		setFile(uploadedFile);
		setFilename(uploadedFile.name);
		// Read the file and set the image URL
		const reader = new FileReader();
		reader.onload = () => {
			setImageURL(reader.result);
		};
		reader.readAsDataURL(uploadedFile);
	};

	const clearImage = () => {
		setImageURL(null); // Clear the image URL
		setFilename("No file Uploaded"); // Reset the filename
		disease(null);
		predict(false);
		imagePath(null);
		setVal("Upload image to predict");
		setFile(null);
	};

	return (
		<>
			<form
				onSubmit={handleSubmit}
				className="form"
				onDrop={handleDrop}
				onDragOver={(e) => e.preventDefault()}>
				<div className="skin-lesion-detection">
					<input
						type="file"
						id="upload"
						style={{ display: "none" }}
						name="file"
						onChange={handleFileUpload}
						accept=".jpg,.jpeg,.png"
					/>
					{imageURL ? (
						<div className="image-preview">
							<img src={imageURL} alt="Uploaded" />
							<button
								type="button"
								onClick={clearImage}
								className="clear-button">
								Clear
							</button>
						</div>
					) : (
						<div className="drag-drop-zone">
							<label
								htmlFor="upload"
								className="choose-file-button">
								Upload file
							</label>
							<p>or drag and drop here</p>
						</div>
					)}
				</div>

				<span>File Uploaded: {filename}</span>
				{flag ? (
					<span style={{ color: "red" }}>
						Please upload a file to proceed.
					</span>
				) : null}
				<div>
					<button
						type="submit"
						disabled={disable}
						className={`${disable ? "disabled" : ""}`}>
						PREDICT
					</button>
				</div>
			</form>
		</>
	);
}

export default Predict;
