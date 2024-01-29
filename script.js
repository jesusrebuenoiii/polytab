var alltables = document.getElementsByTagName('table');
var alltd = document.getElementsByTagName('td');

//FINAL ANSWER


const isMobile = {
    Android: function() {
        return false;
    },
    BlackBerry: function() {
return false;    },
    iOS: function() {
return false;    },
    Opera: function() {
return false;    },
    Windows: function() {
return false;    },
    any: function() {
return false;    }
};

function clear3(){
    var x = document.getElementsByTagName('td');
var y = document.getElementsByTagName('textarea');
    for (let i=0; i<x.length; i++){
        x[i].innerHTML ="0";
    }
    for (let j=0; j<y.length; j++){
        y[j].value ="";
    }
}
//ONLOAD FUNCTIONS
window.onload = function(){
    var eachCell = document.getElementsByTagName('td');
    for (var i=0; i<eachCell.length; i++){
        eachCell[i].setAttribute('contenteditable', 'true');
    }
    
   
}
//Addition Function
function additionshow(){
    var row1 = document.getElementsByClassName('addition-row1');
    var row2 = document.getElementsByClassName('addition-row2');
    var row3 = document.getElementsByClassName('addition-row3');
    var row4 = document.getElementsByClassName('addition-row4');
    var row5 = document.getElementsByClassName('addition-row5');
    var row6 = document.getElementsByClassName('addition-row6');

    var sum1 = document.getElementsByClassName('addition-sum');
    for (let i=0; i<sum1.length; i++){
        sum1[i].innerHTML = parseFloat(row1[i].innerHTML)+parseFloat(row2[i].innerHTML)+parseFloat(row3[i].innerHTML)+parseFloat(row4[i].innerHTML)+parseFloat(row5[i].innerHTML)+parseFloat(row6[i].innerHTML);
    }
}

function additionintermediateshow(){
    var row1 = document.getElementsByClassName('additionintermediate-row1');
    var row2 = document.getElementsByClassName('additionintermediate-row2');
    var row3 = document.getElementsByClassName('additionintermediate-row3');
    var row4 = document.getElementsByClassName('additionintermediate-row4');
    var row5 = document.getElementsByClassName('additionintermediate-row5');
    var row6 = document.getElementsByClassName('additionintermediate-row6');

    var sum1 = document.getElementsByClassName('additionintermediate-sum');
    for (let i=0; i<sum1.length; i++){
        sum1[i].innerHTML = parseFloat(row1[i].innerHTML)+parseFloat(row2[i].innerHTML)+parseFloat(row3[i].innerHTML)+parseFloat(row4[i].innerHTML)+parseFloat(row5[i].innerHTML)+parseFloat(row6[i].innerHTML);
    }
}

function additionfunction(){
    
    var row1 = document.getElementsByClassName('addition-row1');
    var row2 = document.getElementsByClassName('addition-row2');
    var row3 = document.getElementsByClassName('addition-row3');
    var row4 = document.getElementsByClassName('addition-row4');
    var row5 = document.getElementsByClassName('addition-row5');
    var row6 = document.getElementsByClassName('addition-row6');

    var sum1 = document.getElementsByClassName('addition-sum');
    var cells = document.getElementsByTagName('td');


    for (let j=0; j<cells.length; j++){
        cells[j].addEventListener('blur', function(){
            if (isNaN(parseInt(cells[j].innerHTML))){
                cells[j].innerHTML = "0";
            }
        }, false);
    }

    for ( let i=0; i<row1.length; i++){
        row1[i].addEventListener('blur', function(){
            sum1[i].innerHTML = parseFloat(row1[i].innerHTML)+parseFloat(row2[i].innerHTML)+parseFloat(row3[i].innerHTML)+parseFloat(row4[i].innerHTML)+parseFloat(row5[i].innerHTML)+parseFloat(row6[i].innerHTML);

        }, false);
        
        row2[i].addEventListener('blur', function(){
            sum1[i].innerHTML = parseFloat(row1[i].innerHTML)+parseFloat(row2[i].innerHTML)+parseFloat(row3[i].innerHTML)+parseFloat(row4[i].innerHTML)+parseFloat(row5[i].innerHTML)+parseFloat(row6[i].innerHTML);
        }, false);
            
        row3[i].addEventListener('blur', function(){
            sum1[i].innerHTML = parseFloat(row1[i].innerHTML)+parseFloat(row2[i].innerHTML)+parseFloat(row3[i].innerHTML)+parseFloat(row4[i].innerHTML)+parseFloat(row5[i].innerHTML)+parseFloat(row6[i].innerHTML);
        }, false);
        row4[i].addEventListener('blur', function(){
            sum1[i].innerHTML = parseFloat(row1[i].innerHTML)+parseFloat(row2[i].innerHTML)+parseFloat(row3[i].innerHTML)+parseFloat(row4[i].innerHTML)+parseFloat(row5[i].innerHTML)+parseFloat(row6[i].innerHTML);
        }, false);
        row5[i].addEventListener('blur', function(){
            sum1[i].innerHTML = parseFloat(row1[i].innerHTML)+parseFloat(row2[i].innerHTML)+parseFloat(row3[i].innerHTML)+parseFloat(row4[i].innerHTML)+parseFloat(row5[i].innerHTML)+parseFloat(row6[i].innerHTML);
        }, false);
        row6[i].addEventListener('blur', function(){
            sum1[i].innerHTML = parseFloat(row1[i].innerHTML)+parseFloat(row2[i].innerHTML)+parseFloat(row3[i].innerHTML)+parseFloat(row4[i].innerHTML)+parseFloat(row5[i].innerHTML)+parseFloat(row6[i].innerHTML);
        }, false);

    }


}
document.getElementById('table-addition').addEventListener('input', additionfunction(), false);


function divisiongameguide(){
    var guide = document.getElementsByClassName('divisionproblemgameguide');
    var divisor = document.getElementsByClassName('divisionproblemgame');
    var quotient = document.getElementsByClassName('divisiongame-quotient');
    for (let i=0; i<quotient.length; i++ ){
        quotient[i].addEventListener('input', function(){
            guide[i].innerHTML = parseFloat(divisor[i].innerHTML)-parseFloat(quotient[i].innerHTML);
            if(isNaN(guide[i].innerHTML)){
                guide[i].innerHTML = "0";
            }
        }, false);
    }
}

function multigameguide(){
    var guide = document.getElementsByClassName('guideintermediate');
    var divisor = document.getElementsByClassName('problemintermediate');
    var quotient = document.getElementsByClassName('multiplicationintermediate-product');
    for (let i=0; i<quotient.length; i++ ){
        quotient[i].addEventListener('input', function(){
            guide[i].innerHTML = parseFloat(divisor[i].innerHTML) - parseFloat(quotient[i].innerHTML);
            if(isNaN(guide[i].innerHTML)){
                guide[i].innerHTML = "0";
            }
        }, false);
    }
}

document.getElementById('multiplicationintermediateproduct').addEventListener('input', multigameguide(), false); 
document.getElementById('divisiongamequotient').addEventListener('input', divisiongameguide()); 


//Subtraction Funtion

function subtractionshow(){
    var row1 = document.getElementsByClassName('subtraction-row1');
    var row2 = document.getElementsByClassName('subtraction-row2');
    var row3 = document.getElementsByClassName('subtraction-row3');
    var row4 = document.getElementsByClassName('subtraction-row4');
    var row5 = document.getElementsByClassName('subtraction-row5');
    var row6 = document.getElementsByClassName('subtraction-row6');

    var difference1 = document.getElementsByClassName('subtraction-difference');
    for ( let i=0; i<row1.length; i++){
        difference1[i].innerHTML = parseFloat(row1[i].innerHTML)-parseFloat(row2[i].innerHTML)-parseFloat(row3[i].innerHTML)-parseFloat(row4[i].innerHTML)-parseFloat(row5[i].innerHTML)-parseFloat(row6[i].innerHTML);
    }
}

function subtractionintermediateshow(){
    var row1 = document.getElementsByClassName('subtractionintermediate-row1');
    var row2 = document.getElementsByClassName('subtractionintermediate-row2');
    var row3 = document.getElementsByClassName('subtractionintermediate-row3');
    var row4 = document.getElementsByClassName('subtractionintermediate-row4');
    var row5 = document.getElementsByClassName('subtractionintermediate-row5');
    var row6 = document.getElementsByClassName('subtractionintermediate-row6');

    var difference1 = document.getElementsByClassName('subtractionintermediate-difference');
    for ( let i=0; i<row1.length; i++){
        difference1[i].innerHTML = parseFloat(row1[i].innerHTML)-parseFloat(row2[i].innerHTML)-parseFloat(row3[i].innerHTML)-parseFloat(row4[i].innerHTML)-parseFloat(row5[i].innerHTML)-parseFloat(row6[i].innerHTML);
    }
}
//BEGINNER SUBTRACTION FUNCTION
function subtractionfunction(){
    var row1 = document.getElementsByClassName('subtraction-row1');
    var row2 = document.getElementsByClassName('subtraction-row2');
    var row3 = document.getElementsByClassName('subtraction-row3');
    var row4 = document.getElementsByClassName('subtraction-row4');
    var row5 = document.getElementsByClassName('subtraction-row5');
    var row6 = document.getElementsByClassName('subtraction-row6');

    var difference1 = document.getElementsByClassName('subtraction-difference');
    var cells = document.getElementsByTagName('td');
    for (let j=0; j<cells.length; j++){
        cells[j].addEventListener('blur', function(){
            if (isNaN(parseInt(cells[j].innerHTML))){
                cells[j].innerHTML = "0";
            }
        }, false);
    }

    for ( let i=0; i<row1.length; i++){
        row1[i].addEventListener('blur', function(){
            difference1[i].innerHTML = parseFloat(row1[i].innerHTML)-parseFloat(row2[i].innerHTML)-parseFloat(row3[i].innerHTML)-parseFloat(row4[i].innerHTML)-parseFloat(row5[i].innerHTML)-parseFloat(row6[i].innerHTML);
        }, false);
        
        row2[i].addEventListener('blur', function(){
            difference1[i].innerHTML = parseFloat(row1[i].innerHTML)-parseFloat(row2[i].innerHTML)-parseFloat(row3[i].innerHTML)-parseFloat(row4[i].innerHTML)-parseFloat(row5[i].innerHTML)-parseFloat(row6[i].innerHTML);
        }, false);
            
        row3[i].addEventListener('blur', function(){
            difference1[i].innerHTML = parseFloat(row1[i].innerHTML)-parseFloat(row2[i].innerHTML)-parseFloat(row3[i].innerHTML)-parseFloat(row4[i].innerHTML)-parseFloat(row5[i].innerHTML)-parseFloat(row6[i].innerHTML);
        }, false);
        row4[i].addEventListener('blur', function(){
            difference1[i].innerHTML = parseFloat(row1[i].innerHTML)-parseFloat(row2[i].innerHTML)-parseFloat(row3[i].innerHTML)-parseFloat(row4[i].innerHTML)-parseFloat(row5[i].innerHTML)-parseFloat(row6[i].innerHTML);
        }, false);
        row5[i].addEventListener('blur', function(){
            difference1[i].innerHTML = parseFloat(row1[i].innerHTML)-parseFloat(row2[i].innerHTML)-parseFloat(row3[i].innerHTML)-parseFloat(row4[i].innerHTML)-parseFloat(row5[i].innerHTML)-parseFloat(row6[i].innerHTML);
        }, false);
        row6[i].addEventListener('blur', function(){
            difference1[i].innerHTML = parseFloat(row1[i].innerHTML)-parseFloat(row2[i].innerHTML)-parseFloat(row3[i].innerHTML)-parseFloat(row4[i].innerHTML)-parseFloat(row5[i].innerHTML)-parseFloat(row6[i].innerHTML);
        }, false);
    }
}
document.getElementById('table-subtraction').addEventListener('input', subtractionfunction(), false);

//Multiplication Function for Beginner
function multiplicationfunction(){
    var top = document.getElementsByClassName('multiplication-top');
    var side = document.getElementsByClassName('multiplication-side');
    var row1 = document.getElementsByClassName('multiplication-row1');
    var row2 = document.getElementsByClassName('multiplication-row2');
    var row3 = document.getElementsByClassName('multiplication-row3');
    var row4 = document.getElementsByClassName('multiplication-row4');
    var row5 = document.getElementsByClassName('multiplication-row5');

    var column1 = document.getElementsByClassName('multiplication-column1');
    var column2 = document.getElementsByClassName('multiplication-column2');
    var column3 = document.getElementsByClassName('multiplication-column3');
    var column4 = document.getElementsByClassName('multiplication-column4');
    var column5 = document.getElementsByClassName('multiplication-column5');
    var product = document.getElementsByClassName('multiplication-product');
    var cells = document.getElementsByTagName('td');
    for (let j=0; j<cells.length; j++){
        cells[j].addEventListener('blur', function(){
            if (isNaN(parseInt(cells[j].innerHTML))){
                cells[j].innerHTML = "0";
            }
        }, false);
    }
    for (let i=0; i<top.length; i++){
        top[i].addEventListener('blur', function(){
            row1[i].innerHTML = parseFloat(side[0].innerHTML)*parseFloat(top[i].innerHTML);
            row2[i].innerHTML = parseFloat(side[1].innerHTML)*parseFloat(top[i].innerHTML);
            row3[i].innerHTML = parseFloat(side[2].innerHTML)*parseFloat(top[i].innerHTML);
            row4[i].innerHTML = parseFloat(side[3].innerHTML)*parseFloat(top[i].innerHTML);
            row5[i].innerHTML = parseFloat(side[4].innerHTML)*parseFloat(top[i].innerHTML);
            

product[0].innerHTML = row1[0].innerHTML;

product[1].innerHTML = parseFloat(row2[0].innerHTML)+parseFloat(row1[1].innerHTML);

product[2].innerHTML = parseFloat(row3[0].innerHTML)
+parseFloat(row2[1].innerHTML)+parseFloat(row1[2].innerHTML);

product[3].innerHTML = parseFloat(row4[0].innerHTML)
+parseFloat(row3[1].innerHTML)+parseFloat(row2[2].innerHTML)+parseFloat(row1[3].innerHTML);

product[4].innerHTML = parseFloat(row5[0].innerHTML)
+parseFloat(row4[1].innerHTML)+parseFloat(row3[2].innerHTML)+parseFloat(row2[3].innerHTML)+parseFloat(row1[4].innerHTML);

product[5].innerHTML = parseFloat(row5[1].innerHTML)
+parseFloat(row4[2].innerHTML)+parseFloat(row3[3].innerHTML)+parseFloat(row2[4].innerHTML);

product[6].innerHTML =  parseFloat(row5[2].innerHTML)
+parseFloat(row4[3].innerHTML)+parseFloat(row3[4].innerHTML);

product[7].innerHTML = parseFloat(row5[3].innerHTML)
+parseFloat(row4[4].innerHTML);

product[8].innerHTML = parseFloat(row5[4].innerHTML);


if (isNaN(product[0].innerHTML))
{product[0].innerHTML='0'}
if (isNaN(product[1].innerHTML))
{product[1].innerHTML='0'}
if (isNaN(product[2].innerHTML))
{product[2].innerHTML='0'}
if (isNaN(product[3].innerHTML))
{product[3].innerHTML='0'}
if (isNaN(product[4].innerHTML))
{product[4].innerHTML='0'}
if (isNaN(product[5].innerHTML))
{product[5].innerHTML='0'}
if (isNaN(product[6].innerHTML))
{product[6].innerHTML='0'}
if (isNaN(product[7].innerHTML))
{product[7].innerHTML='0'}
if (isNaN(product[8].innerHTML))
{product[8].innerHTML='0'}

    }
    , false);
}
for (let k=0; k<side.length; k++){
    side[k].addEventListener('blur', function(){
        column1[k].innerHTML = parseFloat(top[0].innerHTML)*parseFloat(side[k].innerHTML);
        column2[k].innerHTML = parseFloat(top[1].innerHTML)*parseFloat(side[k].innerHTML);
        column3[k].innerHTML = parseFloat(top[2].innerHTML)*parseFloat(side[k].innerHTML);
        column4[k].innerHTML = parseFloat(top[3].innerHTML)*parseFloat(side[k].innerHTML);
        column5[k].innerHTML = parseFloat(top[4].innerHTML)*parseFloat(side[k].innerHTML);

product[0].innerHTML = row1[0].innerHTML;

product[1].innerHTML = parseFloat(row2[0].innerHTML)+parseFloat(row1[1].innerHTML);

product[2].innerHTML = parseFloat(row3[0].innerHTML)
+parseFloat(row2[1].innerHTML)+parseFloat(row1[2].innerHTML);

product[3].innerHTML = parseFloat(row4[0].innerHTML)
+parseFloat(row3[1].innerHTML)+parseFloat(row2[2].innerHTML)+parseFloat(row1[3].innerHTML);

product[4].innerHTML = parseFloat(row5[0].innerHTML)
+parseFloat(row4[1].innerHTML)+parseFloat(row3[2].innerHTML)+parseFloat(row2[3].innerHTML)+parseFloat(row1[4].innerHTML);

product[5].innerHTML = parseFloat(row5[1].innerHTML)
+parseFloat(row4[2].innerHTML)+parseFloat(row3[3].innerHTML)+parseFloat(row2[4].innerHTML);

product[6].innerHTML = parseFloat(row5[2].innerHTML)
+parseFloat(row4[3].innerHTML)+parseFloat(row3[4].innerHTML);

product[7].innerHTML = parseFloat(row5[3].innerHTML)
+parseFloat(row4[4].innerHTML);

product[8].innerHTML =  parseFloat(row5[4].innerHTML);


if (isNaN(product[0].innerHTML))
{product[0].innerHTML='0'}
if (isNaN(product[1].innerHTML))
{product[1].innerHTML='0'}
if (isNaN(product[2].innerHTML))
{product[2].innerHTML='0'}
if (isNaN(product[3].innerHTML))
{product[3].innerHTML='0'}
if (isNaN(product[4].innerHTML))
{product[4].innerHTML='0'}
if (isNaN(product[5].innerHTML))
{product[5].innerHTML='0'}
if (isNaN(product[6].innerHTML))
{product[6].innerHTML='0'}
if (isNaN(product[7].innerHTML))
{product[7].innerHTML='0'}
if (isNaN(product[8].innerHTML))
{product[8].innerHTML='0'}

    }

    , false);
}

}

function divisionintermediate(){
    var top = document.getElementsByClassName('multiplicationintermediate-top');
    var side = document.getElementsByClassName('multiplicationintermediate-side');
    var row1 = document.getElementsByClassName('multiplicationintermediate-row1');
    var row2 = document.getElementsByClassName('multiplicationintermediate-row2');
    var row3 = document.getElementsByClassName('multiplicationintermediate-row3');
    var row4 = document.getElementsByClassName('multiplicationintermediate-row4');
    var row5 = document.getElementsByClassName('multiplicationintermediate-row5');
    var problem = document.getElementsByClassName('problemintermediate');
var guide = document.getElementsByClassName('guideintermediate');

if(parseFloat(side[0].innerHTML)!=parseFloat('0')){
row1[0].innerHTML = parseFloat(problem[0].innerHTML)/parseFloat(side[0].innerHTML);
row1[1].innerHTML = parseFloat(problem[1].innerHTML)/parseFloat(side[0].innerHTML);
row1[2].innerHTML = parseFloat(problem[2].innerHTML)/parseFloat(side[0].innerHTML);
row1[3].innerHTML = parseFloat(problem[3].innerHTML)/parseFloat(side[0].innerHTML);
row1[4].innerHTML = parseFloat(problem[4].innerHTML)/parseFloat(side[0].innerHTML);

}
if(parseFloat(side[1].innerHTML)!=parseFloat('0')){
    row2[0].innerHTML = parseFloat(problem[1].innerHTML)/parseFloat(side[1].innerHTML);
    row2[1].innerHTML = parseFloat(problem[2].innerHTML)/parseFloat(side[1].innerHTML);
    row2[2].innerHTML = parseFloat(problem[3].innerHTML)/parseFloat(side[1].innerHTML);
    row2[3].innerHTML = parseFloat(problem[4].innerHTML)/parseFloat(side[1].innerHTML);
    row2[4].innerHTML = parseFloat(problem[5].innerHTML)/parseFloat(side[1].innerHTML);
    
    }
    if(parseFloat(side[2].innerHTML)!=parseFloat('0')){
        row3[0].innerHTML = parseFloat(problem[2].innerHTML)/parseFloat(side[2].innerHTML);
        row3[1].innerHTML = parseFloat(problem[3].innerHTML)/parseFloat(side[2].innerHTML);
        row3[2].innerHTML = parseFloat(problem[4].innerHTML)/parseFloat(side[2].innerHTML);
        row3[3].innerHTML = parseFloat(problem[5].innerHTML)/parseFloat(side[2].innerHTML);
        row3[4].innerHTML = parseFloat(problem[6].innerHTML)/parseFloat(side[2].innerHTML);
        
        }
        if(parseFloat(side[3].innerHTML)!=parseFloat('0')){
            row4[0].innerHTML = parseFloat(problem[3].innerHTML)/parseFloat(side[3].innerHTML);
            row4[1].innerHTML = parseFloat(problem[4].innerHTML)/parseFloat(side[3].innerHTML);
            row4[2].innerHTML = parseFloat(problem[5].innerHTML)/parseFloat(side[3].innerHTML);
            row4[3].innerHTML = parseFloat(problem[6].innerHTML)/parseFloat(side[3].innerHTML);
            row4[4].innerHTML = parseFloat(problem[7].innerHTML)/parseFloat(side[3].innerHTML);
            
            }
            if(parseFloat(side[4].innerHTML)!=parseFloat('0')){
                row5[0].innerHTML = parseFloat(problem[4].innerHTML)/parseFloat(side[4].innerHTML);
                row5[1].innerHTML = parseFloat(problem[5].innerHTML)/parseFloat(side[4].innerHTML);
                row5[2].innerHTML = parseFloat(problem[6].innerHTML)/parseFloat(side[4].innerHTML);
                row5[3].innerHTML = parseFloat(problem[7].innerHTML)/parseFloat(side[4].innerHTML);
                row5[4].innerHTML = parseFloat(problem[8].innerHTML)/parseFloat(side[4].innerHTML);
                
                }

                else {return false;}

                product[0].innerHTML = row1[0].innerHTML;

                product[1].innerHTML = parseFloat(row2[0].innerHTML)+parseFloat(row1[1].innerHTML);
                
                product[2].innerHTML = parseFloat(row3[0].innerHTML)
                +parseFloat(row2[1].innerHTML)+parseFloat(row1[2].innerHTML);
                
                product[3].innerHTML = parseFloat(row4[0].innerHTML)
                +parseFloat(row3[1].innerHTML)+parseFloat(row2[2].innerHTML)+parseFloat(row1[3].innerHTML);
                
                product[4].innerHTML = parseFloat(row5[0].innerHTML)
                +parseFloat(row4[1].innerHTML)+parseFloat(row3[2].innerHTML)+parseFloat(row2[3].innerHTML)+parseFloat(row1[4].innerHTML);
                
                product[5].innerHTML = parseFloat(row5[1].innerHTML)
                +parseFloat(row4[2].innerHTML)+parseFloat(row3[3].innerHTML)+parseFloat(row2[4].innerHTML);
                
                product[6].innerHTML =  parseFloat(row5[2].innerHTML)
                +parseFloat(row4[3].innerHTML)+parseFloat(row3[4].innerHTML);
                
                product[7].innerHTML = parseFloat(row5[3].innerHTML)
                +parseFloat(row4[4].innerHTML);
                
                product[8].innerHTML = parseFloat(row5[4].innerHTML);
                
                
                if (isNaN(product[0].innerHTML))
                {product[0].innerHTML='0'}
                if (isNaN(product[1].innerHTML))
                {product[1].innerHTML='0'}
                if (isNaN(product[2].innerHTML))
                {product[2].innerHTML='0'}
                if (isNaN(product[3].innerHTML))
                {product[3].innerHTML='0'}
                if (isNaN(product[4].innerHTML))
                {product[4].innerHTML='0'}
                if (isNaN(product[5].innerHTML))
                {product[5].innerHTML='0'}
                if (isNaN(product[6].innerHTML))
                {product[6].innerHTML='0'}
                if (isNaN(product[7].innerHTML))
                {product[7].innerHTML='0'}
                if (isNaN(product[8].innerHTML))
                {product[8].innerHTML='0'}

                for (let k=0; k<product.length; k++){
                    guide[k].innerHTML = parseFloat(product[k].innerHTML) - parseFloat(problem[k].innerHTML);
                }
}

function multiplicationintermediate() {
    var top = document.getElementsByClassName('multiplicationintermediate-top');
    var side = document.getElementsByClassName('multiplicationintermediate-side');
    var row1 = document.getElementsByClassName('multiplicationintermediate-row1');
    var row2 = document.getElementsByClassName('multiplicationintermediate-row2');
    var row3 = document.getElementsByClassName('multiplicationintermediate-row3');
    var row4 = document.getElementsByClassName('multiplicationintermediate-row4');
    var row5 = document.getElementsByClassName('multiplicationintermediate-row5');

    var column1 = document.getElementsByClassName('multiplicationintermediate-column1');
    var column2 = document.getElementsByClassName('multiplicationintermediate-column2');
    var column3 = document.getElementsByClassName('multiplicationintermediate-column3');
    var column4 = document.getElementsByClassName('multiplicationintermediate-column4');
    var column5 = document.getElementsByClassName('multiplicationintermediate-column5');
    var product = document.getElementsByClassName('multiplicationintermediate-product');

var problem = document.getElementsByClassName('problemintermediate');
var guide = document.getElementsByClassName('guideintermediate');
    var cells = document.getElementsByTagName('td');


    for (let j=0; j<cells.length; j++){
        cells[j].addEventListener('blur', function(){
            if (isNaN(parseInt(cells[j].innerHTML))){
                cells[j].innerHTML = "0";
            }
        }, false);
    }
    for (let i=0; i<top.length; i++){
        row1[i].innerHTML = parseFloat(side[0].innerHTML)*parseFloat(top[i].innerHTML);
        row2[i].innerHTML = parseFloat(side[1].innerHTML)*parseFloat(top[i].innerHTML);
        row3[i].innerHTML = parseFloat(side[2].innerHTML)*parseFloat(top[i].innerHTML);
        row4[i].innerHTML = parseFloat(side[3].innerHTML)*parseFloat(top[i].innerHTML);
        row5[i].innerHTML = parseFloat(side[4].innerHTML)*parseFloat(top[i].innerHTML);
        product[0].innerHTML = row1[0].innerHTML;

product[1].innerHTML = parseFloat(row2[0].innerHTML)+parseFloat(row1[1].innerHTML);

product[2].innerHTML = parseFloat(row3[0].innerHTML)
+parseFloat(row2[1].innerHTML)+parseFloat(row1[2].innerHTML);

product[3].innerHTML = parseFloat(row4[0].innerHTML)
+parseFloat(row3[1].innerHTML)+parseFloat(row2[2].innerHTML)+parseFloat(row1[3].innerHTML);

product[4].innerHTML = parseFloat(row5[0].innerHTML)
+parseFloat(row4[1].innerHTML)+parseFloat(row3[2].innerHTML)+parseFloat(row2[3].innerHTML)+parseFloat(row1[4].innerHTML);

product[5].innerHTML = parseFloat(row5[1].innerHTML)
+parseFloat(row4[2].innerHTML)+parseFloat(row3[3].innerHTML)+parseFloat(row2[4].innerHTML);

product[6].innerHTML =  parseFloat(row5[2].innerHTML)
+parseFloat(row4[3].innerHTML)+parseFloat(row3[4].innerHTML);

product[7].innerHTML = parseFloat(row5[3].innerHTML)
+parseFloat(row4[4].innerHTML);

product[8].innerHTML = parseFloat(row5[4].innerHTML);


if (isNaN(product[0].innerHTML))
{product[0].innerHTML='0'}
if (isNaN(product[1].innerHTML))
{product[1].innerHTML='0'}
if (isNaN(product[2].innerHTML))
{product[2].innerHTML='0'}
if (isNaN(product[3].innerHTML))
{product[3].innerHTML='0'}
if (isNaN(product[4].innerHTML))
{product[4].innerHTML='0'}
if (isNaN(product[5].innerHTML))
{product[5].innerHTML='0'}
if (isNaN(product[6].innerHTML))
{product[6].innerHTML='0'}
if (isNaN(product[7].innerHTML))
{product[7].innerHTML='0'}
if (isNaN(product[8].innerHTML))
{product[8].innerHTML='0'}
    }
    for (let k=0; k<product.length; k++){
        guide[k].innerHTML =parseFloat(product[k].innerHTML) - parseFloat(problem[k].innerHTML);
    }
}
document.getElementById('multiplicationproduct').addEventListener('input',  function(){
var guide = document.getElementsByClassName('guide');
var product = document.getElementsByClassName('multiplication-product');
var problem = document.getElementsByClassName('problem');
for (let k=0; k<product.length; k++){
        guide[k].innerHTML =parseFloat(product[k].innerHTML) - parseFloat(problem[k].innerHTML);
    }

}, false);


document.getElementById('table-multiplication').addEventListener('input',  multiplicationfunction(), false);


document.getElementById('table-multiplication').addEventListener('input', function(){    
var product = document.getElementsByClassName('multiplication-product');
var problem = document.getElementsByClassName('problem');
var guide = document.getElementsByClassName('guide');
var top = document.getElementsByClassName('multiplication-top');
var side = document.getElementsByClassName('multiplication-side');
for (let j=0; j<top.length; j++){
    top[j].addEventListener('blur', function(){
        for (let i=0; i<product.length; i++){
            guide[i].innerHTML = parseFloat(problem[i].innerHTML) - parseFloat(product[i].innerHTML);
        }
    }, false);
}
for (let k=0; k<side.length; k++){
    side[k].addEventListener('blur', function(){
        for (let i=0; i<product.length; i++){
            guide[i].innerHTML = parseFloat(problem[i].innerHTML) - parseFloat(product[i].innerHTML);
        }
    }, false);
}


}, false);

document.getElementById('multiplicationgameproduct').addEventListener('input', function(){    
var product = document.getElementsByClassName('multiplicationgame-product');
var problem = document.getElementsByClassName('multiplicationgame-divisor');
var guide = document.getElementsByClassName('multiplicationgame-Guider');
var top = document.getElementsByClassName('multiplication-top');
var side = document.getElementsByClassName('multiplication-side');
for (let j=0; j<product.length; j++){
    product[j].addEventListener('blur', function(){
        for (let i=0; i<product.length; i++){
            guide[i].innerHTML = parseFloat(problem[i].innerHTML) - parseFloat(product[i].innerHTML);
        }
    }, false);
}

}


, false);

