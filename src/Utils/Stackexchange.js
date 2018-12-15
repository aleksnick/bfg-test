export function init(onInit) {
  if (!window.SE) {
    throw "SE not found";
  }
  SE.init({
    clientId: "client_ID",
    key: "KEY",
    channelUrl: "http://localhost:8080/channel.html",
    complete: function(data) {
      if (onInit) {
        onInit();
      }
    }
  });
}

export function auth(onAuth) {
  SE.authenticate({
    success: function(data) {
      if (onAuth) {
        onAuth(data);
      }
    },
    error: function(data) {
      alert("An error occurred:\n" + data.errorName + "\n" + data.errorMessage);
    },
    networkUsers: true
  });
}
