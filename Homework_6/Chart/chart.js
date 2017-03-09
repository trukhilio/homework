window.onload = function(){
    var createChart = function(data, width, height, color){

        var chart = document.createElement('div');

        chart.style.width = width + 'px';
        chart.style.height = height + 'px';
        chart.style.position = 'relative';
        chart.style.border = '3px solid grey';

        var container = document.getElementById('chartContainer');
        container.appendChild(chart);

        var max = Number.NEGATIVE_INFINITY;
        for (var i=0; i < data.length; i++){
            if (max<data[i]) max=data[i];
        };

        var scale = width/max;
        var barHeight = Math.floor(height/data.length);

        for (i=0; i < data.length; i++){
            var strip = document.createElement ('div');
            var bul = document.createElement ('div');

            strip.style.width = (data[i] * scale) - 35 + 'px';
            strip.style.height = barHeight - 10 + 'px';
            strip.style.position = 'absolute';
            strip.style.marginTop = '5px';
            strip.style.left = '0px';
            strip.style.top = barHeight * i + 'px';
            strip.style.backgroundColor = color;

            bul.innerHTML = data[i];
            bul.style.width = 30 + 'px';
            bul.style.position = strip.style.position;
            bul.style.marginLeft = '5px';
            bul.style.left = strip.style.width;
            bul.style.top = (barHeight - 10)/4 + 'px';

            strip.appendChild(bul);
            chart.appendChild(strip);
        }

    };

    createChart([88, 34, 250 ,180, 56, 77, 132, 99, 122, 90, 48], 450, 600, 'blue');

};