// --------------- Bootstrap4 Charts ---------------
// function creatBarChart(id, labels, labelsData){
        //     new Chart(document.getElementById(id), {
        //     "type": "horizontalBar",
        //     "data": {
        //         // "labels": ["Red", "Orange", "Yellow", "Green", "Blue", "Purple", "Grey"],
        //         "labels": labels,
        //         "datasets": [{
        //             "label": "",
        //             "data": labelsData,
        //             // "fill": false,
        //             "backgroundColor": "#F07124"
        //             ,
        //             "borderColor": ["rgb(255, 99, 132)", "rgb(255, 159, 64)", "rgb(255, 205, 86)",
        //             "rgb(75, 192, 192)", "rgb(54, 162, 235)", "rgb(153, 102, 255)", "rgb(201, 203, 207)"
        //             ],
        //             "borderWidth": 1
        //         }]
        //     },
        //     "options": {
        //         "scales": {
        //             "xAxes": [{
        //                 "ticks": {
        //                     "beginAtZero": true
        //                 }
        //             }]
        //         }
        //     }
        //     });
        // }
        // ---------------------------------------------------------------------------------------------------
        
        function creatBarChart(id, labels, labelsData){
            var options = {
                series: [{
                    data: labelsData
                }],
                chart: {
                type: 'bar',
                height: 350
                },
                plotOptions: {
                bar: {
                    horizontal: true,
                }
                },
                dataLabels: {
                enabled: false
                },
                xaxis: {
                categories: labels,
                }
            }; 

            var chart = new ApexCharts(document.querySelector("#"+id), options);
            chart.render();

        } 

        creatBarChart("horizontalBar-programming-language", ["Python", "C", "C++", "Java", "C#", ".NET"], [85, 60, 75, 80, 50, 50]);    
        creatBarChart("horizontalBar-database", ["MongoDB", "SQL", "PostgreSQL"], [70, 75, 85]);
        creatBarChart("horizontalBar-data-visualization", ["R", "RMarkdown", "Power BI", "DAX", "OLAP", "Data Mining", "Data Wrangling", "Data Modelling", "Data Analysis"], [80, 80, 90, 75, 50, 75, 70, 75, 65]);   
        creatBarChart("horizontalBar-web-development", ["Flask", "HTML", "CSS", "Bootstrap", "Javascript", "React JS", "SharePoint", "GWT", "JSP", "Servlet", "REST API"], [80, 80, 75, 80, 80, 70, 75, 65, 65, 65, 65]);   
        creatBarChart("horizontalBar-cloud", ["AWS", "GCP", "Azure", "Docker", "Kubernetes"], [65, 85, 75, 75, 65]);
        creatBarChart("horizontalBar-os-tools", ["Linux", "Android", "Github", "Bitbucket", "Microsoft Office", "Excel", "VBA", "SDLC", "OOP", "JUnit"], [75, 65, 75, 70, 85, 65, 80, 70, 75]); 
        creatBarChart("horizontalBar-business", ["Ratio Analysis", "Cash Flow Management", "Security Analysis", "Capital Budgeting", "Trading & P/L", "Balance Sheet Reports", "Financial Reporting"], [95, 85, 75, 75, 95, 95, 95]); 
        

    // <!-- ---------------------------------------------- Skills JS End ---------------------------------------------- -->
