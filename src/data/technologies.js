// status: 'uso' = já utilizo em projetos | 'estudo' = estou aprendendo
// Ajuste cada item conforme a sua realidade.
export const technologies = [
  { group: 'Backend', items: [
    { name: 'Java', status: 'uso' }, { name: 'Spring Boot', status: 'uso' },
    { name: 'Spring Security + JWT', status: 'uso' }, { name: 'Spring Data JPA', status: 'uso' },
    { name: 'Spring Web (APIs REST)', status: 'uso' }, { name: 'Spring Mail (e-mail)', status: 'uso' },
    { name: 'Hibernate', status: 'estudo' }, { name: 'PHP', status: 'estudo' },
  ]},
  { group: 'Frontend', items: [
    { name: 'HTML5', status: 'uso' }, { name: 'CSS3', status: 'uso' }, { name: 'JavaScript', status: 'uso' },
    { name: 'React.js', status: 'estudo' }, { name: 'TypeScript', status: 'estudo' }, { name: 'Tailwind CSS', status: 'estudo' },
  ]},
  { group: 'Banco de dados', items: [
    { name: 'PostgreSQL', status: 'uso' }, { name: 'Supabase', status: 'uso' }, { name: 'MySQL', status: 'estudo' },
  ]},
  { group: 'Ferramentas e práticas', items: [
    { name: 'Git', status: 'uso' }, { name: 'GitHub', status: 'uso' },
    { name: 'Postman', status: 'estudo' }, { name: 'Swagger / OpenAPI', status: 'estudo' },
    { name: 'Docker', status: 'estudo' }, { name: 'Testes automatizados', status: 'estudo' },
  ]},
]
