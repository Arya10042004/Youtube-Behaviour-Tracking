// Assuming you have an endpoint on your backend to handle this data
function sendAnalyticsToBackend() {
    const analyticsData = {
        totalTimeSpent: totalTimeSpent,
        playEvents: playEvents,
        pauseEvents: pauseEvents,
        replayEvents: replayEvents
    };

    // Send data to the backend (using Fetch or Axios)
    fetch('/save-analytics', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(analyticsData)
    })
    .then(response => response.json())
    .then(data => {
        console.log('Analytics saved successfully', data);
    })
    .catch((error) => {
        console.error('Error sending analytics:', error);
    });
}
