# ⚙️ Cast Metal Impeller Anomaly Detection (Streamlit App)
 A Streamlit web application for real-time detection of manufacturing defects in cast metal impellers. This project uses a deep learning model trained using Teachable Machine and deployed via Streamlit to classify images as 'Normal' or 'Anomaly'.

## 📋 Table of Contents
 - Project Overview
 - Features
 - Technology Stack
 - Project Structure
 - Setup and Installation
 - Deployment
 - Dataset
 - License

## 📝 Project Overview
  Identifying defects in cast parts like impellers is essential to quality control in manufacturing. Manual inspection is labor-intensive and inconsistent. This app introduces an AI-powered inspection system using a trained TensorFlow model to analyze impeller images and determine whether they are defective or acceptable. It’s all wrapped in a user-friendly Streamlit interface for ease of use.

## ✨ Features
  - 📷 Image Upload: Upload an image of a cast impeller for instant analysis.
  - ⚡ Real-Time Analysis: Classifies the image as ‘Normal’ or ‘Anomaly’ using a CNN.
  - 🎯 Confidence Score: Shows prediction confidence with visual feedback.
  - ✅ Quality Decision: Suggests actions based on the classification result.
  - 🧾 Informative Sidebar: Provides project info and how-to-use instructions.
  - 📚 Built-in Examples: Displays example images of normal and defective castings.

## 🛠️ Technology Stack
  - **Model Training:** Google’s Teachable Machine
  - **Deep Learning Framework:** TensorFlow / Keras 3
  - **App Framework:** Streamlit
  - **Language:** Python 3.10
  - **Libraries:** NumPy, Pillow
  - **Deployment:** Streamlit Community Cloud

## 📂 Project Structure

````
impeller-anomaly-detector/
│
├── my_model/               # Trained TensorFlow SavedModel directory
│   ├── saved_model.pb
│   └── variables/
│
├── app.py                  # Main Streamlit application file
├── labels.txt              # Text file with class names
├── requirements.txt        # Dependencies for running the app
├── ok_example.jpeg         # Sample image of a normal impeller
├── def_example.jpeg        # Sample image of a defective impeller
└── README.md               # This file
````

## ☁️ Deployment
The app can be deployed for free on Streamlit Community Cloud.
🔗 Live Demo: [**https://anomaly-detection-fenil.streamlit.app/**]

## 📊 Dataset
The original model was trained using the Teachable Machine with a curated dataset of impeller images.
For advanced training, you can use the following:
  - **Kaggle:** Casting Product Image Data for Quality Inspection
  - **Dataset Link:** https://www.kaggle.com/datasets/ravirajsinh45/real-life-industrial-dataset-of-casting-product
