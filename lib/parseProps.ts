export const parseProps = (element: HTMLElement): object => {
  let props = {}
  for (let i = 0; i < element.attributes.length; i++) {
    let attr = element.attributes[i]
    props[attr.name] = attr.value
  }
  return props
}
