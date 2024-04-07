import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import axios from 'axios';


function App() {
  let [amount, setAmount] = useState(1);
  let [fromCurrency, setFromCurrency] = useState('USD');
  let [toCurrency, setToCurrency] = useState('INR');
  let [convertedAmount, setConvertedAmount] = useState(null);
  let [exchangeRate, setExchangeRate] = useState(null);

  useEffect(() => {
    let getExchangeRate = async () => {
      try {
        let url = `https://api.exchangerate-api.com/v4/latest/${fromCurrency}`;
        let response = await axios.get(url);
        console.log(response);
        setExchangeRate(response.data.rates[toCurrency]);
      } catch (error) {
        console.error('Error fetching exchange rate :', error);
      }
    }
    getExchangeRate();
  }, [fromCurrency, toCurrency]);

  useEffect(() => {
    if (exchangeRate !== null) {
      setConvertedAmount((amount * exchangeRate).toFixed(2))
    }

  }, [amount, exchangeRate]);


  function handleAmountChange(e) {
    let value = parseFloat(e.target.value);
    setAmount(isNaN(value) ? 0 : value);
  };

  function handlefromCurrencyChange(e) {
    setFromCurrency(e.target.value);
  };
  function handletoCurrencyChange(e) {
    setToCurrency(e.target.value);
  };


  return (
    <>
      <div className='currency-converter'>
        <div className='box'></div>
        <div className='data'>
          <h1>Currency Converter</h1>
          <div className='input-container'>
            <label htmlFor='amt'>Amount : </label>
            <input type='number' id='amt' value={amount} onChange={handleAmountChange}></input>
          </div>
          <div className='input-container'>
            <label htmlFor='from-currency'>From Currency : </label>
            <select id='from-currency' value={fromCurrency} onChange={handlefromCurrencyChange}>
              <option value="USD">USD - United States Dollar</option>
              <option value="EUR">EUR - Euro</option>
              <option value="GBP">GBP - British Pound Sterling</option>
              <option value="JPY">JPY - Japanese Yen</option>
              <option value="CAD">CAD - Canadian Dollar</option>
              <option value="AUD">AUD - Australian Dollar</option>
              <option value="CNY">CNY - Chinese Yuan</option>
              <option value="CHF">CHF - Swiss Franc</option>
              <option value="ZAR">ZAR - South African Rand</option>
              <option value="BRL">BRL - Brazilian Real</option>
              <option value="CHF">CHF - Swiss Franc</option>
              <option value="SEK">SEK - Swedish Krona</option>
              <option value="NZD">NZD - New Zealand Dollar</option>
              <option value="NOK">NOK - Norwegian Krone</option>
              <option value="MXN">MXN - Mexican Peso</option>
              <option value="SGD">SGD - Singapore Dollar</option>
              <option value="HKD">HKD - Hong Kong Dollar</option>
              <option value="KRW">KRW - South Korean Won</option>
              <option value="TRY">TRY - Turkish Lira</option>
              <option value="RUB">RUB - Russian Ruble</option>
              <option value="PLN">PLN - Polish Zloty</option>
              <option value="THB">THB - Thai Baht</option>
              <option value="DKK">DKK - Danish Krone</option>
              <option value="MYR">MYR - Malaysian Ringgit</option>
              <option value="IDR">IDR - Indonesian Rupiah</option>
              <option value="TWD">TWD - New Taiwan Dollar</option>
              <option value="HUF">HUF - Hungarian Forint</option>
              <option value="CZK">CZK - Czech Koruna</option>
              <option value="ILS">ILS - Israeli New Shekel</option>
              <option value="CLP">CLP - Chilean Peso</option>
              <option value="PHP">PHP - Philippine Peso</option>
              <option value="AED">AED - UAE Dirham</option>
              <option value="SAR">SAR - Saudi Riyal</option>
              <option value="QAR">QAR - Qatari Riyal</option>
              <option value="BHD">BHD - Bahraini Dinar</option>
              <option value="KWD">KWD - Kuwaiti Dinar</option>
              <option value="OMR">OMR - Omani Rial</option>
              <option value="EGP">EGP - Egyptian Pound</option>
              <option value="ARS">ARS - Argentine Peso</option>
              <option value="COP">COP - Colombian Peso</option>
              <option value="CRC">CRC - Costa Rican Colon</option>
              <option value="HRK">HRK - Croatian Kuna</option>
              <option value="DOP">DOP - Dominican Peso</option>
              <option value="GTQ">GTQ - Guatemalan Quetzal</option>
              <option value="ISK">ISK - Icelandic Krona</option>
              <option value="KZT">KZT - Kazakhstani Tenge</option>
              <option value="LKR">LKR - Sri Lankan Rupee</option>
              <option value="MDL">MDL - Moldovan Leu</option>
              <option value="MAD">MAD - Moroccan Dirham</option>
              <option value="NGN">NGN - Nigerian Naira</option>
              <option value="PKR">PKR - Pakistani Rupee</option>
              <option value="PEN">PEN - Peruvian Sol</option>
              <option value="RON">RON - Romanian Leu</option>
              <option value="TND">TND - Tunisian Dinar</option>
              <option value="UAH">UAH - Ukrainian Hryvnia</option>
              <option value="UZS">UZS - Uzbekistani Som</option>
              <option value="VND">VND - Vietnamese Dong</option>
              <option value="XAF">XAF - Central African CFA Franc</option>
              <option value="XCD">XCD - East Caribbean Dollar</option>
              <option value="XOF">XOF - West African CFA Franc</option>
              <option value="XPF">XPF - CFP Franc</option>
              <option value="AMD">AMD - Armenian Dram</option>
              <option value="AWG">AWG - Aruban Florin</option>
              <option value="BAM">BAM - Bosnia-Herzegovina Convertible Mark</option>
              <option value="BBD">BBD - Barbadian Dollar</option>
              <option value="BGN">BGN - Bulgarian Lev</option>
              <option value="BND">BND - Brunei Dollar</option>
              <option value="BSD">BSD - Bahamian Dollar</option>
              <option value="BTN">BTN - Bhutanese Ngultrum</option>
              <option value="BWP">BWP - Botswanan Pula</option>
              <option value="BZD">BZD - Belize Dollar</option>
              <option value="CDF">CDF - Congolese Franc</option>
              <option value="DJF">DJF - Djiboutian Franc</option>
              <option value="ERN">ERN - Eritrean Nakfa</option>
              <option value="ETB">ETB - Ethiopian Birr</option>
              <option value="FJD">FJD - Fijian Dollar</option>
              <option value="FKP">FKP - Falkland Islands Pound</option>
              <option value="GEL">GEL - Georgian Lari</option>
              <option value="GGP">GGP - Guernsey Pound</option>
              <option value="GIP">GIP - Gibraltar Pound</option>
              <option value="GNF">GNF - Guinean Franc</option>
              <option value="GYD">GYD - Guyanaese Dollar</option>
              <option value="HTG">HTG - Haitian Gourde</option>
              <option value="IMP">IMP - Isle of Man Pound</option>
              <option value="JEP">JEP - Jersey Pound</option>
              <option value="KGS">KGS - Kyrgystani Som</option>
              <option value="KHR">KHR - Cambodian Riel</option>
              <option value="KID">KID - Kiribati Dollar</option>
              <option value="KMF">KMF - Comorian Franc</option>
              <option value="KYD">KYD - Cayman Islands Dollar</option>
              <option value="LAK">LAK - Laotian Kip</option>
              <option value="LRD">LRD - Liberian Dollar</option>
              <option value="LSL">LSL - Lesotho Loti</option>
              <option value="MGA">MGA - Malagasy Ariary</option>
              <option value="MKD">MKD - Macedonian Denar</option>
              <option value="MMK">MMK - Myanma Kyat</option>
              <option value="MNT">MNT - Mongolian Tugrik</option>
              <option value="MOP">MOP - Macanese Pataca</option>
              <option value="MRO">MRO - Mauritanian Ouguiya</option>
              <option value="MUR">MUR - Mauritian Rupee</option>
              <option value="MVR">MVR - Maldivian Rufiyaa</option>
              <option value="MWK">MWK - Malawian Kwacha</option>
              <option value="MXV">MXV - Mexican Investment Unit</option>
              <option value="MZN">MZN - Mozambican Metical</option>
              <option value="NAD">NAD - Namibian Dollar</option>
              <option value="NIO">NIO - Nicaraguan Córdoba</option>
              <option value="NPR">NPR - Nepalese Rupee</option>
              <option value="PAB">PAB - Panamanian Balboa</option>
              <option value="PGK">PGK - Papua New Guinean Kina</option>
              <option value="PYG">PYG - Paraguayan Guarani</option>
              <option value="RSD">RSD - Serbian Dinar</option>
              <option value="RWF">RWF - Rwandan Franc</option>
              <option value="SBD">SBD - Solomon Islands Dollar</option>
              <option value="SCR">SCR - Seychellois Rupee</option>
              <option value="SDG">SDG - Sudanese Pound</option>
              <option value="SHP">SHP - Saint Helena Pound</option>
              <option value="SLL">SLL - Sierra Leonean Leone</option>
              <option value="SOS">SOS - Somali Shilling</option>
              <option value="SRD">SRD - Surinamese Dollar</option>
              <option value="SSP">SSP - South Sudanese Pound</option>
              <option value="STN">STN - São Tomé & Príncipe Dobra</option>
              <option value="SVC">SVC - Salvadoran Colón</option>
              <option value="SZL">SZL - Swazi Lilangeni</option>
              <option value="TJS">TJS - Tajikistani Somoni</option>
              <option value="TMT">TMT - Turkmenistani Manat</option>
              <option value="TOP">TOP - Tongan Pa'anga</option>
              <option value="TTD">TTD - Trinidad & Tobago Dollar</option>
              <option value="TZS">TZS - Tanzanian Shilling</option>
              <option value="UGX">UGX - Ugandan Shilling</option>
              <option value="UYU">UYU - Uruguayan Peso</option>
              <option value="VES">VES - Venezuelan Bolívar</option>
              <option value="VUV">VUV - Vanuatu Vatu</option>
              <option value="WST">WST - Samoan Tala</option>
              <option value="XDR">XDR - Special Drawing Rights</option>
              <option value="YER">YER - Yemeni Rial</option>
              <option value="ZMW">ZMW - Zambian Kwacha</option>
              <option value="ZWL">ZWL - Zimbabwean Dollar</option>


            </select>
          </div>
          <div className='input-container'>
            <label htmlFor='to-currency'>To Currency : </label>
            <select id='to-currency' value={toCurrency} onChange={handletoCurrencyChange}>
              <option value="EUR">EUR - Euro</option>
              <option value="GBP">GBP - British Pound Sterling</option>
              <option value="JPY">JPY - Japanese Yen</option>
              <option value="CAD">CAD - Canadian Dollar</option>
              <option value="AUD">AUD - Australian Dollar</option>
              <option value="CNY">CNY - Chinese Yuan</option>
              <option value="CHF">CHF - Swiss Franc</option>
              <option value="ZAR">ZAR - South African Rand</option>
              <option value="BRL">BRL - Brazilian Real</option>
              <option value="CHF">CHF - Swiss Franc</option>
              <option value="SEK">SEK - Swedish Krona</option>
              <option value="NZD">NZD - New Zealand Dollar</option>
              <option value="NOK">NOK - Norwegian Krone</option>
              <option value="MXN">MXN - Mexican Peso</option>
              <option value="SGD">SGD - Singapore Dollar</option>
              <option value="HKD">HKD - Hong Kong Dollar</option>
              <option value="KRW">KRW - South Korean Won</option>
              <option value="TRY">TRY - Turkish Lira</option>
              <option value="RUB">RUB - Russian Ruble</option>
              <option value="PLN">PLN - Polish Zloty</option>
              <option value="THB">THB - Thai Baht</option>
              <option value="DKK">DKK - Danish Krone</option>
              <option value="MYR">MYR - Malaysian Ringgit</option>
              <option value="IDR">IDR - Indonesian Rupiah</option>
              <option value="TWD">TWD - New Taiwan Dollar</option>
              <option value="HUF">HUF - Hungarian Forint</option>
              <option value="CZK">CZK - Czech Koruna</option>
              <option value="ILS">ILS - Israeli New Shekel</option>
              <option value="CLP">CLP - Chilean Peso</option>
              <option value="PHP">PHP - Philippine Peso</option>
              <option value="AED">AED - UAE Dirham</option>
              <option value="SAR">SAR - Saudi Riyal</option>
              <option value="QAR">QAR - Qatari Riyal</option>
              <option value="BHD">BHD - Bahraini Dinar</option>
              <option value="KWD">KWD - Kuwaiti Dinar</option>
              <option value="OMR">OMR - Omani Rial</option>
              <option value="EGP">EGP - Egyptian Pound</option>
              <option value="ARS">ARS - Argentine Peso</option>
              <option value="COP">COP - Colombian Peso</option>
              <option value="CRC">CRC - Costa Rican Colon</option>
              <option value="HRK">HRK - Croatian Kuna</option>
              <option value="DOP">DOP - Dominican Peso</option>
              <option value="GTQ">GTQ - Guatemalan Quetzal</option>
              <option value="ISK">ISK - Icelandic Krona</option>
              <option value="KZT">KZT - Kazakhstani Tenge</option>
              <option value="LKR">LKR - Sri Lankan Rupee</option>
              <option value="MDL">MDL - Moldovan Leu</option>
              <option value="MAD">MAD - Moroccan Dirham</option>
              <option value="NGN">NGN - Nigerian Naira</option>
              <option value="PKR">PKR - Pakistani Rupee</option>
              <option value="PEN">PEN - Peruvian Sol</option>
              <option value="RON">RON - Romanian Leu</option>
              <option value="TND">TND - Tunisian Dinar</option>
              <option value="UAH">UAH - Ukrainian Hryvnia</option>
              <option value="UZS">UZS - Uzbekistani Som</option>
              <option value="VND">VND - Vietnamese Dong</option>
              <option value="XAF">XAF - Central African CFA Franc</option>
              <option value="XCD">XCD - East Caribbean Dollar</option>
              <option value="XOF">XOF - West African CFA Franc</option>
              <option value="XPF">XPF - CFP Franc</option>
              <option value="AMD">AMD - Armenian Dram</option>
              <option value="AWG">AWG - Aruban Florin</option>
              <option value="BAM">BAM - Bosnia-Herzegovina Convertible Mark</option>
              <option value="BBD">BBD - Barbadian Dollar</option>
              <option value="BGN">BGN - Bulgarian Lev</option>
              <option value="BND">BND - Brunei Dollar</option>
              <option value="BSD">BSD - Bahamian Dollar</option>
              <option value="BTN">BTN - Bhutanese Ngultrum</option>
              <option value="BWP">BWP - Botswanan Pula</option>
              <option value="BZD">BZD - Belize Dollar</option>
              <option value="CDF">CDF - Congolese Franc</option>
              <option value="DJF">DJF - Djiboutian Franc</option>
              <option value="ERN">ERN - Eritrean Nakfa</option>
              <option value="ETB">ETB - Ethiopian Birr</option>
              <option value="FJD">FJD - Fijian Dollar</option>
              <option value="FKP">FKP - Falkland Islands Pound</option>
              <option value="GEL">GEL - Georgian Lari</option>
              <option value="GGP">GGP - Guernsey Pound</option>
              <option value="GIP">GIP - Gibraltar Pound</option>
              <option value="GNF">GNF - Guinean Franc</option>
              <option value="GYD">GYD - Guyanaese Dollar</option>
              <option value="HTG">HTG - Haitian Gourde</option>
              <option value="IMP">IMP - Isle of Man Pound</option>
              <option value="JEP">JEP - Jersey Pound</option>
              <option value="KGS">KGS - Kyrgystani Som</option>
              <option value="KHR">KHR - Cambodian Riel</option>
              <option value="KID">KID - Kiribati Dollar</option>
              <option value="KMF">KMF - Comorian Franc</option>
              <option value="KYD">KYD - Cayman Islands Dollar</option>
              <option value="LAK">LAK - Laotian Kip</option>
              <option value="LRD">LRD - Liberian Dollar</option>
              <option value="LSL">LSL - Lesotho Loti</option>
              <option value="MGA">MGA - Malagasy Ariary</option>
              <option value="MKD">MKD - Macedonian Denar</option>
              <option value="MMK">MMK - Myanma Kyat</option>
              <option value="MNT">MNT - Mongolian Tugrik</option>
              <option value="MOP">MOP - Macanese Pataca</option>
              <option value="MRO">MRO - Mauritanian Ouguiya</option>
              <option value="MUR">MUR - Mauritian Rupee</option>
              <option value="MVR">MVR - Maldivian Rufiyaa</option>
              <option value="MWK">MWK - Malawian Kwacha</option>
              <option value="MXV">MXV - Mexican Investment Unit</option>
              <option value="MZN">MZN - Mozambican Metical</option>
              <option value="NAD">NAD - Namibian Dollar</option>
              <option value="NIO">NIO - Nicaraguan Córdoba</option>
              <option value="NPR">NPR - Nepalese Rupee</option>
              <option value="PAB">PAB - Panamanian Balboa</option>
              <option value="PGK">PGK - Papua New Guinean Kina</option>
              <option value="PYG">PYG - Paraguayan Guarani</option>
              <option value="RSD">RSD - Serbian Dinar</option>
              <option value="RWF">RWF - Rwandan Franc</option>
              <option value="SBD">SBD - Solomon Islands Dollar</option>
              <option value="SCR">SCR - Seychellois Rupee</option>
              <option value="SDG">SDG - Sudanese Pound</option>
              <option value="SHP">SHP - Saint Helena Pound</option>
              <option value="SLL">SLL - Sierra Leonean Leone</option>
              <option value="SOS">SOS - Somali Shilling</option>
              <option value="SRD">SRD - Surinamese Dollar</option>
              <option value="SSP">SSP - South Sudanese Pound</option>
              <option value="STN">STN - São Tomé & Príncipe Dobra</option>
              <option value="SVC">SVC - Salvadoran Colón</option>
              <option value="SZL">SZL - Swazi Lilangeni</option>
              <option value="TJS">TJS - Tajikistani Somoni</option>
              <option value="TMT">TMT - Turkmenistani Manat</option>
              <option value="TOP">TOP - Tongan Pa'anga</option>
              <option value="TTD">TTD - Trinidad & Tobago Dollar</option>
              <option value="TZS">TZS - Tanzanian Shilling</option>
              <option value="UGX">UGX - Ugandan Shilling</option>
              <option value="UYU">UYU - Uruguayan Peso</option>
              <option value="VES">VES - Venezuelan Bolívar</option>
              <option value="VUV">VUV - Vanuatu Vatu</option>
              <option value="WST">WST - Samoan Tala</option>
              <option value="XDR">XDR - Special Drawing Rights</option>
              <option value="YER">YER - Yemeni Rial</option>
              <option value="ZMW">ZMW - Zambian Kwacha</option>
              <option value="ZWL">ZWL - Zimbabwean Dollar</option>

            </select>
          </div>
          <div className='result'>
            <p>{amount} {fromCurrency} is equal to {convertedAmount} {toCurrency}
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
