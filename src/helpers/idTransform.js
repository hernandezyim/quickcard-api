const idTransform = ({ _doc }) => {
  const { _id, ...rest } = _doc
  rest.id = _id

  return rest
}

export default idTransform
