import './Navbar.css'
import menu from './menu.png'

function Navbar({ title = "title" }: { title: string }) {

    let flag = 0;

    function Toggle(){
        var menu = document.getElementById('mobile');
        var icon = document.getElementById('icon');
        if(flag == 0){
            menu.style.display = 'block';
            flag = 1;
        }
        else{
            menu.style.display = 'none';
            flag = 0;
        }
    }

  return (
    <>
      <div className='container'>
        <div className='home'>
           <a href="/">{title}</a> 
        </div>
        <div className='main'>
            <ol>
                <li> <a href="/">Home</a> </li>
                <li> <a href="/">About</a> </li>
                <li> <a href="/">Contact</a> </li>
            </ol>
            <img src={menu} id='icon' onClick={Toggle}/>
        </div>
      </div>
      <div id='mobile'>
        <div>
            <span>Home</span> 
        </div>
        <div>
            <span>About</span> 
        </div>
        <div>
            <span>Contact</span> 
        </div>
      </div>
    </>
  );
}

export default Navbar;
