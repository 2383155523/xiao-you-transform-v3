export const templateTransformNode = (template: string): HTMLElement => {
  const container = document.createElement("div")
  container.innerHTML = template
  return container.firstElementChild as HTMLElement
}
