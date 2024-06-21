import { Link } from "react-router-dom";

export function Nav() {
  return (
    <ul className="nav">

      <li><Link to="/">Home</Link></li>
      <li><Link to="/articles?topic=coding">Coding</Link></li>
      <li><Link to="/articles?topic=football">Football</Link></li>
      <li><Link to="/articles?topic=cooking">Cooking</Link></li>
      <li><Link to="/articles?topic=user">User</Link></li>
      

    </ul>
  );
}
