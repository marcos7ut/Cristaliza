// Agendamento: monta a mensagem e abre o WhatsApp da barbearia.
(function () {
  var WHATS = '5511954810927';
  var form = document.getElementById('agendamento');
  if (!form) return;
  var data = form.elements.data;
  if (data) data.min = new Date().toISOString().slice(0, 10);
  form.addEventListener('submit', function (e) {
    e.preventDefault();
    var f = form.elements;
    var dia = f.data.value ? f.data.value.split('-').reverse().join('/') : '';
    var linhas = [
      'Olá, Augusta & Co.! Quero agendar um horário:',
      '• Nome: ' + (f.nome.value + ' ' + f.sobrenome.value).trim(),
      '• Serviço: ' + f.servico.options[f.servico.selectedIndex].text.replace(' -- ', ' — '),
      '• Barbeiro: ' + (f.barbeiro.value || 'sem preferência'),
      '• Dia e horário: ' + dia + ' às ' + f.horario.value
    ];
    if (f.telefone.value.trim()) linhas.push('• Telefone: ' + f.telefone.value.trim());
    window.open('https://wa.me/' + WHATS + '?text=' + encodeURIComponent(linhas.join('\n')), '_blank', 'noopener');
  });
})();