function getfactor() {
    var n = document.getElementById('factors').value;
    var x = document.getElementById('factors').value;
    var factorsss = "";
    var factorssss="";
    
    for (let i=1; i<=Math.abs(parseFloat(x)); i++) {
        if (parseFloat(n)>0){
        if (n % i == 0){
            factorsss+= '(' + i+"&"+parseInt(n/i) + ')'+'\r\n' +'(-' +i + "& -" +  parseInt(n/i) + ')';
            
            document.getElementById('factorpairs').innerHTML = factorsss;
        }
    }
    
    else if (parseFloat(n)<0){
        x = Math.abs(parseFloat(x));
        if (x % i == 0){
            factorsss+= '(' + i+"& -"+parseInt(x/i) + ')'+'\r\n' ;
            
            document.getElementById('factorpairs').innerHTML = factorsss;
        }
    }

    }
                }

function getfactorintermediate() {
                    var n = document.getElementById('factorsintermediate').value;
                    var x = document.getElementById('factorsintermediate').value;
                    var factorsss = "";
                    var factorssss="";
                    
                    for (let i=1; i<=Math.abs(parseFloat(x)); i++) {
                        if (parseFloat(n)>0){
                        if (n % i == 0){
                            factorsss+= '(' + i+"&"+parseInt(n/i) + ')'+'\r\n' +'(-' +i + "& -" +  parseInt(n/i) + ')';
                            
                            document.getElementById('factorintermediatepairs').innerHTML = factorsss;
                        }
                    }
                    
                    else if (parseFloat(n)<0){
                        x = Math.abs(parseFloat(x));
                        if (x % i == 0){
                            factorsss+= '(' + i+"& -"+parseInt(x/i) + ')'+'\r\n' ;
                            
                            document.getElementById('factorintermediatepairs').innerHTML = factorsss;
                        }
                    }
                
                    }
}
function getfactoradvance() {
var n = document.getElementById('factorsadvance').value;
var x = document.getElementById('factorsadvance').value;
var factorsss = "";
var factorssss="";

for (let i=1; i<=Math.abs(parseFloat(x)); i++) {
if (parseFloat(n)>0){
if (n % i == 0){
factorsss+= '(' + i+"&"+parseInt(n/i) + ')'+'\r\n' +'(-' +i + "& -" +  parseInt(n/i) + ')';
document.getElementById('factoradvancepairs').innerHTML = factorsss;
}
}

else if (parseFloat(n)<0){
    x = Math.abs(parseFloat(x));
    if (x % i == 0){
        factorsss+= '(' + i+"& -"+parseInt(x/i) + ')'+'\r\n' ;
        
        document.getElementById('factoradvancepairs').innerHTML = factorsss;
    }
}
                                
}
            }
//checker function

function checker(){
    var problem = document.getElementsByClassName('problem');
    var exponent = document.getElementById('exponent').value;
    var exp = parseFloat(exponent);
    var checker = "";
    var x = document.getElementById('tofind').value;

if (exponent == '1'){
        document.getElementById('checker').innerHTML = parseFloat(problem[0].innerHTML)*Math.pow(parseFloat(x), exp) + parseFloat(problem[1].innerHTML)*Math.pow(parseFloat(x), exp-1);
    }
else if (exponent == '2'){
    document.getElementById('checker').innerHTML = parseFloat(problem[0].innerHTML)*Math.pow(parseFloat(x), exp) + parseFloat(problem[1].innerHTML)*Math.pow(parseFloat(x), exp-1) + parseFloat(problem[2].innerHTML)*Math.pow(parseFloat(x), exp-2);
}
else if (exponent == '3'){
    document.getElementById('checker').innerHTML = parseFloat(problem[0].innerHTML)*Math.pow(parseFloat(x), exp) + parseFloat(problem[1].innerHTML)*Math.pow(parseFloat(x), exp-1) + parseFloat(problem[2].innerHTML)*Math.pow(parseFloat(x), exp-2)+ parseFloat(problem[3].innerHTML)*Math.pow(parseFloat(x), exp-3);
}
else if (exponent == '4'){
    document.getElementById('checker').innerHTML = parseFloat(problem[0].innerHTML)*Math.pow(parseFloat(x), exp) + parseFloat(problem[1].innerHTML)*Math.pow(parseFloat(x), exp-1) + parseFloat(problem[2].innerHTML)*Math.pow(parseFloat(x), exp-2)+ parseFloat(problem[3].innerHTML)*Math.pow(parseFloat(x), exp-3) + parseFloat(problem[4].innerHTML)*Math.pow(parseFloat(x), exp-4);
}
else if (exponent == '5'){
    document.getElementById('checker').innerHTML = parseFloat(problem[0].innerHTML)*Math.pow(parseFloat(x), exp) + parseFloat(problem[1].innerHTML)*Math.pow(parseFloat(x), exp-1) + parseFloat(problem[2].innerHTML)*Math.pow(parseFloat(x), exp-2)+ parseFloat(problem[3].innerHTML)*Math.pow(parseFloat(x), exp-3) + parseFloat(problem[4].innerHTML)*Math.pow(parseFloat(x), exp-4)+ parseFloat(problem[5].innerHTML)*Math.pow(parseFloat(x), exp-5);
}
else if (exponent == '6'){
    document.getElementById('checker').innerHTML = parseFloat(problem[0].innerHTML)*Math.pow(parseFloat(x), exp) + parseFloat(problem[1].innerHTML)*Math.pow(parseFloat(x), exp-1) + parseFloat(problem[2].innerHTML)*Math.pow(parseFloat(x), exp-2)+ parseFloat(problem[3].innerHTML)*Math.pow(parseFloat(x), exp-3) + parseFloat(problem[4].innerHTML)*Math.pow(parseFloat(x), exp-4)+ parseFloat(problem[5].innerHTML)*Math.pow(parseFloat(x), exp-5)+ parseFloat(problem[6].innerHTML)*Math.pow(parseFloat(x), exp-6);
}
else if (exponent == '7'){
    document.getElementById('checker').innerHTML = parseFloat(problem[0].innerHTML)*Math.pow(parseFloat(x), exp) + parseFloat(problem[1].innerHTML)*Math.pow(parseFloat(x), exp-1) + parseFloat(problem[2].innerHTML)*Math.pow(parseFloat(x), exp-2)+ parseFloat(problem[3].innerHTML)*Math.pow(parseFloat(x), exp-3) + parseFloat(problem[4].innerHTML)*Math.pow(parseFloat(x), exp-4)+ parseFloat(problem[5].innerHTML)*Math.pow(parseFloat(x), exp-5)+ parseFloat(problem[6].innerHTML)*Math.pow(parseFloat(x), exp-6)+ parseFloat(problem[7].innerHTML)*Math.pow(parseFloat(x), exp-7);
}
else if (exponent == '8'){
    document.getElementById('checker').innerHTML = parseFloat(problem[0].innerHTML)*Math.pow(parseFloat(x), exp) + parseFloat(problem[1].innerHTML)*Math.pow(parseFloat(x), exp-1) + parseFloat(problem[2].innerHTML)*Math.pow(parseFloat(x), exp-2)+ parseFloat(problem[3].innerHTML)*Math.pow(parseFloat(x), exp-3) + parseFloat(problem[4].innerHTML)*Math.pow(parseFloat(x), exp-4)+ parseFloat(problem[5].innerHTML)*Math.pow(parseFloat(x), exp-5)+ parseFloat(problem[6].innerHTML)*Math.pow(parseFloat(x), exp-6)+ parseFloat(problem[7].innerHTML)*Math.pow(parseFloat(x), exp-7)+ parseFloat(problem[8].innerHTML)*Math.pow(parseFloat(x), exp-8);
}
else if (exponent == '9'){
    document.getElementById('checker').innerHTML = parseFloat(problem[0].innerHTML)*Math.pow(parseFloat(x), exp) + parseFloat(problem[1].innerHTML)*Math.pow(parseFloat(x), exp-1) + parseFloat(problem[2].innerHTML)*Math.pow(parseFloat(x), exp-2)+ parseFloat(problem[3].innerHTML)*Math.pow(parseFloat(x), exp-3) + parseFloat(problem[4].innerHTML)*Math.pow(parseFloat(x), exp-4)+ parseFloat(problem[5].innerHTML)*Math.pow(parseFloat(x), exp-5)+ parseFloat(problem[6].innerHTML)*Math.pow(parseFloat(x), exp-6)+ parseFloat(problem[7].innerHTML)*Math.pow(parseFloat(x), exp-7)+ parseFloat(problem[8].innerHTML)*Math.pow(parseFloat(x), exp-8)+ parseFloat(problem[9].innerHTML)*Math.pow(parseFloat(x), exp-9);
}
else if (exponent == '10'){
    document.getElementById('checker').innerHTML = parseFloat(problem[0].innerHTML)*Math.pow(parseFloat(x), exp) + parseFloat(problem[1].innerHTML)*Math.pow(parseFloat(x), exp-1) + parseFloat(problem[2].innerHTML)*Math.pow(parseFloat(x), exp-2)+ parseFloat(problem[3].innerHTML)*Math.pow(parseFloat(x), exp-3) + parseFloat(problem[4].innerHTML)*Math.pow(parseFloat(x), exp-4)+ parseFloat(problem[5].innerHTML)*Math.pow(parseFloat(x), exp-5)+ parseFloat(problem[6].innerHTML)*Math.pow(parseFloat(x), exp-6)+ parseFloat(problem[7].innerHTML)*Math.pow(parseFloat(x), exp-7)+ parseFloat(problem[8].innerHTML)*Math.pow(parseFloat(x), exp-8)+ parseFloat(problem[9].innerHTML)*Math.pow(parseFloat(x), exp-9)+ parseFloat(problem[10].innerHTML)*Math.pow(parseFloat(x), exp-10);
}
else if (x==""){
    document.getElementById('checker').innerHTML = '0';
}
else { return false}
}

function checkerintermediate(){
    var problem = document.getElementsByClassName('problemintermediate');
    var exponent = document.getElementById('exponentintermediate').value;
    var exp = parseFloat(exponent);
    var checker = "";
    var x = document.getElementById('tofindintermediate').value;

if (exponent == '1'){
        document.getElementById('checkerintermediate').innerHTML = parseFloat(problem[0].innerHTML)*Math.pow(parseFloat(x), exp) + parseFloat(problem[1].innerHTML)*Math.pow(parseFloat(x), exp-1);
    }
else if (exponent == '2'){
    document.getElementById('checkerintermediate').innerHTML = parseFloat(problem[0].innerHTML)*Math.pow(parseFloat(x), exp) + parseFloat(problem[1].innerHTML)*Math.pow(parseFloat(x), exp-1) + parseFloat(problem[2].innerHTML)*Math.pow(parseFloat(x), exp-2);
}
else if (exponent == '3'){
    document.getElementById('checkerintermediate').innerHTML = parseFloat(problem[0].innerHTML)*Math.pow(parseFloat(x), exp) + parseFloat(problem[1].innerHTML)*Math.pow(parseFloat(x), exp-1) + parseFloat(problem[2].innerHTML)*Math.pow(parseFloat(x), exp-2)+ parseFloat(problem[3].innerHTML)*Math.pow(parseFloat(x), exp-3);
}
else if (exponent == '4'){
    document.getElementById('checkerintermediate').innerHTML = parseFloat(problem[0].innerHTML)*Math.pow(parseFloat(x), exp) + parseFloat(problem[1].innerHTML)*Math.pow(parseFloat(x), exp-1) + parseFloat(problem[2].innerHTML)*Math.pow(parseFloat(x), exp-2)+ parseFloat(problem[3].innerHTML)*Math.pow(parseFloat(x), exp-3) + parseFloat(problem[4].innerHTML)*Math.pow(parseFloat(x), exp-4);
}
else if (exponent == '5'){
    document.getElementById('checkerintermediate').innerHTML = parseFloat(problem[0].innerHTML)*Math.pow(parseFloat(x), exp) + parseFloat(problem[1].innerHTML)*Math.pow(parseFloat(x), exp-1) + parseFloat(problem[2].innerHTML)*Math.pow(parseFloat(x), exp-2)+ parseFloat(problem[3].innerHTML)*Math.pow(parseFloat(x), exp-3) + parseFloat(problem[4].innerHTML)*Math.pow(parseFloat(x), exp-4)+ parseFloat(problem[5].innerHTML)*Math.pow(parseFloat(x), exp-5);
}
else if (exponent == '6'){
    document.getElementById('checkerintermediate').innerHTML = parseFloat(problem[0].innerHTML)*Math.pow(parseFloat(x), exp) + parseFloat(problem[1].innerHTML)*Math.pow(parseFloat(x), exp-1) + parseFloat(problem[2].innerHTML)*Math.pow(parseFloat(x), exp-2)+ parseFloat(problem[3].innerHTML)*Math.pow(parseFloat(x), exp-3) + parseFloat(problem[4].innerHTML)*Math.pow(parseFloat(x), exp-4)+ parseFloat(problem[5].innerHTML)*Math.pow(parseFloat(x), exp-5)+ parseFloat(problem[6].innerHTML)*Math.pow(parseFloat(x), exp-6);
}
else if (exponent == '7'){
    document.getElementById('checkerintermediate').innerHTML = parseFloat(problem[0].innerHTML)*Math.pow(parseFloat(x), exp) + parseFloat(problem[1].innerHTML)*Math.pow(parseFloat(x), exp-1) + parseFloat(problem[2].innerHTML)*Math.pow(parseFloat(x), exp-2)+ parseFloat(problem[3].innerHTML)*Math.pow(parseFloat(x), exp-3) + parseFloat(problem[4].innerHTML)*Math.pow(parseFloat(x), exp-4)+ parseFloat(problem[5].innerHTML)*Math.pow(parseFloat(x), exp-5)+ parseFloat(problem[6].innerHTML)*Math.pow(parseFloat(x), exp-6)+ parseFloat(problem[7].innerHTML)*Math.pow(parseFloat(x), exp-7);
}
else if (exponent == '8'){
    document.getElementById('checkerintermediate').innerHTML = parseFloat(problem[0].innerHTML)*Math.pow(parseFloat(x), exp) + parseFloat(problem[1].innerHTML)*Math.pow(parseFloat(x), exp-1) + parseFloat(problem[2].innerHTML)*Math.pow(parseFloat(x), exp-2)+ parseFloat(problem[3].innerHTML)*Math.pow(parseFloat(x), exp-3) + parseFloat(problem[4].innerHTML)*Math.pow(parseFloat(x), exp-4)+ parseFloat(problem[5].innerHTML)*Math.pow(parseFloat(x), exp-5)+ parseFloat(problem[6].innerHTML)*Math.pow(parseFloat(x), exp-6)+ parseFloat(problem[7].innerHTML)*Math.pow(parseFloat(x), exp-7)+ parseFloat(problem[8].innerHTML)*Math.pow(parseFloat(x), exp-8);
}
else if (exponent == '9'){
    document.getElementById('checkerintermediate').innerHTML = parseFloat(problem[0].innerHTML)*Math.pow(parseFloat(x), exp) + parseFloat(problem[1].innerHTML)*Math.pow(parseFloat(x), exp-1) + parseFloat(problem[2].innerHTML)*Math.pow(parseFloat(x), exp-2)+ parseFloat(problem[3].innerHTML)*Math.pow(parseFloat(x), exp-3) + parseFloat(problem[4].innerHTML)*Math.pow(parseFloat(x), exp-4)+ parseFloat(problem[5].innerHTML)*Math.pow(parseFloat(x), exp-5)+ parseFloat(problem[6].innerHTML)*Math.pow(parseFloat(x), exp-6)+ parseFloat(problem[7].innerHTML)*Math.pow(parseFloat(x), exp-7)+ parseFloat(problem[8].innerHTML)*Math.pow(parseFloat(x), exp-8)+ parseFloat(problem[9].innerHTML)*Math.pow(parseFloat(x), exp-9);
}
else if (exponent == '10'){
    document.getElementById('checkerintermediate').innerHTML = parseFloat(problem[0].innerHTML)*Math.pow(parseFloat(x), exp) + parseFloat(problem[1].innerHTML)*Math.pow(parseFloat(x), exp-1) + parseFloat(problem[2].innerHTML)*Math.pow(parseFloat(x), exp-2)+ parseFloat(problem[3].innerHTML)*Math.pow(parseFloat(x), exp-3) + parseFloat(problem[4].innerHTML)*Math.pow(parseFloat(x), exp-4)+ parseFloat(problem[5].innerHTML)*Math.pow(parseFloat(x), exp-5)+ parseFloat(problem[6].innerHTML)*Math.pow(parseFloat(x), exp-6)+ parseFloat(problem[7].innerHTML)*Math.pow(parseFloat(x), exp-7)+ parseFloat(problem[8].innerHTML)*Math.pow(parseFloat(x), exp-8)+ parseFloat(problem[9].innerHTML)*Math.pow(parseFloat(x), exp-9)+ parseFloat(problem[10].innerHTML)*Math.pow(parseFloat(x), exp-10);
}
else if (x==""){
    document.getElementById('checkerintermediate').innerHTML = '0';
}
else { return false}
}

function checkeradvance(){
    var problem = document.getElementsByClassName('problemadvance');
    var exponent = document.getElementById('exponentadvance').value;
    var exp = parseFloat(exponent);
    var checker = "";
    var x = document.getElementById('tofindadvance').value;

if (exponent == '1'){
        document.getElementById('checkeradvance').innerHTML = parseFloat(problem[0].innerHTML)*Math.pow(parseFloat(x), exp) + parseFloat(problem[1].innerHTML)*Math.pow(parseFloat(x), exp-1);
    }
else if (exponent == '2'){
    document.getElementById('checkeradvance').innerHTML = parseFloat(problem[0].innerHTML)*Math.pow(parseFloat(x), exp) + parseFloat(problem[1].innerHTML)*Math.pow(parseFloat(x), exp-1) + parseFloat(problem[2].innerHTML)*Math.pow(parseFloat(x), exp-2);
}
else if (exponent == '3'){
    document.getElementById('checkeradvance').innerHTML = parseFloat(problem[0].innerHTML)*Math.pow(parseFloat(x), exp) + parseFloat(problem[1].innerHTML)*Math.pow(parseFloat(x), exp-1) + parseFloat(problem[2].innerHTML)*Math.pow(parseFloat(x), exp-2)+ parseFloat(problem[3].innerHTML)*Math.pow(parseFloat(x), exp-3);
}
else if (exponent == '4'){
    document.getElementById('checkeradvance').innerHTML = parseFloat(problem[0].innerHTML)*Math.pow(parseFloat(x), exp) + parseFloat(problem[1].innerHTML)*Math.pow(parseFloat(x), exp-1) + parseFloat(problem[2].innerHTML)*Math.pow(parseFloat(x), exp-2)+ parseFloat(problem[3].innerHTML)*Math.pow(parseFloat(x), exp-3) + parseFloat(problem[4].innerHTML)*Math.pow(parseFloat(x), exp-4);
}
else if (exponent == '5'){
    document.getElementById('checkeradvance').innerHTML = parseFloat(problem[0].innerHTML)*Math.pow(parseFloat(x), exp) + parseFloat(problem[1].innerHTML)*Math.pow(parseFloat(x), exp-1) + parseFloat(problem[2].innerHTML)*Math.pow(parseFloat(x), exp-2)+ parseFloat(problem[3].innerHTML)*Math.pow(parseFloat(x), exp-3) + parseFloat(problem[4].innerHTML)*Math.pow(parseFloat(x), exp-4)+ parseFloat(problem[5].innerHTML)*Math.pow(parseFloat(x), exp-5);
}
else if (exponent == '6'){
    document.getElementById('checkeradvance').innerHTML = parseFloat(problem[0].innerHTML)*Math.pow(parseFloat(x), exp) + parseFloat(problem[1].innerHTML)*Math.pow(parseFloat(x), exp-1) + parseFloat(problem[2].innerHTML)*Math.pow(parseFloat(x), exp-2)+ parseFloat(problem[3].innerHTML)*Math.pow(parseFloat(x), exp-3) + parseFloat(problem[4].innerHTML)*Math.pow(parseFloat(x), exp-4)+ parseFloat(problem[5].innerHTML)*Math.pow(parseFloat(x), exp-5)+ parseFloat(problem[6].innerHTML)*Math.pow(parseFloat(x), exp-6);
}
else if (exponent == '7'){
    document.getElementById('checkeradvance').innerHTML = parseFloat(problem[0].innerHTML)*Math.pow(parseFloat(x), exp) + parseFloat(problem[1].innerHTML)*Math.pow(parseFloat(x), exp-1) + parseFloat(problem[2].innerHTML)*Math.pow(parseFloat(x), exp-2)+ parseFloat(problem[3].innerHTML)*Math.pow(parseFloat(x), exp-3) + parseFloat(problem[4].innerHTML)*Math.pow(parseFloat(x), exp-4)+ parseFloat(problem[5].innerHTML)*Math.pow(parseFloat(x), exp-5)+ parseFloat(problem[6].innerHTML)*Math.pow(parseFloat(x), exp-6)+ parseFloat(problem[7].innerHTML)*Math.pow(parseFloat(x), exp-7);
}
else if (exponent == '8'){
    document.getElementById('checkeradvance').innerHTML = parseFloat(problem[0].innerHTML)*Math.pow(parseFloat(x), exp) + parseFloat(problem[1].innerHTML)*Math.pow(parseFloat(x), exp-1) + parseFloat(problem[2].innerHTML)*Math.pow(parseFloat(x), exp-2)+ parseFloat(problem[3].innerHTML)*Math.pow(parseFloat(x), exp-3) + parseFloat(problem[4].innerHTML)*Math.pow(parseFloat(x), exp-4)+ parseFloat(problem[5].innerHTML)*Math.pow(parseFloat(x), exp-5)+ parseFloat(problem[6].innerHTML)*Math.pow(parseFloat(x), exp-6)+ parseFloat(problem[7].innerHTML)*Math.pow(parseFloat(x), exp-7)+ parseFloat(problem[8].innerHTML)*Math.pow(parseFloat(x), exp-8);
}
else if (exponent == '9'){
    document.getElementById('checkeradvance').innerHTML = parseFloat(problem[0].innerHTML)*Math.pow(parseFloat(x), exp) + parseFloat(problem[1].innerHTML)*Math.pow(parseFloat(x), exp-1) + parseFloat(problem[2].innerHTML)*Math.pow(parseFloat(x), exp-2)+ parseFloat(problem[3].innerHTML)*Math.pow(parseFloat(x), exp-3) + parseFloat(problem[4].innerHTML)*Math.pow(parseFloat(x), exp-4)+ parseFloat(problem[5].innerHTML)*Math.pow(parseFloat(x), exp-5)+ parseFloat(problem[6].innerHTML)*Math.pow(parseFloat(x), exp-6)+ parseFloat(problem[7].innerHTML)*Math.pow(parseFloat(x), exp-7)+ parseFloat(problem[8].innerHTML)*Math.pow(parseFloat(x), exp-8)+ parseFloat(problem[9].innerHTML)*Math.pow(parseFloat(x), exp-9);
}
else if (exponent == '10'){
    document.getElementById('checkeradvance').innerHTML = parseFloat(problem[0].innerHTML)*Math.pow(parseFloat(x), exp) + parseFloat(problem[1].innerHTML)*Math.pow(parseFloat(x), exp-1) + parseFloat(problem[2].innerHTML)*Math.pow(parseFloat(x), exp-2)+ parseFloat(problem[3].innerHTML)*Math.pow(parseFloat(x), exp-3) + parseFloat(problem[4].innerHTML)*Math.pow(parseFloat(x), exp-4)+ parseFloat(problem[5].innerHTML)*Math.pow(parseFloat(x), exp-5)+ parseFloat(problem[6].innerHTML)*Math.pow(parseFloat(x), exp-6)+ parseFloat(problem[7].innerHTML)*Math.pow(parseFloat(x), exp-7)+ parseFloat(problem[8].innerHTML)*Math.pow(parseFloat(x), exp-8)+ parseFloat(problem[9].innerHTML)*Math.pow(parseFloat(x), exp-9)+ parseFloat(problem[10].innerHTML)*Math.pow(parseFloat(x), exp-10);
}
else if (x==""){
    document.getElementById('checkeradvance').innerHTML = '0';
}
else { return false}
}

//GAME MODE

function additiongameperclick(){
    var row1 = document.getElementsByClassName('additiongame-row1');
    var row2 = document.getElementsByClassName('additiongame-row2');
    var row3 = document.getElementsByClassName('additiongame-row3');
    var row4 = document.getElementsByClassName('additiongame-row4');
    var row5 = document.getElementsByClassName('additiongame-row5');
    var row6 = document.getElementsByClassName('additiongame-row6');
    var sum1 = document.getElementsByClassName('additiongame-sum');
    var col = ['blue','red', 'green','yellow','pink','aquamarine'];
        if( isMobile.any() ) {
            if(parseFloat(sum1[0].innerHTML)==parseFloat(row1[0].innerHTML)+parseFloat(row2[0].innerHTML)+parseFloat(row3[0].innerHTML)+parseFloat(row4[0].innerHTML)+parseFloat(row5[0].innerHTML)+parseFloat(row6[0].innerHTML)&parseFloat(sum1[1].innerHTML)==parseFloat(row1[1].innerHTML)+parseFloat(row2[1].innerHTML)+parseFloat(row3[1].innerHTML)+parseFloat(row4[1].innerHTML)+parseFloat(row5[1].innerHTML)+parseFloat(row6[1].innerHTML)&parseFloat(sum1[2].innerHTML)==parseFloat(row1[2].innerHTML)+parseFloat(row2[2].innerHTML)+parseFloat(row3[2].innerHTML)+parseFloat(row4[2].innerHTML)+parseFloat(row5[2].innerHTML)+parseFloat(row6[2].innerHTML)&parseFloat(sum1[3].innerHTML)==parseFloat(row1[3].innerHTML)+parseFloat(row2[3].innerHTML)+parseFloat(row3[3].innerHTML)+parseFloat(row4[3].innerHTML)+parseFloat(row5[3].innerHTML)+parseFloat(row6[3].innerHTML)&parseFloat(sum1[4].innerHTML)==parseFloat(row1[4].innerHTML)+parseFloat(row2[4].innerHTML)+parseFloat(row3[4].innerHTML)+parseFloat(row4[4].innerHTML)+parseFloat(row5[4].innerHTML)+parseFloat(row6[4].innerHTML)&parseFloat(sum1[5].innerHTML)==parseFloat(row1[5].innerHTML)+parseFloat(row2[5].innerHTML)+parseFloat(row3[5].innerHTML)+parseFloat(row4[5].innerHTML)+parseFloat(row5[5].innerHTML)+parseFloat(row6[5].innerHTML)){

            alert ('Good Job! Keep it up!! ;) :)');
            for (let i=0; i<sum1.length; i++){
                    
                sum1[i].style.backgroundColor = col[i];
                sum1[i].style.color = 'black';
            }
                }
                else {
                    alert ("Don't lose hope! Try Again! :) ;)");
                    
                }
        }
        else {
            if(parseFloat(sum1[0].innerHTML)==parseFloat(row1[0].innerHTML)+parseFloat(row2[0].innerHTML)+parseFloat(row3[0].innerHTML)+parseFloat(row4[0].innerHTML)+parseFloat(row5[0].innerHTML)+parseFloat(row6[0].innerHTML)&parseFloat(sum1[1].innerHTML)==parseFloat(row1[1].innerHTML)+parseFloat(row2[1].innerHTML)+parseFloat(row3[1].innerHTML)+parseFloat(row4[1].innerHTML)+parseFloat(row5[1].innerHTML)+parseFloat(row6[1].innerHTML)&parseFloat(sum1[2].innerHTML)==parseFloat(row1[2].innerHTML)+parseFloat(row2[2].innerHTML)+parseFloat(row3[2].innerHTML)+parseFloat(row4[2].innerHTML)+parseFloat(row5[2].innerHTML)+parseFloat(row6[2].innerHTML)&parseFloat(sum1[3].innerHTML)==parseFloat(row1[3].innerHTML)+parseFloat(row2[3].innerHTML)+parseFloat(row3[3].innerHTML)+parseFloat(row4[3].innerHTML)+parseFloat(row5[3].innerHTML)+parseFloat(row6[3].innerHTML)&parseFloat(sum1[4].innerHTML)==parseFloat(row1[4].innerHTML)+parseFloat(row2[4].innerHTML)+parseFloat(row3[4].innerHTML)+parseFloat(row4[4].innerHTML)+parseFloat(row5[4].innerHTML)+parseFloat(row6[4].innerHTML)&parseFloat(sum1[5].innerHTML)==parseFloat(row1[5].innerHTML)+parseFloat(row2[5].innerHTML)+parseFloat(row3[5].innerHTML)+parseFloat(row4[5].innerHTML)+parseFloat(row5[5].innerHTML)+parseFloat(row6[5].innerHTML)){

                document.getElementById('positivemessage').style.display ="block";
                for (let i=0; i<sum1.length; i++){
                    
                    sum1[i].style.backgroundColor = col[i];
                    sum1[i].style.color = 'black';
                }
                }
                else {
                    
                    document.getElementById('negativemessage').style.display ="block";
                }
                setTimeout(() => {
                    document.getElementById('negativemessage').style.display = "none";
                    document.getElementById('positivemessage').style.display = "none";}, 1500);
        }
        for (let i=0; i<sum1.length; i++){
            let x = parseFloat(row1[i].innerHTML)+parseFloat(row2[i].innerHTML)+parseFloat(row3[i].innerHTML)+parseFloat(row4[i].innerHTML)+parseFloat(row5[i].innerHTML)+parseFloat(row6[i].innerHTML);

            if (parseFloat(sum1[0].innerHTML) != parseFloat(row1[0].innerHTML)+parseFloat(row2[0].innerHTML)+parseFloat(row3[0].innerHTML)+parseFloat(row4[0].innerHTML)+parseFloat(row5[0].innerHTML)+parseFloat(row6[0].innerHTML)){
                sum1[0].style.color = "white";
                sum1[0].style.backgroundColor = "orange";
                
        }
        else {
            sum1[0].style.color = "black";
                sum1[0].style.backgroundColor = "blue";
        }
        if (parseFloat(sum1[1].innerHTML) != parseFloat(row1[1].innerHTML)+parseFloat(row2[1].innerHTML)+parseFloat(row3[1].innerHTML)+parseFloat(row4[1].innerHTML)+parseFloat(row5[1].innerHTML)+parseFloat(row6[1].innerHTML)){
            sum1[1].style.color = "white";
            sum1[1].style.backgroundColor = "orange";
             }
             else {
                sum1[1].style.color = "black";
                    sum1[1].style.backgroundColor = "red";
            }
      if (parseFloat(sum1[2].innerHTML) != parseFloat(row1[2].innerHTML)+parseFloat(row2[2].innerHTML)+parseFloat(row3[2].innerHTML)+parseFloat(row4[2].innerHTML)+parseFloat(row5[2].innerHTML)+parseFloat(row6[2].innerHTML)){
                sum1[2].style.color = "white";
                sum1[2].style.backgroundColor = "orange";
                 }
                 else {
                    sum1[2].style.color = "black";
                        sum1[2].style.backgroundColor = "green";
                }
 if (parseFloat(sum1[3].innerHTML) != parseFloat(row1[3].innerHTML)+parseFloat(row2[3].innerHTML)+parseFloat(row3[3].innerHTML)+parseFloat(row4[3].innerHTML)+parseFloat(row5[3].innerHTML)+parseFloat(row6[3].innerHTML)){
                    sum1[3].style.color = "white";
                    sum1[3].style.backgroundColor = "orange";
}
else {
    sum1[3].style.color = "black";
        sum1[3].style.backgroundColor = "yellow";
}
if (parseFloat(sum1[4].innerHTML) != parseFloat(row1[4].innerHTML)+parseFloat(row2[4].innerHTML)+parseFloat(row3[4].innerHTML)+parseFloat(row4[4].innerHTML)+parseFloat(row5[4].innerHTML)+parseFloat(row6[4].innerHTML)){
    sum1[4].style.color = "white";
    sum1[4].style.backgroundColor = "orange";
     }
     else {
        sum1[4].style.color = "black";
            sum1[4].style.backgroundColor = "pink";
    }
 if (parseFloat(sum1[5].innerHTML) != parseFloat(row1[5].innerHTML)+parseFloat(row2[5].innerHTML)+parseFloat(row3[5].innerHTML)+parseFloat(row4[5].innerHTML)+parseFloat(row5[5].innerHTML)+parseFloat(row6[5].innerHTML)){
        sum1[5].style.color = "white";
        sum1[5].style.backgroundColor = "orange";
         }
         else {
            sum1[5].style.color = "black";
                sum1[5].style.backgroundColor = "aquamarine";
        }

    }
    }

    function revealsumgame(){
        var row1 = document.getElementsByClassName('additiongame-row1');
        var row2 = document.getElementsByClassName('additiongame-row2');
        var row3 = document.getElementsByClassName('additiongame-row3');
        var row4 = document.getElementsByClassName('additiongame-row4');
        var row5 = document.getElementsByClassName('additiongame-row5');
        var row6 = document.getElementsByClassName('additiongame-row6');
        var sum1 = document.getElementsByClassName('additiongame-sum');
        for (let i=0; i<sum1.length; i++){
            let x = parseFloat(row1[i].innerHTML)+parseFloat(row2[i].innerHTML)+parseFloat(row3[i].innerHTML)+parseFloat(row4[i].innerHTML)+parseFloat(row5[i].innerHTML)+parseFloat(row6[i].innerHTML);

            if (parseFloat(sum1[0].innerHTML) != parseFloat(row1[0].innerHTML)+parseFloat(row2[0].innerHTML)+parseFloat(row3[0].innerHTML)+parseFloat(row4[0].innerHTML)+parseFloat(row5[0].innerHTML)+parseFloat(row6[0].innerHTML)){
                sum1[0].style.color = "white";
                sum1[0].style.backgroundColor = "orange";
                
        }
        else {
            sum1[0].style.color = "black";
                sum1[0].style.backgroundColor = "blue";
        }
        if (parseFloat(sum1[1].innerHTML) != parseFloat(row1[1].innerHTML)+parseFloat(row2[1].innerHTML)+parseFloat(row3[1].innerHTML)+parseFloat(row4[1].innerHTML)+parseFloat(row5[1].innerHTML)+parseFloat(row6[1].innerHTML)){
            sum1[1].style.color = "white";
            sum1[1].style.backgroundColor = "orange";
             }
             else {
                sum1[1].style.color = "black";
                    sum1[1].style.backgroundColor = "red";
            }
      if (parseFloat(sum1[2].innerHTML) != parseFloat(row1[2].innerHTML)+parseFloat(row2[2].innerHTML)+parseFloat(row3[2].innerHTML)+parseFloat(row4[2].innerHTML)+parseFloat(row5[2].innerHTML)+parseFloat(row6[2].innerHTML)){
                sum1[2].style.color = "white";
                sum1[2].style.backgroundColor = "orange";
                 }
                 else {
                    sum1[2].style.color = "black";
                        sum1[2].style.backgroundColor = "red";
                }
 if (parseFloat(sum1[3].innerHTML) != parseFloat(row1[3].innerHTML)+parseFloat(row2[3].innerHTML)+parseFloat(row3[3].innerHTML)+parseFloat(row4[3].innerHTML)+parseFloat(row5[3].innerHTML)+parseFloat(row6[3].innerHTML)){
                    sum1[3].style.color = "white";
                    sum1[3].style.backgroundColor = "orange";
}
if (parseFloat(sum1[4].innerHTML) != parseFloat(row1[4].innerHTML)+parseFloat(row2[4].innerHTML)+parseFloat(row3[4].innerHTML)+parseFloat(row4[4].innerHTML)+parseFloat(row5[4].innerHTML)+parseFloat(row6[4].innerHTML)){
    sum1[4].style.color = "white";
    sum1[4].style.backgroundColor = "orange";
     }
 if (parseFloat(sum1[5].innerHTML) != parseFloat(row1[5].innerHTML)+parseFloat(row2[5].innerHTML)+parseFloat(row3[5].innerHTML)+parseFloat(row4[5].innerHTML)+parseFloat(row5[5].innerHTML)+parseFloat(row6[5].innerHTML)){
        sum1[5].style.color = "white";
        sum1[5].style.backgroundColor = "orange";
         }
        else {
            return false;
        }
    }
    }
  
