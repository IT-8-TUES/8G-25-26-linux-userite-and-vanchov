function go(){
        window.location.href = 'lock_form.html';
    }

function rand() {
    return Math.floor(Math.random() * 100) + 1;
}

function start(){

const rad_p = document.querySelectorAll('input[name="peple"]');

let a_1=5,a_2=15,a_3=25,a_4=35,b_1=40,b_2=20,b_3=15,b_4=10,c_1=0,c_2=13,c_3=18,c_4=25;
let x_1=0,x_2=0,x_3=0,x_4=0,y_1=0,y_2=0,y_3=0,y_4=0,z_1=0,z_2=0,z_3=0,z_4=0;


rad_p.forEach(radio => {
    if (radio.checked) {
        if(radio.value === 'op_1'){
            x_1=1;
        } 
        else if(radio.value === 'op_2'){
            x_2=1;
        }
         else if(radio.value === 'op_3'){
            x_3=1;
        }
        else if(radio.value === 'op_4'){
            x_4=1;
        }
    }});

    const rad_t = document.querySelectorAll('input[name="tim"]');

    rad_t.forEach(radio => {
    if (radio.checked) {
        if(radio.value === 'op_1'){
            y_1=1;
        } 
        else if(radio.value === 'op_2'){
            y_2=1;
        }
         else if(radio.value === 'op_3'){
            y_3=1;
        }
        else if(radio.value === 'op_4'){
            y_4=1;
        }
    }});

    const rad_n = document.querySelectorAll('input[name="plac"]');

    rad_n.forEach(radio => {
    if (radio.checked) {
        if(radio.value === 'op_1'){
            z_1=1;
        } 
        else if(radio.value === 'op_2'){
            z_2=1;
        }
         else if(radio.value === 'op_3'){
            z_3=1;
        }
        else if(radio.value === 'op_4'){
            z_4=1;
        }
    }});

    
let q=rand()

let sum=a_1*x_1+a_2*x_2+a_3*x_3+a_4*x_4+b_1*y_1+b_2*y_2+b_3*y_3+b_4*y_4+c_1*z_1+c_2*z_2+c_3*z_3+c_4*z_4;


if(q > sum){
    alert("your reservation was sucsefull");
}
else{
    alert("your reservation was declind");
}

window.location.href = 'locations.html';

};