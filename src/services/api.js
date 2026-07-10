import axios from "axios";

const api = axios.create({
  baseURL: "http://127.0.0.1:8000/api",
  headers: {
    "Content-Type": "application/json",
  },
});

// ----------------------------
// Upload
// ----------------------------

export const uploadDataset = async (file) => {
  const formData = new FormData();
  formData.append("file", file);

  const response = await api.post("/upload", formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });

  return response.data;
};

export const getUploadHistory = async () => {
  const response = await api.get("/upload/history");
  return response.data;
};

// ----------------------------
// Dashboard
// ----------------------------

export const getDashboard = async () => {
  const response = await api.get("/dashboard");
  return response.data;
};

// ----------------------------
// Analytics
// ----------------------------

export const getAnalytics = async () => {
  const response = await api.get("/analytics");
  return response.data;
};

// ----------------------------
// Reports
// ----------------------------

export const getReports = async () => {
  const response = await api.get("/reports");
  return response.data;
};

// ----------------------------
// AI Insights
// ----------------------------

export const getAIInsights = async () => {
  const response = await api.get("/ai-insights");
  return response.data;
};

export default api;
