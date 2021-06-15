async function startProgram() {
    // Load downloaded TFLite model
    const model = await tfTask.NLClassification.CustomModel.TFLite.load({
        model:
            "https://storage.googleapis.com/tfweb/models/movie_review_sentiment_classification.tflite"
    });

    document.querySelector(".predict-button").addEventListener("click", async () => {
        const prediction = await model.predict(document.querySelector("textarea").value);

        // Show the results.
        document.querySelector(".predict-result").textContent = prediction.classes
            .map((c) => `${c.className}: ${c.score.toFixed(3)}`)
            .join(", ");
    });
}

startProgram();