# Lexiguard

A machine learning–powered text spam detection system built for the final NLP project, designed to help the La Alianza Hispana community identify and protect against spam messages.

Lexiguard includes multiple classifiers, a Flask API server, a React-based web client for real-time predictions, and an integrated digital literacy education component.

## Deployment

The application is currently deployed on Render: https://lexiguardnlp.onrender.com/

**Note:** Due to free tier memory constraints (512MB), the deployed version only runs Logistic Regression. For full 4-model functionality, run locally.

## Demo Video

https://youtu.be/gk5xpqXjcR0

## Features

### Spam Detection Models

| Model | Description |
|---|---|
| Logistic Regression | Reliable linear classifier |
| Naive Bayes | Probabilistic classifier with stemming |
| Neural Network | Dense feed-forward classifier |
| Transformer | DistilBERT fine-tuned model (99.28% accuracy) |

The Flask API supports all 4 models with dynamic switching via dropdown selector.

### Digital Literacy Education

Designed specifically for elderly members of the La Alianza Hispana community, Lexiguard includes:
- **Real-time spam indicator detection** - Identifies 8 warning signs in messages (urgency, free prizes, ALL CAPS, suspicious links, etc.)
- **Interactive education modal** - Explains why a message is spam and what specific red flags were detected
- **Bilingual support (EN/ES)** - Full Spanish translations for accessibility
- **Safety tips** - Actionable advice to protect against scams (never share passwords, verify sender identity, etc.)
- **Visual feedback** - Animated text box pulses (green for safe, red for spam) to reinforce learning

The education component directly supports service learning objectives by teaching digital literacy skills to vulnerable community members.

## Steps to run:

### Prerequisites

If pulling for the first time, install Git LFS to download the Transformer model:

```bash
brew install git-lfs
git lfs install
git lfs pull
```

### Environment Setup

Create a `.env` file in `client/` with:

```
REACT_APP_API_URL=http://localhost:8000
```

### Server

```bash
cd server
pip install -r requirements.txt
python -c "import nltk; nltk.download('punkt')"
python app.py
```

The backend will start on: http://localhost:8000

### Client

```bash
cd client
npm install
npm start
```

The frontend will start on: http://localhost:3000

## Project Structure

```
LexiguardNLP/
├── client/               # React frontend
├── server/              # Flask API
│   ├── app.py          # Multi-model API server
│   ├── *.pkl           # Serialized models & vectorizers
│   ├── *.keras         # Neural network model
│   └── transformer_*/  # DistilBERT model & tokenizer
└── models/             # Jupyter notebooks for training
```
