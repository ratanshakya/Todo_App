import todo from "../assets/to-do-list.png"

const Header = () => {
  return (
    <h1  className="text-xl font-bold text-center mb-5 text-violet-700 flex gap-3 items-center justify-center w-full">
        My ToDo List <img src={todo} style={{width:"25px"}} alt="" />
    </h1>
  )
}

export default Header