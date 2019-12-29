import React,{useEffect,useState} from 'react';
function Main()
{
  const auth_token = 'Bearer BQALwk2Odaby0MoBagxWLbScVYr4hBc-Dorkqmj0wOFRO7fvkV63WaexCjRfv8Izrhq-CBAP1ZnWEMxrbWbbWgCX_aNOML9pCUhGyL-C8rCYRWvnfPsnsq1JciUXk1cPC0UeonnrTALVSNLG4MgI2ApL82e6q4tXFD_b2UGpQEVcFlYwz5V6NnYnqDCMmssDOjzeB6M2ER-Vh486Fq_j7FoJg9yTuy_5kLDAeaVg4f1rckASa7_8 ';
  const [Query, setQuery] = useState('');
  const [artists, setartists] = useState([]);
  
         useEffect(()=>{
           fetchArtist();
       },[]);
 
   function fetchArtist()
 {
  let FETCH_URL=`https://api.spotify.com/v1/search?q=${Query}&type=artist,album,track`;
  fetch(FETCH_URL,{
  
   headers: {
     'Content-Type' :'application/json',
     'Authorization': auth_token,
     },
   mode: 'cors',
   cache:'default'
 })
  .then(resp=>resp.json())
  .then(data =>  
    setartists(data.artists.items)
    )
 }
 function handleSubmit(e)
 {
    e.preventDefault();
     fetchArtist();
 }
        return(
            <div className='wrapper'>
                <div className='row'>
                    <div className='col-12 col-md-3 col-lg-2 sideNav pl-3'> 
                    {/* <a href="http://localhost:8888"><p className="login">login with spotify</p></a>  */}
                    <div className=' row user'>
                    <div className='col-4 col-md-12 col-lg-4 mb-0 '>< img src='https://www.vyond.com/wp-content/uploads/2018/04/Nora_Salamon-Toth.jpg' alt='pic' className='pl-1 profile mb-0'></img></div>&nbsp;
                    <div className='col-8  col-md-12 col-lg-8 usert'>
                      <p className=" m-0 pl-2 row">RUTU G</p>
<button className="font-weight-light btns m-0 row">Premium</button></div></div>

            <div className="row">
                    <div className='list'>
                        <ul className="list-unstyled ">
                        <li className="list-items"><i className="fa fa-home" aria-hidden="true"></i>&nbsp;&nbsp;YOUR ZONE</li>
                            <li className="list-items"><i className="fa fa-search " aria-hidden="true"></i>&nbsp;&nbsp;BROWSE</li>
                            <li className="list-items"><i className="fa fa-play " aria-hidden="true"></i>&nbsp;&nbsp;RADIO FM</li>
                            <li className="list-items"><i className="fa fa-headphones " aria-hidden="true"></i>&nbsp;&nbsp;PLAYLISTS</li>
                            <li className="list-items"><i className="fa fa-star-o " aria-hidden="true"></i>&nbsp;&nbsp;FEATURED</li>
                        </ul>
                    </div>                
                    </div>
                    </div>
                    <div className='col-12 col-md-9 col-lg-10' > 
                    <div className='row'>
                    <div className='col-9 main1'> 
                    <div className="search " >
       <h1 className="header center">Search Spotify!!</h1>
    <form className="form-inline flex justify-content-center "  onSubmit={handleSubmit}  >
      <div ><input className="form-control" 
       type="text" 
       placeholder="search" 
       value ={Query}
    onChange={e => setQuery(e.target.value)}/></div> 
   <button className="back" ><i className="fa fa-search mainSearch" aria-hidden="true" ></i></button>
        </form> 
     
       
<div className="grid-container">
       {artists.map((artist,index)=>
        {
            const img=artist.images[0];
            return(
                <div key={index} className="items">
                  <div class="card one" >
 {img && <img src={img.url} class="card-img-top imgb" alt={artist.name}></img>} 
  <div class="card-body">
    <h5 class="card-title artistN">{artist.name}</h5>
    
  </div>
</div>    
            </div>
            )           
})} 
</div> 

</div>       
                    </div>
                    <div className='col-3 ligmain'><h4 className="queue rec">QUEUE</h4>
                        <ul className="list-unstyled">
                            <li className="font-weight-normal "><i className="fa fa-play" aria-hidden="true"></i>&nbsp;&nbsp;That's What I Like.
<p className="font-weight-light">Bruno Mars</p></li>
<li className="font-weight-normal "><i className="fa fa-play" aria-hidden="true"></i>&nbsp;&nbsp;Marz
<p className="font-weight-light">The Yellow Diaries</p></li>
<li className="font-weight-normal "><i className="fa fa-play" aria-hidden="true"></i>&nbsp;&nbsp;Thunder
<p className="font-weight-light">Imagine Dragons</p></li>

                        </ul>
                    </div>
                </div>
                <div className='row '> 
                <div className='col-12 main2'>
                <h4 className="rec">RECOMMENDED ALBUMS</h4>
                <div className="row" id="row">

		<div className="col-md-2 col-sm-6">
      <div className="card1">
        <img className="card-img-top my-0 mb-0" src="https://images-na.ssl-images-amazon.com/images/I/A1QsthUoerL._SL1500_.jpg" alt="card image cap" />
        <div className="card-body my-0 py-1 ">
            <p className="font-weight-normal my-0 ">Evolve</p>
<p className="font-weight-lighter">Imagine Dragons</p>
         

        </div>
        </div>
      </div>
      	<div className="col-md-2 col-sm-6">
      <div className="card1">
        <img className="card-img-top " src="https://pbs.twimg.com/media/Dr93SRlUUAAi_0O.jpg " alt="card image cap" />
        <div className="card-body my-0 py-1  ">
            <p className="font-weight-normal ">Izafa</p>
<p className="font-weight-lighter">The Yellow Diary</p>
          
        </div>
        </div>
      </div>
      	<div className="col-md-2 col-sm-6">
      <div className="card1">
        <img className="card-img-top " src="https://images-na.ssl-images-amazon.com/images/I/51RThrd3QkL._SY355_.jpg" alt="card image cap" />
        <div className="card-body my-0 py-1  ">
            <p className="font-weight-normal ">Red Pill Blues</p>
<p className="font-weight-lighter">Maroon 5</p>
         

        </div>
        </div>
      </div>


		<div className="col-md-2 col-sm-6">
      <div className="card1">
        <img className="card-img-top " src="https://images-eu.ssl-images-amazon.com/images/I/51iIL5dFKnL.jpg " alt="card image cap" />
        <div className="card-body my-0 py-1  ">
            <p className="font-weight-normal ">24K Magic.</p>
<p className="font-weight-lighter">Bruno Mars.</p>
         

        </div>
        </div>
      </div>
      	<div className="col-md-2 col-sm-6">
      <div className="card1">
        <img className="card-img-top " src="https://1.bp.blogspot.com/-ZAurCHcl3L0/XDc-fuXLBZI/AAAAAAAAbPU/VNLvGzmJkd4AJmWeKFfgIVpAo2zkx5UnQCLcBGAs/s1600/1.jpg" alt="card image cap" />
        <div className="card-body my-0 py-1  ">
            <p className="font-weight-normal ">Aalas Ka Pedh</p>
<p className="font-weight-lighter">The Local Train</p>
          
        </div>
        </div>
      </div>
      	<div className="col-md-2 col-sm-6">
      <div className="card1">
        <img className="card-img-top " src="https://images-na.ssl-images-amazon.com/images/I/81UBMnYXf1L._SL1200_.jpg" alt="card image cap" />
        <div className="card-body my-0 py-1  ">
            <p className="font-weight-normal "> Glory Days </p>
<p className="font-weight-lighter">Little Mix</p>
         

        </div>
        </div>
      </div>
  </div>
  <h4 className="rec">RECOMMENDED ARTIST</h4>
  <div className="row" id="row">

		<div className="col-md-4 col-xl-2  col-sm-6">
      <div className="card1">
        <img className="card-img-top2  " src="https://pbs.twimg.com/profile_images/1093003181708185600/5C8duaXS_400x400.jpg " alt="card image cap" />
        <div className="card-body2">
        <p>Neha Kakkar</p>
         

        </div>
        </div>
      </div>
      	<div className="col-md-4 col-xl-2  col-sm-6">
      <div className="card1">
        <img className="card-img-top2 " src="https://in.bmscdn.com/iedb/artist/images/website/poster/large/arijit-singh-1048083-24-03-2017-18-02-00.jpg " alt="card image cap" />
        <div className="card-body2 ">
        <p>Arijit Singh</p>
          
        </div>
        </div>
      </div>
      	<div className="col-md-4 col-xl-2  col-sm-6">
      <div className="card1">
        <img className="card-img-top2 " src="https://www.vervemagazine.in/wp-content/uploads/2017/02/Divine-featured.jpg " alt="card image cap" />
        <div className="card-body2 ">
        <p>Divine</p>
         

        </div>
        </div>
      </div>
   
		<div className="col-md-4 col-xl-2  col-sm-6">
      <div className="card1">
        <img className="card-img-top2 " src="https://assets.capitalfm.com/2018/07/ed-sheeran-press-photo-2018-1519211115-editorial-long-form-0.png" alt="card image cap" />
        <div className="card-body2 ">
        <p>Ed Sheeran</p>
         

        </div>
        </div>
      </div>
      	<div className="col-md-4 col-xl-2  col-sm-6">
      <div className="card1">
        <img className="card-img-top2 " src="https://www.biography.com/.image/t_share/MTQ3MzM3MTcxNjA5NTkzNjQ3/ariana_grande_photo_jon_kopaloff_getty_images_465687098.jpg " alt="card image cap" />
        <div className="card-body2 ">
        <p>Ariana Grande</p>
          
        </div>
        </div>
      </div>
      	<div className="col-md-4 col-xl-2  col-sm-6">
      <div className="card1">
        <img className="card-img-top2 " src="https://i.pinimg.com/originals/e5/e0/3c/e5e03c5c3a5bc54c34ed8da75da54845.jpg" alt="card image cap" />
        <div className="card-body2 ">
            <p>Guru Randhawa</p>
        </div>
        </div>
      </div>
</div>
</div>
  </div>
                </div>
                </div>
                </div>
           
        )
    }

export default Main;