import Accordion from "./Accordion"
const itens =[
  {
    titulo: "Java",
    descricao: "Linguagem compilada e interpretada"
  },
  {
    titulo: "Python",
    descricao: "Linguagem interpretada e dinamicamente tipada"
  },
  {
    titulo: "JS",
    descricao: "Interpretada. Executa ao lado do cliente e do lado do servidor"
  }
]
const App = () => {
  return (
    <div>
      <Accordion itens={itens}/>
    </div>
  )
}

export default App