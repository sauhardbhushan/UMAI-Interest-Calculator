//Sauhard Bhushan
//Hide or show frequency of compound interest depending on whether user chooses simple or compound interest

$(document).ready(function(){
    $("#simple").click(function(){          // when user selects simple interest, hide frequency buttons
        $('.calculator').removeClass("hidden");
        $('.freq').addClass('hidden');
    });
    $("#compound").click(function(){        //when user selects compound interest, show frequency buttons
        $('.calculator').removeClass("hidden");
        $('.freq').removeClass('hidden');
    })
});

function calculate() {
    //show the class that prints the calculations
    $('.data').removeClass('hidden');

    //obtain values submitted by user and convert to float
    var principal = parseFloat(document.getElementById('principal').value);
    var roi = parseFloat(document.getElementById('roi').value);
    var time = parseFloat(document.getElementById('time').value);
    var n;
    var final;
    var frequency;
    var test = document.getElementById('f');
    if(test.classList.contains('hidden')){       //if dealing with simple interest, there'd be no length for frequency
        final = principal*(1.0+(roi/100.0)*time);           //formula to calculate final value of simple interest
    }
    else {
        frequency = document.querySelector('input[name="freq"]:checked').value;   //returns the value of the radio button chosen
        switch (frequency) {            //switch case statements to quantify the frequency choices
            case "yearly":
                n = 1;
                break;
            case "half-yearly":
                n = 2;
                break;
            case "quarterly":
                n = 4;
                break;
            case "monthly":
                n = 12;
                break;
        }
        final = principal*Math.pow(1.0+((roi/100)/n),(n*time));     //formula for compound interest
    }

    var totalInt = final - principal;       //total interest is calculated by the difference of the principal and final sums

    //round answers to 2dp
    final = Math.round(final*100.0)/100.0;
    totalInt  = Math.round(totalInt*100.0)/100.0;

    //print on page
    document.getElementById('totalint').innerHTML = ""+ totalInt;
    document.getElementById('total').innerHTML = ""+ final;
}
