function CaseBlocks({ blocks }) {
  return blocks.map((block, i) => {
    if (block.type === 'list') {
      return (
        <ul className="case-list" key={i}>
          {block.items.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      )
    }
    if (block.type === 'quote') {
      return (
        <blockquote className="case-quote" key={i}>
          {block.text}
        </blockquote>
      )
    }
    if (block.type === 'image') {
      return (
        <figure className="case-image" key={i}>
          <img src={`${import.meta.env.BASE_URL}${block.src}`} alt={block.alt || ''} />
          {block.caption && <figcaption>{block.caption}</figcaption>}
        </figure>
      )
    }
    return <p key={i}>{block.text}</p>
  })
}

export default CaseBlocks
