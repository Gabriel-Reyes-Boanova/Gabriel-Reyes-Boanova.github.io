// Edite aqui seus dados. Campos vazios ('') não aparecem no site.
export const profile = {
  name: 'Gabriel Reyes Boanova',
  short: 'Gabriel Reyes',
  role: 'Desenvolvedor Backend em formação | Java & Spring Boot | Full Stack em desenvolvimento',
  location: 'São Jerônimo, RS – Brasil',
  github: 'https://github.com/Gabriel-Reyes-Boanova',
  linkedin: 'https://www.linkedin.com/in/gabriel-reyes-boanova-a32a19331/',
  email: '',   // ex.: 'seuemail@exemplo.com'
  resume: '',  // ex.: './curriculo.pdf' (coloque o arquivo na pasta public/)
}

export const nav = [
  { id: 'inicio', label: 'Início' },
  { id: 'sobre', label: 'Sobre mim' },
  { id: 'formacao', label: 'Formação e experiências' },
  { id: 'tecnologias', label: 'Tecnologias' },
  { id: 'projetos', label: 'Projetos' },
  { id: 'contato', label: 'Contato' },
]

export const timeline = [
  {
    kind: 'Formação principal',
    title: 'Tecnologia em Sistemas para Internet (TSI)',
    place: 'IFSul – Campus Charqueadas',
    period: '4º semestre',
    text: 'Graduação em andamento, com foco em desenvolvimento de software, banco de dados e engenharia de software.',
  },
  {
    kind: 'Formação técnica',
    title: 'Técnico em Mecatrônica',
    place: 'Ensino médio',
    period: '',
    text: 'Meu primeiro contato com tecnologia. Foi onde o raciocínio lógico e a resolução de problemas viraram hábito.',
  },
  {
    kind: 'Programa e desafio real',
    title: 'Geração Caldeira 2026',
    place: 'Desafio proposto pela RBS · Planeta Atlântida',
    period: '2026',
    text: 'Participei, em equipe, do desenvolvimento de uma solução para um problema real apresentado pela RBS: organizar e centralizar o envio de materiais das empresas parceiras do Planeta Atlântida. Foi um desafio baseado em um caso real da empresa; não fui funcionário da RBS.',
    link: { label: 'Ver repositório', href: 'https://github.com/GustavoDuarte-ufc/planeta_atlantida_gc' },
  },
  {
    kind: 'Evento e competição',
    title: 'CharCode — hackathon e maratona de programação',
    place: 'IFSul – Campus Charqueadas',
    period: '2026',
    text: 'Evento anual sediado pelo IFSul Charqueadas. Participei do hackathon, onde desenvolvemos o EloSaúde, e da maratona de programação, uma competição de problemas parecidos com os do LeetCode.',
  },
]
