var clientnamelog = [];

function handleSubmit(event) {
    event.preventDefault()  //tells the user agent that if the event does not get explicitly handled, its default action should not be taken as it normally would be.

    // check what text was put into the form field for meaningcloud.com NLP analysis
    let formText = document.getElementById('nlptext').value
    
    Client.checkCookie();
    let firstname = Client.checkCookie();
    let cookiex = document.cookie;
    console.log("Cookie data = " + cookiex)
    Client.checkForName(firstname);
    clientnamelog.push(firstname);
    Client.listclientnames();

    //Web ref for form validation tutorial: https://www.w3schools.com/js/js_validation.asp
    if (formText == "") {
      window.alert("The text field cannot be blank upon submit - please retry!");
      return false;
    }
    console.log("::: meaningcloud.com data submitted :::")

    //First, get the meaningcloud API key from the server (i.e. securely stored within .env file) 
    fetch('http://localhost:8081/getapikey')  //Ref multiple fetches: https://stackoverflow.com/questions/40981040/using-a-fetch-inside-another-fetch-in-javascript
    .then(function(response) { 
      return response.json()
    })
    //Set up API call request options parameters, as specified by meaningcloud.com for JavaScript 
    .then(function(data) {  
      const formdata = new FormData();
      formdata.append("key", data.apikey);   //Pass meaningcloud.com API key retrieved from the server .env file
      formdata.append("txt", formText);      //Take the text entered by the user on front end to pass to meaningcloud.com for analysis 
      formdata.append("lang", "en");         // 2-letter code, like en es fr ...(i.e. en = English )

      const requestOptions = {               //Set up a POST request for formdata, as specified by meaningcloud.com
        method: 'POST',
        body: formdata,
        redirect: 'follow'
      };
      //Fetch the meaningcloud.com API using request options  
      return fetch("https://api.meaningcloud.com/sentiment-2.1", requestOptions)
    })
    .then(function(response) { 
      return response.json();   //Format meaningcloud result into JSON
    })
    //Loop through the meaningcloud.com results, and extract the "subjectivity" and "irony" fields from the meaningcloud JSON returned fields and display on front end  
    .then(function(data) {
        let meaningcloudResultsArray = [];   //Web ref: https://stackoverflow.com/questions/675231/how-do-i-access-properties-of-a-javascript-object-if-i-dont-know-the-names
        for(let index in data) {
          console.log("Debug: meaningcloud.com API call returned value " + index + "=" + data[index]);
          meaningcloudResultsArray.push(data[index]);
        }
        //Array position 4 is the Subjective/Objective meaningcloud.com result, and array position 6 is the meaningcloud.com Irony result
        let meaningcloudResultsStr = 'Hi ' + firstname + ', the Meaningcloud.com result for this text is: ' + meaningcloudResultsArray[4] + ' and ' + meaningcloudResultsArray[6];
        console.log("Debug = " + meaningcloudResultsStr);
        //Update the front end with the NLP results from meaningcloud.com 
        document.getElementById('results').innerHTML = meaningcloudResultsStr;
    })
    .catch(function(error) { 
      console.log('Request to server for API key and/or API Meaningcloud.com API fetch call FAILED with the following error: ', error) 
      window.alert("There was an error connecting to Meaningcloud.com - please ensure the port is 8081, else please contact your IT system administrator for assistance.");
    });
    
}

function listclientnames() {
  for(let index in clientnamelog) {
    console.log("Debug: first names visited site: " + index + "=" + clientnamelog[index]);
    console.log("Debug: TOTAL number of visits since application started/restarted (note: keeps count of visits even if cookies have been reset) = " + clientnamelog.length);
  }
  return clientnamelog.length; 
}

export { handleSubmit }
export { listclientnames }
