if('serviceWorker' in navigator){
  navigator.serviceWorker.register('/sw.js')
  .then(function(){
    console.log('SW registered');
  });

  navigator.serviceWorker.ready.then(function(swRegistration) {
    return swRegistration.sync.register('myFirstSync');
  });

  Notification.requestPermission();
}




