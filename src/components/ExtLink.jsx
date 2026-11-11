// Link externo seguro (nova aba, sem vazar referrer/opener).
export default function ExtLink({ href, children, className = '', ...rest }) {
  return <a href={href} target="_blank" rel="noopener noreferrer" className={className} {...rest}>{children}</a>
}