//ADDITION GAME MODE SELF - LEARNING
function additiongame(){
    var row1 = document.getElementsByClassName('additionintermediate-row1');
    var row2 = document.getElementsByClassName('additionintermediate-row2');
    var row3 = document.getElementsByClassName('additionintermediate-row3');
    var row4 = document.getElementsByClassName('additionintermediate-row4');
    var row5 = document.getElementsByClassName('additionintermediate-row5');
    var row6 = document.getElementsByClassName('additionintermediate-row6');

    var sum1 = document.getElementsByClassName('additionintermediate-sum');
    var cells = document.getElementsByTagName('td');

    for (let i=0; i<sum1.length; i++){
        if( isMobile.any() ) {
            sum1[i].addEventListener('blur', function(){
                let x = parseFloat(row1[i].innerHTML)+parseFloat(row2[i].innerHTML)+parseFloat(row3[i].innerHTML)+parseFloat(row4[i].innerHTML)+parseFloat(row5[i].innerHTML)+parseFloat(row6[i].innerHTML);
                if (parseFloat(sum1[i].innerHTML)==parseFloat(x)){
                    alert ('Good Job! Keep it up!! ;) :)');
                }
                else {
                    alert ("Don't lose hope! Try Again! :) ;)");
                    sum1[i].focus();
                }
            }, false);
        }
        else {
        sum1[i].addEventListener('keydown', function(e){
        if (e.keyCode === 13){
e.preventDefault();
 let x = parseFloat(row1[i].innerHTML)+parseFloat(row2[i].innerHTML)+parseFloat(row3[i].innerHTML)+parseFloat(row4[i].innerHTML)+parseFloat(row5[i].innerHTML)+parseFloat(row6[i].innerHTML);
            if (parseFloat(sum1[i].innerHTML)==parseFloat(x)){
                document.getElementById('positivemessage').style.display ="block";
sum1[i].style.borderColor = 'black';
sum1[i].style.borderWidth = '1px'; 

            }
            else {
                document.getElementById('negativemessage').style.display ="block";
sum1[i].style.borderColor = 'red';
sum1[i].style.borderWidth = '2px';

                sum1[i].focus();
            }
            setTimeout(() => {
                document.getElementById('negativemessage').style.display = "none";
                document.getElementById('positivemessage').style.display = "none";}, 1500);
       }
else {
return false;}
            }, false);
    }
    }
}
function additiongameoriginal(){
    var row1 = document.getElementsByClassName('additiongame-row1');
    var row2 = document.getElementsByClassName('additiongame-row2');
    var row3 = document.getElementsByClassName('additiongame-row3');
    var row4 = document.getElementsByClassName('additiongame-row4');
    var row5 = document.getElementsByClassName('additiongame-row5');
    var row6 = document.getElementsByClassName('additiongame-row6');
    var sum1 = document.getElementsByClassName('additiongame-sum');
    var cells = document.getElementsByTagName('td');
    for (let j=0; j<cells.length; j++){
        cells[j].addEventListener('blur', function(){
            if (isNaN(parseInt(cells[j].innerHTML))){
                cells[j].innerHTML = "0";
            }
}, false);    }
    for (let i=0; i<sum1.length; i++){
        if( isMobile.any() ) {
            sum1[i].addEventListener('blur', function(){
                let x = parseFloat(row1[i].innerHTML)+parseFloat(row2[i].innerHTML)+parseFloat(row3[i].innerHTML)+parseFloat(row4[i].innerHTML)+parseFloat(row5[i].innerHTML)+parseFloat(row6[i].innerHTML);
                if (parseFloat(sum1[i].innerHTML)==parseFloat(x)){
                    alert ('Good Job! Keep it up!! ;) :)');
                }
                else {
                    alert ("Don't lose hope! Try Again! :) ;)");
                    sum1[i].focus();
                }
            }, false);
        }
        else {
        sum1[i].addEventListener('keydown', function(e){
if (e.keyCode == 13){
            let x = parseFloat(row1[i].innerHTML)+parseFloat(row2[i].innerHTML)+parseFloat(row3[i].innerHTML)+parseFloat(row4[i].innerHTML)+parseFloat(row5[i].innerHTML)+parseFloat(row6[i].innerHTML);
            if (parseFloat(sum1[i].innerHTML)==parseFloat(x)){
                document.getElementById('positivemessage').style.display ="block";
                sum1[i].style.borderColor ="black";
                sum1[i].style.borderWidth = "1px";
            }
            else {
                document.getElementById('negativemessage').style.display ="block";
                
                sum1[i].style.borderColor ="red";
                sum1[i].style.borderWidth = "2px";
sum1[i].focus();
            }
            setTimeout(() => {
                document.getElementById('negativemessage').style.display = "none";
                document.getElementById('positivemessage').style.display = "none";}, 1500);
         }
else {
return false;
}
 }, false);
    }
    }
}

document.getElementById('additiongamesum').addEventListener('input', additiongameoriginal(), false);
document.getElementById('additionintermediatesum').addEventListener('input', additiongame(), false);

function checkdifferencegame(){
    var row1 = document.getElementsByClassName('subtractiongame-row1');
    var row2 = document.getElementsByClassName('subtractiongame-row2');
    var row3 = document.getElementsByClassName('subtractiongame-row3');
    var row4 = document.getElementsByClassName('subtractiongame-row4');
    var row5 = document.getElementsByClassName('subtractiongame-row5');
    var row6 = document.getElementsByClassName('subtractiongame-row6');

    var difference1 = document.getElementsByClassName('subtractiongame-difference');
    if( isMobile.any() ) {
        if(parseFloat(difference1[0].innerHTML)==parseFloat(row1[0].innerHTML)-parseFloat(row2[0].innerHTML)-parseFloat(row3[0].innerHTML)-parseFloat(row4[0].innerHTML)-parseFloat(row5[0].innerHTML)-parseFloat(row6[0].innerHTML)&parseFloat(difference1[1].innerHTML)==parseFloat(row1[1].innerHTML)-parseFloat(row2[1].innerHTML)-parseFloat(row3[1].innerHTML)-parseFloat(row4[1].innerHTML)-parseFloat(row5[1].innerHTML)-parseFloat(row6[1].innerHTML)&parseFloat(difference1[2].innerHTML)==parseFloat(row1[2].innerHTML)-parseFloat(row2[2].innerHTML)-parseFloat(row3[2].innerHTML)-parseFloat(row4[2].innerHTML)-parseFloat(row5[2].innerHTML)-parseFloat(row6[2].innerHTML)&parseFloat(difference1[3].innerHTML)==parseFloat(row1[3].innerHTML)-parseFloat(row2[3].innerHTML)-parseFloat(row3[3].innerHTML)-parseFloat(row4[3].innerHTML)-parseFloat(row5[3].innerHTML)-parseFloat(row6[3].innerHTML)&parseFloat(difference1[4].innerHTML)==parseFloat(row1[4].innerHTML)-parseFloat(row2[4].innerHTML)-parseFloat(row3[4].innerHTML)-parseFloat(row4[4].innerHTML)-parseFloat(row5[4].innerHTML)-parseFloat(row6[4].innerHTML)&parseFloat(difference1[5].innerHTML)==parseFloat(row1[5].innerHTML)-parseFloat(row2[5].innerHTML)-parseFloat(row3[5].innerHTML)-parseFloat(row4[5].innerHTML)-parseFloat(row5[5].innerHTML)-parseFloat(row6[5].innerHTML)){

        alert ('Good Job! Keep it up!! ;) :)');
        for (let i=0; i<difference1.length; i++){
                
            difference1[i].style.backgroundColor = col[i];
            difference1[i].style.color = 'black';
        }
            }
            else {
                alert ("Don't lose hope! Try Again! :) ;)");
                
            }
    }
    else {
        if(parseFloat(difference1[0].innerHTML)==parseFloat(row1[0].innerHTML)-parseFloat(row2[0].innerHTML)-parseFloat(row3[0].innerHTML)-parseFloat(row4[0].innerHTML)-parseFloat(row5[0].innerHTML)-parseFloat(row6[0].innerHTML)&parseFloat(difference1[1].innerHTML)==parseFloat(row1[1].innerHTML)-parseFloat(row2[1].innerHTML)-parseFloat(row3[1].innerHTML)-parseFloat(row4[1].innerHTML)-parseFloat(row5[1].innerHTML)-parseFloat(row6[1].innerHTML)&parseFloat(difference1[2].innerHTML)==parseFloat(row1[2].innerHTML)-parseFloat(row2[2].innerHTML)-parseFloat(row3[2].innerHTML)-parseFloat(row4[2].innerHTML)-parseFloat(row5[2].innerHTML)-parseFloat(row6[2].innerHTML)&parseFloat(difference1[3].innerHTML)==parseFloat(row1[3].innerHTML)-parseFloat(row2[3].innerHTML)-parseFloat(row3[3].innerHTML)-parseFloat(row4[3].innerHTML)-parseFloat(row5[3].innerHTML)-parseFloat(row6[3].innerHTML)&parseFloat(difference1[4].innerHTML)==parseFloat(row1[4].innerHTML)-parseFloat(row2[4].innerHTML)-parseFloat(row3[4].innerHTML)-parseFloat(row4[4].innerHTML)-parseFloat(row5[4].innerHTML)-parseFloat(row6[4].innerHTML)&parseFloat(difference1[5].innerHTML)==parseFloat(row1[5].innerHTML)-parseFloat(row2[5].innerHTML)-parseFloat(row3[5].innerHTML)-parseFloat(row4[5].innerHTML)-parseFloat(row5[5].innerHTML)-parseFloat(row6[5].innerHTML)){

            document.getElementById('positivemessage').style.display ="block";
            for (let i=0; i<difference1.length; i++){
                
                difference1[i].style.backgroundColor = col[i];
                difference1[i].style.color = 'black';
            }
            }
            else {
                
                document.getElementById('negativemessage').style.display ="block";
            }
            setTimeout(() => {
                document.getElementById('negativemessage').style.display = "none";
                document.getElementById('positivemessage').style.display = "none";}, 1500);
    }
    for (let i=0; i<difference1.length; i++){
        let x = parseFloat(row1[i].innerHTML)-parseFloat(row2[i].innerHTML)-parseFloat(row3[i].innerHTML)-parseFloat(row4[i].innerHTML)-parseFloat(row5[i].innerHTML)-parseFloat(row6[i].innerHTML);

        if (parseFloat(difference1[0].innerHTML)!=parseFloat(row1[0].innerHTML)-parseFloat(row2[0].innerHTML)-parseFloat(row3[0].innerHTML)-parseFloat(row4[0].innerHTML)-parseFloat(row5[0].innerHTML)-parseFloat(row6[0].innerHTML)){
            difference1[0].style.color = "white";
            difference1[0].style.backgroundColor = "orange";

    }
    else{
        difference1[0].style.color = "black";
            difference1[0].style.backgroundColor = "blue";
    }
     if (parseFloat(difference1[1].innerHTML)!=parseFloat(row1[1].innerHTML)-parseFloat(row2[1].innerHTML)-parseFloat(row3[1].innerHTML)-parseFloat(row4[1].innerHTML)-parseFloat(row5[1].innerHTML)-parseFloat(row6[1].innerHTML)){
        difference1[1].style.color = "white";
        difference1[1].style.backgroundColor = "orange";
    
    }
    else{
        difference1[1].style.color = "black";
            difference1[1].style.backgroundColor = "red";
    }
     if (parseFloat(difference1[2].innerHTML)!=parseFloat(row1[2].innerHTML)-parseFloat(row2[2].innerHTML)-parseFloat(row3[2].innerHTML)-parseFloat(row4[2].innerHTML)-parseFloat(row5[2].innerHTML)-parseFloat(row6[2].innerHTML)){
        difference1[2].style.color = "white";
        difference1[2].style.backgroundColor = "orange";
    
    }
    else{
        difference1[2].style.color = "black";
            difference1[2].style.backgroundColor = "green";
    }
     if (parseFloat(difference1[3].innerHTML)!=parseFloat(row1[3].innerHTML)-parseFloat(row2[3].innerHTML)-parseFloat(row3[3].innerHTML)-parseFloat(row4[3].innerHTML)-parseFloat(row5[3].innerHTML)-parseFloat(row6[3].innerHTML)){
        difference1[3].style.color = "white";
        difference1[3].style.backgroundColor = "orange";
    
    }
    else{
        difference1[3].style.color = "black";
            difference1[3].style.backgroundColor = "yellow";
    }
     if (parseFloat(difference1[4].innerHTML)!=parseFloat(row1[4].innerHTML)-parseFloat(row2[4].innerHTML)-parseFloat(row3[4].innerHTML)-parseFloat(row4[4].innerHTML)-parseFloat(row5[4].innerHTML)-parseFloat(row6[4].innerHTML)){
        difference1[4].style.color = "white";
        difference1[4].style.backgroundColor = "orange";
    
    }
    else{
        difference1[4].style.color = "black";
            difference1[4].style.backgroundColor = "pink";
    }
     if (parseFloat(difference1[5].innerHTML)!=parseFloat(row1[5].innerHTML)-parseFloat(row2[5].innerHTML)-parseFloat(row3[5].innerHTML)-parseFloat(row4[5].innerHTML)-parseFloat(row5[5].innerHTML)-parseFloat(row6[5].innerHTML)){
        difference1[5].style.color = "white";
        difference1[5].style.backgroundColor = "orange";
    
    }

    else{
        difference1[5].style.color = "black";
            difference1[5].style.backgroundColor = "aquamarine";
    }
}

}

function revealdifferencegame(){
    var row1 = document.getElementsByClassName('subtractiongame-row1');
    var row2 = document.getElementsByClassName('subtractiongame-row2');
    var row3 = document.getElementsByClassName('subtractiongame-row3');
    var row4 = document.getElementsByClassName('subtractiongame-row4');
    var row5 = document.getElementsByClassName('subtractiongame-row5');
    var row6 = document.getElementsByClassName('subtractiongame-row6');
    var col = ['blue','red', 'green','yellow','pink','aquamarine'];
    var difference1 = document.getElementsByClassName('subtractiongame-difference');
    for (let i=0; i<difference1.length; i++){
        let x = parseFloat(row1[i].innerHTML)-parseFloat(row2[i].innerHTML)-parseFloat(row3[i].innerHTML)-parseFloat(row4[i].innerHTML)-parseFloat(row5[i].innerHTML)-parseFloat(row6[i].innerHTML);

        if (parseFloat(difference1[0].innerHTML)!=parseFloat(row1[0].innerHTML)-parseFloat(row2[0].innerHTML)-parseFloat(row3[0].innerHTML)-parseFloat(row4[0].innerHTML)-parseFloat(row5[0].innerHTML)-parseFloat(row6[0].innerHTML)){
            difference1[0].style.color = "white";
            difference1[0].style.backgroundColor = "orange";

    }
    else{
        difference1[0].style.color = "black";
            difference1[0].style.backgroundColor = "blue";
    }
     if (parseFloat(difference1[1].innerHTML)!=parseFloat(row1[1].innerHTML)-parseFloat(row2[1].innerHTML)-parseFloat(row3[1].innerHTML)-parseFloat(row4[1].innerHTML)-parseFloat(row5[1].innerHTML)-parseFloat(row6[1].innerHTML)){
        difference1[1].style.color = "white";
        difference1[1].style.backgroundColor = "orange";
    
    }
    else{
        difference1[1].style.color = "black";
            difference1[1].style.backgroundColor = "red";
    }
     if (parseFloat(difference1[2].innerHTML)!=parseFloat(row1[2].innerHTML)-parseFloat(row2[2].innerHTML)-parseFloat(row3[2].innerHTML)-parseFloat(row4[2].innerHTML)-parseFloat(row5[2].innerHTML)-parseFloat(row6[2].innerHTML)){
        difference1[2].style.color = "white";
        difference1[2].style.backgroundColor = "orange";
    
    }
    else{
        difference1[2].style.color = "black";
            difference1[2].style.backgroundColor = "green";
    }
     if (parseFloat(difference1[3].innerHTML)!=parseFloat(row1[3].innerHTML)-parseFloat(row2[3].innerHTML)-parseFloat(row3[3].innerHTML)-parseFloat(row4[3].innerHTML)-parseFloat(row5[3].innerHTML)-parseFloat(row6[3].innerHTML)){
        difference1[3].style.color = "white";
        difference1[3].style.backgroundColor = "orange";
    
    }
    else{
        difference1[3].style.color = "black";
            difference1[3].style.backgroundColor = "yellow";
    }
     if (parseFloat(difference1[4].innerHTML)!=parseFloat(row1[4].innerHTML)-parseFloat(row2[4].innerHTML)-parseFloat(row3[4].innerHTML)-parseFloat(row4[4].innerHTML)-parseFloat(row5[4].innerHTML)-parseFloat(row6[4].innerHTML)){
        difference1[4].style.color = "white";
        difference1[4].style.backgroundColor = "orange";
    
    }
    else{
        difference1[4].style.color = "black";
            difference1[4].style.backgroundColor = "pink";
    }
     if (parseFloat(difference1[5].innerHTML)!=parseFloat(row1[5].innerHTML)-parseFloat(row2[5].innerHTML)-parseFloat(row3[5].innerHTML)-parseFloat(row4[5].innerHTML)-parseFloat(row5[5].innerHTML)-parseFloat(row6[5].innerHTML)){
        difference1[5].style.color = "white";
        difference1[5].style.backgroundColor = "orange";
    
    }

    else{
        difference1[5].style.color = "black";
            difference1[5].style.backgroundColor = "aquamarine";
    }
}
}

function subtractiongame(){
    var row1 = document.getElementsByClassName('subtractionintermediate-row1');
    var row2 = document.getElementsByClassName('subtractionintermediate-row2');
    var row3 = document.getElementsByClassName('subtractionintermediate-row3');
    var row4 = document.getElementsByClassName('subtractionintermediate-row4');
    var row5 = document.getElementsByClassName('subtractionintermediate-row5');
    var row6 = document.getElementsByClassName('subtractionintermediate-row6');

    var difference1 = document.getElementsByClassName('subtractionintermediate-difference');
    var cells = document.getElementsByTagName('td');
    for (let j=0; j<cells.length; j++){
        cells[j].addEventListener('blur', function(){
            if (isNaN(parseInt(cells[j].innerHTML))){
                cells[j].innerHTML = "0";
            }
}, false);    }
    for (let i=0; i<difference1.length; i++){
        difference1[i].addEventListener('keydown', function(e){
if (e.keyCode == 13){
            let x = parseFloat(row1[i].innerHTML)-parseFloat(row2[i].innerHTML)-parseFloat(row3[i].innerHTML)-parseFloat(row4[i].innerHTML)-parseFloat(row5[i].innerHTML)-parseFloat(row6[i].innerHTML);
            if( isMobile.any() ) {
                if (parseFloat(difference1[i].innerHTML)==parseFloat(x)){
                    alert ('Good Job! Keep it up!! ;) :)');
                }
                else {
                    alert ("Don't lose hope! Try Again! :) ;)");
                    difference1[i].focus();
                }
            }
            else {
            if (parseFloat(difference1[i].innerHTML)==parseFloat(x)){
                document.getElementById('positivemessage').style.display ="block";
difference1[i].style.borderColor = 'black';
difference1[i].style.borderWidth = '1px';
            }
            else {
                document.getElementById('negativemessage').style.display ="block";
difference1[i].style.borderColor = 'red';
difference1[i].style.borderWidth = '2px';
                difference1[i].focus();
               
            }
            setTimeout(() => {
                document.getElementById('negativemessage').style.display = "none";
                document.getElementById('positivemessage').style.display = "none";}, 1500);
            }
}
else {
return false;
}
        }, false);
    }
}

function subtractiongameoriginal(){
    var row1 = document.getElementsByClassName('subtractiongame-row1');
    var row2 = document.getElementsByClassName('subtractiongame-row2');
    var row3 = document.getElementsByClassName('subtractiongame-row3');
    var row4 = document.getElementsByClassName('subtractiongame-row4');
    var row5 = document.getElementsByClassName('subtractiongame-row5');
    var row6 = document.getElementsByClassName('subtractiongame-row6');

    var difference1 = document.getElementsByClassName('subtractiongame-difference');
    var cells = document.getElementsByTagName('td');
    for (let j=0; j<cells.length; j++){
        cells[j].addEventListener('blur', function(){
            if (isNaN(parseInt(cells[j].innerHTML))){
                cells[j].innerHTML = "0";
            }
}, false);    }
    for (let i=0; i<difference1.length; i++){
        difference1[i].addEventListener('keydown', function(e){
if (e.keyCode == 13){
            let x = parseFloat(row1[i].innerHTML)-parseFloat(row2[i].innerHTML)-parseFloat(row3[i].innerHTML)-parseFloat(row4[i].innerHTML)-parseFloat(row5[i].innerHTML)-parseFloat(row6[i].innerHTML);
            if( isMobile.any() ) {
                if (parseFloat(difference1[i].innerHTML)==parseFloat(x)){
                    alert ('Good Job! Keep it up!! ;) :)');
                }
                else {
                    alert ("Don't lose hope! Try Again! :) ;)");
                    difference1[i].focus();
                }
            }
            else {
            if (parseFloat(difference1[i].innerHTML)==parseFloat(x)){
                document.getElementById('positivemessage').style.display ="block";
difference1[i].style.borderColor = 'black';
difference1[i].style.borderWidth = '1px';

            }
            else {
                document.getElementById('negativemessage').style.display ="block";
difference1[i].style.borderColor = 'red';
difference1[i].style.borderWidth = '2px';
                difference1[i].focus();
               
            }
            setTimeout(() => {
                document.getElementById('negativemessage').style.display = "none";
                document.getElementById('positivemessage').style.display = "none";}, 1500);
            }
}
else {
return false;}
        }, false);
    }
}

document.getElementById('subtractiongamedifference').addEventListener('input', subtractiongameoriginal(), false);

document.getElementById('subtractionintermediatedifference').addEventListener('input', subtractiongame(), false);

