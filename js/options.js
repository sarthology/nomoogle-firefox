$("#enableRedirects").click((e)=>{ 
    $("#enableStrictMode").prop('checked',false);
    browser.storage.sync.set({
        redirectEnabled: e.currentTarget.checked
      });    
})

$("#enableStrictMode").click((e)=>{   
    $("#enableRedirects").prop('checked',false);     
    browser.storage.sync.set({
        strictModeEnabled: e.currentTarget.checked
      });    
})

document.addEventListener('DOMContentLoaded',()=>{
    browser.storage.sync.get({
        redirectEnabled: false,
        strictModeEnabled: false
      }, function(items) {          
        $("#enableRedirects").prop('checked', items.redirectEnabled);
        $("#enableStrictMode").prop('checked', items.strictModeEnabled);
      });
});