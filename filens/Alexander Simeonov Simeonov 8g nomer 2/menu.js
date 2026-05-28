let x_1=30, y_1=32, x_2=27, y_2=43, x_3=35, y_3=47, x_4=27, y_4=28, sum=0;
let count_1=0, count_2=0, count_3=0, count_4=0, count_5=0, count_6=0, count_7=0, count_8=0;
        function add_1() {
            count_1++;
            document.getElementById('out_1').textContent = count_1;
            check();
        }
        function sub_1() {
            count_1--;
            document.getElementById('out_1').textContent = count_1;
            check();
        }

        function add_2() {
            count_2++;
            document.getElementById('out_2').textContent = count_2;
            check();
        }
        function sub_2() {
            count_2--;
            document.getElementById('out_2').textContent = count_2;
            check();
        }

        function add_3() {
            count_3++;
            document.getElementById('out_3').textContent = count_3;
            check();
        }
        function sub_3() {
            count_3--;
            document.getElementById('out_3').textContent = count_3;
            check();
        }

        function add_4() {
            count_4++;
            document.getElementById('out_4').textContent = count_4;
            check();
        }
        function sub_4() {
            count_4--;
            document.getElementById('out_4').textContent = count_4;
            check();
        }

         function add_5() {
            count_5++;
            document.getElementById('out_5').textContent = count_5;
            check();
        }
        function sub_5() {
            count_5--;
            document.getElementById('out_5').textContent = count_5;
            check();
        }

        function add_6() {
            count_6++;
            document.getElementById('out_6').textContent = count_6;
            check();

        }
        function sub_6() {
            count_6--;
            document.getElementById('out_6').textContent = count_6;
            check();

        }

        function add_7() {
            count_7++;
            document.getElementById('out_7').textContent = count_7;
            check();
        }
        function sub_7() {
            count_7--;
            document.getElementById('out_7').textContent = count_7;
            check();
        }

        function add_8() {
            count_8++;
            document.getElementById('out_8').textContent = count_8;
            check();
        }
        function sub_8() {
            count_8--;
            document.getElementById('out_8').textContent = count_8;
            check();
        }

        function check() {
            sum=count_1*x_1+count_2*y_1+count_3*x_2+count_4*y_2+count_5*x_3+count_6*y_3+count_7*x_4+count_8*y_4;
            document.getElementById('bill').textContent = sum;
        }

       

        
        