function checkmultiplicationgame(){
    var top = document.getElementsByClassName('multiplicationgame-top');
    var side = document.getElementsByClassName('multiplicationgame-side');
    var row1 = document.getElementsByClassName('multiplicationgame-row1');
    var row2 = document.getElementsByClassName('multiplicationgame-row2');
    var row3 = document.getElementsByClassName('multiplicationgame-row3');
    var row4 = document.getElementsByClassName('multiplicationgame-row4');
    var row5 = document.getElementsByClassName('multiplicationgame-row5');
    
    var column1 = document.getElementsByClassName('multiplicationgame-column1');
    var column2 = document.getElementsByClassName('multiplicationgame-column2');
    var column3 = document.getElementsByClassName('multiplicationgame-column3');
    var column4 = document.getElementsByClassName('multiplicationgame-column4');
    var column5 = document.getElementsByClassName('multiplicationgame-column5');
    var col1 = ['blue','red','green','yellow','pink'];
var col2 = ['red','green','yellow','pink','bluegreen'];
var col3 = ['green','yellow','pink','bluegreen','violet'];
var col4 = ['yellow','pink','bluegreen','violet','crimson'];
var col5 = ['pink','bluegreen','violet','crimson','yellowgreen'];
var col = ['blue','red','green','yellow','pink','bluegreen','violet','crimson','yellowgreen'];

    var product = document.getElementsByClassName('multiplicationgame-product');
    if( isMobile.any() ) {
        if(parseFloat(row1[0].innerHTML)==parseFloat(top[0].innerHTML)*parseFloat(side[0].innerHTML)& parseFloat(row1[1].innerHTML)==parseFloat(top[1].innerHTML)*parseFloat(side[0].innerHTML)&parseFloat(row1[2].innerHTML)==parseFloat(top[2].innerHTML)*parseFloat(side[0].innerHTML)&parseFloat(row1[3].innerHTML)==parseFloat(top[3].innerHTML)*parseFloat(side[0].innerHTML)&parseFloat(row1[4].innerHTML)==parseFloat(top[4].innerHTML)*parseFloat(side[0].innerHTML)&parseFloat(row2[0].innerHTML)==parseFloat(top[0].innerHTML)*parseFloat(side[1].innerHTML)& parseFloat(row2[1].innerHTML)==parseFloat(top[1].innerHTML)*parseFloat(side[1].innerHTML)&parseFloat(row2[2].innerHTML)==parseFloat(top[2].innerHTML)*parseFloat(side[1].innerHTML)&parseFloat(row2[3].innerHTML)==parseFloat(top[3].innerHTML)*parseFloat(side[1].innerHTML)&parseFloat(row2[4].innerHTML)==parseFloat(top[4].innerHTML)*parseFloat(side[1].innerHTML)&parseFloat(row3[0].innerHTML)==parseFloat(top[0].innerHTML)*parseFloat(side[2].innerHTML)& parseFloat(row3[1].innerHTML)==parseFloat(top[1].innerHTML)*parseFloat(side[2].innerHTML)&parseFloat(row3[2].innerHTML)==parseFloat(top[2].innerHTML)*parseFloat(side[2].innerHTML)&parseFloat(row3[3].innerHTML)==parseFloat(top[3].innerHTML)*parseFloat(side[2].innerHTML)&parseFloat(row3[4].innerHTML)==parseFloat(top[4].innerHTML)*parseFloat(side[2].innerHTML) &parseFloat(row4[0].innerHTML)==parseFloat(top[0].innerHTML)*parseFloat(side[3].innerHTML)& parseFloat(row4[1].innerHTML)==parseFloat(top[1].innerHTML)*parseFloat(side[3].innerHTML)&parseFloat(row4[2].innerHTML)==parseFloat(top[2].innerHTML)*parseFloat(side[3].innerHTML)&parseFloat(row4[3].innerHTML)==parseFloat(top[3].innerHTML)*parseFloat(side[3].innerHTML)&parseFloat(row4[4].innerHTML)==parseFloat(top[4].innerHTML)*parseFloat(side[3].innerHTML) &parseFloat(row5[0].innerHTML)==parseFloat(top[0].innerHTML)*parseFloat(side[4].innerHTML)& parseFloat(row5[1].innerHTML)==parseFloat(top[1].innerHTML)*parseFloat(side[4].innerHTML)&parseFloat(row5[2].innerHTML)==parseFloat(top[2].innerHTML)*parseFloat(side[4].innerHTML)&parseFloat(row5[3].innerHTML)==parseFloat(top[3].innerHTML)*parseFloat(side[4].innerHTML)&parseFloat(row5[4].innerHTML)==parseFloat(top[4].innerHTML)*parseFloat(side[4].innerHTML) & parseFloat(product[0].innerHTML) == parseFloat(row1[0].innerHTML)& parseFloat(product[1].innerHTML) == parseFloat(row2[0].innerHTML)+parseFloat(row1[1].innerHTML)& parseFloat(product[2].innerHTML) == parseFloat(row3[0].innerHTML) + parseFloat(row2[1].innerHTML)+parseFloat(row1[2].innerHTML)& parseFloat(product[3].innerHTML) == parseFloat(row4[0].innerHTML)
            +parseFloat(row3[1].innerHTML)+parseFloat(row2[2].innerHTML)+parseFloat(row1[3].innerHTML)& parseFloat(product[4].innerHTML) == parseFloat(row5[0].innerHTML)
            +parseFloat(row4[1].innerHTML)+parseFloat(row3[2].innerHTML)+parseFloat(row2[3].innerHTML)+parseFloat(row1[4].innerHTML)& parseFloat(product[5].innerHTML) ==  parseFloat(row5[1].innerHTML)
            +parseFloat(row4[2].innerHTML)+parseFloat(row3[3].innerHTML)+parseFloat(row2[4].innerHTML)& parseFloat(product[6].innerHTML) ==  parseFloat(row5[2].innerHTML)
            +parseFloat(row4[3].innerHTML)+parseFloat(row3[4].innerHTML)& parseFloat(product[7].innerHTML) ==  parseFloat(row5[3].innerHTML)
            +parseFloat(row4[4].innerHTML)& parseFloat(product[8].innerHTML) ==  parseFloat(row5[4].innerHTML)){

            alert ('Good Job! Keep it up!! ;) :)');
            for (let i=0; i<row1.length; i++){
                row1[i].style.color = 'black'
                row1[i].style.backgroundColor = col1[i];
                row2[i].style.color = 'black'
                row2[i].style.backgroundColor = col2[i];
                row3[i].style.color = 'black'
                row3[i].style.backgroundColor = col3[i];
                row4[i].style.color = 'black'
                row4[i].style.backgroundColor = col4[i];
                row5[i].style.color = 'black'
                row5[i].style.backgroundColor = col5[i];
            }
            for (let j=0; j<product.length; j++){
                product[j].style.color = 'black'
                product[j].style.backgroundColor = col[j];
            }
                    }
            else {
                alert ("Don't lose hope! Try Again! :) ;)");
                    }  

    }
    else{
         if(parseFloat(row1[0].innerHTML)==parseFloat(top[0].innerHTML)*parseFloat(side[0].innerHTML)& parseFloat(row1[1].innerHTML)==parseFloat(top[1].innerHTML)*parseFloat(side[0].innerHTML)&parseFloat(row1[2].innerHTML)==parseFloat(top[2].innerHTML)*parseFloat(side[0].innerHTML)&parseFloat(row1[3].innerHTML)==parseFloat(top[3].innerHTML)*parseFloat(side[0].innerHTML)&parseFloat(row1[4].innerHTML)==parseFloat(top[4].innerHTML)*parseFloat(side[0].innerHTML)&parseFloat(row2[0].innerHTML)==parseFloat(top[0].innerHTML)*parseFloat(side[1].innerHTML)& parseFloat(row2[1].innerHTML)==parseFloat(top[1].innerHTML)*parseFloat(side[1].innerHTML)&parseFloat(row2[2].innerHTML)==parseFloat(top[2].innerHTML)*parseFloat(side[1].innerHTML)&parseFloat(row2[3].innerHTML)==parseFloat(top[3].innerHTML)*parseFloat(side[1].innerHTML)&parseFloat(row2[4].innerHTML)==parseFloat(top[4].innerHTML)*parseFloat(side[1].innerHTML)&parseFloat(row3[0].innerHTML)==parseFloat(top[0].innerHTML)*parseFloat(side[2].innerHTML)& parseFloat(row3[1].innerHTML)==parseFloat(top[1].innerHTML)*parseFloat(side[2].innerHTML)&parseFloat(row3[2].innerHTML)==parseFloat(top[2].innerHTML)*parseFloat(side[2].innerHTML)&parseFloat(row3[3].innerHTML)==parseFloat(top[3].innerHTML)*parseFloat(side[2].innerHTML)&parseFloat(row3[4].innerHTML)==parseFloat(top[4].innerHTML)*parseFloat(side[2].innerHTML) &parseFloat(row4[0].innerHTML)==parseFloat(top[0].innerHTML)*parseFloat(side[3].innerHTML)& parseFloat(row4[1].innerHTML)==parseFloat(top[1].innerHTML)*parseFloat(side[3].innerHTML)&parseFloat(row4[2].innerHTML)==parseFloat(top[2].innerHTML)*parseFloat(side[3].innerHTML)&parseFloat(row4[3].innerHTML)==parseFloat(top[3].innerHTML)*parseFloat(side[3].innerHTML)&parseFloat(row4[4].innerHTML)==parseFloat(top[4].innerHTML)*parseFloat(side[3].innerHTML) &parseFloat(row5[0].innerHTML)==parseFloat(top[0].innerHTML)*parseFloat(side[4].innerHTML)& parseFloat(row5[1].innerHTML)==parseFloat(top[1].innerHTML)*parseFloat(side[4].innerHTML)&parseFloat(row5[2].innerHTML)==parseFloat(top[2].innerHTML)*parseFloat(side[4].innerHTML)&parseFloat(row5[3].innerHTML)==parseFloat(top[3].innerHTML)*parseFloat(side[4].innerHTML)&parseFloat(row5[4].innerHTML)==parseFloat(top[4].innerHTML)*parseFloat(side[4].innerHTML) & parseFloat(product[0].innerHTML) == parseFloat(row1[0].innerHTML)& parseFloat(product[1].innerHTML) == parseFloat(row2[0].innerHTML)+parseFloat(row1[1].innerHTML)& parseFloat(product[2].innerHTML) == parseFloat(row3[0].innerHTML) + parseFloat(row2[1].innerHTML)+parseFloat(row1[2].innerHTML)& parseFloat(product[3].innerHTML) == parseFloat(row4[0].innerHTML)
            +parseFloat(row3[1].innerHTML)+parseFloat(row2[2].innerHTML)+parseFloat(row1[3].innerHTML)& parseFloat(product[4].innerHTML) == parseFloat(row5[0].innerHTML)
            +parseFloat(row4[1].innerHTML)+parseFloat(row3[2].innerHTML)+parseFloat(row2[3].innerHTML)+parseFloat(row1[4].innerHTML)& parseFloat(product[5].innerHTML) ==  parseFloat(row5[1].innerHTML)
            +parseFloat(row4[2].innerHTML)+parseFloat(row3[3].innerHTML)+parseFloat(row2[4].innerHTML)& parseFloat(product[6].innerHTML) ==  parseFloat(row5[2].innerHTML)
            +parseFloat(row4[3].innerHTML)+parseFloat(row3[4].innerHTML)& parseFloat(product[7].innerHTML) ==  parseFloat(row5[3].innerHTML)
            +parseFloat(row4[4].innerHTML)& parseFloat(product[8].innerHTML) ==  parseFloat(row5[4].innerHTML)){

            document.getElementById('positivemessage').style.display ="block";
            for (let i=0; i<row1.length; i++){
                row1[i].style.color = 'black'
                row1[i].style.backgroundColor = col1[i];
                row2[i].style.color = 'black'
                row2[i].style.backgroundColor = col2[i];
                row3[i].style.color = 'black'
                row3[i].style.backgroundColor = col3[i];
                row4[i].style.color = 'black'
                row4[i].style.backgroundColor = col4[i];
                row5[i].style.color = 'black'
                row5[i].style.backgroundColor = col5[i];
                setTimeout(() => {
                    document.getElementById('negativemessage').style.display = "none";
                    document.getElementById('positivemessage').style.display = "none";}, 1500);
            }
            for (let j=0; j<product.length; j++){
                product[j].style.color = 'black'
                product[j].style.backgroundColor = col[j];
                setTimeout(() => {
                    document.getElementById('negativemessage').style.display = "none";
                    document.getElementById('positivemessage').style.display = "none";}, 1500);
            }
            setTimeout(() => {
                document.getElementById('negativemessage').style.display = "none";
                document.getElementById('positivemessage').style.display = "none";}, 1500);
            }
    else {
        document.getElementById('negativemessage').style.display ="block";
        setTimeout(() => {
            document.getElementById('negativemessage').style.display = "none";
            document.getElementById('positivemessage').style.display = "none";}, 1500);    
            }
setTimeout(() => {
                document.getElementById('negativemessage').style.display = "none";
                document.getElementById('positivemessage').style.display = "none";}, 1500);

    }

for (let i=0; i<product.length; i++){
 
    if (parseFloat(row1[0].innerHTML)!=parseFloat(side[0].innerHTML)*parseFloat(top[0].innerHTML)){
                row1[0].style.color = 'white';
                row1[0].style.backgroundColor ='orange';
                    }
                   else {
                row1[0].style.color = 'black';
                row1[0].style.backgroundColor ='blue';
                            }
    if (parseFloat(row1[1].innerHTML)!=parseFloat(side[0].innerHTML)*parseFloat(top[1].innerHTML)){
                        row1[1].style.color = 'white';
                        row1[1].style.backgroundColor ='orange';
                            }
 else {
row1[1].style.color = 'black';
row1[1].style.backgroundColor ='red';
}
if (parseFloat(row1[2].innerHTML)!=parseFloat(side[0].innerHTML)*parseFloat(top[2].innerHTML)){
    row1[2].style.color = 'white';
    row1[2].style.backgroundColor ='orange';
        }
else {
row1[2].style.color = 'black';
row1[2].style.backgroundColor ='green';
}
if (parseFloat(row1[3].innerHTML)!=parseFloat(side[0].innerHTML)*parseFloat(top[3].innerHTML)){
    row1[3].style.color = 'white';
    row1[3].style.backgroundColor ='orange';
        }
else {
row1[3].style.color = 'black';
row1[3].style.backgroundColor ='yellow';
}
if (parseFloat(row1[4].innerHTML)!=parseFloat(side[0].innerHTML)*parseFloat(top[4].innerHTML)){
    row1[4].style.color = 'white';
    row1[4].style.backgroundColor ='orange';
        }
else {
row1[4].style.color = 'black';
row1[4].style.backgroundColor ='pink';
}


if (parseFloat(row2[0].innerHTML)!=parseFloat(side[1].innerHTML)*parseFloat(top[0].innerHTML)){
row2[0].style.color = 'white';
 row2[0].style.backgroundColor ='orange';
}
else {
row2[0].style.color = 'black';
row2[0].style.backgroundColor ='red';
}
if (parseFloat(row2[1].innerHTML)!=parseFloat(side[1].innerHTML)*parseFloat(top[1].innerHTML)){
    row2[1].style.color = 'white';
     row2[1].style.backgroundColor ='orange';
    }
    else {
    row2[1].style.color = 'black';
    row2[1].style.backgroundColor ='green';
    }
if (parseFloat(row2[2].innerHTML)!=parseFloat(side[1].innerHTML)*parseFloat(top[2].innerHTML)){
row2[2].style.color = 'white';
row2[2].style.backgroundColor ='orange';
}
else {
row2[2].style.color = 'black';
row2[2].style.backgroundColor ='yellow';
}
if (parseFloat(row2[3].innerHTML)!=parseFloat(side[1].innerHTML)*parseFloat(top[3].innerHTML)){
row2[3].style.color = 'white';
row2[3].style.backgroundColor ='orange';
}
else {
row2[3].style.color = 'black';
row2[3].style.backgroundColor ='pink';
}

if (parseFloat(row2[4].innerHTML)!=parseFloat(side[1].innerHTML)*parseFloat(top[4].innerHTML)){
row2[4].style.color = 'white';
row2[4].style.backgroundColor ='orange';
}
else {
row2[4].style.color = 'black';
row2[4].style.backgroundColor ='bluegreen';
}


if (parseFloat(row3[0].innerHTML)!=parseFloat(side[2].innerHTML)*parseFloat(top[0].innerHTML)){
row3[0].style.color = 'white';
row3[0].style.backgroundColor ='orange';
}
else {
row3[0].style.color = 'black';
row3[0].style.backgroundColor ='green';
}
if (parseFloat(row3[1].innerHTML)!=parseFloat(side[2].innerHTML)*parseFloat(top[1].innerHTML)){
row3[1].style.color = 'white';
row3[1].style.backgroundColor ='orange';
}
else {
row3[1].style.color = 'black';
row3[1].style.backgroundColor ='yellow';
}

if (parseFloat(row3[2].innerHTML)!=parseFloat(side[2].innerHTML)*parseFloat(top[2].innerHTML)){
row3[2].style.color = 'white';
row3[2].style.backgroundColor ='orange';
}
else {
row3[2].style.color = 'black';
row3[2].style.backgroundColor ='pink';
}

if (parseFloat(row3[3].innerHTML)!=parseFloat(side[2].innerHTML)*parseFloat(top[3].innerHTML)){
row3[3].style.color = 'white';
row3[3].style.backgroundColor ='orange';
}
else {
row3[3].style.color = 'black';
row3[3].style.backgroundColor ='bluegreen';
}
if (parseFloat(row3[4].innerHTML)!=parseFloat(side[2].innerHTML)*parseFloat(top[4].innerHTML)){
row3[4].style.color = 'white';
row3[4].style.backgroundColor ='orange';
}
else {
row3[4].style.color = 'black';
row3[4].style.backgroundColor ='violet';
}

if (parseFloat(row4[0].innerHTML)!=parseFloat(side[3].innerHTML)*parseFloat(top[0].innerHTML)){
row4[0].style.color = 'white';
row4[0].style.backgroundColor ='orange';
}
else {
row4[0].style.color = 'black';
row4[0].style.backgroundColor ='yellow';
}
if (parseFloat(row4[1].innerHTML)!=parseFloat(side[3].innerHTML)*parseFloat(top[1].innerHTML)){
row4[1].style.color = 'white';
row4[1].style.backgroundColor ='orange';
}
else {
row4[1].style.color = 'black';
row4[1].style.backgroundColor ='pink';
}
if (parseFloat(row4[2].innerHTML)!=parseFloat(side[3].innerHTML)*parseFloat(top[2].innerHTML)){
row4[2].style.color = 'white';
row4[2].style.backgroundColor ='orange';
}
else {
row4[2].style.color = 'black';
row4[2].style.backgroundColor ='bluegreen';
}
if (parseFloat(row4[3].innerHTML)!=parseFloat(side[3].innerHTML)*parseFloat(top[3].innerHTML)){
row4[3].style.color = 'white';
row4[3].style.backgroundColor ='orange';
}
else {
row4[3].style.color = 'black';
row4[3].style.backgroundColor ='violet';
}
if (parseFloat(row4[4].innerHTML)!=parseFloat(side[3].innerHTML)*parseFloat(top[4].innerHTML)){
row4[4].style.color = 'white';
row4[4].style.backgroundColor ='orange';
}
else {
row4[4].style.color = 'black';
row4[4].style.backgroundColor ='crimson';
}

if (parseFloat(row5[0].innerHTML)!=parseFloat(side[4].innerHTML)*parseFloat(top[0].innerHTML)){
row5[0].style.color = 'white';
row5[0].style.backgroundColor ='orange';
}
else {
row5[0].style.color = 'black';
row5[0].style.backgroundColor ='pink';
}
if (parseFloat(row5[1].innerHTML)!=parseFloat(side[4].innerHTML)*parseFloat(top[1].innerHTML)){
row5[1].style.color = 'white';
row5[1].style.backgroundColor ='orange';
}
else {
row5[1].style.color = 'black';
row5[1].style.backgroundColor ='bluegreen';
}
if (parseFloat(row5[2].innerHTML)!=parseFloat(side[4].innerHTML)*parseFloat(top[2].innerHTML)){
row5[2].style.color = 'white';
row5[2].style.backgroundColor ='orange';
}
else {
row5[2].style.color = 'black';
row5[2].style.backgroundColor ='violet';
}
if (parseFloat(row5[3].innerHTML)!=parseFloat(side[4].innerHTML)*parseFloat(top[3].innerHTML)){
row5[3].style.color = 'white';
row5[3].style.backgroundColor ='orange';
}
else {
row5[3].style.color = 'black';
row5[3].style.backgroundColor ='crimson';
}
if (parseFloat(row5[4].innerHTML)!=parseFloat(side[4].innerHTML)*parseFloat(top[4].innerHTML)){
row5[4].style.color = 'white';
row5[4].style.backgroundColor ='orange';
}
else {
row5[4].style.color = 'black';
row5[4].style.backgroundColor ='yellowgreen';
}


if (parseFloat(product[0].innerHTML) != parseFloat(side[0].innerHTML)*parseFloat(top[0].innerHTML)){
product[0].style.color = 'white';
product[0].style.backgroundColor ='orange';
}
else {
product[0].style.color = 'black';
product[0].style.backgroundColor ='blue';
}
     if (parseFloat(product[1].innerHTML) != parseFloat(side[1].innerHTML)*parseFloat(top[0].innerHTML)+parseFloat(side[0].innerHTML)*parseFloat(top[1].innerHTML)){
        product[1].style.color = 'white';
        product[1].style.backgroundColor ='orange';
        }
else {
product[1].style.color = 'black';
product[1].style.backgroundColor ='red';
}

     if (parseFloat(product[2].innerHTML) != parseFloat(side[2].innerHTML)*parseFloat(top[0].innerHTML)+parseFloat(side[1].innerHTML)*parseFloat(top[1].innerHTML)+parseFloat(side[0].innerHTML)*parseFloat(top[2].innerHTML)){
            product[2].style.color = 'white';
            product[2].style.backgroundColor ='orange';
            }
else {
product[2].style.color = 'black';
product[2].style.backgroundColor ='green';
}
     if (parseFloat(product[3].innerHTML) != parseFloat(side[3].innerHTML)*parseFloat(top[0].innerHTML)+parseFloat(side[2].innerHTML)*parseFloat(top[1].innerHTML)+parseFloat(side[1].innerHTML)*parseFloat(top[2].innerHTML)+parseFloat(side[0].innerHTML)*parseFloat(top[3].innerHTML)){
                product[3].style.color = 'white';
                product[3].style.backgroundColor ='orange';
                }
else {
product[3].style.color = 'black';
product[3].style.backgroundColor ='yellow';
}
     if (parseFloat(product[4].innerHTML) != parseFloat(side[4].innerHTML)*parseFloat(top[0].innerHTML)+parseFloat(side[3].innerHTML)*parseFloat(top[1].innerHTML)+parseFloat(side[2].innerHTML)*parseFloat(top[2].innerHTML)+parseFloat(side[1].innerHTML)*parseFloat(top[3].innerHTML)+parseFloat(side[0].innerHTML)*parseFloat(top[4].innerHTML)){
    product[4].style.color = 'white';
    product[4].style.backgroundColor ='orange';
                            }
else {
product[4].style.color = 'black';
product[4].style.backgroundColor ='pink';
}
     if (parseFloat(product[5].innerHTML) !=  parseFloat(side[4].innerHTML)*parseFloat(top[1].innerHTML)+parseFloat(side[3].innerHTML)*parseFloat(top[2].innerHTML)+parseFloat(side[2].innerHTML)*parseFloat(top[3].innerHTML)+parseFloat(side[1].innerHTML)*parseFloat(top[4].innerHTML)){
      product[5].style.color = 'white';
    product[5].style.backgroundColor ='orange';
                }
else {
product[5].style.color = 'black';
product[5].style.backgroundColor ='bluegreen';
}
     if (parseFloat(product[6].innerHTML) !=  parseFloat(side[4].innerHTML)*parseFloat(top[2].innerHTML)+parseFloat(side[3].innerHTML)*parseFloat(top[3].innerHTML)+parseFloat(side[2].innerHTML)*parseFloat(top[4].innerHTML)){
   product[6].style.color = 'white';
   product[6].style.backgroundColor ='orange';
}
else {
product[6].style.color = 'black';
product[6].style.backgroundColor ='violet';
}
if (parseFloat(product[7].innerHTML) != parseFloat(side[4].innerHTML)*parseFloat(top[3].innerHTML)+parseFloat(side[3].innerHTML)*parseFloat(top[4].innerHTML)){
 product[7].style.color = 'white';
product[7].style.backgroundColor ='orange';
}
else {
product[7].style.color = 'black';
product[7].style.backgroundColor ='crimson';
}
 if (parseFloat(product[8].innerHTML) !=  parseFloat(side[4].innerHTML)*parseFloat(top[4].innerHTML)){
    product[8].style.color = 'white';
   product[8].style.backgroundColor ='orange';
   }
        
else {
product[8].style.color = 'black';
product[8].style.backgroundColor ='yellowgreen';
}
}
}

function revealmultiplicationgame(){
    var top = document.getElementsByClassName('multiplicationgame-top');
var side = document.getElementsByClassName('multiplicationgame-side');
var row1 = document.getElementsByClassName('multiplicationgame-row1');
var row2 = document.getElementsByClassName('multiplicationgame-row2');
var row3 = document.getElementsByClassName('multiplicationgame-row3');
var row4 = document.getElementsByClassName('multiplicationgame-row4');
var row5 = document.getElementsByClassName('multiplicationgame-row5');
var product = document.getElementsByClassName('multiplicationgame-product');

for (let i=0; i<product.length; i++){
 
    if (parseFloat(row1[0].innerHTML)!=parseFloat(side[0].innerHTML)*parseFloat(top[0].innerHTML)){
                row1[0].style.color = 'white';
                row1[0].style.backgroundColor ='orange';
                    }
                   else {
                row1[0].style.color = 'black';
                row1[0].style.backgroundColor ='blue';
                            }
    if (parseFloat(row1[1].innerHTML)!=parseFloat(side[0].innerHTML)*parseFloat(top[1].innerHTML)){
                        row1[1].style.color = 'white';
                        row1[1].style.backgroundColor ='orange';
                            }
 else {
row1[0].style.color = 'black';
row1[0].style.backgroundColor ='red';
}
if (parseFloat(row1[2].innerHTML)!=parseFloat(side[0].innerHTML)*parseFloat(top[2].innerHTML)){
    row1[2].style.color = 'white';
    row1[2].style.backgroundColor ='orange';
        }
else {
row1[2].style.color = 'black';
row1[2].style.backgroundColor ='green';
}
if (parseFloat(row1[3].innerHTML)!=parseFloat(side[0].innerHTML)*parseFloat(top[3].innerHTML)){
    row1[3].style.color = 'white';
    row1[3].style.backgroundColor ='orange';
        }
else {
row1[3].style.color = 'black';
row1[3].style.backgroundColor ='yellow';
}
if (parseFloat(row1[4].innerHTML)!=parseFloat(side[0].innerHTML)*parseFloat(top[4].innerHTML)){
    row1[4].style.color = 'white';
    row1[4].style.backgroundColor ='orange';
        }
else {
row1[4].style.color = 'black';
row1[4].style.backgroundColor ='pink';
}


if (parseFloat(row2[0].innerHTML)!=parseFloat(side[1].innerHTML)*parseFloat(top[0].innerHTML)){
row2[0].style.color = 'white';
 row2[0].style.backgroundColor ='orange';
}
else {
row2[0].style.color = 'black';
row2[0].style.backgroundColor ='red';
}
if (parseFloat(row2[1].innerHTML)!=parseFloat(side[1].innerHTML)*parseFloat(top[1].innerHTML)){
    row2[1].style.color = 'white';
     row2[1].style.backgroundColor ='orange';
    }
    else {
    row2[1].style.color = 'black';
    row2[1].style.backgroundColor ='green';
    }
if (parseFloat(row2[2].innerHTML)!=parseFloat(side[1].innerHTML)*parseFloat(top[2].innerHTML)){
row2[2].style.color = 'white';
row2[2].style.backgroundColor ='orange';
}
else {
row2[2].style.color = 'black';
row2[2].style.backgroundColor ='yellow';
}
if (parseFloat(row2[3].innerHTML)!=parseFloat(side[1].innerHTML)*parseFloat(top[3].innerHTML)){
row2[3].style.color = 'white';
row2[3].style.backgroundColor ='orange';
}
else {
row2[3].style.color = 'black';
row2[3].style.backgroundColor ='pink';
}

if (parseFloat(row2[4].innerHTML)!=parseFloat(side[1].innerHTML)*parseFloat(top[4].innerHTML)){
row2[4].style.color = 'white';
row2[4].style.backgroundColor ='orange';
}
else {
row2[4].style.color = 'black';
row2[4].style.backgroundColor ='bluegreen';
}


if (parseFloat(row3[0].innerHTML)!=parseFloat(side[2].innerHTML)*parseFloat(top[0].innerHTML)){
row3[0].style.color = 'white';
row3[0].style.backgroundColor ='orange';
}
else {
row3[0].style.color = 'black';
row3[0].style.backgroundColor ='green';
}
if (parseFloat(row3[1].innerHTML)!=parseFloat(side[2].innerHTML)*parseFloat(top[1].innerHTML)){
row3[1].style.color = 'white';
row3[1].style.backgroundColor ='orange';
}
else {
row3[1].style.color = 'black';
row3[1].style.backgroundColor ='yellow';
}

if (parseFloat(row3[2].innerHTML)!=parseFloat(side[2].innerHTML)*parseFloat(top[2].innerHTML)){
row3[2].style.color = 'white';
row3[2].style.backgroundColor ='orange';
}
else {
row3[2].style.color = 'black';
row3[2].style.backgroundColor ='pink';
}

if (parseFloat(row3[3].innerHTML)!=parseFloat(side[2].innerHTML)*parseFloat(top[3].innerHTML)){
row3[3].style.color = 'white';
row3[3].style.backgroundColor ='orange';
}
else {
row3[3].style.color = 'black';
row3[3].style.backgroundColor ='bluegreen';
}
if (parseFloat(row3[4].innerHTML)!=parseFloat(side[2].innerHTML)*parseFloat(top[4].innerHTML)){
row3[4].style.color = 'white';
row3[4].style.backgroundColor ='orange';
}
else {
row3[4].style.color = 'black';
row3[4].style.backgroundColor ='violet';
}

if (parseFloat(row4[0].innerHTML)!=parseFloat(side[3].innerHTML)*parseFloat(top[0].innerHTML)){
row4[0].style.color = 'white';
row4[0].style.backgroundColor ='orange';
}
else {
row4[0].style.color = 'black';
row4[0].style.backgroundColor ='yellow';
}
if (parseFloat(row4[1].innerHTML)!=parseFloat(side[3].innerHTML)*parseFloat(top[1].innerHTML)){
row4[1].style.color = 'white';
row4[1].style.backgroundColor ='orange';
}
else {
row4[1].style.color = 'black';
row4[1].style.backgroundColor ='pink';
}
if (parseFloat(row4[2].innerHTML)!=parseFloat(side[3].innerHTML)*parseFloat(top[2].innerHTML)){
row4[2].style.color = 'white';
row4[2].style.backgroundColor ='orange';
}
else {
row4[2].style.color = 'black';
row4[2].style.backgroundColor ='bluegreen';
}
if (parseFloat(row4[3].innerHTML)!=parseFloat(side[3].innerHTML)*parseFloat(top[3].innerHTML)){
row4[3].style.color = 'white';
row4[3].style.backgroundColor ='orange';
}
else {
row4[3].style.color = 'black';
row4[3].style.backgroundColor ='violet';
}
if (parseFloat(row4[4].innerHTML)!=parseFloat(side[3].innerHTML)*parseFloat(top[4].innerHTML)){
row4[4].style.color = 'white';
row4[4].style.backgroundColor ='orange';
}
else {
row4[4].style.color = 'black';
row4[4].style.backgroundColor ='crimson';
}

if (parseFloat(row5[0].innerHTML)!=parseFloat(side[4].innerHTML)*parseFloat(top[0].innerHTML)){
row5[0].style.color = 'white';
row5[0].style.backgroundColor ='orange';
}
else {
row5[0].style.color = 'black';
row5[0].style.backgroundColor ='pink';
}
if (parseFloat(row5[1].innerHTML)!=parseFloat(side[4].innerHTML)*parseFloat(top[1].innerHTML)){
row5[1].style.color = 'white';
row5[1].style.backgroundColor ='orange';
}
else {
row5[1].style.color = 'black';
row5[1].style.backgroundColor ='bluegreen';
}
if (parseFloat(row5[2].innerHTML)!=parseFloat(side[4].innerHTML)*parseFloat(top[2].innerHTML)){
row5[2].style.color = 'white';
row5[2].style.backgroundColor ='orange';
}
else {
row5[2].style.color = 'black';
row5[2].style.backgroundColor ='violet';
}
if (parseFloat(row5[3].innerHTML)!=parseFloat(side[4].innerHTML)*parseFloat(top[3].innerHTML)){
row5[3].style.color = 'white';
row5[3].style.backgroundColor ='orange';
}
else {
row5[3].style.color = 'black';
row5[3].style.backgroundColor ='crimson';
}
if (parseFloat(row5[4].innerHTML)!=parseFloat(side[4].innerHTML)*parseFloat(top[4].innerHTML)){
row5[4].style.color = 'white';
row5[4].style.backgroundColor ='orange';
}
else {
row5[4].style.color = 'black';
row5[4].style.backgroundColor ='yellowgreen';
}


if (parseFloat(product[0].innerHTML) != parseFloat(side[0].innerHTML)*parseFloat(top[0].innerHTML)){
product[0].style.color = 'white';
product[0].style.backgroundColor ='orange';
}
else {
product[0].style.color = 'black';
product[0].style.backgroundColor ='blue';
}
     if (parseFloat(product[1].innerHTML) != parseFloat(side[1].innerHTML)*parseFloat(top[0].innerHTML)+parseFloat(side[0].innerHTML)*parseFloat(top[1].innerHTML)){
        product[1].style.color = 'white';
        product[1].style.backgroundColor ='orange';
        }
else {
product[1].style.color = 'black';
product[1].style.backgroundColor ='red';
}

     if (parseFloat(product[2].innerHTML) != parseFloat(side[2].innerHTML)*parseFloat(top[0].innerHTML)+parseFloat(side[1].innerHTML)*parseFloat(top[1].innerHTML)+parseFloat(side[0].innerHTML)*parseFloat(top[2].innerHTML)){
            product[2].style.color = 'white';
            product[2].style.backgroundColor ='orange';
            }
else {
product[2].style.color = 'black';
product[2].style.backgroundColor ='green';
}
     if (parseFloat(product[3].innerHTML) != parseFloat(side[3].innerHTML)*parseFloat(top[0].innerHTML)+parseFloat(side[2].innerHTML)*parseFloat(top[1].innerHTML)+parseFloat(side[1].innerHTML)*parseFloat(top[2].innerHTML)+parseFloat(side[0].innerHTML)*parseFloat(top[3].innerHTML)){
                product[3].style.color = 'white';
                product[3].style.backgroundColor ='orange';
                }
else {
product[3].style.color = 'black';
product[3].style.backgroundColor ='yellow';
}
     if (parseFloat(product[4].innerHTML) != parseFloat(side[4].innerHTML)*parseFloat(top[0].innerHTML)+parseFloat(side[3].innerHTML)*parseFloat(top[1].innerHTML)+parseFloat(side[2].innerHTML)*parseFloat(top[2].innerHTML)+parseFloat(side[1].innerHTML)*parseFloat(top[3].innerHTML)+parseFloat(side[0].innerHTML)*parseFloat(top[4].innerHTML)){
    product[4].style.color = 'white';
    product[4].style.backgroundColor ='orange';
                            }
else {
product[4].style.color = 'black';
product[4].style.backgroundColor ='pink';
}
     if (parseFloat(product[5].innerHTML) !=  parseFloat(side[4].innerHTML)*parseFloat(top[1].innerHTML)+parseFloat(side[3].innerHTML)*parseFloat(top[2].innerHTML)+parseFloat(side[2].innerHTML)*parseFloat(top[3].innerHTML)+parseFloat(side[1].innerHTML)*parseFloat(top[4].innerHTML)){
      product[5].style.color = 'white';
    product[5].style.backgroundColor ='orange';
                }
else {
product[5].style.color = 'black';
product[5].style.backgroundColor ='bluegreen';
}
     if (parseFloat(product[6].innerHTML) !=  parseFloat(side[4].innerHTML)*parseFloat(top[2].innerHTML)+parseFloat(side[3].innerHTML)*parseFloat(top[3].innerHTML)+parseFloat(side[2].innerHTML)*parseFloat(top[4].innerHTML)){
   product[6].style.color = 'white';
   product[6].style.backgroundColor ='orange';
}
else {
product[6].style.color = 'black';
product[6].style.backgroundColor ='violet';
}
if (parseFloat(product[7].innerHTML) != parseFloat(side[4].innerHTML)*parseFloat(top[3].innerHTML)+parseFloat(side[3].innerHTML)*parseFloat(top[4].innerHTML)){
 product[7].style.color = 'white';
product[7].style.backgroundColor ='orange';
}
else {
product[7].style.color = 'black';
product[7].style.backgroundColor ='crimson';
}
 if (parseFloat(product[8].innerHTML) !=  parseFloat(side[4].innerHTML)*parseFloat(top[4].innerHTML)){
    product[8].style.color = 'white';
   product[8].style.backgroundColor ='orange';
   }
        
else {
product[8].style.color = 'black';
product[8].style.backgroundColor ='yellowgreen';
}
}


}

