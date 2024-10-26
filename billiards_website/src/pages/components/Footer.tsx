import hours from "../datasets/hours"
const Footer = () => {
  return (
    <footer>
      <div className="w-full bg-yellow-400 h-auto flex flex-col md:flex-row pl-[25%] md:px-24 justify-center space-x-0 md:space-x-36 py-24">
        <section>
          <h3 className="font-fascinate"> Billiards Sol y Luna </h3>
          <p> 102-02 43rd ave Corona, NY</p>
          <p className="flex items-center"> <i className="bi bi-telephone-fill text-2xl"></i> +1 929-423-4571 </p>
        </section>
        <section>
          <h3 className="font-fascinate"> Horas de Apertura</h3>
          <table className="table-fixed">
            <thead className="border-b-2 border-black">
              <tr>
                <th> Dia </th>
                <th> Abre </th>
                <th> Cierra</th>
              </tr>
              
            </thead>
            <tbody>
              {hours.map((val, index) => (
                <tr key={index}>
                  <td className="pr-4"> {val.day} </td>
                  <td className="pr-4"> {val.openingTime} </td>
                  <td> {val.closingTime} </td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>
        <section>
          <h3 className="font-fascinate"> Siguenos en </h3>
          <div className="flex flex-row justify-start items-center space-x-4">
          <a className="transition-all text-black text-5xl hover:text-6xl md:text-2xl md:hover:text-3xl" href=""> <i className="bi bi-instagram"></i> </a> 
          <a className="transition-all text-black text-5xl hover:text-6xl md:text-2xl md:hover:text-3xl" href=""> <i className="bi bi-facebook"></i> </a>
          
          </div>
        </section>
        
      </div>
      <p className="flex justify-center bg-black text-yellow-400 text-sm p-4 "> Billiards Sol y Luna, 2024. All rights reserved. </p>
    </footer>

  )
}

export default Footer