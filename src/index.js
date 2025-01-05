 
import {sum} from './js/sum'
import {minus} from './js/minus'
 
import $ from 'jquery' 
import * as bootstrap from 'bootstrap' 

import './css/index.css'
import './scss/index.scss'

 

$('#testButton').click(() => {
    $('#testText').text('jQuery is working! You clicked the button.');
    console.log('Button was clicked, and text was updated.');
  });
  
//   const tooltipTrigger = document.querySelector('#tooltipButton');
//   if (tooltipTrigger) {
//     new bootstrap.Tooltip(tooltipTrigger);
//     console.log('Tooltip initialized');
//   }

// var myModalEl = document.getElementById('exampleModal')
  
// var modal = new bootstrap.Modal(myModalEl) // initialized with defaults

// console.log(myModalEl)