import hours from "../datasets/hours"
const Footer = () => {
  return (
    <footer id="contacts-section">
      <div className="w-full bg-yellow-400 h-auto flex flex-col md:flex-row px-24 md:px-24 justify-center space-x-0 md:space-x-36 py-24">
        <section>
          <h3 className="font-fascinate"> Billiards Sol y Luna </h3>
          <p className="flex items-center gap-2"> <i className="bi bi-geo-alt-fill text-2xl"></i> 102-02 43rd ave Corona, NY</p>
          <p className="flex items-center gap-2"> <i className="bi bi-telephone-fill text-2xl"></i> +1 347-685-0673 </p>
          <a className="flex items-center gap-2 text-black" href="mailto:billarsol102@gmail.com"> <i className="bi bi-envelope-fill text-2xl"> </i> billarsol102@gmail.com </a>
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
            <a aria-label="footer link to instagram page" className="transition-all text-black text-5xl hover:text-6xl md:text-2xl md:hover:text-3xl" href=""> 
              <img src="images/Instagram_Glyph_Black.png" loading="lazy" alt="instagram page link" height="30" width="30"/>
            </a>

          </div>
        </section>

      </div>
      <p className="flex justify-center bg-black text-yellow-400 text-sm p-4 "> Billiards Sol y Luna, 2024. All rights reserved. </p>
    </footer>

  )
}

export default Footer