document.addEventListener("DOMContentLoaded", (event) => {
    let screenVideo = document.getElementById("screenVideo");
    let startScreenShare = document.getElementById("startScreenShare");

    startScreenShare.addEventListener("click", () => {
        console.log("Button clicked, attempting to share screen...");
        if (navigator.mediaDevices && navigator.mediaDevices.getDisplayMedia) {
            navigator.mediaDevices
                .getDisplayMedia({ video: true })
                .then(function (stream) {
                    console.log("Screen sharing started.");
                    screenVideo.srcObject = stream;
                })
                .catch(function (error) {
                    console.error("Error sharing screen: ", error);
                });
        } else {
            console.error("getDisplayMedia is not supported in this browser.");
            alert("Screen sharing is not supported in your browser.");
        }
    });
});
