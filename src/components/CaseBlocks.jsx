function CaseBlocks({ blocks }) {
  return blocks.map((block, i) =>
    block.type === 'list' ? (
      <ul className="case-list" key={i}>
        {block.items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    ) : (
      <p key={i}>{block.text}</p>
    ),
  )
}

export default CaseBlocks
