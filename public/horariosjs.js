
function adicionar (){
  var data = document.getElementById('data').value
  var hora = document.getElementById('hora').value
  var target = document.getElementById('ID')
  target.innerHTML +=
  '<div class=\'col-lg-3  col-md-4\'>'+
    '<div class=\'card\'>'+
      '<div class=\'card-body\'>'+
        '<h5 class=\'card-title\'>'+'Data: '+data+', Hora: '+hora+'</h5>'+
        // eslint-disable-next-line @typescript-eslint/quotes
        "<p class=\'card-text>Um texto qualquer pra esse cartão aqui qualquer.'+'</p>"+
        '<a href=\'#\' class=\'btn btn-primary\'>Vai pra algum lugar</a>'+
      '</div>'+
    '</div>'+
  '</div>'
  alert('Horário adicionado com sucesso!!!')
};

function openForm () {
  document.getElementById('formulario').style.display = 'block'

  var today = new Date()
  var dd = today.getDate()
  var mm = today.getMonth()+1 //January is 0!
  var yyyy = today.getFullYear()
  if(dd<10){
    dd='0'+dd
  }
  if(mm<10){
    mm='0'+mm
  }

  today = yyyy+'-'+mm+'-'+dd
  document.getElementById('data').setAttribute('min', today)
};
function closeForm () {
  document.getElementById('formulario').style.display = 'none'
}
