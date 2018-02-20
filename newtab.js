$(function() {
  $.ajax({
    url: "http://team.api.connexa.io/statistics",
    method: "GET",
    headers: {
        //"X-Mashape-Key": API_KEY
    },
    dataType: "json",
    success: function(data) {
      $('#total_accounts').html(data.accounts + " accounts");
      $('#unique_users').html(data.unique_users + " unique users");
      $('#active_users').html(data.active_users + " active users");
    },
    error: function(data) {
      $('#stats').html('<h2>Looks like we have a problem, please try again later</h2>');
    },
  });

  $('#apps').click(function(){
    chrome.tabs.create({ 'url': 'chrome://apps/' });
  });

  chrome.browserAction.onClicked.addListener(function (tab) { //Fired when User Clicks ICON
    chrome.tabs.create({ 'url': 'chrome://newtab/' });
  });

  $('#term').keydown(function(event){
    if ( event.which == 13 ) {
      event.preventDefault();
      chrome.tabs.create({ 'url': 'https://google.com/search?q=' + $('#term').val() });
    }
  });
});