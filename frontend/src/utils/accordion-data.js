const faq = [
	{
		title: "Ideal image for classification?",
		content:
			"The uploaded image should clearly show the skin lesion without any background. Our trained model uses color, shape, texture, and pattern features for classification.",
	},
	{
		title: "I'm getting wrong results?",
		content:
			"Upload images only if they contain a visible skin lesion and size should be 32x32. This app will classify any image into 7 types of skin lesion.",
	},
	{
		title: "What skin diseases can the app predicts?",
		content:
			"The app can only classify 7 skin diseases present in the HAM10000 dataset, including Melanocytic nevi, Melanoma, Basal cell carcinoma, Actinic keratoses, Benign keratosis-like lesions, Dermatofibroma,and Vascular lesions",
	},
	{
		title: "Is the app better than consulting a doctor?",
		content:
			"No, We are only helping for early predicting of skin lesions.",
	},
	{
		title: "Why should I use this app?",
		content:
			"Using this app for early detection of skin lesions can help in better treatment outcomes. It provides classification of skin lesions, aiding in timely medical treatment.",
	},
];
export default faq;