function multiplicationgame(){
var top = document.getElementsByClassName('multiplicationintermediate-top');
var side = document.getElementsByClassName('multiplicationintermediate-side');
var row1 = document.getElementsByClassName('multiplicationintermediate-row1');
var row2 = document.getElementsByClassName('multiplicationintermediate-row2');
var row3 = document.getElementsByClassName('multiplicationintermediate-row3');
var row4 = document.getElementsByClassName('multiplicationintermediate-row4');
var row5 = document.getElementsByClassName('multiplicationintermediate-row5');

var product = document.getElementsByClassName('multiplicationintermediate-product');

var cells = document.getElementsByTagName('td');
for (let j=0; j<cells.length; j++){
    cells[j].addEventListener('blur', function(){
        if (isNaN(parseInt(cells[j].innerHTML))){
            cells[j].innerHTML = "0";
        }
    }, false);
}
for (let i=0; i<product.length; i++){
    row1[i].addEventListener('keydown', function(e){
if (e.keyCode == 13){
        gameproduct = parseFloat(side[0].innerHTML)*parseFloat(top[i].innerHTML);
        if( isMobile.any() ) {
            if (parseFloat(row1[i].innerHTML)==parseFloat(gameproduct)){
                alert ('Good Job! Keep it up!! ;) :)');
                    }
            else {
                alert ("Don't lose hope! Try Again! :) ;)");
                row1[i].focus();
                    }
        }
        else {
    if (parseFloat(row1[i].innerHTML)==parseFloat(gameproduct)){
        document.getElementById('positivemessage').style.display ="block";
row1[i].style.borderColor = 'black';
row1[i].style.borderWidth = '1px';
            }
    else {
        document.getElementById('negativemessage').style.display ="block";
row1[i].style.borderColor = 'red';
row1[i].style.borderWidth = '2px';
        row1[i].focus();
            }
            setTimeout(() => {
                document.getElementById('negativemessage').style.display = "none";
                document.getElementById('positivemessage').style.display = "none";}, 1500);
            }
}

else {return false;}
    }, false);
    row2[i].addEventListener('keydown', function(e){
if (e.keyCode == 13){
        gameproduct = parseFloat(side[1].innerHTML)*parseFloat(top[i].innerHTML);

        if( isMobile.any() ) {
            if (parseFloat(row2[i].innerHTML)==parseFloat(gameproduct)){
                alert ('Good Job! Keep it up!! ;) :)');
                    }
            else {
                alert ("Don't lose hope! Try Again! :) ;)");
                row2[i].focus();
                    }
        }
        else {
    if (parseFloat(row2[i].innerHTML)==parseFloat(gameproduct)){
        document.getElementById('positivemessage').style.display ="block";
row2[i].style.borderColor = 'black';
row2[i].style.borderWidth = '1px';

            }
    else {
        document.getElementById('negativemessage').style.display ="block";
row2[i].style.borderColor = 'red';
row2[i].style.borderWidth = '2px';
        row2[i].focus();  
            }
            setTimeout(() => {
                document.getElementById('negativemessage').style.display = "none";
                document.getElementById('positivemessage').style.display = "none";}, 1500);
            }
}
else {return false;}
    }, false);

    row3[i].addEventListener('keydown', function(e){
if (e.keyCode == 13){
        gameproduct = parseFloat(side[2].innerHTML)*parseFloat(top[i].innerHTML);

        if( isMobile.any() ) {
            if (parseFloat(row3[i].innerHTML)==parseFloat(gameproduct)){
                alert ('Good Job! Keep it up!! ;) :)');
                    }
            else {
                alert ("Don't lose hope! Try Again! :) ;)");
                row3[i].focus();
                    }
        }
        else {
    if (parseFloat(row3[i].innerHTML)==parseFloat(gameproduct)){
        document.getElementById('positivemessage').style.display ="block";
row3[i].style.borderColor = 'black';
row3[i].style.borderWidth = '1px';
            }
    else {
        document.getElementById('negativemessage').style.display ="block";
row3[i].style.borderColor = 'red';
row3[i].style.borderWidth = '2px';
        row3[i].focus();
            }
            setTimeout(() => {
                document.getElementById('negativemessage').style.display = "none";
                document.getElementById('positivemessage').style.display = "none";}, 1500);
            } 
}
else {return false;}
    }, false);
    row4[i].addEventListener('keydown', function(e){
if (e.keyCode == 13){
        gameproduct = parseFloat(side[3].innerHTML)*parseFloat(top[i].innerHTML);

        if( isMobile.any() ) {
            if (parseFloat(row4[i].innerHTML)==parseFloat(gameproduct)){
                alert ('Good Job! Keep it up!! ;) :)');
                    }
            else {
                alert ("Don't lose hope! Try Again! :) ;)");
                row4[i].focus();
                    }
        }
        else {
    if (parseFloat(row4[i].innerHTML)==parseFloat(gameproduct)){
        document.getElementById('positivemessage').style.display ="block";
row4[i].style.borderColor = 'black';
row4[i].style.borderWidth = '1px';
            }
    else {
        document.getElementById('negativemessage').style.display ="block";
row4[i].style.borderColor = 'red';
row4[i].style.borderWidth = '2px';
        row4[i].focus(); 
            }
            setTimeout(() => {
                document.getElementById('negativemessage').style.display = "none";
                document.getElementById('positivemessage').style.display = "none";}, 1500);
            }
}
else {return false;}

    }, false);

    row5[i].addEventListener('keydown', function(e){
if (e.keyCode == 13){
        gameproduct = parseFloat(side[4].innerHTML)*parseFloat(top[i].innerHTML);

        if( isMobile.any() ) {
            if (parseFloat(row5[i].innerHTML)==parseFloat(gameproduct)){
                alert ('Good Job! Keep it up!! ;) :)');
                    }
            else {
                alert ("Don't lose hope! Try Again! :) ;)");
                row5[i].focus();
                    }
        }
        else {
    if (parseFloat(row5[i].innerHTML)==parseFloat(gameproduct)){
        document.getElementById('positivemessage').style.display ="block";
row5[i].style.borderColor = 'black';
row5[i].style.borderWidth = '1px';
            }
    else {
        document.getElementById('negativemessage').style.display ="block";
row5[i].style.borderColor = 'red';
row5[i].style.borderWidth = '2px';
        row5[i].focus(); 
            }
            setTimeout(() => {
                document.getElementById('negativemessage').style.display = "none";
                document.getElementById('positivemessage').style.display = "none";}, 1500);
            }
}
else {return false;}
    }, false);
    product[0].addEventListener('keydown', function(e){
if (e.keyCode == 13){
        
        if( isMobile.any() ) {
            if (parseFloat(product[0].innerHTML) == parseFloat(row1[0].innerHTML)){
                alert ('Good Job! Keep it up!! ;) :)');
                    }
            else {
                alert ("Don't lose hope! Try Again! :) ;)");
                product[0].focus();
                    }
        }
        else {
    if (parseFloat(product[0].innerHTML) == parseFloat(row1[0].innerHTML)){
        document.getElementById('positivemessage').style.display ="block";
product[0].style.borderColor = 'black';
product[0].style.borderWidth = '1px';
            }
    else {
        document.getElementById('negativemessage').style.display ="block";
product[0].style.borderColor = 'red';
product[0].style.borderWidth = '2px';
        product[0].focus();  
            }
            setTimeout(() => {
                document.getElementById('negativemessage').style.display = "none";
                document.getElementById('positivemessage').style.display = "none";}, 1500);
            }
    }
else {return false;}
        
    }, false);

    product[1].addEventListener('keydown', function(e){
if (e.keyCode == 13){

        if( isMobile.any() ) {
            if (parseFloat(product[1].innerHTML) == parseFloat(row2[0].innerHTML)+parseFloat(row1[1].innerHTML)){
                alert ('Good Job! Keep it up!! ;) :)');
                    }
            else {
                alert ("Don't lose hope! Try Again! :) ;)");
                product[1].focus();
                    }
        }
        else {
    if (parseFloat(product[1].innerHTML) == parseFloat(row2[0].innerHTML)+parseFloat(row1[1].innerHTML)){
        document.getElementById('positivemessage').style.display ="block";
product[1].style.borderColor = 'black';
product[1].style.borderWidth = '1px';
            }
    else {
        document.getElementById('negativemessage').style.display ="block";
product[1].style.borderColor = 'red';
product[1].style.borderWidth = '2px';
        product[1].focus();
            }
            setTimeout(() => {
                document.getElementById('negativemessage').style.display = "none";
                document.getElementById('positivemessage').style.display = "none";}, 1500);
            }
      }
else {return false;}      
    }, false);
   
    product[2].addEventListener('keydown', function(e){
if (e.keyCode == 13){
        if( isMobile.any() ) {
            if (parseFloat(product[2].innerHTML) == parseFloat(row3[0].innerHTML) + parseFloat(row2[1].innerHTML)+parseFloat(row1[2].innerHTML)){
                alert ('Good Job! Keep it up!! ;) :)');
                    }
            else {
                alert ("Don't lose hope! Try Again! :) ;)");
                product[2].focus();
                    }
        }
        else {
    if (parseFloat(product[2].innerHTML) == parseFloat(row3[0].innerHTML) + parseFloat(row2[1].innerHTML)+parseFloat(row1[2].innerHTML)){
        document.getElementById('positivemessage').style.display ="block";
product[2].style.borderColor = 'black';
product[2].style.borderWidth = '1px';
            }
    else {
        document.getElementById('negativemessage').style.display ="block";
product[2].style.borderColor = 'red';
product[2].style.borderWidth = '2px';
        product[2].focus();   
            }
            setTimeout(() => {
                document.getElementById('negativemessage').style.display = "none";
                document.getElementById('positivemessage').style.display = "none";}, 1500);
            }
       }
else {return false;}     
    }, false);
    product[3].addEventListener('keydown', function(e){
if (e.keyCode == 13){

        if( isMobile.any() ) {
            if (parseFloat(product[3].innerHTML) == parseFloat(row4[0].innerHTML)
            +parseFloat(row3[1].innerHTML)+parseFloat(row2[2].innerHTML)+parseFloat(row1[3].innerHTML)){
                alert ('Good Job! Keep it up!! ;) :)');
                    }
            else {
                alert ("Don't lose hope! Try Again! :) ;)");
                product[3].focus();
                    }
        }
        else {
    if (parseFloat(product[3].innerHTML) == parseFloat(row4[0].innerHTML)
    +parseFloat(row3[1].innerHTML)+parseFloat(row2[2].innerHTML)+parseFloat(row1[3].innerHTML)){
        document.getElementById('positivemessage').style.display ="block";
product[3].style.borderColor = 'black';
product[3].style.borderWidth = '1px';
            }
    else {
        document.getElementById('negativemessage').style.display ="block";
product[3].style.borderColor = 'red';
product[3].style.borderWidth = '2px';
        product[3].focus();    
            }
            setTimeout(() => {
                document.getElementById('negativemessage').style.display = "none";
                document.getElementById('positivemessage').style.display = "none";}, 1500);
            }
          }
else {return false;}  
    }, false);

    product[4].addEventListener('keydown', function(e){
if (e.keyCode == 13){
        if( isMobile.any() ) {
            if (parseFloat(product[4].innerHTML) == parseFloat(row5[0].innerHTML)
            +parseFloat(row4[1].innerHTML)+parseFloat(row3[2].innerHTML)+parseFloat(row2[3].innerHTML)+parseFloat(row1[4].innerHTML)){
                alert ('Good Job! Keep it up!! ;) :)');
                    }
            else {
                alert ("Don't lose hope! Try Again! :) ;)");
                product[4].focus();
                    }
        }
        else {
    if (parseFloat(product[4].innerHTML) == parseFloat(row5[0].innerHTML)
    +parseFloat(row4[1].innerHTML)+parseFloat(row3[2].innerHTML)+parseFloat(row2[3].innerHTML)+parseFloat(row1[4].innerHTML)){
        document.getElementById('positivemessage').style.display ="block";
product[4].style.borderColor = 'black';
product[4].style.borderWidth = '1px';
            }
    else {
        document.getElementById('negativemessage').style.display ="block";
product[4].style.borderColor = 'red';
product[4].style.borderWidth = '2px';
        product[4].focus();   
            }
            setTimeout(() => {
                document.getElementById('negativemessage').style.display = "none";
                document.getElementById('positivemessage').style.display = "none";}, 1500);
            }
      }
else {return false;}
      
    }, false);
    product[5].addEventListener('keydown', function(e){
if (e.keyCode == 13){

        if( isMobile.any() ) {
            if (parseFloat(product[5].innerHTML) ==  parseFloat(row5[1].innerHTML)
            +parseFloat(row4[2].innerHTML)+parseFloat(row3[3].innerHTML)+parseFloat(row2[4].innerHTML)){
                alert ('Good Job! Keep it up!! ;) :)');
                    }
            else {
                alert ("Don't lose hope! Try Again! :) ;)");
                product[5].focus();  }
        }
        else {
    if (parseFloat(product[5].innerHTML) ==  parseFloat(row5[1].innerHTML)
    +parseFloat(row4[2].innerHTML)+parseFloat(row3[3].innerHTML)+parseFloat(row2[4].innerHTML)){
        document.getElementById('positivemessage').style.display ="block";
product[5].style.borderColor = 'black';
product[5].style.borderWidth = '1px';
            }
    else {
        document.getElementById('negativemessage').style.display ="block";
product[5].style.borderColor = 'red';
product[5].style.borderWidth = '2px';
        product[5].focus();    
            }
            setTimeout(() => {
                document.getElementById('negativemessage').style.display = "none";
                document.getElementById('positivemessage').style.display = "none";}, 1500);
            }
         }
else {return false;}   
    }, false);

    product[6].addEventListener('keydown', function(e){
if (e.keyCode == 13){

        if( isMobile.any() ) {
            if (parseFloat(product[5].innerHTML) ==  parseFloat(product[6].innerHTML) ==  parseFloat(row5[2].innerHTML)
            +parseFloat(row4[3].innerHTML)+parseFloat(row3[4].innerHTML)){
                alert ('Good Job! Keep it up!! ;) :)');
                    }
            else {
                alert ("Don't lose hope! Try Again! :) ;)");
                product[6].focus();    }
        }
        else {
    if (parseFloat(product[6].innerHTML) ==  parseFloat(row5[2].innerHTML)
    +parseFloat(row4[3].innerHTML)+parseFloat(row3[4].innerHTML)){
        document.getElementById('positivemessage').style.display ="block";
product[6].style.borderColor = 'black';
product[6].style.borderWidth = '1px';
            }
    else {
        document.getElementById('negativemessage').style.display ="block";
product[6].style.borderColor = 'red';
product[6].style.borderWidth = '2px';
        product[6].focus();  
            }
            setTimeout(() => {
                document.getElementById('negativemessage').style.display = "none";
                document.getElementById('positivemessage').style.display = "none";}, 1500);
            }
        }
else {return false;}    
    }, false);
    product[7].addEventListener('keydown', function(e){
if (e.keyCode == 13){


        if( isMobile.any() ) {
            if (parseFloat(product[7].innerHTML) ==  parseFloat(row5[3].innerHTML)
            +parseFloat(row4[4].innerHTML)){
                alert ('Good Job! Keep it up!! ;) :)');
                    }
            else {
                alert ("Don't lose hope! Try Again! :) ;)");
                product[7].focus(); }
        }
        else {
    if (parseFloat(product[7].innerHTML) ==  parseFloat(row5[3].innerHTML)
    +parseFloat(row4[4].innerHTML)){
        document.getElementById('positivemessage').style.display ="block";
product[7].style.borderColor = 'black';
product[7].style.borderWidth = '1px';
            }
    else {
        document.getElementById('negativemessage').style.display ="block";
product[7].style.borderColor = 'red';
product[7].style.borderWidth = '2px';
        product[7].focus();    
            }
            setTimeout(() => {
                document.getElementById('negativemessage').style.display = "none";
                document.getElementById('positivemessage').style.display = "none";}, 1500);
            }
        }
else {return false;}    
    }, false);
    product[8].addEventListener('keydown', function(e){
if (e.keyCode == 13){

        if( isMobile.any() ) {
            if (parseFloat(product[7].innerHTML) ==  parseFloat(row5[3].innerHTML)
            +parseFloat(row4[4].innerHTML)){
                alert ('Good Job! Keep it up!! ;) :)');
                    }
            else {
                alert ("Don't lose hope! Try Again! :) ;)");
                product[8].focus();   }
        }
        else {
    if (parseFloat(product[7].innerHTML) ==  parseFloat(row5[3].innerHTML)
    +parseFloat(row4[4].innerHTML)){
        document.getElementById('positivemessage').style.display ="block";
product[8].style.borderColor = 'black';
product[8].style.borderWidth = '1px';
            }
    else {
        document.getElementById('negativemessage').style.display ="block";
product[8].style.borderColor = 'red';
product[8].style.borderWidth = '2px';
        product[8].focus();    
            }
            setTimeout(() => {
                document.getElementById('negativemessage').style.display = "none";
                document.getElementById('positivemessage').style.display = "none";}, 1500);
            }
   }
else {return false;}         
    }, false);
}

}

function multiplicationgameoriginal(){
var top = document.getElementsByClassName('multiplicationgame-top');
    var side = document.getElementsByClassName('multiplicationgame-side');
    var row1 = document.getElementsByClassName('multiplicationgame-row1');
    var row2 = document.getElementsByClassName('multiplicationgame-row2');
    var row3 = document.getElementsByClassName('multiplicationgame-row3');
    var row4 = document.getElementsByClassName('multiplicationgame-row4');
    var row5 = document.getElementsByClassName('multiplicationgame-row5');

    var product = document.getElementsByClassName('multiplicationgame-product');

var cells = document.getElementsByTagName('td');
for (let j=0; j<cells.length; j++){
    cells[j].addEventListener('blur', function(){
        if (isNaN(parseInt(cells[j].innerHTML))){
            cells[j].innerHTML = "0";
        }
    }, false);
}
for (let i=0; i<product.length; i++){
top[i].addEventListener('keydown', function(e){
if (e.keyCode == 13){
if (parseFloat(top[i].innerHTML)==parseFloat(row1[i].innerHTML)/parseFloat(side[0].innerHTML)){
        document.getElementById('positivemessage').style.display ="block";
top[i].style.borderColor = 'black';
top[i].style.borderWidth = '1px';
}
else {
        document.getElementById('negativemessage').style.display ="block";
top[i].style.borderColor = 'red';
top[i].style.borderWidth = '2px';
        top[i].focus();
}
            setTimeout(() => {
                document.getElementById('negativemessage').style.display = "none";
                document.getElementById('positivemessage').style.display = "none";}, 1500);
            

}

else {
return false;
}
}, false)
    row1[i].addEventListener('keydown', function(e){
if (e.keyCode == 13){
        gameproduct = parseFloat(side[0].innerHTML)*parseFloat(top[i].innerHTML);
        if( isMobile.any() ) {
            if (parseFloat(row1[i].innerHTML)==parseFloat(gameproduct)){
                alert ('Good Job! Keep it up!! ;) :)');
                    }
            else {
                alert ("Don't lose hope! Try Again! :) ;)");
                row1[i].focus();
                    }
        }
        else {
    if (parseFloat(row1[i].innerHTML)==parseFloat(gameproduct)){
        document.getElementById('positivemessage').style.display ="block";
row1[i].style.borderColor = 'black';
row1[i].style.borderWidth = '1px';

            }
    else {
        document.getElementById('negativemessage').style.display ="block";
row1[i].style.borderColor = 'red';
row1[i].style.borderWidth = '2px';
        row1[i].focus();
            }
            setTimeout(() => {
                document.getElementById('negativemessage').style.display = "none";
                document.getElementById('positivemessage').style.display = "none";}, 1500);
            }
}

else {return false;}
    }, false);
    row2[i].addEventListener('keydown', function(e){
if (e.keyCode == 13){
        gameproduct = parseFloat(side[1].innerHTML)*parseFloat(top[i].innerHTML);

        if( isMobile.any() ) {
            if (parseFloat(row2[i].innerHTML)==parseFloat(gameproduct)){
                alert ('Good Job! Keep it up!! ;) :)');
                    }
            else {
                alert ("Don't lose hope! Try Again! :) ;)");
                row2[i].focus();
                    }
        }
        else {
    if (parseFloat(row2[i].innerHTML)==parseFloat(gameproduct)){
        document.getElementById('positivemessage').style.display ="block";
row2[i].style.borderColor = 'black';
row2[i].style.borderWidth = '1px';

            }
    else {
        document.getElementById('negativemessage').style.display ="block";
row2[i].style.borderColor = 'red';
row2[i].style.borderWidth = '2px';
        row2[i].focus();  
            }
            setTimeout(() => {
                document.getElementById('negativemessage').style.display = "none";
                document.getElementById('positivemessage').style.display = "none";}, 1500);
            }
}
else {return false;}
    }, false);

    row3[i].addEventListener('keydown', function(e){
if (e.keyCode == 13){
        gameproduct = parseFloat(side[2].innerHTML)*parseFloat(top[i].innerHTML);

        if( isMobile.any() ) {
            if (parseFloat(row3[i].innerHTML)==parseFloat(gameproduct)){
                alert ('Good Job! Keep it up!! ;) :)');
                    }
            else {
                alert ("Don't lose hope! Try Again! :) ;)");
                row3[i].focus();
                    }
        }
        else {
    if (parseFloat(row3[i].innerHTML)==parseFloat(gameproduct)){
        document.getElementById('positivemessage').style.display ="block";
row3[i].style.borderColor = 'black';
row3[i].style.borderWidth = '1px';
            }
    else {
        document.getElementById('negativemessage').style.display ="block";
row3[i].style.borderColor = 'red';
row3[i].style.borderWidth = '2px';
        row3[i].focus();
            }
            setTimeout(() => {
                document.getElementById('negativemessage').style.display = "none";
                document.getElementById('positivemessage').style.display = "none";}, 1500);
            } 
}
else {return false;}
    }, false);
    row4[i].addEventListener('keydown', function(e){
if (e.keyCode == 13){
        gameproduct = parseFloat(side[3].innerHTML)*parseFloat(top[i].innerHTML);

        if( isMobile.any() ) {
            if (parseFloat(row4[i].innerHTML)==parseFloat(gameproduct)){
                alert ('Good Job! Keep it up!! ;) :)');
                    }
            else {
                alert ("Don't lose hope! Try Again! :) ;)");
                row4[i].focus();
                    }
        }
        else {
    if (parseFloat(row4[i].innerHTML)==parseFloat(gameproduct)){
        document.getElementById('positivemessage').style.display ="block";
row4[i].style.borderColor = 'black';
row4[i].style.borderWidth = '1px';
            }
    else {
        document.getElementById('negativemessage').style.display ="block";
row4[i].style.borderColor = 'red';
row4[i].style.borderWidth = '2px';
        row4[i].focus(); 
            }
            setTimeout(() => {
                document.getElementById('negativemessage').style.display = "none";
                document.getElementById('positivemessage').style.display = "none";}, 1500);
            }
}
else {return false;}

    }, false);

    row5[i].addEventListener('keydown', function(e){
if (e.keyCode == 13){
        gameproduct = parseFloat(side[4].innerHTML)*parseFloat(top[i].innerHTML);

        if( isMobile.any() ) {
            if (parseFloat(row5[i].innerHTML)==parseFloat(gameproduct)){
                alert ('Good Job! Keep it up!! ;) :)');
                    }
            else {
                alert ("Don't lose hope! Try Again! :) ;)");
                row5[i].focus();
                    }
        }
        else {
    if (parseFloat(row5[i].innerHTML)==parseFloat(gameproduct)){
        document.getElementById('positivemessage').style.display ="block";
row5[i].style.borderColor = 'black';
row5[i].style.borderWidth = '1px';
            }
    else {
        document.getElementById('negativemessage').style.display ="block";
row5[i].style.borderColor = 'red';
row5[i].style.borderWidth = '2px';
        row5[i].focus(); 
            }
            setTimeout(() => {
                document.getElementById('negativemessage').style.display = "none";
                document.getElementById('positivemessage').style.display = "none";}, 1500);
            }
}
else {return false;}
    }, false);
    product[0].addEventListener('keydown', function(e){
if (e.keyCode == 13){
        
        if( isMobile.any() ) {
            if (parseFloat(product[0].innerHTML) == parseFloat(row1[0].innerHTML)){
                alert ('Good Job! Keep it up!! ;) :)');
                    }
            else {
                alert ("Don't lose hope! Try Again! :) ;)");
                product[0].focus();
                    }
        }
        else {
    if (parseFloat(product[0].innerHTML) == parseFloat(row1[0].innerHTML)){
        document.getElementById('positivemessage').style.display ="block";
product[0].style.borderColor = 'black';
product[0].style.borderWidth = '1px';
            }
    else {
        document.getElementById('negativemessage').style.display ="block";
product[0].style.borderColor = 'red';
product[0].style.borderWidth = '2px';
        product[0].focus();  
            }
            setTimeout(() => {
                document.getElementById('negativemessage').style.display = "none";
                document.getElementById('positivemessage').style.display = "none";}, 1500);
            }
    }
else {return false;}
        
    }, false);

    product[1].addEventListener('keydown', function(e){
if (e.keyCode == 13){

        if( isMobile.any() ) {
            if (parseFloat(product[1].innerHTML) == parseFloat(row2[0].innerHTML)+parseFloat(row1[1].innerHTML)){
                alert ('Good Job! Keep it up!! ;) :)');
                    }
            else {
                alert ("Don't lose hope! Try Again! :) ;)");
                product[1].focus();
                    }
        }
        else {
    if (parseFloat(product[1].innerHTML) == parseFloat(row2[0].innerHTML)+parseFloat(row1[1].innerHTML)){
        document.getElementById('positivemessage').style.display ="block";
product[1].style.borderColor = 'black';
product[1].style.borderWidth = '1px';
            }
    else {
        document.getElementById('negativemessage').style.display ="block";
product[1].style.borderColor = 'red';
product[1].style.borderWidth = '2px';
        product[1].focus();
            }
            setTimeout(() => {
                document.getElementById('negativemessage').style.display = "none";
                document.getElementById('positivemessage').style.display = "none";}, 1500);
            }
      }
else {return false;}      
    }, false);
   
    product[2].addEventListener('keydown', function(e){
if (e.keyCode == 13){
        if( isMobile.any() ) {
            if (parseFloat(product[2].innerHTML) == parseFloat(row3[0].innerHTML) + parseFloat(row2[1].innerHTML)+parseFloat(row1[2].innerHTML)){
                alert ('Good Job! Keep it up!! ;) :)');
                    }
            else {
                alert ("Don't lose hope! Try Again! :) ;)");
                product[2].focus();
                    }
        }
        else {
    if (parseFloat(product[2].innerHTML) == parseFloat(row3[0].innerHTML) + parseFloat(row2[1].innerHTML)+parseFloat(row1[2].innerHTML)){
        document.getElementById('positivemessage').style.display ="block";
product[2].style.borderColor = 'black';
product[2].style.borderWidth = '1px';
            }
    else {
        document.getElementById('negativemessage').style.display ="block";
product[2].style.borderColor = 'red';
product[2].style.borderWidth = '2px';
        product[2].focus();   
            }
            setTimeout(() => {
                document.getElementById('negativemessage').style.display = "none";
                document.getElementById('positivemessage').style.display = "none";}, 1500);
            }
       }
else {return false;}     
    }, false);
    product[3].addEventListener('keydown', function(e){
if (e.keyCode == 13){

        if( isMobile.any() ) {
            if (parseFloat(product[3].innerHTML) == parseFloat(row4[0].innerHTML)
            +parseFloat(row3[1].innerHTML)+parseFloat(row2[2].innerHTML)+parseFloat(row1[3].innerHTML)){
                alert ('Good Job! Keep it up!! ;) :)');
                    }
            else {
                alert ("Don't lose hope! Try Again! :) ;)");
                product[3].focus();
                    }
        }
        else {
    if (parseFloat(product[3].innerHTML) == parseFloat(row4[0].innerHTML)
    +parseFloat(row3[1].innerHTML)+parseFloat(row2[2].innerHTML)+parseFloat(row1[3].innerHTML)){
        document.getElementById('positivemessage').style.display ="block";
product[3].style.borderColor = 'black';
product[3].style.borderWidth = '1px';
            }
    else {
        document.getElementById('negativemessage').style.display ="block";
product[3].style.borderColor = 'red';
product[3].style.borderWidth = '2px';
        product[3].focus();    
            }
            setTimeout(() => {
                document.getElementById('negativemessage').style.display = "none";
                document.getElementById('positivemessage').style.display = "none";}, 1500);
            }
          }
else {return false;}  
    }, false);

    product[4].addEventListener('keydown', function(e){
if (e.keyCode == 13){
        if( isMobile.any() ) {
            if (parseFloat(product[4].innerHTML) == parseFloat(row5[0].innerHTML)
            +parseFloat(row4[1].innerHTML)+parseFloat(row3[2].innerHTML)+parseFloat(row2[3].innerHTML)+parseFloat(row1[4].innerHTML)){
                alert ('Good Job! Keep it up!! ;) :)');
                    }
            else {
                alert ("Don't lose hope! Try Again! :) ;)");
                product[4].focus();
                    }
        }
        else {
    if (parseFloat(product[4].innerHTML) == parseFloat(row5[0].innerHTML)
    +parseFloat(row4[1].innerHTML)+parseFloat(row3[2].innerHTML)+parseFloat(row2[3].innerHTML)+parseFloat(row1[4].innerHTML)){
        document.getElementById('positivemessage').style.display ="block";
product[4].style.borderColor = 'black';
product[4].style.borderWidth = '1px';
            }
    else {
        document.getElementById('negativemessage').style.display ="block";
product[4].style.borderColor = 'red';
product[4].style.borderWidth = '2px';
        product[4].focus();   
            }
            setTimeout(() => {
                document.getElementById('negativemessage').style.display = "none";
                document.getElementById('positivemessage').style.display = "none";}, 1500);
            }
      }
else {return false;}
      
    }, false);
    product[5].addEventListener('keydown', function(e){
if (e.keyCode == 13){

        if( isMobile.any() ) {
            if (parseFloat(product[5].innerHTML) ==  parseFloat(row5[1].innerHTML)
            +parseFloat(row4[2].innerHTML)+parseFloat(row3[3].innerHTML)+parseFloat(row2[4].innerHTML)){
                alert ('Good Job! Keep it up!! ;) :)');
                    }
            else {
                alert ("Don't lose hope! Try Again! :) ;)");
                product[5].focus();  }
        }
        else {
    if (parseFloat(product[5].innerHTML) ==  parseFloat(row5[1].innerHTML)
    +parseFloat(row4[2].innerHTML)+parseFloat(row3[3].innerHTML)+parseFloat(row2[4].innerHTML)){
        document.getElementById('positivemessage').style.display ="block";
product[5].style.borderColor = 'black';
product[5].style.borderWidth = '1px';
            }
    else {
        document.getElementById('negativemessage').style.display ="block";
product[5].style.borderColor = 'red';
product[5].style.borderWidth = '2px';
        product[5].focus();    
            }
            setTimeout(() => {
                document.getElementById('negativemessage').style.display = "none";
                document.getElementById('positivemessage').style.display = "none";}, 1500);
            }
         }
else {return false;}   
    }, false);

    product[6].addEventListener('keydown', function(e){
if (e.keyCode == 13){

        if( isMobile.any() ) {
            if (parseFloat(product[5].innerHTML) ==  parseFloat(product[6].innerHTML) ==  parseFloat(row5[2].innerHTML)
            +parseFloat(row4[3].innerHTML)+parseFloat(row3[4].innerHTML)){
                alert ('Good Job! Keep it up!! ;) :)');
                    }
            else {
                alert ("Don't lose hope! Try Again! :) ;)");
                product[6].focus();    }
        }
        else {
    if (parseFloat(product[6].innerHTML) ==  parseFloat(row5[2].innerHTML)
    +parseFloat(row4[3].innerHTML)+parseFloat(row3[4].innerHTML)){
        document.getElementById('positivemessage').style.display ="block";
product[6].style.borderColor = 'black';
product[6].style.borderWidth = '1px';
            }
    else {
        document.getElementById('negativemessage').style.display ="block";
product[6].style.borderColor = 'red';
product[6].style.borderWidth = '2px';
        product[6].focus();  
            }
            setTimeout(() => {
                document.getElementById('negativemessage').style.display = "none";
                document.getElementById('positivemessage').style.display = "none";}, 1500);
            }
        }
else {return false;}    
    }, false);
    product[7].addEventListener('keydown', function(e){
if (e.keyCode == 13){


        if( isMobile.any() ) {
            if (parseFloat(product[7].innerHTML) ==  parseFloat(row5[3].innerHTML)
            +parseFloat(row4[4].innerHTML)){
                alert ('Good Job! Keep it up!! ;) :)');
                    }
            else {
                alert ("Don't lose hope! Try Again! :) ;)");
                product[7].focus(); }
        }
        else {
    if (parseFloat(product[7].innerHTML) ==  parseFloat(row5[3].innerHTML)
    +parseFloat(row4[4].innerHTML)){
        document.getElementById('positivemessage').style.display ="block";
product[7].style.borderColor = 'black';
product[7].style.borderWidth = '1px';
            }
    else {
        document.getElementById('negativemessage').style.display ="block";
product[7].style.borderColor = 'red';
product[7].style.borderWidth = '2px';
        product[7].focus();    
            }
            setTimeout(() => {
                document.getElementById('negativemessage').style.display = "none";
                document.getElementById('positivemessage').style.display = "none";}, 1500);
            }
        }
else {return false;}    
    }, false);
    product[8].addEventListener('keydown', function(e){
if (e.keyCode == 13){

        if( isMobile.any() ) {
            if (parseFloat(product[7].innerHTML) ==  parseFloat(row5[3].innerHTML)
            +parseFloat(row4[4].innerHTML)){
                alert ('Good Job! Keep it up!! ;) :)');
                    }
            else {
                alert ("Don't lose hope! Try Again! :) ;)");
                product[8].focus();   }
        }
        else {
    if (parseFloat(product[7].innerHTML) ==  parseFloat(row5[3].innerHTML)
    +parseFloat(row4[4].innerHTML)){
        document.getElementById('positivemessage').style.display ="block";
product[8].style.borderColor = 'black';
product[8].style.borderWidth = '1px';
            }
    else {
        document.getElementById('negativemessage').style.display ="block";
product[8].style.borderColor = 'red';
product[8].style.borderWidth = '2px';
        product[8].focus();    
            }
            setTimeout(() => {
                document.getElementById('negativemessage').style.display = "none";
                document.getElementById('positivemessage').style.display = "none";}, 1500);
            }
   }
else {return false;}         
    }, false);
}

}

