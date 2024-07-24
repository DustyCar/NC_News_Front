
export default function UserCard(props){
   
    return (
         
           <li onClick={() => props.onUserClick()} className="user" >
                <h3 className="user-name">{props.user.name}</h3>
                <img className="user-image" src={props.user.avatar_url} alt={props.user.name} />
                
           </li>
          
    )
}