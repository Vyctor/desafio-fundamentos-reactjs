const formatDate = (date: Date): string =>
  Intl.DateTimeFormat('pt-BR').format(); // TODO

export default formatDate;
