import {
  IonContent,
  IonPage,
  IonButton,
  IonInput,
  IonLabel,
  IonSelect,
  IonSelectOption,
} from "@ionic/react";

import { Header } from "../components/Basic";

const ScholarshipCalculator = () => {
  const currencyOptions = {
    '3527':'AMD',
'2821':'ARS',
'2782':'AUD',
'3528':'AZN',
'3529':'BAM',
'3530':'BDT',
'2814':'BGN',
'3531':'BHD',
'3532':'BMD',
'2832':'BOB',
'2783':'BRL',
'3533':'BYN',
'2784':'CAD',
'2785':'CHF',
'2786':'CLP',
'2787':'CNY',
'2820':'COP',
'3534':'CRC',
'3535':'CUP',
'2788':'CZK',
'2789':'DKK',
'3536':'DOP',
'3537':'DZD',
'3538':'EGP',
'2790':'EUR',
'2791':'GBP',
'3539':'GEL',
'3540':'GHS',
'3541':'GTQ',
'2792':'HKD',
'3542':'HNL',
'2815':'HRK',
'2793':'HUF',
'2794':'IDR',
'2795':'ILS',
'2796':'INR',
'3543':'IQD',
'3544':'IRR',
'2818':'ISK',
'3545':'JMD',
'3546':'JOD',
'2797':'JPY',
'3547':'KES',
'3548':'KGS',
'3549':'KHR',
'2798':'KRW',
'3550':'KWD',
'3551':'KZT',
'3552':'LBP',
'3553':'LKR',
'3554':'MAD',
'3555':'MDL',
'3556':'MKD',
'3557':'MMK',
'3558':'MNT',
'2816':'MUR',
'2799':'MXN',
'2800':'MYR',
'3559':'NAD',
'2819':'NGN',
'3560':'NIO',
'2801':'NOK',
'3561':'NPR',
'2802':'NZD',
'3562':'OMR',
'3563':'PAB',
'2822':'PEN',
'2803':'PHP',
'2804':'PKR',
'2805':'PLN',
'3564':'QAR',
'2817':'RON',
'3565':'RSD',
'2806':'RUB',
'3566':'SAR',
'2807':'SEK',
'2808':'SGD',
'3567':'SSP',
'2809':'THB',
'3568':'TND',
'2810':'TRY',
'3569':'TTD',
'2811':'TWD',
'2824':'UAH',
'3570':'UGX',
'2781':'USD',
'3571':'UYU',
'3572':'UZS',
'3573':'VES',
'2823':'VND',
'2812':'ZAR'
  };
  const keys = Object.keys(currencyOptions).sort();
  var SLPprice;
  var currency = "2781";
  const axios = require("axios");
  var axiosResponse = axios({
    method: "get",
    url: "https://pro-api.coinmarketcap.com/v1/tools/price-conversion",
    headers: {
      "X-CMC_PRO_API_KEY": "6c8e27e7-03c1-4e29-8cfe-9f5791a21aaa",
      "access-control-allow-origin": "*",
    },
    params: {
      amount: 1,
      symbol: "SLP",
      convert_id: currency,
    },
  }).then(function (response) {
    return response.data.data;
  });

  axiosResponse.then(function (data) {
    //console.log(data.quote);
    var price = document.getElementById("SLP_Price") as HTMLInputElement;
    price.value = parseFloat(data.quote[currency].price).toFixed(8);

    var currency_id = document.getElementById("currency") as HTMLInputElement;
    currency_id.value = currency;

    var periodV = document.getElementById("period") as HTMLInputElement;
    periodV.value = '1';
    var estimatedV = document.getElementById("estimated") as HTMLInputElement;
    estimatedV.value = '100';
    var percentageV = document.getElementById("percentageScholar") as HTMLInputElement;
    percentageV.value = '60';
    var numberV = document.getElementById("number_scholars") as HTMLInputElement;
    numberV.value ='1';
  });

  function calcValues() {
    var totalSLP_daily = 0;
    var currenV = document.getElementById("currency") as HTMLInputElement;
    var currenName = currencyOptions[currenV.value];
    var periodV = document.getElementById("period") as HTMLInputElement;
    var estimatedV = document.getElementById("estimated") as HTMLInputElement;
    var percentageV = document.getElementById("percentageScholar") as HTMLInputElement;
    var priceV = document.getElementById("SLP_Price") as HTMLInputElement;
    var numberV = document.getElementById("number_scholars") as HTMLInputElement;
    
    // Valores diarios
    totalSLP_daily = (parseInt(numberV.value) * parseInt(estimatedV.value))/parseInt(periodV.value);

    var slpScholar_daily = (parseFloat(percentageV.value) * totalSLP_daily) / 100;
    var slpManager_daily = totalSLP_daily - slpScholar_daily;

    var slpScholarCurrency_daily = parseFloat((slpScholar_daily * parseFloat(priceV.value)).toFixed(2));
    var slpManagerCurrency_daily = parseFloat((slpManager_daily * parseFloat(priceV.value)).toFixed(2));
    var totalCurrency_daily = parseFloat((totalSLP_daily * parseFloat(priceV.value)).toFixed(2));

    // Valores semanales
    var totalSLP_weekly = totalSLP_daily * 7;

    var slpScholar_weekly = slpScholar_daily * 7;
    var slpManager_weekly = slpManager_daily * 7;

    var slpScholarCurrency_weekly = (slpScholarCurrency_daily * 7).toFixed(2);
    var slpManagerCurrency_weekly = (slpManagerCurrency_daily * 7).toFixed(2);
    var totalCurrency_weekly = (totalCurrency_daily * 7).toFixed(2);

    // Valores mensuales
    var totalSLP_monthly = totalSLP_daily * 30;

    var slpScholar_monthly = slpScholar_daily * 30;
    var slpManager_monthly = slpManager_daily * 30;

    var slpScholarCurrency_monthly = (slpScholarCurrency_daily * 30).toFixed(2);
    var slpManagerCurrency_monthly = (slpManagerCurrency_daily * 30).toFixed(2);
    var totalCurrency_monthly = (totalCurrency_daily * 30).toFixed(2);


    // Asignacion de valores
    var scholars = document.getElementById("scholars") as HTMLInputElement;
    scholars.textContent = parseInt(numberV.value) + ' scholars'

    var daily_scholar = document.getElementById("daily_scholar") as HTMLInputElement;
    daily_scholar.textContent = 'Daily: ' + slpScholar_daily + ' SLP ( '+ slpScholarCurrency_daily +' '+ currenName +' )';
    var week_scholar = document.getElementById("week_scholar") as HTMLInputElement;
    week_scholar.textContent = 'Weekly: ' + slpScholar_weekly + ' SLP ( '+ slpScholarCurrency_weekly+' '+ currenName +' )';
    var month_scholar = document.getElementById("month_scholar") as HTMLInputElement;
    month_scholar.textContent = 'Monthly: ' + slpScholar_monthly + ' SLP ( '+ slpScholarCurrency_monthly +' '+ currenName +' )';

    var manager = document.getElementById("manager") as HTMLInputElement;
    manager.textContent = 'Manager'

    var daily_manager = document.getElementById("daily_manager") as HTMLInputElement;
    daily_manager.textContent = 'Daily: ' + slpManager_daily + ' SLP ( '+ slpManagerCurrency_daily +' '+ currenName +' )';
    var week_manager = document.getElementById("week_manager") as HTMLInputElement;
    week_manager.textContent = 'Weekly: ' + slpManager_weekly + ' SLP ( '+ slpManagerCurrency_weekly+' '+ currenName +' )';
    var month_manager = document.getElementById("month_manager") as HTMLInputElement;
    month_manager.textContent = 'Monthly: ' + slpManager_monthly + ' SLP ( '+ slpManagerCurrency_monthly +' '+ currenName +' )';


    var total = document.getElementById("total") as HTMLInputElement;
    total.textContent = 'Total'

    var daily_total = document.getElementById("daily_total") as HTMLInputElement;
    daily_total.textContent = 'Daily: ' + totalSLP_daily + ' SLP ( '+ totalCurrency_daily +' '+ currenName +' )';
    var week_total = document.getElementById("week_total") as HTMLInputElement;
    week_total.textContent = 'Weekly: ' + totalSLP_weekly + ' SLP ( '+ totalCurrency_weekly+' '+ currenName +' )';
    var month_total = document.getElementById("month_total") as HTMLInputElement;
    month_total.textContent = 'Monthly: ' + totalSLP_monthly + ' SLP ( '+ totalCurrency_monthly +' '+ currenName +' )';

    // Asignacion recompensas
    var daily_mission = parseFloat((parseFloat(priceV.value) * 25).toFixed(2));
    var daily_scholar_mission = parseFloat(((parseFloat(percentageV.value) * daily_mission)/100).toFixed(2));
    var daily_manager_mission = (daily_mission - daily_scholar_mission).toFixed(2);

    var mission_daily = document.getElementById("mission_daily") as HTMLInputElement;
    mission_daily.textContent = daily_mission + ' ' + currenName;
    var distribution_mission_daily = document.getElementById("distribution_mission_daily") as HTMLInputElement;
    distribution_mission_daily.textContent = 'Scholar: ' + daily_scholar_mission + ' ' + currenName + '. Manager: ' + daily_manager_mission + ' ' + currenName + '.';

    var daily_adventure = parseFloat((parseFloat(priceV.value) * 50).toFixed(2));
    var daily_scholar_adventure = parseFloat(((parseFloat(percentageV.value) * daily_adventure)/100).toFixed(2));
    var daily_manager_adventure = (daily_adventure - daily_scholar_adventure).toFixed(2);

    var adventure_daily = document.getElementById("adventure_daily") as HTMLInputElement;
    adventure_daily.textContent = daily_adventure + ' ' + currenName;
    var distribution_adventure_daily = document.getElementById("distribution_adventure_daily") as HTMLInputElement;
    distribution_adventure_daily.textContent = 'Scholar: ' + daily_scholar_adventure + ' ' + currenName + '. Manager: ' + daily_manager_adventure + ' ' + currenName + '.';

    // Asignacion recompensas
    var curren6 = (parseFloat(priceV.value) * 6).toFixed(2);
    var curren9 = (parseFloat(priceV.value) * 9).toFixed(2);
    var curren12 = (parseFloat(priceV.value) * 12).toFixed(2);
    var curren15 = (parseFloat(priceV.value) * 15).toFixed(2);

    var arena_6 = document.getElementById("arena_6") as HTMLInputElement;
    arena_6.textContent = curren6 + ' ' + currenName;
    var arena_9 = document.getElementById("arena_9") as HTMLInputElement;
    arena_9.textContent = curren9 + ' ' + currenName;
    var arena_12 = document.getElementById("arena_12") as HTMLInputElement;
    arena_12.textContent = curren12 + ' ' + currenName;
    var arena_15 = document.getElementById("arena_15") as HTMLInputElement;
    arena_15.textContent = curren15 + ' ' + currenName;
}

function getCurrency(){
  var currenV = document.getElementById("currency") as HTMLInputElement;
  var currV = currenV.value;

  var axiosResponse = axios({
    method: "get",
    url: "https://pro-api.coinmarketcap.com/v1/tools/price-conversion",
    headers: {
      "X-CMC_PRO_API_KEY": "6c8e27e7-03c1-4e29-8cfe-9f5791a21aaa",
      "access-control-allow-origin": "*",
    },
    params: {
      amount: 1,
      symbol: "SLP",
      convert_id: currV,
    },
  }).then(function (response) {
    return response.data.data;
  });

  axiosResponse.then(function (data) {
    //console.log(data.quote);
    var price = document.getElementById("SLP_Price") as HTMLInputElement;
    price.value = parseFloat(data.quote[currV].price).toFixed(8);

    var currency_id = document.getElementById("currency") as HTMLInputElement;
    currency_id.value = currV;
  });

  calcValues();
}
  return (
    <IonPage>
      <Header menu="menu" title="Scholarship calculator" />
      <IonContent fullscreen color="primary">
        <div className="w-75">
          <div className="bg-white rounded-md">
            <IonInput
              type="number"
              name="number_scholars"
              id="number_scholars"
              placeholder="# of scholars"
              className="text-black text-center w-25"
              onIonChange={() => calcValues()}
            ></IonInput>
          </div>

          <div className="bg-white rounded-md">
            <IonInput
              type="text"
              id="SLP_Price"
              name="SLP_Price"
              placeholder="SLP Price"
              className="text-black text-center w-25"
              onIonChange={() => calcValues()}
            ></IonInput>
          </div>
          <div className="bg-white rounded-md">
            <IonInput
              type="text"
              id="percentageScholar"
              name="percentageScholar"
              placeholder="% per Scholar"
              className="text-black text-center w-25"
              onIonChange={() => calcValues()}
            ></IonInput>
          </div>
          <div className="bg-white rounded-md">
            <IonInput
              type="text"
              id="estimated"
              name="estimated"
              placeholder="Estimated Scholar SLP"
              className="text-black text-center w-25"
              onIonChange={() => calcValues()}
            ></IonInput>
          </div>
          
          <div className="bg-white rounded-md">
            <IonSelect
              id="period"
              name="period"
              placeholder="Period"
              className="text-black text-center w-25"
              onIonChange={() => calcValues()}
            >
              <IonSelectOption value={"1"}>Day</IonSelectOption>
              <IonSelectOption value={"7"}>Week</IonSelectOption>
              <IonSelectOption value={"30"}>Month</IonSelectOption>
            </IonSelect>
          </div>
          
          <div className="bg-white rounded-md">
            <IonSelect
              id="currency"
              name="currency"
              placeholder="Currency"
              className="text-black text-center w-25"
              onIonChange={() => getCurrency()}
            >
              {keys.map((key) => {
                return (
                <IonSelectOption value={key}>{currencyOptions[key]}</IonSelectOption>
                );
              })}
            </IonSelect>
          </div>

          <h2 id="estimated_earnings" className="text-pink text-center">Estimated earnings</h2>
          <div id="scholars" className="text-white text-center"></div>
          <p id="daily_scholar" className="text-white text-center"></p>
          <p id="week_scholar" className="text-white text-center"></p>
          <p id="month_scholar" className="text-white text-center"></p>
          
          <div id="manager" className="text-white text-center"></div>
          <p id="daily_manager" className="text-white text-center"></p>
          <p id="week_manager" className="text-white text-center"></p>
          <p id="month_manager" className="text-white text-center"></p>

          
          <div id="total" className="text-white text-center"></div>
          <p id="daily_total" className="text-white text-center"></p>
          <p id="week_total" className="text-white text-center"></p>
          <p id="month_total" className="text-white text-center"></p>

          <br/>
          <br/>
          <h2 id="daily_rewards" className="text-red text-center">Daily quest rewards</h2>
          <div className="text-white text-center">Daily mission • 25 SLP</div>
          <p className="text-white text-center" id="mission_daily"></p>
          <p className="text-white text-center" id="distribution_mission_daily"></p>
          <div className="text-white text-center">Daily adventure • 50 SLP</div>
          <p className="text-white text-center" id="adventure_daily"></p>
          <p className="text-white text-center" id="distribution_adventure_daily"></p>

          <br/>
          <br/>
          <h2 id="arena_rewards" className="text-red text-center">Arena win rewards</h2>
          <div className="text-white text-center">6 SLP</div>
          <p className="text-white text-center" id="arena_6"></p>
          <div className="text-white text-center">9 SLP</div>
          <p className="text-white text-center" id="arena_9"></p>
          <div className="text-white text-center">12 SLP</div>
          <p className="text-white text-center" id="arena_12"></p>
          <div className="text-white text-center">15 SLP</div>
          <p className="text-white text-center" id="arena_15"></p>
        </div>
      </IonContent>
    </IonPage>
  );


};

export default ScholarshipCalculator;
