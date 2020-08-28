var form = document.getElementById('form1');
console.log(form);


form.onsubmit = function(e)
{
    e.preventDefault();
    var p= form.getElementsByTagName('input')[0].value;
    var q= form.getElementsByTagName('input')[1].value;
    if(p.length == 0)
    {
        alert("data can't be empty");
        return ;
    }
    if(isNaN(q))
    {
        alert("IMDB must be a number");
        return;
    }
    if(q > 10 || q < 1)
    {
        alert('IMDB must lie between 1 and 10');
        return;
    }


    var tab = document.getElementsByTagName('table')[0];
    var row = document.createElement('tr');
    var a = document.createElement('td');
    a.innerHTML = p;
    row.appendChild(a);
    a=document.createElement('td');
    a.innerHTML=q;
    row.appendChild(a);
    tab.appendChild(row);
}