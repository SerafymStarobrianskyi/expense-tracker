export function saveEntries(entries) {
  localStorage.setItem("entries", JSON.stringify(entries));
}
export function getEntries() {
  const entries = localStorage.getItem("entries");
  return entries ? JSON.parse(entries) : [];
}
