{
    function handleToggle(event){
        let itemId = event.target.id;
        if(itemId === 'feesDetailsToggle'){
            document.getElementById('feesDetailsToggle').style.color='#f0f0f0';
            document.getElementById('feesDetailsToggle').style.backgroundColor='#0e7c6cab'
            document.getElementById('fessHistoryToggle').style.color='black';
            document.getElementById('fessHistoryToggle').style.backgroundColor='#f0f0f0'
            document.getElementById('feesHistory').style.display='none'
            document.getElementById('feesDetails').style.display='block'
        }else if(itemId ==='fessHistoryToggle'){
            document.getElementById('fessHistoryToggle').style.color='#f0f0f0';
            document.getElementById('fessHistoryToggle').style.backgroundColor='#0e7c6cab'
            document.getElementById('feesDetailsToggle').style.color='black';
            document.getElementById('feesDetailsToggle').style.backgroundColor='#f0f0f0'
            document.getElementById('feesHistory').style.display='block'
            document.getElementById('feesDetails').style.display='none'
        }
    }

    function openFeePayForm(){
        document.getElementById('feesPayPopup').style.display='block'
    }

    function closeFeePayForm(){
        document.getElementById('feesPayPopup').style.display='none'
    }

    document.getElementById('feesDetailsToggle').addEventListener('click',handleToggle)
    document.getElementById('fessHistoryToggle').addEventListener('click', handleToggle)
    document.getElementById('openFeeFormButton').addEventListener('click', openFeePayForm);
    document.getElementById('closePopupButton').addEventListener('click',closeFeePayForm);
    document.getElementById('cancelButton').addEventListener('click', closeFeePayForm)
}