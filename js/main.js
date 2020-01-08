
const clockText = document.querySelector(".clock b em")
const clockBtn = document.querySelector(".clock b i")
const clockBox = document.querySelector(".clock")

class Clock{
    constructor(){
        this.fullDate = new Date()
    }

year=()=>{
       return this.fullDate.getFullYear()
   }

month=()=>{

   var a = this.fullDate.getMonth()

        switch(a){
            case 0:return 'Jan';case 1:return 'Feb';case 2:return 'March';
            case 3:return 'April';case 4:return 'May';case 5:return 'June';
            case 6:return 'July';case 7:return 'Aug';case 8:return 'Sep';
            case 9:return 'Oct';case 10:return 'Nov';case 11:return 'Dec';
        }
}

day=()=>{
    var a = this.fullDate.getDay()

        switch(a){
            case 0:return 'Sun';case 1:return 'Mon';case 2:return 'Tue';
            case 3:return 'Wed';case 4:return 'Thu';case 5:return 'Fri';
            case 6:return 'Sat';
        }
}

date=()=>{
    return this.fullDate.getDate()
}

pod=()=>{
    var a = this.fullDate.getHours()
    if(a>0 && a<=11 ){
                return 'am'
    }else if(a>=12 && a<=23){
        return 'pm'
    }else{
      return 'am'
    }
}

hour=()=>{
 if(this.fullDate.getHours() % 12===0) 
   return 12
else
   return this.fullDate.getHours() % 12

}

min=()=>{
    var a = this.fullDate.getMinutes()
    if(JSON.stringify(a).length<2){
        return '0'+a
    }else{
        return a
    }
}

  

}

const shwTime=(a)=>{
        let time = new Clock

            clockBox.style=`
            background-color:rgba(250,250,250,.5);
            `
            clockText.innerHTML=`${time.day()} ${time.hour()}:${time.min()}${time.pod()}, ${time.month()} ${time.date()} ${time.year()} `

            setTimeout(()=>{
                clockText.innerHTML=``
                clockBox.style=`
                background-color:"";
                `
            },10000)
}


clockBtn.setAttribute("onclick", "shwTime(this)")


async function skipRow(){

            if(abtRow.getAttribute("data")==='row1'){
                    try{
                        abtRow.innerHTML=`
                        <!-- one -->
                        <div class="container cardio">
                            <div class="img-container"><span class="titlez_">Chelsea</span>
                              <img src="img/chelsea.png" alt="">
                            </div>
                            <ul class="social-media ">
                                      <li><a ><i class="fab fa-react"></i></a></li>
                                      <li><a ><i class="fab fa-js"></i></a></li>
                                      <li><a href="#"><i class="fab fa-github"></i></a></li>
                                  </ul>
                                  <div class="user-info cardioTxt">
                                <span class="cardioTxt"> <span> <img src="img/frontend.png" width="30" height="30" style="border-radius: 100%;margin-bottom:5px;" alt=""></span> FrontEnd Developer
                                <br /> I am a full-stack web developer student & cat mom. &#128421; &#128570; </span>
                                  </div>
                          </div>
                        <!-- two -->
                        <div class="container cardio">
                            <div class="img-container"><span class="titlez_">Aeson</span>
                              <img src="img/aj.png" alt="">
                            </div>
                            <ul class="social-media ">
                                      <li><a ><i class="fab fa-react"></i></a></li>
                                      <li><a ><i class="fab fa-js"></i></a></li>
                                      <li><a href="#"><i class="fab fa-github"></i></a></li>
                                  </ul>
                                  <div class="user-info cardioTxt">
                                <span class="cardioTxt"> <span> <img src="img/frontend.png" width="30" height="30" style="border-radius: 100%;margin-bottom:5px;" alt=""></span> FrontEnd Developer
                                <br /> My dream is to someday win a lifetime supply of, like, really good cheese</span>
                                  </div>
                          </div>
                        
                          <!-- three -->
                          <div class="container cardio">
                            <div class="img-container"><span class="titlez_">Nadeem</span>
                              <img src="img/nadeem.jpeg" alt="">
                            </div>
                            <ul class="social-media ">
                                      <li><a ><i class="fab fa-node-js"></i></a></li>
                                      <li><a ><i class="fab fa-js"></i></a></li>
                                      <li><a href="#"><i class="fab fa-github"></i></a></li>
                                  </ul>
                                  <div class="user-info cardioTxt">
                                <span class="cardioTxt"> <span> <img src="img/backend.png" width="30" height="30" style="border-radius: 100%;margin-bottom:5px;" alt=""></span> BackEnd Developer
                                <br /> I like sports and hope Luka takes us to the promised land.</span>
                                  </div>
                          </div>
                          <!-- end of 3 card row -->
                          
                        `

                        abtRow.setAttribute("data", "row2")
                    }
                    catch(err){
                        throw new Error(err)
                    }
            }else{

                 try{
        abtRow.innerHTML=`
        <!-- one -->

        <div class="container cardio">
           
                    <div class="img-container"> <span class="titlez_">Guy</span>
                      <img src="img/me.jpg" alt="">
                    </div>
                    <ul class="social-media ">
                              <li><a ><i class="fab fa-html5"></i></a></li>
                              <li><a ><i class="fab fa-less"></i></a></li>
                              <li><a ><i class="fab fa-css3"></i></a></li>
                              <li><a ><i class="fab fa-js"></i></a></li>
                              <li><a href="#"><i class="fab fa-github"></i></a></li>
                          </ul>
                          <div class="user-info cardioTxt">
                        <span class="cardioTxt"><span> <img src="img/ui.png" width="30" height="30" style="border-radius: 100%;margin-bottom:5px;" alt=""></span> UI Developer
                      <br>UFC fan,thinking about bulding a UFC top fighters Website.</span>
                          </div>
                  </div>
                <!-- two -->
                <div class="container cardio">
                    <div class="img-container"><span class="titlez_">Daquan</span>
                      <img src="img/daquan.jpeg" alt="">
                    </div>
                    <ul class="social-media ">
                              <li><a ><i class="fab fa-html5"></i></a></li>
                              <li><a ><i class="fab fa-less"></i></a></li>
                              <li><a ><i class="fab fa-css3"></i></a></li>
                              <li><a ><i class="fab fa-js"></i></a></li>
                              <li><a href="#"><i class="fab fa-github"></i></a></li>
                          </ul>
                          <div class="user-info cardioTxt">
                        <span class="cardioTxt"> <span> <img src="img/ui.png" width="30" height="30" style="border-radius: 100%;margin-bottom:5px;" alt=""></span> UI Developer</span>
                          </div>
                  </div>
                
                  <!-- three -->
                  <div class="container cardio">
                    <div class="img-container"><span class="titlez_">Cobe</span>
                      <img src="img/cobe.jpeg" alt="">
                    </div>
                    <ul class="social-media ">
                              <li><a ><i class="fab fa-react"></i></a></li>
                              <li><a ><i class="fab fa-js"></i></a></li>
                              <li><a href="#"><i class="fab fa-github"></i></a></li>
                          </ul>
                          <div class="user-info cardioTxt">
                        <span class="cardioTxt"> <span> <img src="img/frontend.png" width="30" height="30" style="border-radius: 100%;margin-bottom:5px;" alt=""></span> FrontEnd Developer</span>
                          </div>
                  </div>
                  <!-- end of 3 card row -->
                  
        `

        abtRow.setAttribute("data", "row1")

    }

    catch(err){
        throw new Error(err)
    }

            }
   
}


