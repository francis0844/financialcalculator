<?php
/*
this file makes a top menu bar in wp dashboard
*/

// Hook the 'admin_menu' action hook, run the function named 'mfp_Add_My_Admin_Link()'
add_action( 'admin_menu', 'mfp_Add_My_Admin_Link' );

//this function will add top menu link in wp dashboard
function mfp_Add_My_Admin_Link(){
    add_menu_page(
        'My first plugin page',
        'Francis Plugins',
        'manage_options',
        'francisplugin/includes/fp-first-acp-page.php'
    );
}

//my main function
add_shortcode('francis-plugin', 'mainCode');

function mainCode(){
    ?>
    <head>
        <style>
        <?php include 'style.css'; ?>
        </style>
    </head>

    <div class="bodycon">
        <div class="cars" id="cars">
            <div class="column car1" id="car1">
                <div class="imgcon">
                    <img src="https://localhost/tshirtcompany/wp-content/uploads/2021/09/car1.jpg">
                </div>
                <h3>2013 Nexus Sedan</h3>
            </div>
            <div class="column car2" id="car2">
                <div class="imgcon">
                    <img src="https://localhost/tshirtcompany/wp-content/uploads/2021/09/car2.jpg">
                </div>
                <h3>2017 Monarch Sedan</h3>
            </div>
            <div class="column car3" id="car3">
                <div class="imgcon">
                    <img src="https://localhost/tshirtcompany/wp-content/uploads/2021/09/car3.jpg">
                </div>
                <h3>2016 Divi Lead SUV</h3>
            </div>
        </div>
        <br>
        <div class="type" id="f1">
            <div class="column1" id="type1">
                <p>1.5 S MT<br>$48,000</p>
            </div>
            <div class="column1" id="type2">
                <p>1.5 S CVT<br>$88,000</p>
            </div>
            <div class="column1" id="type3">
                <p>1.5 S V CVT<br>$78,000</p>
            </div>
        </div>
        <div class="type" id="f2">
            <div class="column1" id="type11">
                <p>1.5 S MT<br>$57,000</p>
            </div>
        </div>
        <div class="type" id="f3">
            <div class="column1" id="type111">
                <p>1.5 S MT<br>$65,000</p>
            </div>
            <div class="column1" id="type222">
                <p>1.5 S CVT<br>$90,000</p>
            </div>
        </div>
        <br>
        <div class="drop" id="drop">
            <div class="column2">
                <h3>Choose Downpayment (%)</h3>
                <select id="percent">
                    <option value="1">15</option>
                    <option value="2">20</option>
                    <option value="3">30</option>
                    <option value="4">40</option>
                    <option value="5">50</option>
                </select>
            </div>
            <div class="column2">
                <h3>Choose Payment Term (Months)</h3>
                <select id="term">
                    <option value="1">36</option>
                    <option value="2">48</option>
                    <option value="3">60</option>
                </select>
            </div>
        </div>
        <br>
        <br>
        <div class="butcon" id="butcon">
            <button id="cal">Calculate</button>
        </div>
        <br>
        <div class="resultcon" id="result">
            <div class="finalresult">
                <div class="column3 col1">
                    <img src="https://localhost/tshirtcompany/wp-content/uploads/2021/09/car3.jpg" id="carimage">
                    <button>View Details</button>
                </div>
                <div class="column3 col2">
                    <h3 id="carname">Test</h3>
                    <p>Variant</p>
                    <p class="text" id="variant">test</p>
                    <p>Downpayment %</p>
                    <p class="text" id="dp">test</p>
                    <p>Payment Terms</p>
                    <p class="text" id="payterm">test</p>
                </div>
                <div class="column3 col3">
                    <p>Unit Price (SRP)</p>
                    <p class="text" id="price">test</p>
                    <p>Downpayment Amount</p>
                    <p class="text" id="dpamount">test</p>
                    <p>Amount Financed</p>
                    <p class="text" id="amountfinanced">test</p>
                </div>
            </div>
            <div class="resultmonthly">
                <div class="column4">
                    <p>* The Financing Terms are just ESTIMATED COMPUTATIONS and for INFORMATION PURPOSES ONLY..</p>
                </div>
                <div class="column4">
                    <p>Monthly Amortization</p>
                    <h2 id="monthly">123,456 PHP</h2>
                </div>
                <div class="column4">
                </div>
            </div>
        </div>
        <br>
        <div class="refreshcon" id="refresh">
            <button id="refresh">Re-calculate</button>
        </div>
    </div>
    <script>
        <?php include 'function.js'; ?>
    </script>
    <?php
}