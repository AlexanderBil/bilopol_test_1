function filterPass(array) {   
    const changedArray = array.reduce((acc, item) => {
        let count = item.split(":")[1].split(item.charAt(0)).length - 1;
        acc.push(count >= item[2] && count <= item[4]);
        return acc
    },[])

  return changedArray.filter(item => !!item).length;
}

function setResult (data) {  
    let dataFormated = data.split("\r\n");
    let dataArray = [];
    dataFormated.map(item => (item !== '') ? dataArray.push(item) : null);    
    let res = filterPass(dataArray);
    (res) ? document.getElementById('result').innerHTML = `Кількість валідних паролів у файлі - ${res}`
          : '';    
}

document.getElementById('input').addEventListener('change', function() {
    const GetFile = new FileReader();  
    GetFile.onload=function(e){
        document.getElementById('output').value= GetFile.result; 
        setResult(e.target.result);
    }     
    GetFile.readAsText(this.files[0]);
})