
// === Chart.js configuration ===
document.addEventListener("DOMContentLoaded", () => {
  // Chart 1 - Denuncias
  new Chart(document.getElementById("chartDenuncias"), {
    type: "line",
    data: {
      labels: ["2023", "2024", "2025"],
      datasets: [{
        label: "Denuncias",
        data: [640, 760, 847],
        borderColor: "#e53935",
        fill: false,
        tension: 0.3
      }]
    },
    options: { responsive: true }
  });

  // Chart 2 - KPIs vs Metas
  new Chart(document.getElementById("chartKPIs"), {
    type: "bar",
    data: {
      labels: ["Reincidencia", "Cumplimiento", "Tiempo Respuesta"],
      datasets: [
        { label: "Actual", data: [67, 41, 72], backgroundColor: "#e53935" },
        { label: "Meta", data: [35, 85, 24], backgroundColor: "#43a047" }
      ]
    },
    options: { responsive: true }
  });

  // Chart 3 - Presupuesto
  new Chart(document.getElementById("chartPresupuesto"), {
    type: "doughnut",
    data: {
      labels: ["Prevención", "Detección", "Respuesta Inmediata", "Atención Integral", "Agresores"],
      datasets: [{
        data: [14, 12, 33, 24, 17],
        backgroundColor: ["#6c63ff", "#fbc02d", "#e53935", "#1e88e5", "#43a047"]
      }]
    },
    options: { responsive: true }
  });

  // Chart 4 - Reincidencia
  new Chart(document.getElementById("chartReincidencia"), {
    type: "line",
    data: {
      labels: ["2023", "2024", "2025"],
      datasets: [{
        label: "Reincidencia (%)",
        data: [64, 66, 67],
        borderColor: "#ff6f00",
        tension: 0.3
      }]
    },
    options: { responsive: true }
  });

  // Chart 5 - Órdenes
  new Chart(document.getElementById("chartOrdenes"), {
    type: "bar",
    data: {
      labels: ["Activas", "Cumplimiento"],
      datasets: [{
        label: "Órdenes",
        data: [156, 41],
        backgroundColor: ["#1e88e5", "#43a047"]
      }]
    },
    options: { responsive: true }
  });

  // Chart 6 - Impacto esperado
  new Chart(document.getElementById("chartImpacto"), {
    type: "radar",
    data: {
      labels: ["Prevención", "Detección", "Respuesta", "Atención", "Reinserción"],
      datasets: [
        {
          label: "Actual",
          data: [45, 50, 60, 55, 35],
          borderColor: "#e53935",
          fill: true,
          backgroundColor: "rgba(229,57,53,0.2)"
        },
        {
          label: "Objetivo Año 3",
          data: [85, 80, 90, 88, 75],
          borderColor: "#43a047",
          fill: true,
          backgroundColor: "rgba(67,160,71,0.2)"
        }
      ]
    },
    options: { responsive: true }
  });
});
