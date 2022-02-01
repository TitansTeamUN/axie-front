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
    "3527": "AMD",
    "2821": "ARS",
    "2782": "AUD",
    "3528": "AZN",
    "3529": "BAM",
    "3530": "BDT",
    "2814": "BGN",
    "3531": "BHD",
    "3532": "BMD",
    "2832": "BOB",
    "2783": "BRL",
    "3533": "BYN",
    "2784": "CAD",
    "2785": "CHF",
    "2786": "CLP",
    "2787": "CNY",
    "2820": "COP",
    "3534": "CRC",
    "3535": "CUP",
    "2788": "CZK",
    "2789": "DKK",
    "3536": "DOP",
    "3537": "DZD",
    "3538": "EGP",
    "2790": "EUR",
    "2791": "GBP",
    "3539": "GEL",
    "3540": "GHS",
    "3541": "GTQ",
    "2792": "HKD",
    "3542": "HNL",
    "2815": "HRK",
    "2793": "HUF",
    "2794": "IDR",
    "2795": "ILS",
    "2796": "INR",
    "3543": "IQD",
    "3544": "IRR",
    "2818": "ISK",
    "3545": "JMD",
    "3546": "JOD",
    "2797": "JPY",
    "3547": "KES",
    "3548": "KGS",
    "3549": "KHR",
    "2798": "KRW",
    "3550": "KWD",
    "3551": "KZT",
    "3552": "LBP",
    "3553": "LKR",
    "3554": "MAD",
    "3555": "MDL",
    "3556": "MKD",
    "3557": "MMK",
    "3558": "MNT",
    "2816": "MUR",
    "2799": "MXN",
    "2800": "MYR",
    "3559": "NAD",
    "2819": "NGN",
    "3560": "NIO",
    "2801": "NOK",
    "3561": "NPR",
    "2802": "NZD",
    "3562": "OMR",
    "3563": "PAB",
    "2822": "PEN",
    "2803": "PHP",
    "2804": "PKR",
    "2805": "PLN",
    "3564": "QAR",
    "2817": "RON",
    "3565": "RSD",
    "2806": "RUB",
    "3566": "SAR",
    "2807": "SEK",
    "2808": "SGD",
    "3567": "SSP",
    "2809": "THB",
    "3568": "TND",
    "2810": "TRY",
    "3569": "TTD",
    "2811": "TWD",
    "2824": "UAH",
    "3570": "UGX",
    "2781": "USD",
    "3571": "UYU",
    "3572": "UZS",
    "3573": "VES",
    "2823": "VND",
    "2812": "ZAR",
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
    periodV.value = "1";
    var estimatedV = document.getElementById("estimated") as HTMLInputElement;
    estimatedV.value = "100";
    var percentageV = document.getElementById(
      "percentageScholar"
    ) as HTMLInputElement;
    percentageV.value = "60";
    var numberV = document.getElementById(
      "number_scholars"
    ) as HTMLInputElement;
    numberV.value = "1";
  });

  function calcValues() {
    var totalSLP_daily = 0;
    var currenV = document.getElementById("currency") as HTMLInputElement;
    var currenName = currencyOptions[currenV.value];
    var periodV = document.getElementById("period") as HTMLInputElement;
    var estimatedV = document.getElementById("estimated") as HTMLInputElement;
    var percentageV = document.getElementById(
      "percentageScholar"
    ) as HTMLInputElement;
    var priceV = document.getElementById("SLP_Price") as HTMLInputElement;
    var numberV = document.getElementById(
      "number_scholars"
    ) as HTMLInputElement;

    // Valores diarios
    totalSLP_daily = parseFloat(
      (
        (parseInt(numberV.value) * parseInt(estimatedV.value)) /
        parseInt(periodV.value)
      ).toFixed(2)
    );

    var slpScholar_daily = parseFloat(
      ((parseFloat(percentageV.value) * totalSLP_daily) / 100).toFixed(2)
    );
    var slpManager_daily = parseFloat(
      (totalSLP_daily - slpScholar_daily).toFixed(2)
    );

    var slpScholarCurrency_daily = parseFloat(
      (slpScholar_daily * parseFloat(priceV.value)).toFixed(2)
    );
    var slpManagerCurrency_daily = parseFloat(
      (slpManager_daily * parseFloat(priceV.value)).toFixed(2)
    );
    var totalCurrency_daily = parseFloat(
      (totalSLP_daily * parseFloat(priceV.value)).toFixed(2)
    );

    // Valores semanales
    var totalSLP_weekly = (totalSLP_daily * 7).toFixed(2);

    var slpScholar_weekly = (slpScholar_daily * 7).toFixed(2);
    var slpManager_weekly = (slpManager_daily * 7).toFixed(2);

    var slpScholarCurrency_weekly = (slpScholarCurrency_daily * 7).toFixed(2);
    var slpManagerCurrency_weekly = (slpManagerCurrency_daily * 7).toFixed(2);
    var totalCurrency_weekly = (totalCurrency_daily * 7).toFixed(2);

    // Valores mensuales
    var totalSLP_monthly = (totalSLP_daily * 30).toFixed(2);

    var slpScholar_monthly = (slpScholar_daily * 30).toFixed(2);
    var slpManager_monthly = (slpManager_daily * 30).toFixed(2);

    var slpScholarCurrency_monthly = (slpScholarCurrency_daily * 30).toFixed(2);
    var slpManagerCurrency_monthly = (slpManagerCurrency_daily * 30).toFixed(2);
    var totalCurrency_monthly = (totalCurrency_daily * 30).toFixed(2);

    // Asignacion de valores
    var scholars = document.getElementById("scholars") as HTMLInputElement;
    scholars.textContent = parseInt(numberV.value) + " scholars";

    var daily_scholar = document.getElementById(
      "daily_scholar"
    ) as HTMLInputElement;
    daily_scholar.textContent = slpScholar_daily + " SLP";

    var daily_scholar_curren = document.getElementById(
      "daily_scholar_curren"
    ) as HTMLInputElement;
    daily_scholar_curren.textContent =
      slpScholarCurrency_daily + " " + currenName;

    var week_scholar = document.getElementById(
      "week_scholar"
    ) as HTMLInputElement;
    week_scholar.textContent = slpScholar_weekly + " SLP";
    var week_scholar_curren = document.getElementById(
      "week_scholar_curren"
    ) as HTMLInputElement;
    week_scholar_curren.textContent =
      slpScholarCurrency_weekly + " " + currenName;

    var month_scholar = document.getElementById(
      "month_scholar"
    ) as HTMLInputElement;
    month_scholar.textContent = slpScholar_monthly + " SLP";

    var month_scholar_curren = document.getElementById(
      "month_scholar_curren"
    ) as HTMLInputElement;
    month_scholar_curren.textContent =
      slpScholarCurrency_monthly + " " + currenName;

    var manager = document.getElementById("manager") as HTMLInputElement;
    manager.textContent = "Manager";

    var daily_manager = document.getElementById(
      "daily_manager"
    ) as HTMLInputElement;
    daily_manager.textContent = slpManager_daily + " SLP";

    var daily_manager_curren = document.getElementById(
      "daily_manager_curren"
    ) as HTMLInputElement;
    daily_manager_curren.textContent =
      slpManagerCurrency_daily + " " + currenName;

    var week_manager = document.getElementById(
      "week_manager"
    ) as HTMLInputElement;
    week_manager.textContent = slpManager_weekly + " SLP";
    var week_manager_curren = document.getElementById(
      "week_manager_curren"
    ) as HTMLInputElement;
    week_manager_curren.textContent =
      slpManagerCurrency_weekly + " " + currenName;

    var month_manager = document.getElementById(
      "month_manager"
    ) as HTMLInputElement;
    month_manager.textContent = slpManager_monthly + " SLP";

    var month_manager_curren = document.getElementById(
      "month_manager_curren"
    ) as HTMLInputElement;
    month_manager_curren.textContent =
      slpManagerCurrency_monthly + " " + currenName;

    var total = document.getElementById("total") as HTMLInputElement;
    total.textContent = "Total";

    var daily_total = document.getElementById(
      "daily_total"
    ) as HTMLInputElement;
    daily_total.textContent = totalSLP_daily + " SLP";

    var daily_total_curren = document.getElementById(
      "daily_total_curren"
    ) as HTMLInputElement;
    daily_total_curren.textContent = totalCurrency_daily + " " + currenName;

    var week_total = document.getElementById("week_total") as HTMLInputElement;
    week_total.textContent = totalSLP_weekly + " SLP";

    var week_total_curren = document.getElementById(
      "week_total_curren"
    ) as HTMLInputElement;
    week_total_curren.textContent = totalCurrency_weekly + " " + currenName;

    var month_total = document.getElementById(
      "month_total"
    ) as HTMLInputElement;
    month_total.textContent = totalSLP_monthly + " SLP";

    var month_total_curren = document.getElementById(
      "month_total_curren"
    ) as HTMLInputElement;
    month_total_curren.textContent = totalCurrency_monthly + " " + currenName;

    // Asignacion recompensas
    var daily_mission = parseFloat((parseFloat(priceV.value) * 25).toFixed(2));
    var daily_scholar_mission = parseFloat(
      ((parseFloat(percentageV.value) * daily_mission) / 100).toFixed(2)
    );
    var daily_manager_mission = (daily_mission - daily_scholar_mission).toFixed(
      2
    );

    var mission_daily = document.getElementById(
      "mission_daily"
    ) as HTMLInputElement;
    mission_daily.textContent = daily_mission + " " + currenName;
    var distribution_mission_daily_scholar = document.getElementById(
      "distribution_mission_daily_scholar"
    ) as HTMLInputElement;
    distribution_mission_daily_scholar.textContent =
      "Scholar: " + daily_scholar_mission + " " + currenName;

    var distribution_mission_daily_manager = document.getElementById(
      "distribution_mission_daily_manager"
    ) as HTMLInputElement;
    distribution_mission_daily_manager.textContent =
      "Manager: " + daily_manager_mission + " " + currenName;

    var daily_adventure = parseFloat(
      (parseFloat(priceV.value) * 50).toFixed(2)
    );
    var daily_scholar_adventure = parseFloat(
      ((parseFloat(percentageV.value) * daily_adventure) / 100).toFixed(2)
    );
    var daily_manager_adventure = (
      daily_adventure - daily_scholar_adventure
    ).toFixed(2);

    var adventure_daily = document.getElementById(
      "adventure_daily"
    ) as HTMLInputElement;
    adventure_daily.textContent = daily_adventure + " " + currenName;
    var distribution_adventure_daily_scholar = document.getElementById(
      "distribution_adventure_daily_scholar"
    ) as HTMLInputElement;
    distribution_adventure_daily_scholar.textContent =
      "Scholar: " + daily_scholar_adventure + " " + currenName;

    var distribution_adventure_daily_manager = document.getElementById(
      "distribution_adventure_daily_manager"
    ) as HTMLInputElement;
    distribution_adventure_daily_manager.textContent =
      "Manager: " + daily_manager_adventure + " " + currenName;

    // Asignacion recompensas
    var curren6 = (parseFloat(priceV.value) * 6).toFixed(2);
    var curren9 = (parseFloat(priceV.value) * 9).toFixed(2);
    var curren12 = (parseFloat(priceV.value) * 12).toFixed(2);
    var curren15 = (parseFloat(priceV.value) * 15).toFixed(2);

    var arena_6 = document.getElementById("arena_6") as HTMLInputElement;
    arena_6.textContent = curren6 + " " + currenName;
    var arena_9 = document.getElementById("arena_9") as HTMLInputElement;
    arena_9.textContent = curren9 + " " + currenName;
    var arena_12 = document.getElementById("arena_12") as HTMLInputElement;
    arena_12.textContent = curren12 + " " + currenName;
    var arena_15 = document.getElementById("arena_15") as HTMLInputElement;
    arena_15.textContent = curren15 + " " + currenName;
  }

  function getCurrency() {
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
        <div className="w-4/5 my-6 mx-auto">
          <div className="w-full flex items-center mx-auto p-0.5">
            <label className="text-white text-center w-1/4"># Scholars</label>
            <IonInput
              type="number"
              name="number_scholars"
              id="number_scholars"
              placeholder="# of scholars"
              className="text-black text-center bg-white rounded-md w-3/4 inline-block"
              onIonChange={() => calcValues()}
            ></IonInput>
          </div>

          <div className="w-full flex items-center mx-auto p-0.5">
            <label className="text-white text-center w-1/4">SLP Price</label>
            <IonInput
              type="text"
              id="SLP_Price"
              name="SLP_Price"
              placeholder="SLP Price"
              className="text-black text-center bg-white rounded-md w-3/4 inline-block"
              onIonChange={() => calcValues()}
            ></IonInput>
          </div>

          <div className="w-full flex items-center mx-auto p-0.5">
            <label className="text-white text-center w-1/4">%</label>
            <IonInput
              type="text"
              id="percentageScholar"
              name="percentageScholar"
              placeholder="% per Scholar"
              className="text-black text-center bg-white rounded-md w-3/4 inline-block"
              onIonChange={() => calcValues()}
            ></IonInput>
          </div>

          <div className="w-full flex items-center mx-auto p-0.5">
            <label className="text-white text-center w-1/4">
              Estimated SLP:{" "}
            </label>
            <IonInput
              type="text"
              id="estimated"
              name="estimated"
              placeholder="Estimated Scholar SLP"
              className="text-black text-center bg-white rounded-md w-3/4 inline-block"
              onIonChange={() => calcValues()}
            ></IonInput>
          </div>

          <div className="w-full flex items-center mx-auto p-0.5">
            <label className="text-white text-center w-1/4">Per: </label>
            <IonSelect
              id="period"
              name="period"
              placeholder="Period"
              className="text-black text-center bg-white rounded-md w-3/4 inline-block"
              onIonChange={() => calcValues()}
            >
              <IonSelectOption value={"1"}>Day</IonSelectOption>
              <IonSelectOption value={"7"}>Week</IonSelectOption>
              <IonSelectOption value={"30"}>Month</IonSelectOption>
            </IonSelect>
          </div>

          <div className="w-full flex items-center mx-auto p-0.5">
            <label className="text-white text-center w-1/4">Currency: </label>
            <IonSelect
              id="currency"
              name="currency"
              placeholder="Currency"
              className="text-black text-center bg-white rounded-md w-3/4 inline-block"
              onIonChange={() => getCurrency()}
            >
              {keys.map((key) => {
                return (
                  <IonSelectOption value={key}>
                    {currencyOptions[key]}
                  </IonSelectOption>
                );
              })}
            </IonSelect>
          </div>

          <div className="w-full my-6">
            <div className="my-1.5 py-1">
              <h2
                id="estimated_earnings"
                className="bg-deepSpaceSparkie font-bold text-xl rounded-md text-white text-center"
              >
                Estimated earnings
              </h2>

              <div className="py-1.5">
                <div
                  id="scholars"
                  className="bg-greenSheen text-lg rounded-md text-white text-center font-bold"
                ></div>
                <div className="w-full mx-auto">
                  <div className="flex flex-row text-white text-center">
                    <div className="mx-auto my-1 space-x-4">
                      <span>
                        <strong>Daily:</strong>
                      </span>
                      <span
                        className="text-2xl font-bold"
                        id="daily_scholar_curren"
                      ></span>
                      <span id="daily_scholar"></span>
                    </div>
                  </div>

                  <div className="flex flex-row text-white text-center">
                    <div className="mx-auto my-1 space-x-4">
                      <span>
                        <strong>Weekly:</strong>
                      </span>
                      <span
                        className="text-2xl font-bold"
                        id="week_scholar_curren"
                      ></span>
                      <span id="week_scholar"></span>
                    </div>
                  </div>
                  <div className="flex flex-row text-white text-center">
                    <div className="mx-auto my-1 space-x-4">
                      <span>
                        <strong>Monthly:</strong>
                      </span>
                      <span
                        id="month_scholar_curren"
                        className="text-2xl font-bold"
                      ></span>
                      <span id="month_scholar"></span>
                    </div>
                  </div>
                </div>
              </div>

              <div
                id="manager"
                className="bg-greenSheen text-lg rounded-md text-white text-center font-bold"
              ></div>

              <div className="flex flex-row text-white text-center">
                <div className="mx-auto my-1 space-x-4">
                  <span>
                    <strong>Daily:</strong>
                  </span>
                  <span
                    id="daily_manager_curren"
                    className="text-2xl font-bold"
                  ></span>
                  <span id="daily_manager"></span>
                </div>
              </div>

              <div className="flex flex-row text-white text-center">
                <div className="mx-auto my-1 space-x-4">
                  <span>
                    <strong>Weekly:</strong>
                  </span>
                  <span
                    id="week_manager_curren"
                    className="text-2xl font-bold"
                  ></span>
                  <span id="week_manager"></span>
                </div>
              </div>

              <div className="flex flex-row text-white text-center">
                <div className="mx-auto my-1 space-x-4">
                  <span>
                    <strong>Monthly:</strong>
                  </span>
                  <span
                    id="month_manager_curren"
                    className="text-2xl font-bold"
                  ></span>
                  <span id="month_manager"></span>
                </div>
              </div>

              <div
                id="total"
                className="bg-greenSheen text-lg rounded-md text-white text-center font-bold"
              ></div>
              <div className="flex flex-row text-white text-center">
                <div className="mx-auto my-1 space-x-4">
                  <span>
                    <strong>Daily:</strong>
                  </span>
                  <span
                    id="daily_total_curren"
                    className="text-2xl font-bold"
                  ></span>
                  <span id="daily_total"></span>
                </div>
              </div>
              <div className="flex flex-row text-white text-center">
                <div className="mx-auto my-1 space-x-4">
                  <span>
                    <strong>Weekly:</strong>
                  </span>
                  <span
                    id="week_total_curren"
                    className="text-2xl font-bold"
                  ></span>
                  <span id="week_total"></span>
                </div>
              </div>
              <div className="flex flex-row text-white text-center">
                <div className="mx-auto my-1 space-x-4">
                  <span>
                    <strong>Monthly:</strong>
                  </span>
                  <span
                    id="month_total_curren"
                    className="text-2xl font-bold"
                  ></span>
                  <span id="month_total"></span>
                </div>
              </div>
            </div>

            <div className="my-1.5 py-1">
              <h2
                id="daily_rewards"
                className="bg-deepSpaceSparkie font-bold text-xl rounded-md text-white text-center"
              >
                Daily quest rewards
              </h2>
              <div className="w-full my-1.5 py-1">
                <div className="bg-greenSheen text-lg rounded-md text-white text-center font-bold">
                  Daily mission • 25 SLP
                </div>
                <span className="text-white text-center block text-2xl">
                  <strong id="mission_daily"></strong>
                </span>
                <span
                  className="text-white text-center block text-lg px-1"
                  id="distribution_mission_daily_scholar"
                ></span>
                <span
                  className="text-white text-center block text-lg px-1"
                  id="distribution_mission_daily_manager"
                ></span>
              </div>
              <div className="w-full my-1.5 py-1">
                <div className="bg-greenSheen text-lg rounded-md text-white text-center font-bold">
                  Daily adventure • 50 SLP
                </div>

                <span className="text-white text-center block text-2xl">
                  <strong id="adventure_daily"></strong>
                </span>
                <span
                  className="text-white text-center block text-lg px-1"
                  id="distribution_adventure_daily_scholar"
                ></span>
                <span
                  className="text-white text-center block text-lg px-1"
                  id="distribution_adventure_daily_manager"
                ></span>
              </div>
            </div>

            <div className="my-1.5 py-1">
              <h2
                id="arena_rewards"
                className="bg-deepSpaceSparkie font-bold text-xl rounded-md text-white text-center"
              >
                Arena win rewards
              </h2>
              <div className="w-full my-1.5">
                <div className="flex flex-row">
                  <div className="px-0.5 w-1/3 grow my-2">
                    <div className="bg-greenSheen text-lg rounded-md text-white text-center font-bold">
                      6 SLP
                    </div>
                    <span className="text-white text-center block text-xl">
                      <strong id="arena_6"></strong>
                    </span>
                  </div>

                  <div className="px-0.5 w-1/3 grow my-2">
                    <div className="bg-greenSheen text-lg rounded-md text-white text-center font-bold">
                      9 SLP
                    </div>
                    <span className="text-white text-center block text-xl">
                      <strong id="arena_9"></strong>
                    </span>
                  </div>

                  <div className="px-0.5 w-1/3 grow my-2">
                    <div className="bg-greenSheen text-lg rounded-md text-white text-center font-bold">
                      12 SLP
                    </div>
                    <span className="text-white text-center block text-xl">
                      <strong id="arena_12"></strong>
                    </span>
                  </div>
                </div>
                <div className="bg-greenSheen text-lg rounded-md text-white text-center font-bold">
                  15 SLP
                </div>
                <span className="text-white text-center block text-xl">
                  <strong id="arena_15"></strong>
                </span>
              </div>
            </div>
          </div>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default ScholarshipCalculator;