document.getElementById('table-multiplicationgame').addEventListener('input', multiplicationgameoriginal(), false);

document.getElementById('table-multiplicationintermediate').addEventListener('input', multiplicationgame(), false);

document.getElementById('multiplicationgameproduct').addEventListener('input', productgame(), false);

function divisiongamecheck(){
    var top = document.getElementsByClassName('divisiongame-top');
    var side = document.getElementsByClassName('divisiongame-side');
    var row1 = document.getElementsByClassName('divisiongame-row1');
    var row2 = document.getElementsByClassName('divisiongame-row2');
    var row3 = document.getElementsByClassName('divisiongame-row3');
    var row4 = document.getElementsByClassName('divisiongame-row4');
    var row5 = document.getElementsByClassName('divisiongame-row5');
    var quotient = document.getElementsByClassName('divisiongame-quotient');
    var divisor = document.getElementsByClassName('divisionproblemgame');
    var col1 = ['blue','red','green','yellow','pink'];
var col2 = ['red','green','yellow','pink','bluegreen'];
var col3 = ['green','yellow','pink','bluegreen','violet'];
var col4 = ['yellow','pink','bluegreen','violet','crimson'];
var col5 = ['pink','bluegreen','violet','crimson','yellowgreen'];
var col = ['blue','red','green','yellow','pink','bluegreen','violet','crimson','yellowgreen'];
    if( isMobile.any() ) {
//Test for Division Game
var gameproduct1 = row1[0].innerHTML;

var gameproduct2 = parseFloat(row2[0].innerHTML)+parseFloat(row1[1].innerHTML);

var gameproduct3 = parseFloat(row3[0].innerHTML)
+parseFloat(row2[1].innerHTML)+parseFloat(row1[2].innerHTML);

var gameproduct4 = parseFloat(row4[0].innerHTML)
+parseFloat(row3[1].innerHTML)+parseFloat(row2[2].innerHTML)+parseFloat(row1[3].innerHTML);

var gameproduct5 = parseFloat(row5[0].innerHTML)
+parseFloat(row4[1].innerHTML)+parseFloat(row3[2].innerHTML)+parseFloat(row2[3].innerHTML)+parseFloat(row1[4].innerHTML);

var gameproduct6 = parseFloat(row5[1].innerHTML)
+parseFloat(row4[2].innerHTML)+parseFloat(row3[3].innerHTML)+parseFloat(row2[4].innerHTML);

var gameproduct7 =  parseFloat(row5[2].innerHTML)
+parseFloat(row4[3].innerHTML)+parseFloat(row3[4].innerHTML);

var gameproduct8 = parseFloat(row5[3].innerHTML)
+parseFloat(row4[4].innerHTML);

var gameproduct9 = parseFloat(row5[4].innerHTML);
//Division Game
if(parseFloat(divisor[0].innerHTML)==gameproduct1 & parseFloat(divisor[1].innerHTML)==gameproduct2 & parseFloat(divisor[2].innerHTML)==gameproduct3 & parseFloat(divisor[3].innerHTML)==gameproduct4 & parseFloat(divisor[4].innerHTML)==gameproduct5 & parseFloat(divisor[5].innerHTML)==gameproduct6 & parseFloat(divisor[6].innerHTML)==gameproduct7 & parseFloat(divisor[7].innerHTML)==gameproduct8 & parseFloat(divisor[8].innerHTML)==gameproduct9 & parseFloat(quotient[0].innerHTML)==gameproduct1 & parseFloat(quotient[1].innerHTML)==gameproduct2 & parseFloat(quotient[2].innerHTML)==gameproduct3 & parseFloat(quotient[3].innerHTML)==gameproduct4 & parseFloat(quotient[4].innerHTML)==gameproduct5 & parseFloat(quotient[5].innerHTML)==gameproduct6 & parseFloat(quotient[6].innerHTML)==gameproduct7 & parseFloat(quotient[7].innerHTML)==gameproduct8 & parseFloat(quotient[8].innerHTML)==gameproduct9 & parseFloat(row1[0].innerHTML)==parseFloat(top[0].innerHTML)*parseFloat(side[0].innerHTML)& parseFloat(row1[1].innerHTML)==parseFloat(top[1].innerHTML)*parseFloat(side[0].innerHTML)&parseFloat(row1[2].innerHTML)==parseFloat(top[2].innerHTML)*parseFloat(side[0].innerHTML)&parseFloat(row1[3].innerHTML)==parseFloat(top[3].innerHTML)*parseFloat(side[0].innerHTML)&parseFloat(row1[4].innerHTML)==parseFloat(top[4].innerHTML)*parseFloat(side[0].innerHTML)&parseFloat(row2[0].innerHTML)==parseFloat(top[0].innerHTML)*parseFloat(side[1].innerHTML)& parseFloat(row2[1].innerHTML)==parseFloat(top[1].innerHTML)*parseFloat(side[1].innerHTML)&parseFloat(row2[2].innerHTML)==parseFloat(top[2].innerHTML)*parseFloat(side[1].innerHTML)&parseFloat(row2[3].innerHTML)==parseFloat(top[3].innerHTML)*parseFloat(side[1].innerHTML)&parseFloat(row2[4].innerHTML)==parseFloat(top[4].innerHTML)*parseFloat(side[1].innerHTML)&parseFloat(row3[0].innerHTML)==parseFloat(top[0].innerHTML)*parseFloat(side[2].innerHTML)& parseFloat(row3[1].innerHTML)==parseFloat(top[1].innerHTML)*parseFloat(side[2].innerHTML)&parseFloat(row3[2].innerHTML)==parseFloat(top[2].innerHTML)*parseFloat(side[2].innerHTML)&parseFloat(row3[3].innerHTML)==parseFloat(top[3].innerHTML)*parseFloat(side[2].innerHTML)&parseFloat(row3[4].innerHTML)==parseFloat(top[4].innerHTML)*parseFloat(side[2].innerHTML) &parseFloat(row4[0].innerHTML)==parseFloat(top[0].innerHTML)*parseFloat(side[3].innerHTML)& parseFloat(row4[1].innerHTML)==parseFloat(top[1].innerHTML)*parseFloat(side[3].innerHTML)&parseFloat(row4[2].innerHTML)==parseFloat(top[2].innerHTML)*parseFloat(side[3].innerHTML)&parseFloat(row4[3].innerHTML)==parseFloat(top[3].innerHTML)*parseFloat(side[3].innerHTML)&parseFloat(row4[4].innerHTML)==parseFloat(top[4].innerHTML)*parseFloat(side[3].innerHTML) &parseFloat(row5[0].innerHTML)==parseFloat(top[0].innerHTML)*parseFloat(side[4].innerHTML)& parseFloat(row5[1].innerHTML)==parseFloat(top[1].innerHTML)*parseFloat(side[4].innerHTML)&parseFloat(row5[2].innerHTML)==parseFloat(top[2].innerHTML)*parseFloat(side[4].innerHTML)&parseFloat(row5[3].innerHTML)==parseFloat(top[3].innerHTML)*parseFloat(side[4].innerHTML)&parseFloat(row5[4].innerHTML)==parseFloat(top[4].innerHTML)*parseFloat(side[4].innerHTML)){

            alert ('Good Job! Keep it up!! ;) :)');
//Change Color Back
            for (let i=0; i<row1.length; i++){
                row1[i].style.color = 'black';
                row1[i].style.backgroundColor = col1[i];
                row2[i].style.color = 'black';
                row2[i].style.backgroundColor = col2[i];
                row3[i].style.color = 'black';
                row3[i].style.backgroundColor = col3[i];
                row4[i].style.color = 'black';
                row4[i].style.backgroundColor = col4[i];
                row5[i].style.color = 'black';
                row5[i].style.backgroundColor = col5[i];
               top[i].style.color = 'black';
                top[i].style.backgroundColor = 'white';


            }
//Change Color Back
            for (let j=0; j<quotient.length; j++){
                quotient[j].style.color = 'black'
                quotient[j].style.backgroundColor = col[j];
            }
        }
        else {
            alert ("Don't lose hope! Try Again! :) ;)");

        }

    }
    else {
        var gameproduct1 = row1[0].innerHTML;

var gameproduct2 = parseFloat(row2[0].innerHTML)+parseFloat(row1[1].innerHTML);

var gameproduct3 = parseFloat(row3[0].innerHTML)
+parseFloat(row2[1].innerHTML)+parseFloat(row1[2].innerHTML);

var gameproduct4 = parseFloat(row4[0].innerHTML)
+parseFloat(row3[1].innerHTML)+parseFloat(row2[2].innerHTML)+parseFloat(row1[3].innerHTML);

var gameproduct5 = parseFloat(row5[0].innerHTML)
+parseFloat(row4[1].innerHTML)+parseFloat(row3[2].innerHTML)+parseFloat(row2[3].innerHTML)+parseFloat(row1[4].innerHTML);

var gameproduct6 = parseFloat(row5[1].innerHTML)
+parseFloat(row4[2].innerHTML)+parseFloat(row3[3].innerHTML)+parseFloat(row2[4].innerHTML);

var gameproduct7 =  parseFloat(row5[2].innerHTML)
+parseFloat(row4[3].innerHTML)+parseFloat(row3[4].innerHTML);

var gameproduct8 = parseFloat(row5[3].innerHTML)
+parseFloat(row4[4].innerHTML);

var gameproduct9 = parseFloat(row5[4].innerHTML);
//Division Game
if(parseFloat(divisor[0].innerHTML)==gameproduct1 & parseFloat(divisor[1].innerHTML)==gameproduct2 & parseFloat(divisor[2].innerHTML)==gameproduct3 & parseFloat(divisor[3].innerHTML)==gameproduct4 & parseFloat(divisor[4].innerHTML)==gameproduct5 & parseFloat(divisor[5].innerHTML)==gameproduct6 & parseFloat(divisor[6].innerHTML)==gameproduct7 & parseFloat(divisor[7].innerHTML)==gameproduct8 & parseFloat(divisor[8].innerHTML)==gameproduct9 & parseFloat(quotient[0].innerHTML)==gameproduct1 & parseFloat(quotient[1].innerHTML)==gameproduct2 & parseFloat(quotient[2].innerHTML)==gameproduct3 & parseFloat(quotient[3].innerHTML)==gameproduct4 & parseFloat(quotient[4].innerHTML)==gameproduct5 & parseFloat(quotient[5].innerHTML)==gameproduct6 & parseFloat(quotient[6].innerHTML)==gameproduct7 & parseFloat(quotient[7].innerHTML)==gameproduct8 & parseFloat(quotient[8].innerHTML)==gameproduct9 & parseFloat(row1[0].innerHTML)==parseFloat(top[0].innerHTML)*parseFloat(side[0].innerHTML)& parseFloat(row1[1].innerHTML)==parseFloat(top[1].innerHTML)*parseFloat(side[0].innerHTML)&parseFloat(row1[2].innerHTML)==parseFloat(top[2].innerHTML)*parseFloat(side[0].innerHTML)&parseFloat(row1[3].innerHTML)==parseFloat(top[3].innerHTML)*parseFloat(side[0].innerHTML)&parseFloat(row1[4].innerHTML)==parseFloat(top[4].innerHTML)*parseFloat(side[0].innerHTML)&parseFloat(row2[0].innerHTML)==parseFloat(top[0].innerHTML)*parseFloat(side[1].innerHTML)& parseFloat(row2[1].innerHTML)==parseFloat(top[1].innerHTML)*parseFloat(side[1].innerHTML)&parseFloat(row2[2].innerHTML)==parseFloat(top[2].innerHTML)*parseFloat(side[1].innerHTML)&parseFloat(row2[3].innerHTML)==parseFloat(top[3].innerHTML)*parseFloat(side[1].innerHTML)&parseFloat(row2[4].innerHTML)==parseFloat(top[4].innerHTML)*parseFloat(side[1].innerHTML)&parseFloat(row3[0].innerHTML)==parseFloat(top[0].innerHTML)*parseFloat(side[2].innerHTML)& parseFloat(row3[1].innerHTML)==parseFloat(top[1].innerHTML)*parseFloat(side[2].innerHTML)&parseFloat(row3[2].innerHTML)==parseFloat(top[2].innerHTML)*parseFloat(side[2].innerHTML)&parseFloat(row3[3].innerHTML)==parseFloat(top[3].innerHTML)*parseFloat(side[2].innerHTML)&parseFloat(row3[4].innerHTML)==parseFloat(top[4].innerHTML)*parseFloat(side[2].innerHTML) &parseFloat(row4[0].innerHTML)==parseFloat(top[0].innerHTML)*parseFloat(side[3].innerHTML)& parseFloat(row4[1].innerHTML)==parseFloat(top[1].innerHTML)*parseFloat(side[3].innerHTML)&parseFloat(row4[2].innerHTML)==parseFloat(top[2].innerHTML)*parseFloat(side[3].innerHTML)&parseFloat(row4[3].innerHTML)==parseFloat(top[3].innerHTML)*parseFloat(side[3].innerHTML)&parseFloat(row4[4].innerHTML)==parseFloat(top[4].innerHTML)*parseFloat(side[3].innerHTML) &parseFloat(row5[0].innerHTML)==parseFloat(top[0].innerHTML)*parseFloat(side[4].innerHTML)& parseFloat(row5[1].innerHTML)==parseFloat(top[1].innerHTML)*parseFloat(side[4].innerHTML)&parseFloat(row5[2].innerHTML)==parseFloat(top[2].innerHTML)*parseFloat(side[4].innerHTML)&parseFloat(row5[3].innerHTML)==parseFloat(top[3].innerHTML)*parseFloat(side[4].innerHTML)&parseFloat(row5[4].innerHTML)==parseFloat(top[4].innerHTML)*parseFloat(side[4].innerHTML)){

    document.getElementById('positivemessage').style.display ='block';
    setTimeout(() => {
        document.getElementById('negativemessage').style.display = "none";
        document.getElementById('positivemessage').style.display = "none";}, 1500);  
//Change Color Back
            for (let i=0; i<row1.length; i++){
                row1[i].style.color = 'black';
                row1[i].style.backgroundColor = col1[i];
                row2[i].style.color = 'black';
                row2[i].style.backgroundColor = col2[i];
                row3[i].style.color = 'black';
                row3[i].style.backgroundColor = col3[i];
                row4[i].style.color = 'black';
                row4[i].style.backgroundColor = col4[i];
                row5[i].style.color = 'black';
                row5[i].style.backgroundColor = col5[i];
                top[i].style.color = 'black';
                top[i].style.backgroundColor = 'white';

                setTimeout(() => {
                    document.getElementById('negativemessage').style.display = "none";
                    document.getElementById('positivemessage').style.display = "none";}, 1500);  

            }
//Change Color Back
            for (let j=0; j<quotient.length; j++){
                quotient[j].style.color = 'black'
                quotient[j].style.backgroundColor = col[j];
                setTimeout(() => {
                    document.getElementById('negativemessage').style.display = "none";
                    document.getElementById('positivemessage').style.display = "none";}, 1500);  
            }
        }
        else {
            document.getElementById('negativemessage').style.display ='block';
            setTimeout(() => {
                document.getElementById('negativemessage').style.display = "none";
                document.getElementById('positivemessage').style.display = "none";}, 1500);  
        }
        setTimeout(() => {
            document.getElementById('negativemessage').style.display = "none";
            document.getElementById('positivemessage').style.display = "none";}, 1500);  
    }
 for (let i=0; i<quotient.length; i++){

       for (let i=0; i<quotient.length; i++){
 
    if (parseFloat(row1[0].innerHTML)!=parseFloat(side[0].innerHTML)*parseFloat(top[0].innerHTML)){
                row1[0].style.color = 'white';
                row1[0].style.backgroundColor ='orange';
                    }
                   else {
                row1[0].style.color = 'black';
                row1[0].style.backgroundColor ='blue';
                            }
    if (parseFloat(row1[1].innerHTML)!=parseFloat(side[0].innerHTML)*parseFloat(top[1].innerHTML)){
                        row1[1].style.color = 'white';
                        row1[1].style.backgroundColor ='orange';
                            }
 else {
row1[1].style.color = 'black';
row1[1].style.backgroundColor ='red';
}
if (parseFloat(row1[2].innerHTML)!=parseFloat(side[0].innerHTML)*parseFloat(top[2].innerHTML)){
    row1[2].style.color = 'white';
    row1[2].style.backgroundColor ='orange';
        }
else {
row1[2].style.color = 'black';
row1[2].style.backgroundColor ='green';
}
if (parseFloat(row1[3].innerHTML)!=parseFloat(side[0].innerHTML)*parseFloat(top[3].innerHTML)){
    row1[3].style.color = 'white';
    row1[3].style.backgroundColor ='orange';
        }
else {
row1[3].style.color = 'black';
row1[3].style.backgroundColor ='yellow';
}
if (parseFloat(row1[4].innerHTML)!=parseFloat(side[0].innerHTML)*parseFloat(top[4].innerHTML)){
    row1[4].style.color = 'white';
    row1[4].style.backgroundColor ='orange';
        }
else {
row1[4].style.color = 'black';
row1[4].style.backgroundColor ='pink';
}


if (parseFloat(row2[0].innerHTML)!=parseFloat(side[1].innerHTML)*parseFloat(top[0].innerHTML)){
row2[0].style.color = 'white';
 row2[0].style.backgroundColor ='orange';
}
else {
row2[0].style.color = 'black';
row2[0].style.backgroundColor ='red';
}
if (parseFloat(row2[1].innerHTML)!=parseFloat(side[1].innerHTML)*parseFloat(top[1].innerHTML)){
    row2[1].style.color = 'white';
     row2[1].style.backgroundColor ='orange';
    }
    else {
    row2[1].style.color = 'black';
    row2[1].style.backgroundColor ='green';
    }
if (parseFloat(row2[2].innerHTML)!=parseFloat(side[1].innerHTML)*parseFloat(top[2].innerHTML)){
row2[2].style.color = 'white';
row2[2].style.backgroundColor ='orange';
}
else {
row2[2].style.color = 'black';
row2[2].style.backgroundColor ='yellow';
}
if (parseFloat(row2[3].innerHTML)!=parseFloat(side[1].innerHTML)*parseFloat(top[3].innerHTML)){
row2[3].style.color = 'white';
row2[3].style.backgroundColor ='orange';
}
else {
row2[3].style.color = 'black';
row2[3].style.backgroundColor ='pink';
}

if (parseFloat(row2[4].innerHTML)!=parseFloat(side[1].innerHTML)*parseFloat(top[4].innerHTML)){
row2[4].style.color = 'white';
row2[4].style.backgroundColor ='orange';
}
else {
row2[4].style.color = 'black';
row2[4].style.backgroundColor ='bluegreen';
}


if (parseFloat(row3[0].innerHTML)!=parseFloat(side[2].innerHTML)*parseFloat(top[0].innerHTML)){
row3[0].style.color = 'white';
row3[0].style.backgroundColor ='orange';
}
else {
row3[0].style.color = 'black';
row3[0].style.backgroundColor ='green';
}
if (parseFloat(row3[1].innerHTML)!=parseFloat(side[2].innerHTML)*parseFloat(top[1].innerHTML)){
row3[1].style.color = 'white';
row3[1].style.backgroundColor ='orange';
}
else {
row3[1].style.color = 'black';
row3[1].style.backgroundColor ='yellow';
}

if (parseFloat(row3[2].innerHTML)!=parseFloat(side[2].innerHTML)*parseFloat(top[2].innerHTML)){
row3[2].style.color = 'white';
row3[2].style.backgroundColor ='orange';
}
else {
row3[2].style.color = 'black';
row3[2].style.backgroundColor ='pink';
}

if (parseFloat(row3[3].innerHTML)!=parseFloat(side[2].innerHTML)*parseFloat(top[3].innerHTML)){
row3[3].style.color = 'white';
row3[3].style.backgroundColor ='orange';
}
else {
row3[3].style.color = 'black';
row3[3].style.backgroundColor ='bluegreen';
}
if (parseFloat(row3[4].innerHTML)!=parseFloat(side[2].innerHTML)*parseFloat(top[4].innerHTML)){
row3[4].style.color = 'white';
row3[4].style.backgroundColor ='orange';
}
else {
row3[4].style.color = 'black';
row3[4].style.backgroundColor ='violet';
}

if (parseFloat(row4[0].innerHTML)!=parseFloat(side[3].innerHTML)*parseFloat(top[0].innerHTML)){
row4[0].style.color = 'white';
row4[0].style.backgroundColor ='orange';
}
else {
row4[0].style.color = 'black';
row4[0].style.backgroundColor ='yellow';
}
if (parseFloat(row4[1].innerHTML)!=parseFloat(side[3].innerHTML)*parseFloat(top[1].innerHTML)){
row4[1].style.color = 'white';
row4[1].style.backgroundColor ='orange';
}
else {
row4[1].style.color = 'black';
row4[1].style.backgroundColor ='pink';
}
if (parseFloat(row4[2].innerHTML)!=parseFloat(side[3].innerHTML)*parseFloat(top[2].innerHTML)){
row4[2].style.color = 'white';
row4[2].style.backgroundColor ='orange';
}
else {
row4[2].style.color = 'black';
row4[2].style.backgroundColor ='bluegreen';
}
if (parseFloat(row4[3].innerHTML)!=parseFloat(side[3].innerHTML)*parseFloat(top[3].innerHTML)){
row4[3].style.color = 'white';
row4[3].style.backgroundColor ='orange';
}
else {
row4[3].style.color = 'black';
row4[3].style.backgroundColor ='violet';
}
if (parseFloat(row4[4].innerHTML)!=parseFloat(side[3].innerHTML)*parseFloat(top[4].innerHTML)){
row4[4].style.color = 'white';
row4[4].style.backgroundColor ='orange';
}
else {
row4[4].style.color = 'black';
row4[4].style.backgroundColor ='crimson';
}

if (parseFloat(row5[0].innerHTML)!=parseFloat(side[4].innerHTML)*parseFloat(top[0].innerHTML)){
row5[0].style.color = 'white';
row5[0].style.backgroundColor ='orange';
}
else {
row5[0].style.color = 'black';
row5[0].style.backgroundColor ='pink';
}
if (parseFloat(row5[1].innerHTML)!=parseFloat(side[4].innerHTML)*parseFloat(top[1].innerHTML)){
row5[1].style.color = 'white';
row5[1].style.backgroundColor ='orange';
}
else {
row5[1].style.color = 'black';
row5[1].style.backgroundColor ='bluegreen';
}
if (parseFloat(row5[2].innerHTML)!=parseFloat(side[4].innerHTML)*parseFloat(top[2].innerHTML)){
row5[2].style.color = 'white';
row5[2].style.backgroundColor ='orange';
}
else {
row5[2].style.color = 'black';
row5[2].style.backgroundColor ='violet';
}
if (parseFloat(row5[3].innerHTML)!=parseFloat(side[4].innerHTML)*parseFloat(top[3].innerHTML)){
row5[3].style.color = 'white';
row5[3].style.backgroundColor ='orange';
}
else {
row5[3].style.color = 'black';
row5[3].style.backgroundColor ='crimson';
}
if (parseFloat(row5[4].innerHTML)!=parseFloat(side[4].innerHTML)*parseFloat(top[4].innerHTML)){
row5[4].style.color = 'white';
row5[4].style.backgroundColor ='orange';
}
else {
row5[4].style.color = 'black';
row5[4].style.backgroundColor ='yellowgreen';
}


if (parseFloat(quotient[0].innerHTML) != parseFloat(divisor[0].innerHTML) ){
quotient[0].style.color = 'white';
quotient[0].style.backgroundColor ='orange';
}
else {
quotient[0].style.color = 'black';
quotient[0].style.backgroundColor ='blue';
}
     if (parseFloat(quotient[1].innerHTML) != parseFloat(divisor[1].innerHTML)){
        quotient[1].style.color = 'white';
        quotient[1].style.backgroundColor ='orange';
        }
else {
quotient[1].style.color = 'black';
quotient[1].style.backgroundColor ='red';
}

     if (parseFloat(quotient[2].innerHTML) != parseFloat(divisor[2].innerHTML)){
            quotient[2].style.color = 'white';
            quotient[2].style.backgroundColor ='orange';
            }
else {
quotient[2].style.color = 'black';
quotient[2].style.backgroundColor ='green';
}
     if (parseFloat(quotient[3].innerHTML) != parseFloat(divisor[3].innerHTML)){
                quotient[3].style.color = 'white';
                quotient[3].style.backgroundColor ='orange';
                }
else {
quotient[3].style.color = 'black';
quotient[3].style.backgroundColor ='yellow';
}
     if (parseFloat(quotient[4].innerHTML) != parseFloat(divisor[4].innerHTML)){
    quotient[4].style.color = 'white';
    quotient[4].style.backgroundColor ='orange';
                            }
else {
quotient[4].style.color = 'black';
quotient[4].style.backgroundColor ='pink';
}
     if (parseFloat(quotient[5].innerHTML) !=  parseFloat(divisor[5].innerHTML)){
      quotient[5].style.color = 'white';
    quotient[5].style.backgroundColor ='orange';
                }
else {
quotient[5].style.color = 'black';
quotient[5].style.backgroundColor ='bluegreen';
}
     if (parseFloat(quotient[6].innerHTML) !=  parseFloat(divisor[6].innerHTML)){
   quotient[6].style.color = 'white';
   quotient[6].style.backgroundColor ='orange';
}
else {
quotient[6].style.color = 'black';
quotient[6].style.backgroundColor ='violet';
}
if (parseFloat(quotient[7].innerHTML) != pparseFloat(divisor[7].innerHTML)){
 quotient[7].style.color = 'white';
quotient[7].style.backgroundColor ='orange';
}
else {
quotient[7].style.color = 'black';
quotient[7].style.backgroundColor ='crimson';
}
 if (parseFloat(quotient[8].innerHTML) !=  parseFloat(divisor[8].innerHTML)){
    quotient[8].style.color = 'white';
   quotient[8].style.backgroundColor ='orange';
   }
        
else {
quotient[8].style.color = 'black';
quotient[8].style.backgroundColor ='yellowgreen';
}

       }
    }
}

