function loadAndRunFile(htmlFrameID, videoPlayerID, fileInputID) {
    const fileInput = document.getElementById(fileInputID);
    const contentContainer = document.getElementById("contentContainer");
    const htmlFrame = document.getElementById(htmlFrameID);
    const videoPlayer = document.getElementById(videoPlayerID);

    if (fileInput.files.length === 0) {
        alert("Please select an HTML or MP4 file.");
        return;
    }

    const file = fileInput.files[0];

    if (file.type.startsWith("text/html")) {
        // Load and display an HTML file
        const reader = new FileReader();

        reader.onload = function(event) {
            const htmlContent = event.target.result;
            const htmlDoc = new DOMParser().parseFromString(htmlContent, "text/html");

            // Ensure the content is an HTML document
            if (!htmlDoc.documentElement || htmlDoc.documentElement.nodeName !== "HTML") {
                alert("The selected file is not a valid HTML document.");
                return;
            }

            // Hide video player and show HTML frame
            videoPlayer.style.display = "none";
            htmlFrame.style.display = "block";

            // Set the iframe's content to the loaded HTML
            htmlFrame.srcdoc = htmlContent;
        };

        reader.readAsText(file);
    } else if (file.type.startsWith("video/mp4")) {
        // Load and display an MP4 video
        // Hide HTML frame and show video player
        htmlFrame.style.display = "none";
        videoPlayer.style.display = "block";

        // Set the source of the video player
        videoPlayer.src = URL.createObjectURL(file);
    } else {
        alert("Unsupported file type. Please select an HTML or MP4 file.");
    }
}