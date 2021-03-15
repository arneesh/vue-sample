

<script>
import { Line } from "vue-chartjs";
    export default {

extends: Line,
  data() {
    return {

    };
  },
  mounted() {
    this.renderChart(
      {
        labels: [
          "January",
          "February",
          "March",
          "April",
          "May",
          "June",
          "July"
        ],
        datasets: [
          {
            label: "Data One",
            borderColor: "#6078ff",
            pointBackgroundColor: "white",
            borderWidth: 1,
            pointBorderColor: "white",
            backgroundColor: "rgba(96, 120, 255, 0.5)",
            data: [40, 39, 10, 40, 39, 80, 40]
          },
          {
            label: "Data Two",
            borderColor: "#28a745",
            pointBackgroundColor: "white",
            pointBorderColor: "white",
            borderWidth: 1,
            backgroundColor: "rgba(40, 167, 69, 0.5)",
            data: [60, 55, 32, 10, 2, 12, 53]
          }
        ]
      },
      { responsive: false, maintainAspectRatio: false }
    );
  }
        
    }
</script>

<style lang="scss" scoped>

</style>