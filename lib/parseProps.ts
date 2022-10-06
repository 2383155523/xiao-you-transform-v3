export const parseProps = (element: HTMLElement): object | null => {
  if (element.attributes.length == 0) return null
  let props = {}
  for (let i = 0; i < element.attributes.length; i++) {
    let attr = element.attributes[i]
    props[attr.name] = attr.value
  }
  return props
}
