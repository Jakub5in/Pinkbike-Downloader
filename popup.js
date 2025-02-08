document.getElementById("download-btn").addEventListener("click", async () => {
  // Get the active tab
  let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });

  if (tab && tab.url) {
    const url = tab.url;
    const regex = /https:\/\/www\.pinkbike\.com\/photo\/(\d+)\//;

    // Check if the URL matches the Pinkbike photo format
    const match = url.match(regex);
    if (match && match[1]) {
      const photoId = match[1];
      
      // Construct the new URL
      const downloadUrl = `https://lp1.pinkbike.org/p0pb${photoId}/${photoId}.jpg`;

      // Navigate to the new URL
      window.open(downloadUrl, '_blank'); // Opens the download URL in a new tab
    } else {
      alert("This is not a valid Pinkbike photo URL.");
    }
  } else {
    alert("Unable to get the active tab URL.");
  }
});
