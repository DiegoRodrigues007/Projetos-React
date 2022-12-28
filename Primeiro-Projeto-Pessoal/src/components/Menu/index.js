import "./Menu.css";

const Menu = () => {
  return (
    <div className="menu">
      <img src="./img/logo.png"></img>
      <ul>
        <li>
          <a>Menu</a>
        </li>
        <li>
          <a>Contato</a>
        </li>
        <li>
          <a>Sobre</a>
        </li>
        <li>
          <a>Perfil</a>
        </li>
      </ul>
      <a className="button-menu">Go</a>
    </div>
  );
};

export default Menu;
