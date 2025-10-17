// converts dates and times into human readable format
function toHumanReadableDate(dateInput) {
  const date = new Date(dateInput);
  if (isNaN(date)) return "Invalid date";
  return date.toLocaleString(undefined, {
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "numeric",
    minute: "2-digit",
    hour12: true,
  });
}
// shows status message after cache is cleared
function showCacheClearedStatus(startTime, endTime) {
  const statusDiv = document.getElementById("status");
  if (!statusDiv) return;
  const start = toHumanReadableDate(startTime);
  const end = toHumanReadableDate(endTime);
  statusDiv.textContent = `Successfully cleared cache from ${start} to ${end}`;
}
// updates the "last cleared" paragraph with the current date and time
function updateLastCleared() {
  const lastClearedParagraph = document.getElementById("lastCleared");
  if (!lastClearedParagraph) return;
  const now = toHumanReadableDate(new Date());
  lastClearedParagraph.textContent = `Last cleared: ${now}`;
}
// clear all cache history
document.getElementById("All History")?.addEventListener("click", async () => {
  try {
    await chrome.browsingData.remove(
      { since: 0 },
      { cache: true, history: true }
    );
    showCacheClearedStatus(0, Date.now());
    updateLastCleared();
  } catch (e) {
    console.error("Error clearing history and cache:", e);
  }
});
// clear cache history from the past month
document.getElementById("Past Month")?.addEventListener("click", async () => {
  const now = Date.now();
  const oneMonthAgo = now - 30 * 24 * 60 * 60 * 1000;
  try {
    await chrome.browsingData.remove(
      { since: oneMonthAgo },
      { cache: true, history: true }
    );
    showCacheClearedStatus(oneMonthAgo, now);
    updateLastCleared();
  } catch (e) {
    console.error("Error clearing past month cache and history:", e);
  }
});
// clear cache history from the past week
document.getElementById("Past Week")?.addEventListener("click", async () => {
  const now = Date.now();
  const oneWeekAgo = now - 7 * 24 * 60 * 60 * 1000;
  try {
    await chrome.browsingData.remove(
      { since: oneWeekAgo },
      { cache: true, history: true }
    );
    showCacheClearedStatus(oneWeekAgo, now);
    updateLastCleared();
  } catch (e) {
    console.error("Error clearing past week cache and history:", e);
  }
});
// clear cache history from the past day
document.getElementById("Past Day")?.addEventListener("click", async () => {
  const now = Date.now();
  const oneDayAgo = now - 24 * 60 * 60 * 1000;
  try {
    await chrome.browsingData.remove(
      { since: oneDayAgo },
      { cache: true, history: true }
    );
    showCacheClearedStatus(oneDayAgo, now);
    updateLastCleared();
  } catch (e) {
    console.error("Error clearing past day cache and history:", e);
  }
});
// clear cache history from the past hour
document.getElementById("Past Hour")?.addEventListener("click", async () => {
  const now = Date.now();
  const oneHourAgo = now - 60 * 60 * 1000;
  try {
    await chrome.browsingData.remove(
      { since: oneHourAgo },
      { cache: true, history: true }
    );
    showCacheClearedStatus(oneHourAgo, now);
    updateLastCleared();
  } catch (e) {
    console.error("Error clearing past hour cache and history:", e);
  }
});
// clear cache history from the past 15 minutes
document
  .getElementById("Past 15 Minutes")
  ?.addEventListener("click", async () => {
    const now = Date.now();
    const fifteenMinutesAgo = now - 15 * 60 * 1000;
    try {
      await chrome.browsingData.remove(
        { since: fifteenMinutesAgo },
        { cache: true, history: true }
      );
      showCacheClearedStatus(fifteenMinutesAgo, now);
      updateLastCleared();
    } catch (e) {
      console.error("Error clearing past 15 minutes cache and history:", e);
    }
  });
