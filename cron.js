"use strict"

var hora = 0;
var mins = 0;
var secs = 0;

var tempo = 1000; //Quantos milésimos equivalem a um segundo
var cron;

function start (){

    cron = setInterval(() => { timer (); }, tempo);

}

function pause () {
    clearInterval(cron);
}

function stop () {
    clearInterval(cron);
    hora = 0;
    mins = 0;
    secs = 0;

    document.getElementById('counter').innerText = '00:00:00';
}

function timer () {

    secs++;
    if(secs == 60){
        secs = 0;
        mins++;

        if(mins == 60){
            mins = 0;
            hora++;
        }
    }


    var format = (hora < 10 ? '0' + hora : hora) + ':' + (mins < 10 ? '0'+ mins : mins) + ':' + (secs < 10 ? '0'+ secs : secs);
    document.getElementById('counter').innerText = format;
}