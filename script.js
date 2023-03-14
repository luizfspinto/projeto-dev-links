function toggleMode() {
  const html = document.documentElement
  //Maneira simplificada de trocar a cor do tema
  html.classList.toggle("light")

  /*
  if (html.classList.contains("light")) {
    html.classList.remove("light")
  } else {
    html.classList.add("light")
  }
  */

  //Pega a tag img
  const img = document.querySelector("#profile img")

  //Substitui a imagem
  if (html.classList.contains("light")) {
    //Se tiver no modo light
    img.setAttribute("src", "./assets/avatar.png")
  } else {
    img.setAttribute("src", "./assets/perfil.png")
  }

  //Subistitui a atributo alt
  if (html.classList.contains("light")) {
    img.setAttribute(
      "alt",
      "Foto de Mayk sorrindo, usando jaqueta preta com fundo azul e rosa"
    )
  } else {
    img.setAttribute(
      "alt",
      "Foto de Luiz Felipe sorrindo, usando camistea cinza com escritos em amarelo e fundo cinza"
    )
  }
}