function divisiongamereveal(){
    var top = document.getElementsByClassName('divisiongame-top');
    var side = document.getElementsByClassName('divisiongame-side');
    var row1 = document.getElementsByClassName('divisiongame-row1');
    var row2 = document.getElementsByClassName('divisiongame-row2');
    var row3 = document.getElementsByClassName('divisiongame-row3');
    var row4 = document.getElementsByClassName('divisiongame-row4');
    var row5 = document.getElementsByClassName('divisiongame-row5');
    var quotient = document.getElementsByClassName('divisiongame-quotient');
    var divisor = document.getElementsByClassName('divisionproblemgame');

    for (let i=0; i<quotient.length; i++){

       for (let i=0; i<quotient.length; i++){
 
    if (parseFloat(row1[0].innerHTML)!=parseFloat(side[0].innerHTML)*parseFloat(top[0].innerHTML)){
                row1[0].style.color = 'white';
                row1[0].style.backgroundColor ='orange';
                    }
                   else {
                row1[0].style.color = 'black';
                row1[0].style.backgroundColor ='blue';
                            }
    if (parseFloat(row1[1].innerHTML)!=parseFloat(side[0].innerHTML)*parseFloat(top[1].innerHTML)){
                        row1[1].style.color = 'white';
                        row1[1].style.backgroundColor ='orange';
                            }
 else {
row1[1].style.color = 'black';
row1[1].style.backgroundColor ='red';
}
if (parseFloat(row1[2].innerHTML)!=parseFloat(side[0].innerHTML)*parseFloat(top[2].innerHTML)){
    row1[2].style.color = 'white';
    row1[2].style.backgroundColor ='orange';
        }
else {
row1[2].style.color = 'black';
row1[2].style.backgroundColor ='green';
}
if (parseFloat(row1[3].innerHTML)!=parseFloat(side[0].innerHTML)*parseFloat(top[3].innerHTML)){
    row1[3].style.color = 'white';
    row1[3].style.backgroundColor ='orange';
        }
else {
row1[3].style.color = 'black';
row1[3].style.backgroundColor ='yellow';
}
if (parseFloat(row1[4].innerHTML)!=parseFloat(side[0].innerHTML)*parseFloat(top[4].innerHTML)){
    row1[4].style.color = 'white';
    row1[4].style.backgroundColor ='orange';
        }
else {
row1[4].style.color = 'black';
row1[4].style.backgroundColor ='pink';
}


if (parseFloat(row2[0].innerHTML)!=parseFloat(side[1].innerHTML)*parseFloat(top[0].innerHTML)){
row2[0].style.color = 'white';
 row2[0].style.backgroundColor ='orange';
}
else {
row2[0].style.color = 'black';
row2[0].style.backgroundColor ='red';
}
if (parseFloat(row2[1].innerHTML)!=parseFloat(side[1].innerHTML)*parseFloat(top[1].innerHTML)){
    row2[1].style.color = 'white';
     row2[1].style.backgroundColor ='orange';
    }
    else {
    row2[1].style.color = 'black';
    row2[1].style.backgroundColor ='green';
    }
if (parseFloat(row2[2].innerHTML)!=parseFloat(side[1].innerHTML)*parseFloat(top[2].innerHTML)){
row2[2].style.color = 'white';
row2[2].style.backgroundColor ='orange';
}
else {
row2[2].style.color = 'black';
row2[2].style.backgroundColor ='yellow';
}
if (parseFloat(row2[3].innerHTML)!=parseFloat(side[1].innerHTML)*parseFloat(top[3].innerHTML)){
row2[3].style.color = 'white';
row2[3].style.backgroundColor ='orange';
}
else {
row2[3].style.color = 'black';
row2[3].style.backgroundColor ='pink';
}

if (parseFloat(row2[4].innerHTML)!=parseFloat(side[1].innerHTML)*parseFloat(top[4].innerHTML)){
row2[4].style.color = 'white';
row2[4].style.backgroundColor ='orange';
}
else {
row2[4].style.color = 'black';
row2[4].style.backgroundColor ='bluegreen';
}


if (parseFloat(row3[0].innerHTML)!=parseFloat(side[2].innerHTML)*parseFloat(top[0].innerHTML)){
row3[0].style.color = 'white';
row3[0].style.backgroundColor ='orange';
}
else {
row3[0].style.color = 'black';
row3[0].style.backgroundColor ='green';
}
if (parseFloat(row3[1].innerHTML)!=parseFloat(side[2].innerHTML)*parseFloat(top[1].innerHTML)){
row3[1].style.color = 'white';
row3[1].style.backgroundColor ='orange';
}
else {
row3[1].style.color = 'black';
row3[1].style.backgroundColor ='yellow';
}

if (parseFloat(row3[2].innerHTML)!=parseFloat(side[2].innerHTML)*parseFloat(top[2].innerHTML)){
row3[2].style.color = 'white';
row3[2].style.backgroundColor ='orange';
}
else {
row3[2].style.color = 'black';
row3[2].style.backgroundColor ='pink';
}

if (parseFloat(row3[3].innerHTML)!=parseFloat(side[2].innerHTML)*parseFloat(top[3].innerHTML)){
row3[3].style.color = 'white';
row3[3].style.backgroundColor ='orange';
}
else {
row3[3].style.color = 'black';
row3[3].style.backgroundColor ='bluegreen';
}
if (parseFloat(row3[4].innerHTML)!=parseFloat(side[2].innerHTML)*parseFloat(top[4].innerHTML)){
row3[4].style.color = 'white';
row3[4].style.backgroundColor ='orange';
}
else {
row3[4].style.color = 'black';
row3[4].style.backgroundColor ='violet';
}

if (parseFloat(row4[0].innerHTML)!=parseFloat(side[3].innerHTML)*parseFloat(top[0].innerHTML)){
row4[0].style.color = 'white';
row4[0].style.backgroundColor ='orange';
}
else {
row4[0].style.color = 'black';
row4[0].style.backgroundColor ='yellow';
}
if (parseFloat(row4[1].innerHTML)!=parseFloat(side[3].innerHTML)*parseFloat(top[1].innerHTML)){
row4[1].style.color = 'white';
row4[1].style.backgroundColor ='orange';
}
else {
row4[1].style.color = 'black';
row4[1].style.backgroundColor ='pink';
}
if (parseFloat(row4[2].innerHTML)!=parseFloat(side[3].innerHTML)*parseFloat(top[2].innerHTML)){
row4[2].style.color = 'white';
row4[2].style.backgroundColor ='orange';
}
else {
row4[2].style.color = 'black';
row4[2].style.backgroundColor ='bluegreen';
}
if (parseFloat(row4[3].innerHTML)!=parseFloat(side[3].innerHTML)*parseFloat(top[3].innerHTML)){
row4[3].style.color = 'white';
row4[3].style.backgroundColor ='orange';
}
else {
row4[3].style.color = 'black';
row4[3].style.backgroundColor ='violet';
}
if (parseFloat(row4[4].innerHTML)!=parseFloat(side[3].innerHTML)*parseFloat(top[4].innerHTML)){
row4[4].style.color = 'white';
row4[4].style.backgroundColor ='orange';
}
else {
row4[4].style.color = 'black';
row4[4].style.backgroundColor ='crimson';
}

if (parseFloat(row5[0].innerHTML)!=parseFloat(side[4].innerHTML)*parseFloat(top[0].innerHTML)){
row5[0].style.color = 'white';
row5[0].style.backgroundColor ='orange';
}
else {
row5[0].style.color = 'black';
row5[0].style.backgroundColor ='pink';
}
if (parseFloat(row5[1].innerHTML)!=parseFloat(side[4].innerHTML)*parseFloat(top[1].innerHTML)){
row5[1].style.color = 'white';
row5[1].style.backgroundColor ='orange';
}
else {
row5[1].style.color = 'black';
row5[1].style.backgroundColor ='bluegreen';
}
if (parseFloat(row5[2].innerHTML)!=parseFloat(side[4].innerHTML)*parseFloat(top[2].innerHTML)){
row5[2].style.color = 'white';
row5[2].style.backgroundColor ='orange';
}
else {
row5[2].style.color = 'black';
row5[2].style.backgroundColor ='violet';
}
if (parseFloat(row5[3].innerHTML)!=parseFloat(side[4].innerHTML)*parseFloat(top[3].innerHTML)){
row5[3].style.color = 'white';
row5[3].style.backgroundColor ='orange';
}
else {
row5[3].style.color = 'black';
row5[3].style.backgroundColor ='crimson';
}
if (parseFloat(row5[4].innerHTML)!=parseFloat(side[4].innerHTML)*parseFloat(top[4].innerHTML)){
row5[4].style.color = 'white';
row5[4].style.backgroundColor ='orange';
}
else {
row5[4].style.color = 'black';
row5[4].style.backgroundColor ='yellowgreen';
}


if (parseFloat(quotient[0].innerHTML) != parseFloat(divisor[0].innerHTML) ){
quotient[0].style.color = 'white';
quotient[0].style.backgroundColor ='orange';
}
else {
quotient[0].style.color = 'black';
quotient[0].style.backgroundColor ='blue';
}
     if (parseFloat(quotient[1].innerHTML) != parseFloat(divisor[1].innerHTML)){
        quotient[1].style.color = 'white';
        quotient[1].style.backgroundColor ='orange';
        }
else {
quotient[1].style.color = 'black';
quotient[1].style.backgroundColor ='red';
}

     if (parseFloat(quotient[2].innerHTML) != parseFloat(divisor[2].innerHTML)){
            quotient[2].style.color = 'white';
            quotient[2].style.backgroundColor ='orange';
            }
else {
quotient[2].style.color = 'black';
quotient[2].style.backgroundColor ='green';
}
     if (parseFloat(quotient[3].innerHTML) != parseFloat(divisor[3].innerHTML)){
                quotient[3].style.color = 'white';
                quotient[3].style.backgroundColor ='orange';
                }
else {
quotient[3].style.color = 'black';
quotient[3].style.backgroundColor ='yellow';
}
     if (parseFloat(quotient[4].innerHTML) != parseFloat(divisor[4].innerHTML)){
    quotient[4].style.color = 'white';
    quotient[4].style.backgroundColor ='orange';
                            }
else {
quotient[4].style.color = 'black';
quotient[4].style.backgroundColor ='pink';
}
     if (parseFloat(quotient[5].innerHTML) !=  parseFloat(divisor[5].innerHTML)){
      quotient[5].style.color = 'white';
    quotient[5].style.backgroundColor ='orange';
                }
else {
quotient[5].style.color = 'black';
quotient[5].style.backgroundColor ='bluegreen';
}
     if (parseFloat(quotient[6].innerHTML) !=  parseFloat(divisor[6].innerHTML)){
   quotient[6].style.color = 'white';
   quotient[6].style.backgroundColor ='orange';
}
else {
quotient[6].style.color = 'black';
quotient[6].style.backgroundColor ='violet';
}
if (parseFloat(quotient[7].innerHTML) != pparseFloat(divisor[7].innerHTML)){
 quotient[7].style.color = 'white';
quotient[7].style.backgroundColor ='orange';
}
else {
quotient[7].style.color = 'black';
quotient[7].style.backgroundColor ='crimson';
}
 if (parseFloat(quotient[8].innerHTML) !=  parseFloat(divisor[8].innerHTML)){
    quotient[8].style.color = 'white';
   quotient[8].style.backgroundColor ='orange';
   }
        
else {
quotient[8].style.color = 'black';
quotient[8].style.backgroundColor ='yellowgreen';
}

       }
    }

}

function divisiongameoriginal(){
var top = document.getElementsByClassName('multiplicationgame-top');
   

 var top = document.getElementsByClassName('divisiongame-top');
    var side = document.getElementsByClassName('divisiongame-side');
    var row1 = document.getElementsByClassName('divisiongame-row1');
    var row2 = document.getElementsByClassName('divisiongame-row2');
    var row3 = document.getElementsByClassName('divisiongame-row3');
    var row4 = document.getElementsByClassName('divisiongame-row4');
    var row5 = document.getElementsByClassName('divisiongame-row5');
    var product = document.getElementsByClassName('divisiongame-quotient');
    var divisor = document.getElementsByClassName('divisionproblemgame');

var cells = document.getElementsByTagName('td');
for (let j=0; j<cells.length; j++){
    cells[j].addEventListener('blur', function(){
        if (isNaN(parseInt(cells[j].innerHTML))){
            cells[j].innerHTML = "0";
        }
    }, false);
}
for (let i=0; i<product.length; i++){
    row1[i].addEventListener('blur', function(){
        gameproduct = parseFloat(side[0].innerHTML)*parseFloat(top[i].innerHTML);
        if( isMobile.any() ) {
            if (parseFloat(row1[i].innerHTML)==parseFloat(gameproduct)){
                alert ('Good Job! Keep it up!! ;) :)');
                    }
            else {
                alert ("Don't lose hope! Try Again! :) ;)");
                row1[i].focus();
                    }
        }
        else {
    if (parseFloat(row1[i].innerHTML)==parseFloat(gameproduct)){
        document.getElementById('positivemessage').style.display ="block";
            }
    else {
        document.getElementById('negativemessage').style.display ="block";
        row1[i].focus();
            }
            setTimeout(() => {
                document.getElementById('negativemessage').style.display = "none";
                document.getElementById('positivemessage').style.display = "none";}, 1500);
            }
 
    }, false);
    row2[i].addEventListener('blur', function(){
        gameproduct = parseFloat(side[1].innerHTML)*parseFloat(top[i].innerHTML);

        if( isMobile.any() ) {
            if (parseFloat(row2[i].innerHTML)==parseFloat(gameproduct)){
                alert ('Good Job! Keep it up!! ;) :)');
                    }
            else {
                alert ("Don't lose hope! Try Again! :) ;)");
                row2[i].focus();
                    }
        }
        else {
    if (parseFloat(row2[i].innerHTML)==parseFloat(gameproduct)){
        document.getElementById('positivemessage').style.display ="block";
            }
    else {
        document.getElementById('negativemessage').style.display ="block";
        row2[i].focus();  
            }
            setTimeout(() => {
                document.getElementById('negativemessage').style.display = "none";
                document.getElementById('positivemessage').style.display = "none";}, 1500);
            }
    }, false);

    row3[i].addEventListener('blur', function(){
        gameproduct = parseFloat(side[2].innerHTML)*parseFloat(top[i].innerHTML);

        if( isMobile.any() ) {
            if (parseFloat(row3[i].innerHTML)==parseFloat(gameproduct)){
                alert ('Good Job! Keep it up!! ;) :)');
                    }
            else {
                alert ("Don't lose hope! Try Again! :) ;)");
                row3[i].focus();
                    }
        }
        else {
    if (parseFloat(row3[i].innerHTML)==parseFloat(gameproduct)){
        document.getElementById('positivemessage').style.display ="block";
            }
    else {
        document.getElementById('negativemessage').style.display ="block";
        row3[i].focus();
            }
            setTimeout(() => {
                document.getElementById('negativemessage').style.display = "none";
                document.getElementById('positivemessage').style.display = "none";}, 1500);
            } 

    }, false);
    row4[i].addEventListener('blur', function(){
        gameproduct = parseFloat(side[3].innerHTML)*parseFloat(top[i].innerHTML);

        if( isMobile.any() ) {
            if (parseFloat(row4[i].innerHTML)==parseFloat(gameproduct)){
                alert ('Good Job! Keep it up!! ;) :)');
                    }
            else {
                alert ("Don't lose hope! Try Again! :) ;)");
                row4[i].focus();
                    }
        }
        else {
    if (parseFloat(row4[i].innerHTML)==parseFloat(gameproduct)){
        document.getElementById('positivemessage').style.display ="block";
            }
    else {
        document.getElementById('negativemessage').style.display ="block";
        row4[i].focus(); 
            }
            setTimeout(() => {
                document.getElementById('negativemessage').style.display = "none";
                document.getElementById('positivemessage').style.display = "none";}, 1500);
            }
    }, false);

    row5[i].addEventListener('blur', function(){
        gameproduct = parseFloat(side[4].innerHTML)*parseFloat(top[i].innerHTML);

        if( isMobile.any() ) {
            if (parseFloat(row5[i].innerHTML)==parseFloat(gameproduct)){
                alert ('Good Job! Keep it up!! ;) :)');
                    }
            else {
                alert ("Don't lose hope! Try Again! :) ;)");
                row5[i].focus();
                    }
        }
        else {
    if (parseFloat(row5[i].innerHTML)==parseFloat(gameproduct)){
        document.getElementById('positivemessage').style.display ="block";
            }
    else {
        document.getElementById('negativemessage').style.display ="block";
        row5[i].focus(); 
            }
            setTimeout(() => {
                document.getElementById('negativemessage').style.display = "none";
                document.getElementById('positivemessage').style.display = "none";}, 1500);
            }

    }, false);
    product[0].addEventListener('blur', function(){
        

        if( isMobile.any() ) {
            if (parseFloat(product[0].innerHTML) == parseFloat(row1[0].innerHTML)){
                alert ('Good Job! Keep it up!! ;) :)');
                    }
            else {
                alert ("Don't lose hope! Try Again! :) ;)");
                product[0].focus();
                    }
        }
        else {
    if (parseFloat(product[0].innerHTML) == parseFloat(row1[0].innerHTML)){
        document.getElementById('positivemessage').style.display ="block";
            }
    else {
        document.getElementById('negativemessage').style.display ="block";
        product[0].focus();  
            }
            setTimeout(() => {
                document.getElementById('negativemessage').style.display = "none";
                document.getElementById('positivemessage').style.display = "none";}, 1500);
            }
            
    }, false);

    product[1].addEventListener('blur', function(){
        

        if( isMobile.any() ) {
            if (parseFloat(product[1].innerHTML) == parseFloat(row2[0].innerHTML)+parseFloat(row1[1].innerHTML)){
                alert ('Good Job! Keep it up!! ;) :)');
                    }
            else {
                alert ("Don't lose hope! Try Again! :) ;)");
                product[1].focus();
                    }
        }
        else {
    if (parseFloat(product[1].innerHTML) == parseFloat(row2[0].innerHTML)+parseFloat(row1[1].innerHTML)){
        document.getElementById('positivemessage').style.display ="block";
            }
    else {
        document.getElementById('negativemessage').style.display ="block";
        product[1].focus();
            }
            setTimeout(() => {
                document.getElementById('negativemessage').style.display = "none";
                document.getElementById('positivemessage').style.display = "none";}, 1500);
            }
            
    }, false);
   
    product[2].addEventListener('blur', function(){
        

        if( isMobile.any() ) {
            if (parseFloat(product[2].innerHTML) == parseFloat(row3[0].innerHTML) + parseFloat(row2[1].innerHTML)+parseFloat(row1[2].innerHTML)){
                alert ('Good Job! Keep it up!! ;) :)');
                    }
            else {
                alert ("Don't lose hope! Try Again! :) ;)");
                product[2].focus();
                    }
        }
        else {
    if (parseFloat(product[2].innerHTML) == parseFloat(row3[0].innerHTML) + parseFloat(row2[1].innerHTML)+parseFloat(row1[2].innerHTML)){
        document.getElementById('positivemessage').style.display ="block";
            }
    else {
        document.getElementById('negativemessage').style.display ="block";
        product[2].focus();   
            }
            setTimeout(() => {
                document.getElementById('negativemessage').style.display = "none";
                document.getElementById('positivemessage').style.display = "none";}, 1500);
            }
            
    }, false);
    product[3].addEventListener('blur', function(){
        

        if( isMobile.any() ) {
            if (parseFloat(product[3].innerHTML) == parseFloat(row4[0].innerHTML)
            +parseFloat(row3[1].innerHTML)+parseFloat(row2[2].innerHTML)+parseFloat(row1[3].innerHTML)){
                alert ('Good Job! Keep it up!! ;) :)');
                    }
            else {
                alert ("Don't lose hope! Try Again! :) ;)");
                product[3].focus();
                    }
        }
        else {
    if (parseFloat(product[3].innerHTML) == parseFloat(row4[0].innerHTML)
    +parseFloat(row3[1].innerHTML)+parseFloat(row2[2].innerHTML)+parseFloat(row1[3].innerHTML)){
        document.getElementById('positivemessage').style.display ="block";
            }
    else {
        document.getElementById('negativemessage').style.display ="block";
        product[3].focus();    
            }
            setTimeout(() => {
                document.getElementById('negativemessage').style.display = "none";
                document.getElementById('positivemessage').style.display = "none";}, 1500);
            }
            
    }, false);

    product[4].addEventListener('blur', function(){
        

        if( isMobile.any() ) {
            if (parseFloat(product[4].innerHTML) == parseFloat(row5[0].innerHTML)
            +parseFloat(row4[1].innerHTML)+parseFloat(row3[2].innerHTML)+parseFloat(row2[3].innerHTML)+parseFloat(row1[4].innerHTML)){
                alert ('Good Job! Keep it up!! ;) :)');
                    }
            else {
                alert ("Don't lose hope! Try Again! :) ;)");
                product[4].focus();
                    }
        }
        else {
    if (parseFloat(product[4].innerHTML) == parseFloat(row5[0].innerHTML)
    +parseFloat(row4[1].innerHTML)+parseFloat(row3[2].innerHTML)+parseFloat(row2[3].innerHTML)+parseFloat(row1[4].innerHTML)){
        document.getElementById('positivemessage').style.display ="block";
            }
    else {
        document.getElementById('negativemessage').style.display ="block";
        product[4].focus();   
            }
            setTimeout(() => {
                document.getElementById('negativemessage').style.display = "none";
                document.getElementById('positivemessage').style.display = "none";}, 1500);
            }
            
    }, false);
    product[5].addEventListener('blur', function(){
        

        if( isMobile.any() ) {
            if (parseFloat(product[5].innerHTML) ==  parseFloat(row5[1].innerHTML)
            +parseFloat(row4[2].innerHTML)+parseFloat(row3[3].innerHTML)+parseFloat(row2[4].innerHTML)){
                alert ('Good Job! Keep it up!! ;) :)');
                    }
            else {
                alert ("Don't lose hope! Try Again! :) ;)");
                product[5].focus();  }
        }
        else {
    if (parseFloat(product[5].innerHTML) ==  parseFloat(row5[1].innerHTML)
    +parseFloat(row4[2].innerHTML)+parseFloat(row3[3].innerHTML)+parseFloat(row2[4].innerHTML)){
        document.getElementById('positivemessage').style.display ="block";
            }
    else {
        document.getElementById('negativemessage').style.display ="block";
        product[5].focus();    
            }
            setTimeout(() => {
                document.getElementById('negativemessage').style.display = "none";
                document.getElementById('positivemessage').style.display = "none";}, 1500);
            }
            
    }, false);

    product[6].addEventListener('blur', function(){
        

        if( isMobile.any() ) {
            if (parseFloat(product[5].innerHTML) ==  parseFloat(product[6].innerHTML) ==  parseFloat(row5[2].innerHTML)
            +parseFloat(row4[3].innerHTML)+parseFloat(row3[4].innerHTML)){
                alert ('Good Job! Keep it up!! ;) :)');
                    }
            else {
                alert ("Don't lose hope! Try Again! :) ;)");
                product[6].focus();    }
        }
        else {
    if (parseFloat(product[6].innerHTML) ==  parseFloat(row5[2].innerHTML)
    +parseFloat(row4[3].innerHTML)+parseFloat(row3[4].innerHTML)){
        document.getElementById('positivemessage').style.display ="block";
            }
    else {
        document.getElementById('negativemessage').style.display ="block";
        product[6].focus();  
            }
            setTimeout(() => {
                document.getElementById('negativemessage').style.display = "none";
                document.getElementById('positivemessage').style.display = "none";}, 1500);
            }
            
    }, false);
    product[7].addEventListener('blur', function(){
        

        if( isMobile.any() ) {
            if (parseFloat(product[7].innerHTML) ==  parseFloat(row5[3].innerHTML)
            +parseFloat(row4[4].innerHTML)){
                alert ('Good Job! Keep it up!! ;) :)');
                    }
            else {
                alert ("Don't lose hope! Try Again! :) ;)");
                product[7].focus(); }
        }
        else {
    if (parseFloat(product[7].innerHTML) ==  parseFloat(row5[3].innerHTML)
    +parseFloat(row4[4].innerHTML)){
        document.getElementById('positivemessage').style.display ="block";
            }
    else {
        document.getElementById('negativemessage').style.display ="block";
        product[7].focus();    
            }
            setTimeout(() => {
                document.getElementById('negativemessage').style.display = "none";
                document.getElementById('positivemessage').style.display = "none";}, 1500);
            }
            
    }, false);
    product[8].addEventListener('blur', function(){
        

        if( isMobile.any() ) {
            if (parseFloat(product[7].innerHTML) ==  parseFloat(row5[3].innerHTML)
            +parseFloat(row4[4].innerHTML)){
                alert ('Good Job! Keep it up!! ;) :)');
                    }
            else {
                alert ("Don't lose hope! Try Again! :) ;)");
                product[8].focus();   }
        }
        else {
    if (parseFloat(product[7].innerHTML) ==  parseFloat(row5[3].innerHTML)
    +parseFloat(row4[4].innerHTML)){
        document.getElementById('positivemessage').style.display ="block";
            }
    else {
        document.getElementById('negativemessage').style.display ="block";
        product[8].focus();    
            }
            setTimeout(() => {
                document.getElementById('negativemessage').style.display = "none";
                document.getElementById('positivemessage').style.display = "none";}, 1500);
            }
            
    }, false);
}

}

document.getElementById('table-divisiongame').addEventListener('input',divisiongameoriginal(), false);
//tandaan

function multifactoringgamechecker(){
    var problem  = document.getElementsByClassName('multiplicationgame-divisor');
    var exponent  = document.getElementById('multihighestgameexp').value;
    var exp = parseFloat(exponent);
    var x = document.getElementById('multifactoringgamevalue').value;


    if (exponent == '1'){
        document.getElementById('multifactoringcheckeranswer').innerHTML = parseFloat(problem[0].innerHTML)*Math.pow(parseFloat(x), exp) + parseFloat(problem[1].innerHTML)*Math.pow(parseFloat(x), exp-1);
    }
    else if (exponent == '2'){
        document.getElementById('multifactoringcheckeranswer').innerHTML = parseFloat(problem[0].innerHTML)*Math.pow(parseFloat(x), exp) + parseFloat(problem[1].innerHTML)*Math.pow(parseFloat(x), exp-1) + parseFloat(problem[2].innerHTML)*Math.pow(parseFloat(x), exp-2);
    }
    else if (exponent == '3'){
        document.getElementById('multifactoringcheckeranswer').innerHTML = parseFloat(problem[0].innerHTML)*Math.pow(parseFloat(x), exp) + parseFloat(problem[1].innerHTML)*Math.pow(parseFloat(x), exp-1) + parseFloat(problem[2].innerHTML)*Math.pow(parseFloat(x), exp-2)+ parseFloat(problem[3].innerHTML)*Math.pow(parseFloat(x), exp-3);
    }
    else if (exponent == '4'){
        document.getElementById('multifactoringcheckeranswer').innerHTML = parseFloat(problem[0].innerHTML)*Math.pow(parseFloat(x), exp) + parseFloat(problem[1].innerHTML)*Math.pow(parseFloat(x), exp-1) + parseFloat(problem[2].innerHTML)*Math.pow(parseFloat(x), exp-2)+ parseFloat(problem[3].innerHTML)*Math.pow(parseFloat(x), exp-3) + parseFloat(problem[4].innerHTML)*Math.pow(parseFloat(x), exp-4);
    }
    else if (exponent == '5'){
        document.getElementById('multifactoringcheckeranswer').innerHTML = parseFloat(problem[0].innerHTML)*Math.pow(parseFloat(x), exp) + parseFloat(problem[1].innerHTML)*Math.pow(parseFloat(x), exp-1) + parseFloat(problem[2].innerHTML)*Math.pow(parseFloat(x), exp-2)+ parseFloat(problem[3].innerHTML)*Math.pow(parseFloat(x), exp-3) + parseFloat(problem[4].innerHTML)*Math.pow(parseFloat(x), exp-4)+ parseFloat(problem[5].innerHTML)*Math.pow(parseFloat(x), exp-5);
    }
    else if (exponent == '6'){
        document.getElementById('multifactoringcheckeranswer').innerHTML = parseFloat(problem[0].innerHTML)*Math.pow(parseFloat(x), exp) + parseFloat(problem[1].innerHTML)*Math.pow(parseFloat(x), exp-1) + parseFloat(problem[2].innerHTML)*Math.pow(parseFloat(x), exp-2)+ parseFloat(problem[3].innerHTML)*Math.pow(parseFloat(x), exp-3) + parseFloat(problem[4].innerHTML)*Math.pow(parseFloat(x), exp-4)+ parseFloat(problem[5].innerHTML)*Math.pow(parseFloat(x), exp-5)+ parseFloat(problem[6].innerHTML)*Math.pow(parseFloat(x), exp-6);
    }
    else if (exponent == '7'){
        document.getElementById('multifactoringcheckeranswer').innerHTML = parseFloat(problem[0].innerHTML)*Math.pow(parseFloat(x), exp) + parseFloat(problem[1].innerHTML)*Math.pow(parseFloat(x), exp-1) + parseFloat(problem[2].innerHTML)*Math.pow(parseFloat(x), exp-2)+ parseFloat(problem[3].innerHTML)*Math.pow(parseFloat(x), exp-3) + parseFloat(problem[4].innerHTML)*Math.pow(parseFloat(x), exp-4)+ parseFloat(problem[5].innerHTML)*Math.pow(parseFloat(x), exp-5)+ parseFloat(problem[6].innerHTML)*Math.pow(parseFloat(x), exp-6)+ parseFloat(problem[7].innerHTML)*Math.pow(parseFloat(x), exp-7);
    }
    else if (exponent == '8'){
        document.getElementById('multifactoringcheckeranswer').innerHTML = parseFloat(problem[0].innerHTML)*Math.pow(parseFloat(x), exp) + parseFloat(problem[1].innerHTML)*Math.pow(parseFloat(x), exp-1) + parseFloat(problem[2].innerHTML)*Math.pow(parseFloat(x), exp-2)+ parseFloat(problem[3].innerHTML)*Math.pow(parseFloat(x), exp-3) + parseFloat(problem[4].innerHTML)*Math.pow(parseFloat(x), exp-4)+ parseFloat(problem[5].innerHTML)*Math.pow(parseFloat(x), exp-5)+ parseFloat(problem[6].innerHTML)*Math.pow(parseFloat(x), exp-6)+ parseFloat(problem[7].innerHTML)*Math.pow(parseFloat(x), exp-7)+ parseFloat(problem[8].innerHTML)*Math.pow(parseFloat(x), exp-8);
    }
    else if (exponent == '9'){
        document.getElementById('multifactoringcheckeranswer').innerHTML = parseFloat(problem[0].innerHTML)*Math.pow(parseFloat(x), exp) + parseFloat(problem[1].innerHTML)*Math.pow(parseFloat(x), exp-1) + parseFloat(problem[2].innerHTML)*Math.pow(parseFloat(x), exp-2)+ parseFloat(problem[3].innerHTML)*Math.pow(parseFloat(x), exp-3) + parseFloat(problem[4].innerHTML)*Math.pow(parseFloat(x), exp-4)+ parseFloat(problem[5].innerHTML)*Math.pow(parseFloat(x), exp-5)+ parseFloat(problem[6].innerHTML)*Math.pow(parseFloat(x), exp-6)+ parseFloat(problem[7].innerHTML)*Math.pow(parseFloat(x), exp-7)+ parseFloat(problem[8].innerHTML)*Math.pow(parseFloat(x), exp-8)+ parseFloat(problem[9].innerHTML)*Math.pow(parseFloat(x), exp-9);
    }
    else if (exponent == '10'){
        document.getElementById('multifactoringcheckeranswer').innerHTML = parseFloat(problem[0].innerHTML)*Math.pow(parseFloat(x), exp) + parseFloat(problem[1].innerHTML)*Math.pow(parseFloat(x), exp-1) + parseFloat(problem[2].innerHTML)*Math.pow(parseFloat(x), exp-2)+ parseFloat(problem[3].innerHTML)*Math.pow(parseFloat(x), exp-3) + parseFloat(problem[4].innerHTML)*Math.pow(parseFloat(x), exp-4)+ parseFloat(problem[5].innerHTML)*Math.pow(parseFloat(x), exp-5)+ parseFloat(problem[6].innerHTML)*Math.pow(parseFloat(x), exp-6)+ parseFloat(problem[7].innerHTML)*Math.pow(parseFloat(x), exp-7)+ parseFloat(problem[8].innerHTML)*Math.pow(parseFloat(x), exp-8)+ parseFloat(problem[9].innerHTML)*Math.pow(parseFloat(x), exp-9)+ parseFloat(problem[10].innerHTML)*Math.pow(parseFloat(x), exp-10);
    }
    else if (x==""){
        document.getElementById('multifactoringcheckeranswer').innerHTML = '0';
    }
   

    else { return 
        alert ('Bad');
        false;}

      if (parseFloat(document.getElementById('multifactoringcheckeranswer').innerHTML)==parseFloat('0')){
            alert('That  is right! You can now use the Value of X in as one of the factors.');
        }
   if  (parseFloat(document.getElementById('multifactoringcheckeranswer').innerHTML)!=parseFloat('0')){
    alert('Its okay to get it wrong, you can always try again');
}

}

