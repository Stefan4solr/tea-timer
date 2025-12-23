 /* Tea definitions file:
  - color is the foreground color of the progress indicator
  - lists of steeping temperatures and times need to have the same length
  - JavaScript expressions like Array.fill() can be used for convenience
*/
export const TEAS = {
  "Sencha": {
    color: "#d1e576",
    temperatures: [75, 75, 75],
    times: ["01:00", "00:01", "00:45"]
  },
  "Pu-err Tea": {
    color: "#b9a963",
    temperatures: Array(12).fill(99),
    times: [
      "00:25", "00:30", "00:35", "00:40", "00:45",
      "00:50", "00:55", "01:00", "01:05", "01:10",
      "01:15", "01:20"
    ]
  },
  "White Tea": {
    color: "#f8e367",
    temperatures: Array(10).fill(75),
    times: Array(10).fill("00:15")
  }
};