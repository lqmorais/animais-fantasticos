export default function initFuncionamento() {
  const funcionamento = document.querySelector('[data-semana]');
  const diasSemana = funcionamento.dataset.semana.split(',').map(Number);
  const horarioSemana = funcionamento.dataset.horario.split(',').map(Number);

  // diasSemana e horarioSemana, dataset para pegar os elementos definidos.
  // split para quebrar os itens e colocar em uma array, map(Number).
  // macete para converter todos os valores da array em número.

  const dataAgora = new Date();
  const diasAgora = dataAgora.getDay();
  const horarioAgora = dataAgora.getHours();
  const semanaAberto = diasSemana.indexOf(diasAgora) !== -1;
  const horarioAberto = (horarioAgora >= horarioSemana[0] && horarioAgora < horarioSemana[1]);

  if (semanaAberto && horarioAberto) {
    funcionamento.classList.add('aberto');
  }
}