document.getElementById('divisiongamequotient').addEventListener('input', divisiongameguide(), false);

function quotientgame(){

var top = document.getElementsByClassName('divisiongame-top');
var side = document.getElementsByClassName('divisiongame-side');
var row1 = document.getElementsByClassName('divisiongame-row1');
var row2 = document.getElementsByClassName('divisiongame-row2');
var row3 = document.getElementsByClassName('divisiongame-row3');
var row4 = document.getElementsByClassName('divisiongame-row4');
var row5 = document.getElementsByClassName('divisiongame-row5');

var quotient = document.getElementsByClassName('divisiongame-quotient');
for (let i=0; i<quotient.length;i++){
    quotient[i].addEventListener('blur', function(){
        if( isMobile.any() ) {
            if (i==0 & parseFloat(quotient[0].innerHTML) == parseFloat(row1[0].innerHTML)){
                alert ('Good Job! Keep it up!! ;) :)');
                }
            else if (i==1 & parseFloat(quotient[1].innerHTML) == parseFloat(row2[0].innerHTML)+parseFloat(row1[1].innerHTML)){
                alert ('Good Job! Keep it up!! ;) :)');
                }
            else if (i==2 & parseFloat(quotient[2].innerHTML) == parseFloat(row2[0].innerHTML)+parseFloat(row1[1].innerHTML)){
                alert ('Good Job! Keep it up!! ;) :)');
                    }
            else if (i==3 & parseFloat(quotient[3].innerHTML) == parseFloat(row4[0].innerHTML)
            +parseFloat(row3[1].innerHTML)+parseFloat(row2[2].innerHTML)+parseFloat(row1[3].innerHTML)){
                alert ('Good Job! Keep it up!! ;) :)');
                        }
    
            else if (i==4 & parseFloat(quotient[4].innerHTML) == parseFloat(row5[0].innerHTML)
            +parseFloat(row4[1].innerHTML)+parseFloat(row3[2].innerHTML)+parseFloat(row2[3].innerHTML)+parseFloat(row1[4].innerHTML)){
                alert ('Good Job! Keep it up!! ;) :)');
            }
            else if (i==5 & parseFloat(quotient[5].innerHTML) ==  parseFloat(row5[1].innerHTML)
            +parseFloat(row4[2].innerHTML)+parseFloat(row3[3].innerHTML)+parseFloat(row2[4].innerHTML)){
                alert ('Good Job! Keep it up!! ;) :)');
        }
            else if (i==6 & parseFloat(quotient[6].innerHTML) ==  parseFloat(row5[2].innerHTML)
            +parseFloat(row4[3].innerHTML)+parseFloat(row3[4].innerHTML)){
                alert ('Good Job! Keep it up!! ;) :)');
        }
            else if (i==7 & parseFloat(quotient[7].innerHTML) ==  parseFloat(row5[3].innerHTML)
            +parseFloat(row4[4].innerHTML)){
                alert ('Good Job! Keep it up!! ;) :)');
        }
            else if (i==8 & parseFloat(quotient[8].innerHTML) ==  parseFloat(row5[4].innerHTML)){
                alert ('Good Job! Keep it up!! ;) :)');
        }
           
            else {
                alert ("Don't lose hope! Try Again! :) ;)");
                }
        }
else {
        if (i==0 & parseFloat(quotient[0].innerHTML) == parseFloat(row1[0].innerHTML)){
            document.getElementById('positivemessage').style.display ="block";
            }
        else if (i==1 & parseFloat(quotient[1].innerHTML) == parseFloat(row2[0].innerHTML)+parseFloat(row1[1].innerHTML)){
            document.getElementById('positivemessage').style.display ="block";
            }
        else if (i==2 & parseFloat(quotient[2].innerHTML) == parseFloat(row2[0].innerHTML)+parseFloat(row1[1].innerHTML)){
            document.getElementById('positivemessage').style.display ="block";
                }
        else if (i==3 & parseFloat(quotient[3].innerHTML) == parseFloat(row4[0].innerHTML)
        +parseFloat(row3[1].innerHTML)+parseFloat(row2[2].innerHTML)+parseFloat(row1[3].innerHTML)){
            document.getElementById('positivemessage').style.display ="block";
                    }

        else if (i==4 & parseFloat(quotient[4].innerHTML) == parseFloat(row5[0].innerHTML)
        +parseFloat(row4[1].innerHTML)+parseFloat(row3[2].innerHTML)+parseFloat(row2[3].innerHTML)+parseFloat(row1[4].innerHTML)){
            document.getElementById('positivemessage').style.display ="block";}
        else if (i==5 & parseFloat(quotient[5].innerHTML) ==  parseFloat(row5[1].innerHTML)
        +parseFloat(row4[2].innerHTML)+parseFloat(row3[3].innerHTML)+parseFloat(row2[4].innerHTML)){
        document.getElementById('positivemessage').style.display ="block";}
        else if (i==6 & parseFloat(quotient[6].innerHTML) ==  parseFloat(row5[2].innerHTML)
        +parseFloat(row4[3].innerHTML)+parseFloat(row3[4].innerHTML)){
        document.getElementById('positivemessage').style.display ="block";}
        else if (i==7 & parseFloat(quotient[7].innerHTML) ==  parseFloat(row5[3].innerHTML)
        +parseFloat(row4[4].innerHTML)){
        document.getElementById('positivemessage').style.display ="block";}
        else if (i==8 & parseFloat(quotient[8].innerHTML) ==  parseFloat(row5[4].innerHTML)){
        document.getElementById('positivemessage').style.display ="block";}
       
        else {
                document.getElementById('negativemessage').style.display ="block";
                
            }
            setTimeout(() => {
                document.getElementById('negativemessage').style.display = "none";
                document.getElementById('positivemessage').style.display = "none";}, 1500);
            }
    }, false);

}

}
document.getElementById("divisiongamequotient").addEventListener('input', quotientgame(), false);

//FACTORING GAME
function checkiffactors(){
    return false;
}
function multicheckiffactors(){
    var a = document.getElementById('multia').value;
    var b = document.getElementById('multib').value;
    var x = document.getElementById('multigametofindthefactor').value;
    var y = document.getElementById('multifactorpairsdetermined');
    factors ="";

    if( isMobile.any() ) {
        if (parseFloat(x)==parseFloat(a)*parseFloat(b)){
            alert ('Good Job! Keep it up!! ;) :)');
            factors+= a + ' & ' + b;
            y.innerHTML += '\r\n' +factors ;
        }
        else {
            alert ("Don't lose hope! Try Again! :) ;)");
        }
    }
    else {
    if (parseFloat(x)==parseFloat(a)*parseFloat(b)){
        document.getElementById('positivemessage').style.display ='block';
        factors+= a + ' & ' + b;
        y.innerHTML += '\r\n' +factors ;
    }
    else {
        document.getElementById('negativemessage').style.display ='block';
    }
    setTimeout(() => {
        document.getElementById('negativemessage').style.display = "none";
        document.getElementById('positivemessage').style.display = "none";}, 1500);
    }
}

function hidewelcometab(){
   
    document.getElementById('welcomeTab').style.display ='none';
    document.getElementById('teachingorlearningMode').style.display ='block';
    var eachCell = document.getElementsByTagName('td');
    for (let k=0; k<eachCell.length; k++){
//When Double Click is pressed
eachCell[k].addEventListener('dblclick', function(){
eachCell[k].innerHTML = "";
}, false);
//When Click is pressed
eachCell[k].addEventListener('click', function(){
eachCell[k].innerHTML = "";
}, false);
//When Up arrow  is pressed
 eachCell[k].addEventListener('keydown', function(e){
if (e.keyCode === 38){
e.preventDefault();
eachCell[k-6].focus();
if(parseFloat(eachCell[k-6].innerHTML)!=parseFloat('0')) {
eachCell[k-6].innerHTML =eachCell[k-6].innerHTML;
}
else {
eachCell[k-6].innerHTML ='';
}
}
}, false);
//When Left arrow  is pressed
 eachCell[k].addEventListener('keydown', function(e){
if (e.keyCode === 37){
e.preventDefault();
eachCell[k-1].focus();
if(parseFloat(eachCell[k-1].innerHTML)!=parseFloat('0')) {
eachCell[k-1].innerHTML =eachCell[k-1].innerHTML;
}
else {
eachCell[k-1].innerHTML ='';
}
}
}, false);
//When enter  is pressed
eachCell[k].addEventListener('keydown', function(e){
if (e.keyCode === 13){
e.preventDefault();
}
}, false);
//When Down arrow  is pressed
eachCell[k].addEventListener('keydown', function(e){
if (e.keyCode === 40){
e.preventDefault();
eachCell[k+6].focus();
if(parseFloat(eachCell[k+6].innerHTML)!=parseFloat('0')) {
eachCell[k+6].innerHTML =eachCell[k+6].innerHTML;
}
else {
eachCell[k+6].innerHTML ='';
}
}
}, false);
//When Right arrow  is pressed
eachCell[k].addEventListener('keydown', function(e){
if (e.keyCode === 39){
e.preventDefault();
eachCell[k+1].focus();
if(parseFloat(eachCell[k+1].innerHTML)!=parseFloat('0')) {
eachCell[k+1].innerHTML =eachCell[k+1].innerHTML;
}
else {
eachCell[k+1].innerHTML ='';
}
}
}, false);

eachCell[k].addEventListener('blur', function(){
            if (isNaN(parseInt(eachCell[k].innerHTML))){
                eachCell[k].innerHTML = "0";
            }
}, false); 

}
}



function hidemode(){
    document.getElementById('teachingorlearningMode').style.display ='none';
    document.getElementById('operationtab').style.display ='block';
    var eachCell = document.getElementsByTagName('td');
    for (let k=0; k<eachCell.length; k++){
//When Double Click is pressed
eachCell[k].addEventListener('dblclick', function(){
eachCell[k].innerHTML = "";
}, false);
//When Click is pressed
eachCell[k].addEventListener('click', function(){
eachCell[k].innerHTML = "";
}, false);
//When Up arrow  is pressed
 eachCell[k].addEventListener('keydown', function(e){
if (e.keyCode === 38){
e.preventDefault();
eachCell[k-6].focus();
if(parseFloat(eachCell[k-6].innerHTML)!=parseFloat('0')) {
eachCell[k-6].innerHTML =eachCell[k-6].innerHTML;
}
else {
eachCell[k-6].innerHTML ='';
}
}
}, false);
//When Left arrow  is pressed
 eachCell[k].addEventListener('keydown', function(e){
if (e.keyCode === 37){
e.preventDefault();
eachCell[k-1].focus();
if(parseFloat(eachCell[k-1].innerHTML)!=parseFloat('0')) {
eachCell[k-1].innerHTML =eachCell[k-1].innerHTML;
}
else {
eachCell[k-1].innerHTML ='';
}
}
}, false);
//When enter  is pressed
eachCell[k].addEventListener('keydown', function(e){
if (e.keyCode === 13){
e.preventDefault();
}
}, false);
//When Down arrow  is pressed
eachCell[k].addEventListener('keydown', function(e){
if (e.keyCode === 40){
e.preventDefault();
eachCell[k+6].focus();
if(parseFloat(eachCell[k+6].innerHTML)!=parseFloat('0')) {
eachCell[k+6].innerHTML =eachCell[k+6].innerHTML;
}
else {
eachCell[k+6].innerHTML ='';
}
}
}, false);
//When Right arrow  is pressed
eachCell[k].addEventListener('keydown', function(e){
if (e.keyCode === 39){
e.preventDefault();
eachCell[k+1].focus();
if(parseFloat(eachCell[k+1].innerHTML)!=parseFloat('0')) {
eachCell[k+1].innerHTML =eachCell[k+1].innerHTML;
}
else {
eachCell[k+1].innerHTML ='';
}
}
}, false);

eachCell[k].addEventListener('blur', function(){
            if (isNaN(parseInt(eachCell[k].innerHTML))){
                eachCell[k].innerHTML = "0";
            }
}, false); 

}

}
function hidelevel(){
    document.getElementById('leveltab').style.display ='none';
    document.getElementById('operationtab').style.display ='block';
    var eachCell = document.getElementsByTagName('td');
    for (let k=0; k<eachCell.length; k++){
//When Double Click is pressed
eachCell[k].addEventListener('dblclick', function(){
eachCell[k].innerHTML = "";
}, false);
//When Click is pressed
eachCell[k].addEventListener('click', function(){
eachCell[k].innerHTML = "";
}, false);
//When Up arrow  is pressed
 eachCell[k].addEventListener('keydown', function(e){
if (e.keyCode === 38){
e.preventDefault();
eachCell[k-6].focus();
if(parseFloat(eachCell[k-6].innerHTML)!=parseFloat('0')) {
eachCell[k-6].innerHTML =eachCell[k-6].innerHTML;
}
else {
eachCell[k-6].innerHTML ='';
}
}
}, false);
//When Left arrow  is pressed
 eachCell[k].addEventListener('keydown', function(e){
if (e.keyCode === 37){
e.preventDefault();
eachCell[k-1].focus();
if(parseFloat(eachCell[k-1].innerHTML)!=parseFloat('0')) {
eachCell[k-1].innerHTML =eachCell[k-1].innerHTML;
}
else {
eachCell[k-1].innerHTML ='';
}
}
}, false);
//When enter  is pressed
eachCell[k].addEventListener('keydown', function(e){
if (e.keyCode === 13){
e.preventDefault();
}
}, false);
//When Down arrow  is pressed
eachCell[k].addEventListener('keydown', function(e){
if (e.keyCode === 40){
e.preventDefault();
eachCell[k+6].focus();
if(parseFloat(eachCell[k+6].innerHTML)!=parseFloat('0')) {
eachCell[k+6].innerHTML =eachCell[k+6].innerHTML;
}
else {
eachCell[k+6].innerHTML ='';
}
}
}, false);
//When Right arrow  is pressed
eachCell[k].addEventListener('keydown', function(e){
if (e.keyCode === 39){
e.preventDefault();
eachCell[k+1].focus();
if(parseFloat(eachCell[k+1].innerHTML)!=parseFloat('0')) {
eachCell[k+1].innerHTML =eachCell[k+1].innerHTML;
}
else {
eachCell[k+1].innerHTML ='';
}
}
}, false);

eachCell[k].addEventListener('blur', function(){
            if (isNaN(parseInt(eachCell[k].innerHTML))){
                eachCell[k].innerHTML = "0";
            }
}, false); 

}

}

function hidelearningmode(){
    document.getElementById('teachingorlearningMode').style.display ='none';
    document.getElementById('leveltab').style.display ='block';
    var eachCell = document.getElementsByTagName('td');
    for (let k=0; k<eachCell.length; k++){
//When Double Click is pressed
eachCell[k].addEventListener('dblclick', function(){
eachCell[k].innerHTML = "";
}, false);
//When Click is pressed
eachCell[k].addEventListener('click', function(){
eachCell[k].innerHTML = "";
}, false);
//When Up arrow  is pressed
 eachCell[k].addEventListener('keydown', function(e){
if (e.keyCode === 38){
e.preventDefault();
eachCell[k-6].focus();
if(parseFloat(eachCell[k-6].innerHTML)!=parseFloat('0')) {
eachCell[k-6].innerHTML =eachCell[k-6].innerHTML;
}
else {
eachCell[k-6].innerHTML ='';
}
}
}, false);
//When Left arrow  is pressed
 eachCell[k].addEventListener('keydown', function(e){
if (e.keyCode === 37){
e.preventDefault();
eachCell[k-1].focus();
if(parseFloat(eachCell[k-1].innerHTML)!=parseFloat('0')) {
eachCell[k-1].innerHTML =eachCell[k-1].innerHTML;
}
else {
eachCell[k-1].innerHTML ='';
}
}
}, false);
//When enter  is pressed
eachCell[k].addEventListener('keydown', function(e){
if (e.keyCode === 13){
e.preventDefault();
}
}, false);
//When Down arrow  is pressed
eachCell[k].addEventListener('keydown', function(e){
if (e.keyCode === 40){
e.preventDefault();
eachCell[k+6].focus();
if(parseFloat(eachCell[k+6].innerHTML)!=parseFloat('0')) {
eachCell[k+6].innerHTML =eachCell[k+6].innerHTML;
}
else {
eachCell[k+6].innerHTML ='';
}
}
}, false);
//When Right arrow  is pressed
eachCell[k].addEventListener('keydown', function(e){
if (e.keyCode === 39){
e.preventDefault();
eachCell[k+1].focus();
if(parseFloat(eachCell[k+1].innerHTML)!=parseFloat('0')) {
eachCell[k+1].innerHTML =eachCell[k+1].innerHTML;
}
else {
eachCell[k+1].innerHTML ='';
}
}
}, false);

eachCell[k].addEventListener('blur', function(){
            if (isNaN(parseInt(eachCell[k].innerHTML))){
                eachCell[k].innerHTML = "0";
            }
}, false); 

}

}
function hideadditionoperationandchoosemode(){
   document.getElementById('operationtab').style.display ='none';
   if (document.getElementById('learningmode').checked & document.getElementById('beginnerlevel').checked){
    document.getElementById('additiontab').style.display ='block';
    document.getElementById('additionshowanswer').style.display ='none';
 
    
   }
   else if (document.getElementById('learningmode').checked & document.getElementById('intermediatelevel').checked)
   {
    document.getElementById('additionintermediatetab').style.display ='block';
    document.getElementById('additionintermediateshowanswer').style.display ='block';
    additionfunction();

   }
   else if(document.getElementById('learningmode').checked & document.getElementById('advancelevel').checked)
   {
    document.getElementById('additionadvancetab').style.display ='block';
    document.getElementById('additionadvanceanswer').style.display ='none';


   }
   else if (document.getElementById('teachingmode').checked){
    document.getElementById('additiongametab').style.display ='block';

   }
   else {return false}
}
function hidesubtractionoperationandchoosemode(){
    document.getElementById('operationtab').style.display ='none';
    if (document.getElementById('learningmode').checked & document.getElementById('beginnerlevel').checked){
        document.getElementById('subtractiontab').style.display ='block';
        document.getElementById('exponenttab').style.display ='none';
       }
       else     if (document.getElementById('learningmode').checked & document.getElementById('intermediatelevel').checked){
        document.getElementById('subtractionintermediatetab').style.display ='block';
       }
       else     if (document.getElementById('learningmode').checked & document.getElementById('advancelevel').checked){
        document.getElementById('subtractionadvancetab').style.display ='block';
       }
       else if (document.getElementById('teachingmode').checked){
        document.getElementById('subtractiongametab').style.display ='block';
       }
       else {return false}
}

function hidemultiplicationoperationandchoosemode(){
    document.getElementById('operationtab').style.display ='none';
    if (document.getElementById('learningmode').checked & document.getElementById('beginnerlevel').checked){
        document.getElementById('multiplicationtab').style.display ='block';
        document.getElementById('instructionformultiplication').style.display ='block';
        document.getElementById('exponenttab').style.display ='none';
        document.getElementById('labelofmultiply').innerHTML ='MULTIPLICATION OF POLYNOMIALS';
document.getElementById('labeloflearningmodemultiplicationbeginner').innerHTML ='MULTIPLICATION||STUDENT MODE||BEGINNER LEVEL';
       }
       else if (document.getElementById('learningmode').checked & document.getElementById('intermediatelevel').checked){

       document.getElementById('multiplicationgametab').style.display ='block';
document.getElementById('mulanddiv').innerHTML ='MULTIPLICATION||STUDENT MODE||SELF-LEARNING';
document.getElementById('multifactorpairsgametab').style.display ='none';
document.getElementById('multititle').innerHTML ='MULTIPLICATION OF POLYNOMIALS';
document.getElementById('multidivisiongameinstruction').style.display ='none';
document.getElementById('multiplicationgameproductdivisor').style.display ='none';
 
       
        

       }
       else if (document.getElementById('learningmode').checked & document.getElementById('advancelevel').checked)
       {
        document.getElementById('multiplicationadvancetab').style.display ='block';
        document.getElementById('multiplicationadvanceinstructions').style.display ='block';
        document.getElementById('instructionformultiplicationadvance').style.display ='block';
        document.getElementById('labelofmultiplyadvance').innerHTML ='MULTIPLICATION OF POLYNOMIALS';
document.getElementById('labeloflearningmodemultiplicationadvance').innerHTML ='MULTIPLICATION||STUDENT MODE||ADVANCE LEVEL';
           
       }
    else if (document.getElementById('teachingmode').checked){
        document.getElementById('multiplicationgametab').style.display ='block';
document.getElementById('mulanddiv').innerHTML ='MULTIPLICATION||TEACHING MODE';
document.getElementById('multifactorpairsgametab').style.display ='none';
document.getElementById('multititle').innerHTML ='MULTIPLICATION OF POLYNOMIALS';
document.getElementById('multidivisiongameinstruction').style.display ='none';
document.getElementById('multiplicationgameproductdivisor').style.display ='none';
document.getElementById('instructionformultiplicationgame').style.display ='block';

       }
       else {return false}
}
function hidedivisionoperationandchoosemode(){
    document.getElementById('operationtab').style.display ='none';
    if (document.getElementById('learningmode').checked & document.getElementById('beginnerlevel').checked){
        document.getElementById('multiplicationtab').style.display ='block';
        document.getElementById('factorslistfinder').style.display ='block';
        document.getElementById('instructionfordivision').style.display ='block';
        document.getElementById('problemandguide').style.display ='block';
     
     
        document.getElementById('forfact').style.display ='block';

        document.getElementById('exponenttab').style.display ='none';
        document.getElementById('labelofmultiply').innerHTML ='DIVISION OF POLYNOMIALS';
        document.getElementById('labeloflearningmodemultiplicationbeginner').innerHTML ='DIVISION||STUDENT MODE||BEGINNER LEVEL';
       }
       else if (document.getElementById('learningmode').checked & document.getElementById('intermediatelevel').checked){
                document.getElementById('multiplicationgametab').style.display ='block';
document.getElementById('mulanddiv').innerHTML ='DIVISION||TEACHING MODE';
document.getElementById('multifactorpairsgametab').style.display ='block';
document.getElementById('multititle').innerHTML ='DIVISION OF POLYNOMIALS';
document.getElementById('multidivisiongameinstruction').style.display ='block';
document.getElementById('multiplicationgameproductdivisor').style.display ='block';

       }

       else if (document.getElementById('learningmode').checked & document.getElementById('advancelevel').checked){
        {
            document.getElementById('multiplicationadvancetab').style.display ='block';
            document.getElementById('factorsadvancelistfinder').style.display ='block';
            document.getElementById('instructionfordivisionadvance').style.display ='block';
            document.getElementById('problemadvanceandguideadvance').style.display ='block';
           
           
            document.getElementById('forfactadvance').style.display ='block';
         
            document.getElementById('exponenttabadvance').style.display ='none';
            document.getElementById('labelofmultiplyadvance').innerHTML ='DIVISION OF POLYNOMIALS';
            document.getElementById('labeloflearningmodemultiplicationadvance').innerHTML ='DIVISION||STUDENT MODE||ADVANCE LEVEL';
           }

       }
      
       else if (document.getElementById('teachingmode').checked){
        document.getElementById('multiplicationgametab').style.display ='block';
document.getElementById('mulanddiv').innerHTML ='DIVISION||TEACHING MODE';
document.getElementById('multifactorpairsgametab').style.display ='block';
document.getElementById('multititle').innerHTML ='DIVISION OF POLYNOMIALS';
document.getElementById('multidivisiongameinstruction').style.display ='block';
document.getElementById('multiplicationgameproductdivisor').style.display ='block';
document.getElementById('instructionformultiplicationgame').style.display ='none';
       }

       else {return false}
}

function hidefactoringoperationandchoosemode(){
    document.getElementById('operationtab').style.display ='none';
    if (document.getElementById('learningmode').checked & document.getElementById('beginnerlevel').checked){
        document.getElementById('multiplicationtab').style.display ='block';
        document.getElementById('instructionforfactoring').style.display ='block';
        document.getElementById('forfact').style.display ='block';
        document.getElementById('problemandguide').style.display ='block';
        document.getElementById('factorslistfinder').style.display ='block';
        document.getElementById('exponenttab').style.display ='block';
      
      
        document.getElementById('labelofmultiply').innerHTML ='FACTORING POLYNOMIALS';
        document.getElementById('labeloflearningmodemultiplicationbeginner').innerHTML ='FACTORING||STUDENT MODE||BEGINNER LEVEL';
       }
       else if (document.getElementById('learningmode').checked & document.getElementById('intermediatelevel').checked){
          document.getElementById('multiplicationgametab').style.display ='block';
document.getElementById('mulanddiv').innerHTML ='FACTORING||STUDENT MODE||SELF-LEARNING';
document.getElementById('multifactorpairsgametab').style.display ='block';
document.getElementById('multifactoringtab').style.display ='block';
document.getElementById('multititle').innerHTML ='FACTORING POLYNOMIALS';
document.getElementById('multifactoringgameinstruction').style.display ='block';
document.getElementById('multiplicationgameproductdivisor').style.display ='block';
       
       }
       else if (document.getElementById('learningmode').checked & document.getElementById('advancelevel').checked){
        document.getElementById('multiplicationadvancetab').style.display ='block';
        document.getElementById('instructionforfactoringadvance').style.display ='block';
        document.getElementById('forfactadvance').style.display ='block';
        document.getElementById('problemadvanceandguideadvance').style.display ='block';
        document.getElementById('factorsadvancelistfinder').style.display ='block';
        document.getElementById('exponenttabadvance').style.display ='block';

        document.getElementById('labelofmultiplyadvance').innerHTML ='FACTORING POLYNOMIALS';
        document.getElementById('labeloflearningmodemultiplicationadvance').innerHTML ='FACTORING||STUDENT MODE||ADVANCE LEVEL';
       }


       else if (document.getElementById('teachingmode').checked){
   document.getElementById('multiplicationgametab').style.display ='block';
document.getElementById('mulanddiv').innerHTML ='FACTORING||TEACHING MODE';
document.getElementById('multifactorpairsgametab').style.display ='block';
document.getElementById('multifactoringtab').style.display ='block';
document.getElementById('multititle').innerHTML ='FACTORING POLYNOMIALS';
document.getElementById('multifactoringgameinstruction').style.display ='block';
document.getElementById('multiplicationgameproductdivisor').style.display ='block';
document.getElementById('instructionformultiplicationgame').style.display ='none';

       }
       else {

        return false}
}

function home(){
    var x = document.getElementsByClassName('tohide');
    for (let i=0; i<x.length; i++){
        x[i].style.display ='none';
    }
    x[0].style.display ='block';
}
function mode(){
    var x = document.getElementsByClassName('tohide');
    for (let i=0; i<x.length; i++){
        x[i].style.display ='none';
    }
    x[1].style.display ='block';
}
function operation(){
    var x = document.getElementsByClassName('tohide');
    for (let i=0; i<x.length; i++){
        x[i].style.display ='none';
    }
 if (document.getElementById('teachingmode').checked == false & document.getElementById('learningmode').checked == false){
        alert('Please Click What mode you want first.');
        x[1].style.display ='block';
    }
    else
    {
           x[3].style.display ='block';
    }


}
function levelof(){
    var x = document.getElementsByClassName('tohide');
    for (let i=0; i<x.length; i++){
        x[i].style.display ='none';
    }
    if (document.getElementById('teachingmode').checked || document.getElementById('learningmode').checked == false){
        alert('This is for STUDENT MODE, select STUDENT MODE First.');
        x[1].style.display ='block';
    }
    else if(document.getElementById('learningmode').checked){
        x[2].style.display ='block';
    }
    else
    {
        x[2].style.display ='block';
    }
    
}
