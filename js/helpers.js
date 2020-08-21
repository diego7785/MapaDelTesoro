function getRandomNumber(size){
    return Math.floor(Math.random() * size);
}

function distancePoints(clic, treasure){
    var difx=clic.offsetX - treasure.x
    var dify=clic.offsetY - treasure.y;
    return Math.sqrt(Math.pow(difx,2)+Math.pow(dify,2));
}

function getDistanceHint(distance){
    if(distance < 30){
        return "Hirviendo";
    } if(distance < 40){
        return "Muy caliente";
    } if(distance < 60){
        return "Caliente";
    } if(distance < 100){
        return "Cálido";
    } if(distance < 180){
        return "Frío";
    } if(distance < 360){
        return "Muy frío";
    } else {
        return "Congelado";
    }
}