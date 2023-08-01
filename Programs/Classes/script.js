class Chart {
    constructor(height, background, hasBorder) {
        this.height = height;
        this.background = background;
        this.hasBorder = hasBorder;
    }
}

const chartContent1 = new Chart('200px', 'blue', true);
const chartContent2 = new Chart('190px', 'orange', false);
const chartContent3 = new Chart('180px', 'green', true);
const chartContent4 = new Chart('170px', 'grey', true);
const chartContent5 = new Chart('160px', 'purple', false);
const chartContent6 = new Chart('150px', 'red', true);
const chartContent7 = new Chart('140px', 'yellow', false);
const chartContent8 = new Chart('130px', 'pink', true);

function renderChart(chartData) {
    const chartsContainer = document.querySelector('.charts-container');
    const chart = document.createElement('div');
    chart.classList.add('chart');
    chart.style.height = chartData.height;
    chart.style.backgroundColor = chartData.background;
    if (chartData.hasBorder) {
        chart.style.border = '2px solid black'
    }
    chartsContainer.appendChild(chart);
}

renderChart(chartContent1);
renderChart(chartContent2);
renderChart(chartContent3);
renderChart(chartContent4);
renderChart(chartContent5);
renderChart(chartContent6);
renderChart(chartContent7);
renderChart(chartContent8);