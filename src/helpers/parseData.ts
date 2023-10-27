export default function parseData() {
  const jsonData = localStorage.getItem("data");
  try {
    return jsonData ? JSON.parse(jsonData) : null;
  } catch (error) {
    console.error("Error parsing JSON:", error);
  }
}
