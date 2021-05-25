// Add your custom JavaScript for checkout here.
if(window.location.hash.indexOf("confirmation")){
    let splitUrl = window.location.hash.split('/');
    let id = splitUrl[2];
    let number = splitUrl[3];
    let data = splitUrl[4];
    const dataJSON = JSON.parse(decodeURIComponent(decodeURIComponent(data.replace(/\+/g,  " "))));
    console.log(dataJSON);

    $('<img src="https://letsperformgo.go2cloud.org/aff_l?offer_id=135&adv_sub='+ dataJSON.number +'&amount='+ dataJSON.transactions[0].amount +'" width="1" height="1" />').appendTo('body');
    $('<img src="https://mais2.co/aff/scripts/sale.php?AccountId=default1&TotalCost='+ dataJSON.transactions[0].amount +'&OrderID='+ dataJSON.number +'&ProductID=Ormizi&CampaignID=679ee28a&Commission=%20" width="1" height="1" >').appendTo('body');
    $('<img src=https://pln.brtrk2.com/aff_goal?a=l&goal_name=sale&adv_id=2956&offer_id=7110&adv_sub='+ dataJSON.number +'&amount='+ dataJSON.transactions[0].amount +' width="1" height="1" />').appendTo('body');
}