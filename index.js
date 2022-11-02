

    function create_square(){
        var val = Number(document.getElementsByTagName('input')[0].value);
        for (let i=0; i<val; i++){
            let div = document.createElement('div');
            div.className = 'shape';
            let size = Math.floor(Math.random() * 220);
            let top = document.documentElement.clientHeight - size - 45;
            let left = document.documentElement.clientWidth - size;
            div.style.position = 'absolute';
            div.style.width = size+'px';
            div.style.height = div.style.width;
            div.style.border = '1px solid black';
            div.style.top = Math.floor(Math.random() * top)+40+'px';
            div.style.left = Math.floor(Math.random() * left)+'px';
            div.style.background = 'red';
            document.body.append(div);
            div.onclick = function(){div.style.background='yellow'};
            div.ondblclick = function(){div.remove()};
        }
    }

    function create_triangle(){
     var val = Number(document.getElementsByTagName('input')[0].value);
        for (let i=0; i<val; i++){
            let div = document.createElement('div');
            let div2 = document.createElement('div');
            div.style.position = 'absolute';
            let size = Math.floor(Math.random() * 220)+40;
            let size2 = size/Math.sqrt(2);
            let top = document.documentElement.clientHeight - size - 50;
            let left = document.documentElement.clientWidth - size;
            div.style.width = size+'px';
            div.style.overflow = 'hidden';
			div.style.opacity = '0.7';
            div.style.height = div.style.width;
            div.style.top = Math.floor(Math.random() * top)+40+'px';
            div.style.left = Math.floor(Math.random() * left)+'px';
            div2.style.width = size2+'px';
            div2.style.border = 'none';
            div2.style.height = div2.style.width;
            div2.style.background = 'blue';
            div2.style.transform = 'rotate(45deg)';
            div2.style.position = 'absolute';
            div2.style.top = size-size2/2+'px';
            div2.style.left = (size-size2)/2-0.5+'px';
            div.onclick = function(){div2.style.background='yellow'};
            div2.ondblclick = function(){div.remove()};
            document.body.append(div);div.append(div2);
        }
    }



 function create_circle(){
        var val = document.getElementsByTagName('input')[0].value;
        for (let i=0; i<val; i++){
            let div = document.createElement('div');
            div.className = 'shape';
            let size = Math.floor(Math.random() * 220);
            let top = document.documentElement.clientHeight - size - 50;
            let left = document.documentElement.clientWidth - size;
            div.style.position = 'absolute';
            div.style.width = size+'px';
            div.style.height = div.style.width;
            div.style.border = '1px solid black';
            div.style.borderRadius = String(size/2)+'px';
            div.style.top = Math.floor(Math.random() * top)+40+'px';
            div.style.left = Math.floor(Math.random() * left)+'px';
            div.style.background = 'green';
            document.body.append(div);
            div.onclick = function(){div.style.background='yellow'};
            div.ondblclick = function(){div.remove()};
        }
    }
