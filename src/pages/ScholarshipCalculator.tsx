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
  const keys = Object.keys(currencyOptions);
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
    //console.log(response.data.data.quote['USD'].price)
    //console.log(response);
    return response.data.data;
  });

  axiosResponse.then(function (data) {
    //console.log(data.quote);
    var input = document.getElementById("SLP_Price") as HTMLInputElement;
    input.value = data.quote[currency].price;
  });

  function calcValues() {
    var currenV = document.getElementById("currency") as HTMLInputElement;
    var periodV = document.getElementById("period") as HTMLInputElement;
    var estimatedV = document.getElementById("estimated") as HTMLInputElement;
    var percentageV = document.getElementById("percentageScholar") as HTMLInputElement;
    var priceV = document.getElementById("SLP_Price") as HTMLInputElement;
    var numberV = document.getElementById("number_scholars") as HTMLInputElement;
    
    console.log('Currency value: '+currenV.value);
    console.log('Period value: '+periodV.value);
    console.log('estimated value: '+estimatedV.value);
    console.log('percentage value: '+percentageV.value);
    console.log('Price value: '+priceV.value);
    console.log('number value: '+numberV.value);

    var totalSLP = parseInt(numberV.value) * parseInt(estimatedV.value);

    var slpScholar = (parseFloat(percentageV.value) * totalSLP) / 100;
    var slpManager = totalSLP - slpScholar;

    var slpScholarCurrency = slpScholar * parseFloat(priceV.value);
    var slpManagerCurrency = slpManager * parseFloat(priceV.value);

    var curren_value = document.getElementById("curren_value") as HTMLInputElement;
    curren_value.textContent = 'Currency ' + currencyOptions[currenV.value]

    var textTest= document.getElementById("textTest") as HTMLInputElement;
    textTest.textContent = 'Manager: '+slpManager+' SLP ( '+slpManagerCurrency+' ). Scholars: '+slpScholar+' SLP ( '+slpScholarCurrency+' ).'
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
            <IonSelect
              id="period"
              name="period"
              placeholder="Period"
              className="text-black text-center w-25"
              onIonChange={() => calcValues()}
            >
              <IonSelectOption value={"1"}>Day</IonSelectOption>
              <IonSelectOption value={"2"}>Week</IonSelectOption>
              <IonSelectOption value={"3"}>Month</IonSelectOption>
            </IonSelect>
            <IonSelect
              id="currency"
              name="currency"
              placeholder="Currency"
              className="text-black text-center w-25"
              onIonChange={() => calcValues()}
            >
              {keys.map((key) => {
                return (
                <IonSelectOption value={key}>{currencyOptions[key]}</IonSelectOption>
                );
              })}
            </IonSelect>
          </div>

          <div id="curren_value" className="text-white text-center w-25"></div>
          <div id="textTest" className="text-white text-center w-25"></div>
        </div>
      </IonContent>
    </IonPage>
  );


};

export default ScholarshipCalculator;
