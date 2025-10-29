// === Chart.js configuration ===
document.addEventListener("DOMContentLoaded", () => {

  // === Chart 1 - Denuncias 2023–2025 ===
  new Chart(document.getElementById("chartDenuncias"), {
    type: "line",
    data: {
      labels: ["2023", "2024", "2025"],
      datasets: [{
        label: "Denuncias",
        data: [640, 760, 847],
        borderColor: "#e53935",
        backgroundColor: "rgba(229,57,53,0.2)",
        fill: true,
        tension: 0.3
      }]
    },
    options: {
      responsive: true,
      plugins: { legend: { display: false } },
      scales: { y: { beginAtZero: true } }
    }
  });

  // === Chart 2 - KPIs vs Metas ===
  new Chart(document.getElementById("chartKPIs"), {
    type: "bar",
    data: {
      labels: ["Reincidencia", "Cumplimiento", "Tiempo Respuesta"],
      datasets: [
        { label: "Actual", data: [67, 41, 72], backgroundColor: "#e53935" },
        { label: "Meta", data: [35, 85, 24], backgroundColor: "#43a047" }
      ]
    },
    options: {
      responsive: true,
      plugins: {
        legend: { position: "bottom" }
      },
      scales: {
        y: { beginAtZero: true, max: 100 }
      }
    }
  });

  // === Chart 3 - Distribución Presupuesto ===
  new Chart(document.getElementById("chartPresupuesto"), {
    type: "doughnut",
    data: {
      labels: ["Prevención", "Detección", "Respuesta Inmediata", "Atención Integral", "Agresores"],
      datasets: [{
        data: [14, 12, 33, 24, 17],
        backgroundColor: ["#6c63ff", "#fbc02d", "#e53935", "#1e88e5", "#43a047"]
      }]
    },
    options: {
      responsive: true,
      plugins: {
        legend: { position: "right" }
      }
    }
  });

  // === Chart 4 - Evolución Reincidencia ===
  new Chart(document.getElementById("chartReincidencia"), {
    type: "line",
    data: {
      labels: ["2023", "2024", "2025"],
      datasets: [{
        label: "Reincidencia (%)",
        data: [64, 66, 67],
        borderColor: "#ff6f00",
        backgroundColor: "rgba(255,111,0,0.2)",
        fill: true,
        tension: 0.3
      }]
    },
    options: {
      responsive: true,
      plugins: { legend: { display: false } },
      scales: { y: { beginAtZero: true } }
    }
  });

  // === Chart 5 - Órdenes Activas y Cumplimiento ===
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
    options: {
      responsive: true,
      plugins: {
        legend: { display: false }
      },
      scales: { y: { beginAtZero: true } }
    }
  });

  // === Chart 6 - Proyección de Impacto (Radar) ===
  new Chart(document.getElementById("chartImpacto"), {
    type: "radar",
    data: {
      labels: ["Prevención", "Detección", "Respuesta", "Atención", "Reinserción"],
      datasets: [
        {
          label: "Actual",
          data: [45, 50, 60, 55, 35],
          borderColor: "#e53935",
          backgroundColor: "rgba(229,57,53,0.2)",
          fill: true
        },
        {
          label: "Objetivo Año 3",
          data: [85, 80, 90, 88, 75],
          borderColor: "#43a047",
          backgroundColor: "rgba(67,160,71,0.2)",
          fill: true
        }
      ]
    },
    options: {
      responsive: true,
      plugins: {
        legend: { position: "bottom" }
      },
      scales: {
        r: {
          beginAtZero: true,
          min: 0,
          max: 100,
          ticks: { stepSize: 20 }
        }
      }
    }
  });

});
